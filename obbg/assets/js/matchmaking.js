function selectGame(gameId) {
  const game = getGameById(gameId);
  localStorage.setItem('obbgSelectedGame', JSON.stringify(game));
  window.location.href = 'match-setup.html';
}

function getSelectedGame() {
  return JSON.parse(localStorage.getItem('obbgSelectedGame') || 'null') || GAMES[0];
}

function generateOpponent() {
  const opponents = ['KofiRanked', 'BoardQueen', 'DiceUncle', 'MancalaMind', 'StreetLogic', 'NordicPlayer', 'ZaraMoves'];
  return opponents[Math.floor(Math.random() * opponents.length)];
}

function calculateMatchNumbers(stake) {
  const totalPot = Number(stake) * 2;
  const fee = calculateFee(totalPot);
  const payout = calculatePayout(totalPot, fee);
  return { totalPot, fee, payout };
}

function createMatch(stake) {
  const user = getUser();
  if (!user) {
    window.location.href = 'login.html';
    return;
  }

  const selectedGame = getSelectedGame();
  const numericStake = Number(stake || 0);

  if (!numericStake || numericStake <= 0) {
    showToast('Choose a demo stake first.');
    return;
  }

  if (user.balance < numericStake) {
    showToast('Not enough demo coins. Add demo coins in wallet.');
    return;
  }

  updateBalance(-numericStake);
  addTransaction('Stake locked', -numericStake, `Locked demo stake for ${selectedGame.name}.`);

  const numbers = calculateMatchNumbers(numericStake);
  const match = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    game: selectedGame,
    stake: numericStake,
    opponentName: generateOpponent(),
    totalPot: numbers.totalPot,
    fee: numbers.fee,
    payout: numbers.payout,
    status: 'active',
    createdAt: new Date().toISOString(),
    boardState: createInitialBoardState(),
    score: { player: 0, opponent: 0 },
    turn: 'player'
  };

  localStorage.setItem('obbgActiveMatch', JSON.stringify(match));
  window.location.href = 'match-room.html';
}

function getActiveMatch() {
  return JSON.parse(localStorage.getItem('obbgActiveMatch') || 'null');
}

function saveActiveMatch(match) {
  localStorage.setItem('obbgActiveMatch', JSON.stringify(match));
}

function getMatchHistory() {
  return JSON.parse(localStorage.getItem('obbgMatchHistory') || '[]');
}

function saveMatchHistory(history) {
  localStorage.setItem('obbgMatchHistory', JSON.stringify(history));
}

function createInitialBoardState() {
  return {
    playerPits: [4, 4, 4, 4, 4, 4],
    opponentPits: [4, 4, 4, 4, 4, 4],
    playerStore: 0,
    opponentStore: 0
  };
}

function makePlayerMove(index) {
  const match = getActiveMatch();
  if (!match || match.status !== 'active') return;
  if (match.turn !== 'player') {
    showToast('Opponent turn. Simulate opponent move.');
    return;
  }

  const stones = match.boardState.playerPits[index];
  if (!stones) {
    showToast('Choose a pit with seeds.');
    return;
  }

  match.boardState.playerPits[index] = 0;
  match.boardState.playerStore += stones;
  match.score.player = match.boardState.playerStore;
  match.turn = 'opponent';
  saveActiveMatch(match);
  renderMatchRoom();
}

function simulateOpponentMove() {
  const match = getActiveMatch();
  if (!match || match.status !== 'active') return;
  if (match.turn !== 'opponent') {
    showToast('Your turn. Make a move first.');
    return;
  }

  const available = match.boardState.opponentPits
    .map((value, index) => ({ value, index }))
    .filter((pit) => pit.value > 0);

  if (!available.length) {
    finishMatch();
    return;
  }

  const chosen = available[Math.floor(Math.random() * available.length)];
  match.boardState.opponentPits[chosen.index] = 0;
  match.boardState.opponentStore += chosen.value;
  match.score.opponent = match.boardState.opponentStore;
  match.turn = 'player';
  saveActiveMatch(match);
  renderMatchRoom();
}

