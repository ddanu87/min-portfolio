# Ændringslog - arbejde frem mod reeksamen

## Udgangspunkt

Mit første portfolio-forsøg havde et grundlæggende problem: Det fortalte for meget generelt om fagene og for lidt om min faktiske proces. Til reeksamen har jeg derfor arbejdet efter en anden regel: Hver side skal helst kunne pege på et konkret værk, en fil, et valg, en fejl eller en refleksion.

Denne log er lavet retrospektivt ud fra den nuværende repository-struktur og det arbejde, der er lavet under oprydningen. Den er ikke en påstand om, at jeg skrev dagbog under hele semesteret.

## Ændring 1 - én tydelig rød tråd

**Før:** Projekter og dokumentation kunne blive blandet sammen.

**Nu:** Portfolioet følger fire semesterprojekter i rækkefølge:
1. Grundlæggende web
2. OBBG.dk / UX
3. Royal Click Fighter / JavaScript og animation
4. Bird Bar / virksomhedssite og gruppearbejde

Efter projekterne kommer min samlede proces og min refleksion.

## Ændring 2 - originalværker frem for kun beskrivelser

Jeg ville ikke have en portfolio, der kun siger, at jeg kan HTML, CSS og JavaScript. Derfor er de faktiske værker gjort til en del af siden.

Eksempler:
- Tema 2 åbner filer direkte fra `mobilsite/`
- Royal Click Fighter åbner den bevarede originalmappe `royal-click-fighter-original/`
- OBBG linker til den kodede løsning og Figma-materialet
- Bird Bar viser procesmaterialet fra Figma

## Ændring 3 - mere konkrete fejl

I stedet for kun at skrive “jeg ville teste mere” har jeg forsøgt at finde konkrete ting, der faktisk er galt eller kunne forbedres.

### Tema 2
- mobilnavigationen i originalværket er ikke optimal
- farvevalget er hårdt og støjende nogle steder
- typografi og linjelængde kunne være mere læsbar

### OBBG.dk
- prototypen lyder enkelte steder som en rigtig virksomhed
- nogle sikkerheds- og funktionspåstande er for bastante
- MitID-flowet er en simulation, ikke en rigtig integration
- designet har for mange konkurrerende neon-effekter

### Royal Click Fighter
- point og vinderbetingelser er ikke beskrevet konsekvent i alle dokumenter
- projektet viser derfor et reelt problem med at holde kode og dokumentation synkroniseret

### Bird Bar
- min egen deltagelse var ikke lige stor gennem hele projektet
- den vigtigste rettelse var derfor at skelne mellem gruppens proces og mit eget bidrag

## Ændring 4 - mere synligt ejerskab

Der er tilføjet dokumentation, som direkte forklarer ejerskab og bidrag. Det er særligt vigtigt ved Bird Bar, men også for at gøre det tydeligt, at AI-hjælpen til reeksamensportfolioet ikke betyder, at de oprindelige semesterprojekter er AI-genererede reeksamensprojekter.

Se `docs/ejerskab-og-bidrag.md`.

## Ændring 5 - AI fra skjult hjælp til dokumenteret værktøj

I stedet for bare at skrive “AI er brugt til formulering” beskriver jeg nu mere præcist, hvad AI blev brugt til.

Eksempler:
- krav blev organiseret i tjeklister
- repository blev gennemgået for forkerte projektnavne og gamle filstier
- kode og dokumentation blev sammenlignet
- refleksioner blev gjort mere konkrete
- der blev skelnet mellem prototype og rigtig funktionalitet
- afleveringslinks og WISEflow-format blev kontrolleret

Se `docs/ai-og-kildeoversigt.md`.

## Ændring 6 - gamle referencer blev ryddet op

Under den sidste repository-kontrol blev der fundet dokumentation, som stadig henviste til en ældre intern Tema 4-side (`royal-click-fighter.html`) og et gammelt `#grafik`-anker.

Den aktuelle løsning bruger:
- `royal-click-fighter-original/index.html`
- `royal-click-fighter-original/spil.html`
- `tema-4-animation.html#flow`
- `tema-4-animation.html#teknik`
- `tema-4-animation.html#refleksion`

README, teststatus og eksamenstjekliste blev rettet, så de ikke modsiger det faktiske site.

## Ændring 7 - afleveringen blev gjort reproducerbar

Repository er public, og README viser både live-link og repo-link. Derudover er der lavet en simpel afleverings-PDF med de to klikbare links til WISEflow.

## Det jeg stadig selv skal kunne

Dokumentationen gør ikke arbejdet færdigt for mig ved den mundtlige eksamen. Jeg skal kunne åbne et projekt og forklare:
- hvorfor jeg valgte en bestemt løsning
- hvordan HTML/CSS/JavaScript fungerer
- hvad der var svært
- hvad jeg ændrede eller ville ændre
- hvad der er mit arbejde og hvad der er gruppe-/AI-støtte

Det er også grunden til, at fejlene ikke er fjernet fra historien. De er en del af det, jeg skal kunne reflektere over.