// Downloads the photos in src/data/photos.json into src/assets/photos/ before
// `astro build`, one at a time with a polite User-Agent and a cache in
// node_modules/.cache (kept between Vercel builds). Photos that cannot be
// fetched are skipped; Photo.astro then falls back to hotlinking them.
import { readFile, mkdir, copyFile, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const photos = JSON.parse(await readFile(path.join(root, 'src/data/photos.json'), 'utf8'));
const cacheDir = path.join(root, 'node_modules/.cache/hopi-photos');
const outDir = path.join(root, 'src/assets/photos');
await mkdir(cacheDir, { recursive: true });
await mkdir(outDir, { recursive: true });

const UA = 'HopiAmorSite/1.0 (https://hopiamor.nl; info@hopiamor.nl) node-fetch';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const exists = (p) => access(p).then(() => true, () => false);

let ok = 0, skipped = 0;
for (const [id, p] of Object.entries(photos)) {
  const ext = /\.png(\?|$)/i.test(p.src) ? 'png' : 'jpg';
  const cached = path.join(cacheDir, `${id}.${ext}`);
  const dest = path.join(outDir, `${id}.${ext}`);
  if (await exists(cached)) { await copyFile(cached, dest); ok++; continue; }
  let done = false;
  for (let attempt = 1; attempt <= 4 && !done; attempt++) {
    try {
      const res = await fetch(p.src, { headers: { 'User-Agent': UA }, redirect: 'follow', signal: AbortSignal.timeout(30000) });
      if (res.status === 429 || res.status >= 500) {
        const wait = Number(res.headers.get('retry-after')) * 1000 || 4000 * attempt;
        console.log(`  ${id}: ${res.status}, wacht ${wait} ms`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      await writeFile(cached, buf);
      await copyFile(cached, dest);
      console.log(`  ${id}: ${(buf.length / 1024).toFixed(0)} kB`);
      done = true; ok++;
    } catch (e) {
      if (attempt === 4) { console.log(`  ${id}: overgeslagen (${e.message})`); skipped++; }
      else await sleep(2000 * attempt);
    }
  }
  await sleep(400);
}
console.log(`Foto's: ${ok} lokaal, ${skipped} via hotlink`);
