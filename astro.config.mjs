import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://hopiamor.nl',
  integrations: [sitemap()],
  build: { format: 'directory' },
  image: { domains: ['upload.wikimedia.org', 'thumb.wikimedia.org', 'commons.wikimedia.org'] },
});
