# Royal Click Fighter - dokumentation

Royal Click Fighter er et klikbaseret browser-spil med neon/casino-inspireret stil.

## Spilidé

Spilleren skal klikke på gode objekter og undgå dårlige objekter. Spillet varer 20 sekunder. Spilleren vinder, hvis der opnås mindst 10 point inden tiden løber ud. Spilleren taber, hvis tiden løber ud med under 10 point, eller hvis alle liv mistes.

## Gode objekter

- mønter
- royale terninger
- stjerner

De gode objekter giver point og positiv feedback.

## Dårlige objekter

- sorte bomber
- fælder
- falske chips

De dårlige objekter fjerner liv og giver negativ feedback.

## Spilmekanik

Objekterne falder ned fra toppen af skærmen i lodrette baner. Spilleren skal reagere hurtigt og vælge, hvilke objekter der skal klikkes på.

## Klik på gode objekter

Når spilleren klikker på et godt objekt:

- der gives +1 point
- der kan afspilles en positiv lyd
- objektet får en glød-effekt
- objektet forsvinder med en visuel effekt

## Klik på dårlige objekter

Når spilleren klikker på et dårligt objekt:

- spilleren mister 1 liv
- der kan vises rød feedback
- objektet ryster eller forsvinder med en negativ effekt

## UI

Spillet viser:

- tid
- point
- liv

Tid vises som en timer. Point vises som en tydelig tæller. Liv kan vises som hjerter eller tal.

## Teknologi

Spillet bruger:

- HTML til struktur
- CSS til styling og animation
- JavaScript til klik-events, point, liv, timer og spiltilstand

## Læring

Jeg lærte, hvordan JavaScript kan bruges til interaktion, spilmekanik, event listeners og dynamisk opdatering af brugergrænsefladen.

## Refleksion

JavaScript var en udfordring, fordi spillet kræver logik, timing og brugerfeedback. Hvis jeg skulle forbedre spillet, ville jeg gøre koden mere overskuelig, teste spillets sværhedsgrad og arbejde videre med animationer og accessibility.
