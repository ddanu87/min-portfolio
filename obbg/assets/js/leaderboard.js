const FAKE_LEADERBOARD = [
  { username: 'MancalaMind', wins: 42, losses: 12, tier: 'Diamond' },
  { username: 'BoardQueen', wins: 38, losses: 15, tier: 'Platinum' },
  { username: 'KofiRanked', wins: 34, losses: 17, tier: 'Gold' },
  { username: 'StreetLogic', wins: 29, losses: 19, tier: 'Gold' },
  { username: 'ZaraMoves', wins: 24, losses: 20, tier: 'Silver' },
  { username: 'NordicPlayer', wins: 19, losses: 18, tier: 'Silver' },
  { username: 'DiceUncle', wins: 16, losses: 21, tier: 'Bronze' },
  { username: 'CultureKing', wins: 14, losses: 22, tier: 'Bronze' },
  { username: 'PitMaster', wins: 12, losses: 23, tier: 'Bronze' },
  { username: 'NewChallenger', wins: 8, losses: 18, tier: 'Starter' }
];

function winRate(player) {
  const total = Number(player.wins || 0) + Number(player.losses || 0);
  if (!total) return '0%';
  return `${Math.round((Number(player.wins || 0) / total) * 100)}%`;
}

function getFakeLeaderboard() {
  const user = getUser();
  const list = [...FAKE_LEADERBOARD];

  if (user) {
    list.push({
      username: user.username,
      wins: Number(user.wins || 0),
      losses: Number(user.losses || 0),
      tier: user.rank || 'Bronze',
      isCurrentUser: true
    });
  }

  return list.sort((a, b) => Number(b.wins || 0) - Number(a.wins || 0));
}

function renderLeaderboard() {
  const target = document.querySelector('[data-leaderboard]');
  if (!target) return;

  const rows = getFakeLeaderboard();
  target.innerHTML = `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win rate</th>
            <th>Skill tier</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((player, index) => `
            <tr>
              <td>#${index + 1}</td>
              <td><strong>${player.username}</strong>${player.isCurrentUser ? ' <span class="badge success">You</span>' : ''}</td>
              <td>${player.wins}</td>
              <td>${player.losses}</td>
              <td>${winRate(player)}</td>
              <td><span class="badge">${player.tier}</span></td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}
