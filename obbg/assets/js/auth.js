function handleDemoLogin(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const username = form.username.value.trim();
  const email = form.email.value.trim();
  const ageConfirmed = form.age.checked;

  if (!username || !email) {
    showToast('Fill username and email to enter the demo.');
    return;
  }

  if (!ageConfirmed) {
    showToast('You must confirm 18+ to enter this demo prototype.');
    return;
  }

  const existing = getUser();
  const user = {
    username,
    email,
    balance: existing?.balance ?? 1000,
    rank: existing?.rank || 'Bronze',
    wins: existing?.wins || 0,
    losses: existing?.losses || 0,
    favoriteGame: existing?.favoriteGame || 'Oware / Mancala'
  };

  saveUser(user);
  addTransaction('Demo account', 1000, 'Demo user created with starter demo balance.');
  window.location.href = 'dashboard.html';
}

function logoutDemoUser() {
  localStorage.removeItem('obbgUser');
  localStorage.removeItem('obbgActiveMatch');
  showToast('Demo user cleared.');
  window.location.href = 'login.html';
}
