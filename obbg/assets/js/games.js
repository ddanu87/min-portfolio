const GAMES = [
  {
    id: 'oware',
    icon: 'OW',
    name: 'Oware / Mancala',
    category: 'African strategy board game',
    origin: 'West Africa',
    skill: 'High',
    chance: 'Low',
    status: 'Playable demo',
    description: 'A strategy-first pit-and-seed board game inspired by Oware and Mancala families.'
  },
  {
    id: 'checkers',
    icon: 'CH',
    name: 'Checkers',
    category: 'Classic strategy board game',
    origin: 'Global classic',
    skill: 'High',
    chance: 'None',
    status: 'Concept demo',
    description: 'A simple strategy duel format for ranked player-vs-player competition.'
  },
  {
    id: 'backgammon',
    icon: 'BG',
    name: 'Backgammon-inspired',
    category: 'Middle Eastern / Mediterranean classic',
    origin: 'Middle East and Mediterranean',
    skill: 'Medium/High',
    chance: 'Medium',
    status: 'Concept demo',
    description: 'A strategy-and-probability format shown as future concept only.'
  },
  {
    id: 'dice',
    icon: 'DC',
    name: 'Dice Culture Mode',
    category: 'Street dice / cultural betting games',
    origin: 'Street game culture',
    skill: 'Low/Medium',
    chance: 'High',
    status: 'Demo only',
    description: 'A high-chance game category included only as a no-money prototype concept.'
  }
];

function getGameById(id) {
  return GAMES.find((game) => game.id === id) || GAMES[0];
}

function renderGameCards(targetId = 'game-list') {
  const target = document.getElementById(targetId);
  if (!target) return;

  target.innerHTML = GAMES.map((game) => `
    <article class="card game-card">
      <div class="game-icon">${game.icon}</div>
      <div>
        <h3>${game.name}</h3>
        <p>${game.description}</p>
      </div>
      <div class="game-meta">
        <span class="badge">${game.category}</span>
        <span class="badge">Skill: ${game.skill}</span>
        <span class="badge ${game.chance === 'High' ? 'warning' : 'success'}">Chance: ${game.chance}</span>
        <span class="badge ${game.status.includes('Playable') ? 'success' : 'warning'}">${game.status}</span>
      </div>
      <button class="btn" type="button" onclick="selectGame('${game.id}')">Select game</button>
    </article>
  `).join('');
}
