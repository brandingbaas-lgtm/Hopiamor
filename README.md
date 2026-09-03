# Hopi Amor — platform voor Afro-Caribische cultuur in Nederland

Van Caribbean Family Festival (FLUOR Amersfoort) naar een platform dat het hele jaar open is: **magazine, agenda, gidsen (eten, muziek, makers, community) en een ingang voor gemeentes, fondsen, podia en ondernemers**.

Zie [`docs/analyse-huidige-website.md`](docs/analyse-huidige-website.md) voor de analyse van de festivalsite en de vertaling naar dit platform.

## Stack

- [Astro 7](https://astro.build) (statische site, geen backend nodig)
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
motif: plate              # sun | waves | domino | palm | drum | plate | mic | people | star | book | flag
image: /images/foto.jpg   # optioneel, vervangt de grafische cover
readingTime: 4
featured: false
---
```

**Evenement / eettent / artiest / maker / organisatie:** voeg een object toe aan het bijbehorende bestand in `src/data/`. Velden staan in de bestaande items. Voor evenementen zonder bekende datum laat je `date` leeg (toont "datum volgt") en zet je `status` op `te-bevestigen`.

> Let op: de seed-data is een startpunt. Controleer alle vermeldingen (adressen, data, bios) met de betrokkenen voordat de site live gaat.

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