function finishMatch() {
  const match = getActiveMatch();
  const user = getUser();
  if (!match || !user) return;

  const playerWon = match.score.player >= match.score.opponent;
  match.status = 'finished';
  match.winner = playerWon ? user.username : match.opponentName;
  match.finishedAt = new Date().toISOString();

  if (playerWon) {
    updateBalance(match.payout);
    user.wins = Number(user.wins || 0) + 1;
    saveUser({ ...getUser(), wins: user.wins });
    addTransaction('Demo payout', match.payout, `Won demo match vs ${match.opponentName}.`);
  } else {
    user.losses = Number(user.losses || 0) + 1;
    saveUser({ ...getUser(), losses: user.losses });
    addTransaction('Match result', 0, `Lost demo match vs ${match.opponentName}. Stake already locked.`);
  }

  const history = getMatchHistory();
  history.unshift(match);
  saveMatchHistory(history.slice(0, 20));
  localStorage.removeItem('obbgActiveMatch');

  openModal(
    playerWon ? 'Demo Match Won' : 'Demo Match Lost',
    `<p>Winner: <strong>${match.winner}</strong></p><p>Payout: <strong>${formatCoins(playerWon ? match.payout : 0)}</strong></p><p>Platform fee: <strong>${formatCoins(match.fee)}</strong></p><p>New balance: <strong>${formatCoins(getBalance())}</strong></p>`,
    `<a class="btn" href="wallet.html">View wallet</a><a class="btn secondary" href="lobby.html">Play again</a>`
  );
}

function renderMatchRoom() {
  const match = getActiveMatch();
  const root = document.getElementById('match-room-root');
  if (!root) return;

  if (!match) {
    root.innerHTML = `
      <div class="card">
        <h2>No active match</h2>
        <p class="muted">Start a demo match from the lobby.</p>
        <a class="btn" href="lobby.html">Go to lobby</a>
      </div>
    `;
    return;
  }

  const board = match.boardState;
  root.innerHTML = `
    <div class="grid grid-2">
      <section class="card">
        <span class="badge success">${match.status}</span>
        <h2>${match.game.name}</h2>
        <p class="lead">${getUser().username} vs ${match.opponentName}</p>
        <div class="match-summary">
          <div class="match-row"><span>Stake per player</span><strong>${formatCoins(match.stake)}</strong></div>
          <div class="match-row"><span>Total demo pot</span><strong>${formatCoins(match.totalPot)}</strong></div>
          <div class="match-row"><span>Transparent fee</span><strong>${formatCoins(match.fee)}</strong></div>
          <div class="match-row"><span>Winner payout</span><strong>${formatCoins(match.payout)}</strong></div>
          <div class="match-row"><span>Turn</span><strong>${match.turn === 'player' ? 'Your move' : 'Opponent move'}</strong></div>
        </div>
        <div class="actions" style="margin-top: 18px;">
          <button class="btn secondary" type="button" onclick="simulateOpponentMove()">Simulate opponent move</button>
          <button class="btn gold" type="button" onclick="finishMatch()">Finish match</button>
        </div>
      </section>
      <section class="card">
        <h3>Score</h3>
        <div class="grid grid-2">
          <div class="card stat-card"><span>You</span><strong class="stat">${board.playerStore}</strong></div>
          <div class="card stat-card"><span>${match.opponentName}</span><strong class="stat">${board.opponentStore}</strong></div>
        </div>
      </section>
    </div>
    <section class="card" style="margin-top: 18px;">
      <h3>Playable Oware-inspired demo board</h3>
      <p class="muted">Click your lower pits to collect seeds into your store. This is a simplified visual demo, not final rule-accurate Oware.</p>
      <div class="board" style="margin-top: 18px;">
        <div class="store"><div><small>Opponent store</small><strong>${board.opponentStore}</strong></div></div>
        ${board.opponentPits.map((stones, index) => `<div class="pit"><div><small>O${index + 1}</small><strong>${stones}</strong></div></div>`).join('')}
        <div class="store"><div><small>Your store</small><strong>${board.playerStore}</strong></div></div>
        ${board.playerPits.map((stones, index) => `<button class="pit ${match.turn === 'player' ? 'player-turn' : ''}" type="button" onclick="makePlayerMove(${index})"><div><small>P${index + 1}</small><strong>${stones}</strong></div></button>`).join('')}
      </div>
    </section>
  `;
}
