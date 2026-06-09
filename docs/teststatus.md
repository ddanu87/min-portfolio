# Teststatus

## Testet i repoet

- `index.html`
- `portfolio.html`
- `proces.html`
- `om-mig.html`
- `obbg-figma.html`
- `birdbar-figma.html`
- `tema-2-web.html`
- `tema-3-uxui-obbg.html`
- `tema-4-animation.html`
- `royal-click-fighter.html`
- `tema-5-virksomhedssite.html`
- `style.css`
- `readability.css`
- `script.js`
- dokumentation i `docs/`

## Rettet

- `portfolio.html` er omskrevet fra minificeret HTML til en læsbar og eksamensvenlig struktur.
- Portfolioet viser nu Tema 2, Tema 3, Tema 4 og Tema 5 med opgave, løsning, proces, læring og refleksion.
- Portfolioet bruger konkrete billed-/procesmaterialer fra VS Code-mapperne, fx `computer-cutout.webp`, `hero-image.webp`, Royal Click Fighter-materiale og Bird Bar-procesboard.
- Dokumentationssiderne har nu billeder/procesmateriale med forklarende billedtekster.
- `readability.css` er tilføjet for bedre kontrast på tekst, billedtekster, links og knapper.
- Base64-billeder er fjernet fra `portfolio.html` og erstattet af normale billedstier eller assets.
- Portfolioets dokumentationslinks går nu til klikbare HTML-sider i stedet for direkte til markdown-filer.
- Alle hovedsider har navigation i et `<header>`-element.
- Eksterne links bruger `rel="noopener noreferrer"`.
- CSS har `:root`-variabler, tydelige fokus-states, global `img { height: auto; }` og mere robust `.project-image`.
- Tema 3 har OBBG-proceslink, konkret brugertest og refleksion om etik, alder, jura og datasikkerhed.
- Tema 4 er nu gjort intern og stabil med `royal-click-fighter.html`, `tema-4-animation.html#grafik`, `tema-4-animation.html#teknik` og interne SVG-assets.
- Tema 4 bruger ikke længere de gamle ustabile `obbg.dk/kea/04_animation/...` links i portfolio-kortet.
- Tema 5 forklarer, at der ikke er fundet separat live-link til Bird Bar, og projektet vises via Figma/dokumentation.
- Tema 5 har nu “Min rolle” og konkret brugertestfeedback.
- AI-brug og kilder er dokumenteret i `docs/ai-og-kildeoversigt.md`.
- Eksamenskrav og mundtlig disposition er tilføjet i `docs/`.

## Links der skal kontrolleres i browser før aflevering

- Live portfolio: https://ddanu87.github.io/min-portfolio/
- GitHub repo: https://github.com/ddanu87/min-portfolio
- Intern Tema 4 demo: https://ddanu87.github.io/min-portfolio/royal-click-fighter.html
- Intern Tema 4 dokumentation: https://ddanu87.github.io/min-portfolio/tema-4-animation.html
- Tema 2 live site: https://obbg.dk/kea/02_web/01_website/website/index.html
- Tema 2 galleri: https://obbg.dk/kea/02_web/01_website/website/galleri.html
- OBBG Figma prototype: https://www.figma.com/proto/0x2RSKlqVBpHzFcGiEQKsw/obbg?page-id=0%3A1&node-id=17-465&p=f&viewport=485%2C1291%2C0.03&t=1lQ5wbO7FVfwLYhr-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=17%3A465
- OBBG kodet site: https://obbg.dk/kea/03_ux/01_kodet_site/index.html
- Bird Bar Figma: https://www.figma.com/design/D3txRVoQ9moesPEuZxYDFn/Virksomhed-site?node-id=0-1&p=f&t=WPAA1Ppk9YOMbGkP-0

## Klar til aflevering

Projektet er sat op til aflevering, når GitHub Pages viser de seneste ændringer, og afleverings-PDF'en med de to klikbare links er kontrolleret.

Efter aflevering må repoet ikke ændres, fordi eksamensinformationen siger, at portfolio-site og GitHub repository skal stemme overens ved deadline.
