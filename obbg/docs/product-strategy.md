# OBBG Product Strategy

## One-line position

OBBG is a peer-to-peer cultural board game platform where people compete against each other instead of playing against the house.

## Core brand message

Play people, not the house.

Danish version:

Spil mod mennesker, ikke mod huset.

## Product structure

### 1. Game Lobby

The Game Lobby is where users choose the game, match type and risk level.

Core features:

- choose game
- choose stake level
- choose ranked or unranked
- choose casual or tournament
- see skill level
- see chance level
- read rules before match
- view estimated payout and platform fee

Purpose:

Users must understand the game, the risk level, the opponent type and the fee before entering a match.

### 2. Wallet

The Wallet handles user balance, locked pots and transaction history.

Core features:

- deposits in a future regulated version
- withdrawals in a future regulated version
- locked pot
- transaction history
- match fee history
- deposit limits
- withdrawal status
- responsible gaming limits

Important:

The production wallet must not be a simple balance field. It should use a double-entry ledger so every stake, locked pot, fee and payout can be traced.

### 3. Matchmaking

Matchmaking keeps the competition fair and protects users from unfair matchups.

Core features:

- elo/ranking
- similar skill-level matching
- ranked and unranked queue
- casual and tournament queue
- anti-smurfing
- cooldown against misuse
- match history checks
- suspicious behavior detection

Purpose:

Users must feel that they are matched against real players at a fair level, not bots, manipulated accounts or much stronger players.

### 4. Game Engine

The Game Engine controls rules, moves and match results.

Core features:

- deterministic rules
- server-side validation
- no client-side result manipulation
- replay-log
- move history
- match result verification
- automatic dispute evidence

Important:

The browser should display the game, but the server must validate all moves and results in a production version.

### 5. Fairness

Fairness is the main product promise.

Core features:

- transparent rules
- no house opponent
- transparent platform fee
- random seed for chance-based games
- replay after match
- dispute system
- match history
- visible payout calculation

Core message:

OBBG should not earn by playing against the user. The platform should earn through a clear service fee.

### 6. Safety

Safety is required before any future real-money version.

Core features:

- age verification
- KYC
- AML
- ROFUS or relevant exclusion integration where required
- deposit limits
- self-exclusion
- responsible play warnings
- cooling-off periods
- suspicious transaction monitoring
- dispute support

Position:

Safety should be visible as a strength. It makes OBBG feel serious, controlled and not like an unregulated betting site.

## Brand positioning

### Name

OBBG works as the technical abbreviation:

OBBG — Online Betting Board Games

The brand should be explained in human language, not just with the abbreviation.

### Tagline options

- Play people, not the house.
- Real players. Real skill. No house advantage.
- Cultural games. Real competition. Fair stakes.
- Skill-based cultural games for real competition.

Best Danish tagline:

Spil mod mennesker, ikke mod huset.

Best English tagline:

Play people, not the house.

## First MVP

Do not start with 20 games.

Start with one playable skill-first game and one concept mode.

### MVP Game 1: Digital Oware / Mancala

Best first game because:

- culturally strong
- strategic
- visually easy to understand
- low randomness
- skill-based
- good for ranking
- good for player-vs-player positioning
- easier to present as competitive gaming

This should be the first playable MVP game.

### MVP Game 2: Dice Culture Mode

Dice is strong for engagement but should not be the first real-money mode.

Use dice first as:

- demo-only mode
- no-money mode
- social/casual mode
- concept mode
- later regulated mode after legal approval

Reason:

Dice has a high chance element, so it creates heavier legal and responsible-play requirements.

## MVP roadmap

### MVP 1

- Oware / Mancala-inspired game
- fake wallet
- ranking
- matchmaking flow
- replay-log concept
- demo payout

### MVP 2

- tournaments
- leaderboard
- user profiles
- match history
- anti-cheat logic

### MVP 3

- dice mode as demo only
- no real-money dice mode before legal review

### MVP 4

- legal review
- license path
- KYC / AML / responsible play setup

### MVP 5

- regulated launch only through license or licensed partner

## Technology stack

### Current prototype

- HTML
- CSS
- JavaScript
- localStorage
- no backend
- no database
- no payments
- no real-money flow

### Future production stack

Frontend:

Next.js

Backend:

Node.js / NestJS

Database:

PostgreSQL

Realtime:

WebSockets

Authentication:

Clerk or Auth.js

Wallet ledger:

PostgreSQL double-entry ledger

Payments:

Stripe, Mangopay or Adyen only after legal approval and provider approval

Game engine:

Server-side TypeScript

Anti-cheat:

Replay logs and server validation

Hosting:

Railway or Render for prototype, AWS for production

## Pitch version

OBBG is a peer-to-peer cultural board game platform where players compete against each other instead of playing against the house.

The first MVP focuses on a digital Oware/Mancala-inspired game because it is strategic, culturally strong and skill-based. The platform includes a game lobby, demo wallet, matchmaking, ranking, replay logs, transparent match fees and a legal-first roadmap.

Dice-based games may be added later as demo-only or regulated modes, but the first version should focus on skill-first games to build trust, reduce legal risk and prove the player-vs-player model.

OBBG is not starting as a casino. OBBG starts as a cultural competitive gaming platform. Real-money features only come later through licensing, identity checks, transaction monitoring, deposit limits and responsible-play controls.
