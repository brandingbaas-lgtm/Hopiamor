# Hopi Amor — platform voor Afro-Caribische cultuur in Nederland

Van Caribbean Family Festival (FLUOR Amersfoort) naar een platform dat het hele jaar open is: **magazine, agenda, gidsen (eten, muziek, makers, community) en een ingang voor gemeentes, fondsen, podia en ondernemers**.

Zie [`docs/analyse-huidige-website.md`](docs/analyse-huidige-website.md) voor de analyse van de festivalsite en de vertaling naar dit platform.

## Stack

- [Astro 7](https://astro.build) (statische site, geen backend nodig)
- Lettertypes zelf gehost via Fontsource (Anton, Archivo, Source Serif 4): geen verzoeken naar Google
- Plain CSS in `src/styles/global.css` (design tokens: `--sun`, `--coral`, `--sea`, `--palm`, `--plum`, `--ink`, `--paper`)
- Content collections (markdown) voor het magazine, JSON voor de gidsen
- `@astrojs/sitemap` voor SEO

## Starten

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview
```

Deployen kan op Vercel, Netlify of Cloudflare Pages zonder extra configuratie (statische output).

## Structuur

```
src/
  pages/            index, magazine/, agenda, eten, muziek, makers, community,
                    festival, samenwerken, aanmelden, over, contact, 404
  content/magazine/ artikelen (markdown met frontmatter)
  data/             events.json, food.json, music.json, makers.json, communities.json
  components/       Header, Footer, Art (grafische covers), Form, ArticleCard, EventCard, ...
  layouts/Base.astro
  lib/site.ts       naam, nav, contact, Papiamentu-woorden, datumhelper
docs/               analyse
```

## Content toevoegen

**Artikel:** maak `src/content/magazine/<slug>.md` met:

```yaml
---
title: "Titel"
description: "Eén zin voor kaart en SEO"
date: 2026-09-01
category: "Eten"          # vrije tekst, wordt filter op /magazine
tagColor: palm            # coral | sun | sea | palm | plum
color: palm               # kleur van de cover
motif: plate              # bepaalt het standaard Papiamentu-woord op de omslag
coverWord: "Kuminda"      # optioneel: eigen woord op de omslag
image: /images/foto.jpg   # optioneel, vervangt de grafische cover
readingTime: 4
featured: false
---
```

**Evenement / eettent / artiest / maker / organisatie:** voeg een object toe aan het bijbehorende bestand in `src/data/`. Velden staan in de bestaande items. Voor evenementen zonder bekende datum laat je `date` leeg (toont "datum volgt") en zet je `status` op `te-bevestigen`.

> Let op: de seed-data is een startpunt. Controleer alle vermeldingen (adressen, data, bios) met de betrokkenen voordat de site live gaat.

## Foto's

Foto's staan in `src/data/photos.json` (bron, maker, licentie, alt-tekst). Een artikel, eetadres, artiest, organisatie of evenement verwijst ernaar met `photo: "<id>"`. `npm run build` draait eerst `scripts/fetch-photos.mjs`, dat de foto's één voor één van Wikimedia Commons downloadt naar `src/assets/photos/` (met cache in `node_modules/.cache`); Astro zet ze daarna om naar geoptimaliseerde WebP-bestanden. Lukt een download niet (bijvoorbeeld zonder internet), dan wordt die foto rechtstreeks vanaf Wikimedia geladen. De pagina `/beeld/` toont automatisch de bronvermelding van elke foto.

Eigen foto's: zet het bestand in `public/images/` en gebruik `image: /images/naam.jpg` in plaats van `photo`.

## Formulieren

Alle formulieren (nieuwsbrief, VIP 2027, aanmelden, samenwerken, contact) werken zonder backend: ze openen een vooringevuld e-mailbericht naar `PUBLIC_CONTACT_EMAIL`. Zet `PUBLIC_FORM_ENDPOINT` (bijv. een n8n-webhook, Brevo of Formspree) in `.env` en de formulieren posten JSON met de velden plus `formulier`, `onderwerp` en `pagina`.

```
PUBLIC_FORM_ENDPOINT=https://...
PUBLIC_CONTACT_EMAIL=info@hopiamor.nl
```

## Roadmap

1. Gidsen vullen en verifiëren, eerst regio Amersfoort, daarna landelijk.
2. Formulieren koppelen aan CRM / mailinglijst.
3. Festivalfoto's toevoegen (`image`-velden).
4. Community-fase: groepen per stad met accounts en eigen agenda.
