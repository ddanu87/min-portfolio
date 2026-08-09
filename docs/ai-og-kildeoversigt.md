# AI, kilder og samarbejdslog

## Hvorfor jeg dokumenterer AI-brugen

Ved mit første eksamensforsøg var en del af problemet, at portfolioet fremstod for generisk og ikke viste min egen proces tydeligt nok. Til reeksamen har jeg derfor valgt at dokumentere både mit eget arbejde og den hjælp, jeg har brugt til at samle, kontrollere og forbedre portfolioet.

Jeg har brugt ChatGPT som et arbejds- og sparringsværktøj. Det betyder ikke, at ChatGPT er ophavsmand til mine semesterprojekter. Tema 2, OBBG.dk, Royal Click Fighter og materialet fra Bird Bar-forløbet stammer fra mit 1. semester. AI er især blevet brugt i arbejdet med at gøre min proces synlig, finde fejl og uoverensstemmelser, organisere dokumentation og forbedre selve reeksamensportfolioet.

Dette dokument er skrevet retrospektivt. Jeg havde ikke en komplet AI-log fra hver arbejdsdag, så jeg vil ikke fremstille det som en ordret chatlog. Beskrivelserne nedenfor er en rekonstruktion af den arbejdsproces, som kan ses i repository, projekterne og dokumentationen.

## Min arbejdsform med AI

Min normale arbejdsgang har været:

1. Jeg har givet AI et konkret projekt, en fil, et link, et eksamenskrav eller et problem.
2. AI har hjulpet med at gennemgå materialet, finde mangler eller foreslå en struktur.
3. Jeg har vurderet, om forslaget passede til det, jeg faktisk havde lavet.
4. Forkerte projektnavne, antagelser eller ting jeg ikke kunne stå inde for, skulle fjernes eller rettes.
5. Den endelige portfolio skulle kunne forklares af mig ved eksamen.

AI har derfor fungeret mere som en kombination af sparringspartner, korrekturlæser og teknisk assistent end som en erstatning for min egen proces.

## Konkret log over arbejdet

### 1. Gennemgang af eksamenskrav

Jeg brugte eksamensmaterialet som udgangspunkt og fik hjælp til at udtrække de vigtigste krav. Det førte blandt andet til en fast struktur med forside, portfolio, proces og om mig samt dokumentation under `docs/`.

AI-hjælp:
- sortering af krav
- tjeklister
- sammenligning mellem krav og repository
- kontrol af WISEflow-formatet

Mit ansvar:
- de uploadede eksamensfiler var mit grundlag
- jeg skal selv forstå kravene
- jeg bestemmer, hvilke dele af mit arbejde der bruges som dokumentation

### 2. Oprydning efter første eksamensforsøg

Den første version havde for meget generel tekst og for lidt konkret proces. I reeksamensarbejdet har fokus derfor været at vise faktiske værker, fejl, ændringer og refleksioner frem for at få alt til at se perfekt ud.

Et konkret eksempel var, at `Gravel Maniac` tidligere kunne blive blandet ind i materialet. Det er ikke mit spil. Mit spil er `Royal Click Fighter`. Den forskel blev gjort eksplicit i dokumentationen, så portfolioet ikke påstår ejerskab over et andet projekt.

### 3. Tema 2 - Grundlæggende web

Originalværket ligger i `mobilsite/`.

Jeg brugte AI til at gennemgå projektet og hjælpe mig med at sætte ord på konkrete tekniske valg og fejl, som allerede findes i løsningen.

Det blev blandt andet dokumenteret, at:
- sitet består af fem sider
- jeg arbejdede med HTML, CSS Grid og Flexbox
- mobilnavigationen i originalprojektet ikke er løst optimalt
- farver og typografi nogle steder er for voldsomme
- jeg i dag ville teste flere skærmstørrelser tidligere

AI skabte ikke det oprindelige Tema 2-projekt. Hjælpen i reeksamen bestod i analyse, formulering og strukturering af min refleksion over det.

### 4. Tema 3 - OBBG.dk

OBBG.dk er mit eget emne/UX-projekt. Jeg brugte Figma/FigJam samt HTML, CSS og JavaScript i arbejdet.

I reeksamensarbejdet hjalp AI mig med at se projektet mere kritisk. Et vigtigt punkt var, at prototype-sitet flere steder lyder som en rigtig bettingvirksomhed med formuleringer om sikkerhed og funktioner, som ikke er reelle integrationer.

Det blev derfor gjort til en faglig refleksion i stedet for at skjule det. På projektsiden forklarer jeg blandt andet, at MitID-flowet er en simulation, og at jeg i dag ville markere løsningen tydeligere som skoleprojekt/prototype.

AI-hjælp:
- kritisk gennemgang af troværdighed og UX
- hjælp til at adskille prototype fra fungerende produkt
- strukturering af fejl, læring og forbedringer

Mit arbejde:
- konceptet OBBG.dk
- projektmaterialet
- Figma/FigJam-materialet
- den kodede løsning, der bruges som originalt semesterarbejde

### 5. Tema 4 - Royal Click Fighter

