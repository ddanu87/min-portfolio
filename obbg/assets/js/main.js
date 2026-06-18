function protectPages() {
  const page = document.body.dataset.page;
  const publicPages = ['home', 'login', 'responsible', 'legal'];
  if (!publicPages.includes(page) && !getUser()) {
    window.location.href = 'login.html';
  }
}

function renderDashboard() {
  const user = getUser();
  if (!user) return;

  document.querySelectorAll('[data-username]').forEach((el) => (el.textContent = user.username));
  document.querySelectorAll('[data-balance]').forEach((el) => (el.textContent = formatCoins(user.balance)));
  document.querySelectorAll('[data-rank]').forEach((el) => (el.textContent = user.rank || 'Bronze'));
  document.querySelectorAll('[data-wins]').forEach((el) => (el.textContent = user.wins || 0));
  document.querySelectorAll('[data-losses]').forEach((el) => (el.textContent = user.losses || 0));

  const activeMatch = getActiveMatch?.();
  const activeCard = document.querySelector('[data-active-match]');
  if (activeCard) {
    activeCard.innerHTML = activeMatch
      ? `<h3>Active match</h3><p>${activeMatch.game.name} vs ${activeMatch.opponentName}</p><a class="btn" href="match-room.html">Resume match</a>`
      : `<h3>No active match</h3><p class="muted">Start a new demo match from the lobby.</p><a class="btn" href="lobby.html">Play now</a>`;
  }
}

function renderMatchSetup() {
  const selectedGame = getSelectedGame();
  const user = getUser();
  const gameEl = document.querySelector('[data-selected-game]');
  const balanceEl = document.querySelector('[data-balance]');
  const summaryEl = document.querySelector('[data-stake-summary]');
  const stakeButtons = document.querySelectorAll('[data-stake]');
  let selectedStake = 50;

  if (gameEl) {
    gameEl.innerHTML = `
      <span class="badge success">${selectedGame.status}</span>
      <h2>${selectedGame.name}</h2>
      <p class="lead">${selectedGame.description}</p>
      <div class="game-meta">
        <span class="badge">${selectedGame.origin}</span>
        <span class="badge">Skill: ${selectedGame.skill}</span>
        <span class="badge ${selectedGame.chance === 'High' ? 'warning' : 'success'}">Chance: ${selectedGame.chance}</span>
      </div>
    `;
  }

  if (balanceEl && user) balanceEl.textContent = formatCoins(user.balance);

  function updateSummary() {
    const numbers = calculateMatchNumbers(selectedStake);
    stakeButtons.forEach((button) => button.classList.toggle('active', Number(button.dataset.stake) === selectedStake));
    if (summaryEl) {
      summaryEl.innerHTML = `
        <div class="match-row"><span>Stake per player</span><strong>${formatCoins(selectedStake)}</strong></div>
        <div class="match-row"><span>Total demo pot</span><strong>${formatCoins(numbers.totalPot)}</strong></div>
        <div class="match-row"><span>Platform fee 5%</span><strong>${formatCoins(numbers.fee)}</strong></div>
        <div class="match-row"><span>Winner payout</span><strong>${formatCoins(numbers.payout)}</strong></div>
      `;
    }
  }

  stakeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedStake = Number(button.dataset.stake);
      updateSummary();
    });
  });

  document.querySelector('[data-find-opponent]')?.addEventListener('click', () => createMatch(selectedStake));
  updateSummary();
}

function renderProfile() {
  const user = getUser();
  if (!user) return;

  document.querySelector('[data-profile-card]').innerHTML = `
    <div class="grid grid-2">
      <div>
        <span class="badge success">Demo profile</span>
        <h2>${user.username}</h2>
        <p class="muted">${user.email}</p>
      </div>
      <div class="grid grid-2">
        <div class="card stat-card"><span>Rank</span><strong>${user.rank}</strong></div>
        <div class="card stat-card"><span>Balance</span><strong>${formatCoins(user.balance)}</strong></div>
        <div class="card stat-card"><span>Wins</span><strong>${user.wins || 0}</strong></div>
        <div class="card stat-card"><span>Losses</span><strong>${user.losses || 0}</strong></div>
      </div>
    </div>
    <div class="actions" style="margin-top: 18px;">
      <button class="btn secondary" onclick="logoutDemoUser()">Reset login</button>
      <button class="btn danger" onclick="localStorage.clear(); window.location.href='../index.html';">Clear all demo data</button>
    </div>
  `;

  const history = getMatchHistory();
  const historyEl = document.querySelector('[data-match-history]');
  if (!historyEl) return;

  historyEl.innerHTML = history.length
    ? history.map((match) => `
      <div class="history-item">
        <div>
          <strong>${match.game.name}</strong>
          <p class="muted">vs ${match.opponentName} · Winner: ${match.winner}</p>
        </div>
        <strong>${formatCoins(match.payout)}</strong>
      </div>
    `).join('')
    : '<p class="muted">No match history yet.</p>';
}

function initPage() {
  const page = document.body.dataset.page || 'home';
  renderHeader(page);
  renderFooter();
  protectPages();

  if (page === 'login') {
    document.querySelector('[data-login-form]')?.addEventListener('submit', handleDemoLogin);
  }

  if (page === 'dashboard') renderDashboard();
  if (page === 'lobby') renderGameCards();
  if (page === 'match-setup') renderMatchSetup();
  if (page === 'match-room') renderMatchRoom();
  if (page === 'wallet') renderWalletPage();
  if (page === 'leaderboard') renderLeaderboard();
  if (page === 'profile') renderProfile();
}

document.addEventListener('DOMContentLoaded', initPage);
