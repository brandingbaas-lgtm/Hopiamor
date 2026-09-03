# Analyse huidige website hopiamor.nl (stand: 3 september 2026)

## 1. Wat er nu staat

De huidige site is een **one-pager plus één subpagina** (`/domino`) die volledig in het teken staat van de festivaleditie van 24 mei 2026 in FLUOR Amersfoort. De structuur, van boven naar beneden:

| Blok | Inhoud | Functie |
| --- | --- | --- |
| Hero | "Hopi Amor 2026 Nos Ta Huntu!" + dankwoord aan Amersfoort | Terugblik |
| Statistieken | Sfeer & liefde (Bieuw & Nobo), Caché Royale volksfavoriet, 284 VIP pre-registraties, score 4,8/5 | Social proof |
| VIP pre-registratie 2027 | Formulier: naam, e-mail, "wat wil je groter zien" (domino, bands, kids arena, eten) | Leadgeneratie |
| Naslagwerk & herinneringen | Instagram-feed (32 posts, 1.150+ volgers), bio: "Centrum voor ontmoeting en verbinding tussen generaties in Amersfoort door middel van gastronomie, domino en muziek" | Archief |
| Co-creatie & participatie | Foto's/video's insturen + reviews van bezoekers (Soraya Martis, Jeffrey Maduro, Tante Mavis) | Community |
| `/domino` | Landingspagina Domino Vibes Mini Toernooi: 8 koppels, €25, prijzen, Weeztix-betaling | Ticketverkoop |

Externe vermeldingen (FLUOR, Festivalinfo, Muziekladder, AllEvents) gebruiken dezelfde tekst: *"FLUOR verandert in een warme, Caribische wereld waar muziek, cultuur en familie samenkomen. Hopi Amor (Papiamentu voor 'veel liefde') is een Caribbean Family Festival waar Afro-Caribische cultuur centraal staat in een toegankelijke, gezinsvriendelijke setting."* Line-up 2026: Caché Royale, Angel D, Ray Vibes, Skinto, Tera Kora, Troy Dominiq, Jahari, Kulchaman, OmdTheArtist.

## 2. Wat sterk is (en meegenomen wordt)

- **De belofte is al een platformbelofte.** "Centrum voor ontmoeting en verbinding tussen generaties door middel van gastronomie, domino en muziek" beschrijft geen festival maar een functie. Dat is letterlijk het fundament van het nieuwe platform.
- **Taal en toon.** Papiamentu als signatuur (Hopi amor, Nos ta huntu, Bieuw i nobo, dushi, masha danki). Warm, familiair, met humor. Overgenomen als huisstijl-element (o.a. "Papiamentu van vandaag").
- **Drie pijlers zijn helder:** eten, domino, muziek. Die worden op het platform drie gidsen: Eten, Muziek en (uitgebreid) Makers, plus domino als community-format.
- **Bewezen cijfers:** 4,8 score, 284 pre-registraties, drie generaties in één zaal. Dit is precies het bewijs dat gemeentes en fondsen willen zien.
- **Co-creatie als principe.** "Hopi Amor is van ons allemaal", foto's insturen, reviews. Op het platform wordt dat: alles aanmelden (evenement, eettent, artiest, organisatie, verhaal).
- **Bezoekersquotes** zijn goud: "Dit is echt thuiskomen", "Generaties lang pure cultuuroverdracht". Hergebruikt op festival- en samenwerkpagina.

## 3. Wat ontbreekt voor een platform

1. **Geen navigatie, geen structuur.** Alles is één scroll; er is geen ingang voor iemand die iets zoekt (evenement, adres, artiest).
2. **Geen content buiten het festival.** Geen verhalen, geen gids, geen agenda. De site is 364 dagen per jaar "over".
3. **Geen verhaal voor partners.** Gemeentes, fondsen, podia en ondernemers vinden nergens wat Hopi Amor hen biedt, wat het kost en hoe ze contact leggen.
4. **Geen landelijke scope.** Alles is Amersfoort; de ambitie is Afro-Caribisch Nederland.
5. **Geen SEO-basis.** Eén pagina, één titel, geen meta-omschrijvingen per onderwerp, geen sitemap.
6. **Formulieren zonder duidelijke backend** ("toe te voegen aan het archief in deze browser" suggereert alleen lokale opslag).
7. **Geen over-ons / contact / organisatie-info**, wat voor subsidieaanvragen en pers een gemis is.

## 4. Vertaling naar het nieuwe platform

| Festivalsite | Platform |
| --- | --- |
| Hero terugblik | Home: "Alles over Afro-Caribische cultuur in Nederland. Op één plek." |
| Stats | Stats hergebruikt op /festival en /samenwerken als bewijs |
| VIP-formulier | Blijft op /festival#vip; plus nieuwsbrief op home |
| Instagram-archief | Magazine met verhalen (Instagram blijft als kanaal in footer/contact) |
| Foto's insturen | /aanmelden met vijf formulieren + feedbackformulier op /festival |
| Reviews | Quotes op /festival en /samenwerken |
| /domino | Domino als terugkerend community-format (artikel, agenda, festivalblok) |
| — | Nieuw: /agenda, /eten, /muziek, /makers, /community, /samenwerken, /over, /contact |

## 5. Doelgroepen en wat ze moeten kunnen

| Doelgroep | Vraag | Antwoord op het platform |
| --- | --- | --- |
| Community (families, jongeren, ouderen) | Waar is wat te doen, waar eet ik, wie is die artiest | Agenda, gidsen, magazine, nieuwsbrief |
| Artiesten, makers, ondernemers | Hoe word ik gevonden en geboekt | Gratis vermelding via /aanmelden, pakketten via /samenwerken |
| Gemeentes en fondsen | Hoe maak ik inclusie concreet, met wie, met welk bewijs | /samenwerken: aanbod, werkwijze, cijfers, regelingen, formulier |
| Podia, festivals, scholen | Welke acts en workshops zijn er | Muziek- en makersgids, shortlist-service |

## 6. Aanbevelingen voor de komende maanden

1. **Content-ritme:** twee verhalen per maand plus wekelijkse agenda-update. Stadsredacteuren per regio (Amersfoort, Amsterdam, Rotterdam, Den Haag, Almere).
2. **Gids vullen en verifiëren:** eerst Amersfoort en omgeving (doel: drie eetadressen, vijf makers, twee communities voor 2027), daarna landelijk. Alles in `src/data/*.json`.
3. **Formulieren koppelen** aan Brevo/n8n/Formspree via `PUBLIC_FORM_ENDPOINT` zodat aanmeldingen in een lijst of CRM landen.
4. **Partnerdeck** voor gemeentes afgeleid van /samenwerken, met Amersfoort als case (BACK-criteria: inclusie in programmering, publiek, personeel, partnerschappen).
5. **Community-fase (2027):** groepen per stad (domino, koken, lezen, ouders) met eigen agenda; technisch te bouwen met accounts (bijv. Supabase) bovenop deze statische basis.
6. **Foto's:** vervang de grafische covers door festivalfoto's zodra beeldrechten geregeld zijn (`image`-veld in artikelen en data).