Royal Click Fighter er mit animations- og JavaScript-projekt. Det originale projekt er bevaret i `royal-click-fighter-original/` med HTML, CSS, JavaScript, assets og dokumentation.

AI blev brugt til at gennemgå spillet og dokumentationen sammen. Her blev der fundet en reel uoverensstemmelse: pointværdier og vindergrænser er ikke beskrevet ens alle steder. I stedet for at skjule det er fejlen blevet en del af min refleksion.

Det viser noget konkret, jeg har lært: Når en spilregel ændres, skal kode, instruktion og dokumentation opdateres samtidig.

AI-hjælp:
- sammenligning af kode og dokumentation
- identificering af uoverensstemmelser
- hjælp til at forklare spilflow og JavaScript mere klart

Mit arbejde:
- spilidé og originalt projektmateriale
- Royal Click Fighter-filerne fra semesteret
- papirprototype/diagrammer og den dokumentation, der er bevaret i projektmappen

### 6. Tema 5 - Bird Bar

Bird Bar var et gruppeprojekt, og min deltagelse var påvirket af sygdom. Det vigtigste i reeksamensversionen var derfor ikke at få projektet til at se mere individuelt ud, end det var.

AI hjalp mig med at skelne mellem:
- gruppens samlede proces
- materiale der kan ses i Figma
- det jeg selv kan dokumentere, forklare og reflektere over

Det er med vilje skrevet mere ærligt på projektsiden. Jeg påstår ikke, at hele gruppens produktion er mit individuelle arbejde.

### 7. Selve reeksamensportfolioet

AI er brugt mere direkte i udviklingen og oprydningen af selve reeksamensportfolioet end i de oprindelige semesterprojekter.

Hjælpen har blandt andet omfattet:
- informationsarkitektur
- HTML-struktur
- CSS-oprydning og læsbarhed
- JavaScript til navigation og mindre interaktioner
- README og dokumentationsstruktur
- linkkontrol
- tekstbearbejdning
- fejlfinding
- kontrol af projektstier
- eksamenstjeklister

Et konkret eksempel fra den afsluttende kontrol var, at interne dokumenter stadig henviste til en gammel `royal-click-fighter.html` og et gammelt `#grafik`-anker. Den aktuelle version bruger `royal-click-fighter-original/` samt `#flow`, `#teknik` og `#refleksion`. De gamle referencer blev rettet, så dokumentationen stemmer med den faktiske struktur.

### 8. Afleveringskontrol

Til sidst blev repository og eksamenskrav gennemgået igen. Repository blev kontrolleret som public, og afleveringsmaterialet blev sat op omkring de to krævede links:

- Live portfolio: https://ddanu87.github.io/min-portfolio/
- Repository: https://github.com/ddanu87/min-portfolio

AI hjalp også med at fremstille den simple PDF til WISEflow med de to klikbare links.

## Ejerskab og bidrag

| Del | Mit oprindelige arbejde | AI-støtte i reeksamen |
|---|---|---|
| Tema 2 | Originalt computersite/mobilsite og semesterarbejde | Analyse, refleksion, tekststruktur og fejlidentifikation |
| Tema 3 | OBBG-koncept, designmateriale og semesterløsning | Kritisk gennemgang, struktur, prototype-refleksion og formulering |
| Tema 4 | Royal Click Fighter og original dokumentation | Kode/dokumentationsgennemgang, fejlidentifikation og forklaring |
| Tema 5 | Mit bidrag i gruppeforløbet og tilgængeligt procesmateriale | Hjælp til at skelne gruppens arbejde fra mit eget bidrag |
| Reeksamensportfolio | Mine materialer, valg og faglige beslutninger | Betydelig hjælp til struktur, kodeoprydning, dokumentation og kvalitetssikring |
| WISEflow | Min aflevering | Teknisk hjælp til kontrol og PDF med links |

## Hvad AI ikke skal bruges som bevis for

AI kan ikke dokumentere, at jeg deltog i en bestemt undervisningsaktivitet, udførte en brugertest eller lavede en bestemt gruppedel, hvis jeg ikke har andet materiale, der viser det. Derfor bruger jeg ikke AI til at opfinde manglende screenshots, testresultater, datoer eller arbejdsindsats.

Hvis dokumentation er rekonstrueret bagefter, beskriver jeg den som refleksion eller retrospektiv dokumentation.

## Kilder og originalmateriale

- eksamensinformationen for 1. semester
- T06 Portfolio-eksamen
- mine semesterprojekter i repository
- `mobilsite/`
- OBBG.dk og tilhørende Figma/FigJam-materiale
- `royal-click-fighter-original/`
- Bird Bar Figma/procesmateriale
- screenshots og assets i repository
- GitHub versionshistorik
- ChatGPT som støtteværktøj i reeksamensarbejdet

## Min konklusion

Den vigtigste forskel mellem første forsøg og denne version er, at jeg ikke prøver at vise fire perfekte projekter. Jeg prøver at vise, hvad jeg faktisk lavede, hvad der ikke fungerede, hvad jeg forstår nu, og hvordan jeg har brugt værktøjer - også AI - til at komme frem til en bedre og mere gennemarbejdet portfolio.