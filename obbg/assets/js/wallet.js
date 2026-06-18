function getUser() {
  return JSON.parse(localStorage.getItem('obbgUser') || 'null');
}

function saveUser(user) {
  localStorage.setItem('obbgUser', JSON.stringify(user));
}

function getTransactions() {
  return JSON.parse(localStorage.getItem('obbgTransactions') || '[]');
}

function saveTransactions(transactions) {
  localStorage.setItem('obbgTransactions', JSON.stringify(transactions));
}

function getBalance() {
  return getUser()?.balance || 0;
}

function updateBalance(amount) {
  const user = getUser();
  if (!user) return 0;
  user.balance = Math.max(0, Number(user.balance || 0) + Number(amount || 0));
  saveUser(user);
  return user.balance;
}

function calculateFee(totalPot) {
  return Math.ceil(Number(totalPot || 0) * 0.05);
}

function calculatePayout(totalPot, fee) {
  return Math.max(0, Number(totalPot || 0) - Number(fee || 0));
}

function addTransaction(type, amount, description) {
  const transactions = getTransactions();
  transactions.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    type,
    amount,
    description,
    createdAt: new Date().toISOString()
  });
  saveTransactions(transactions.slice(0, 30));
}

function addDemoCoins(amount = 500) {
  const newBalance = updateBalance(amount);
  addTransaction('Demo top-up', amount, 'Added demo coins. No real money value.');
  showToast(`Added ${formatCoins(amount)}. Balance: ${formatCoins(newBalance)}.`);
  renderWalletPage();
}

function resetWallet() {
  const user = getUser();
  if (!user) return;
  user.balance = 1000;
  saveUser(user);
  saveTransactions([]);
  showToast('Demo wallet reset to 1,000 coins.');
  renderWalletPage();
}

function renderWalletPage() {
  const user = getUser();
  const balanceEl = document.querySelector('[data-balance]');
  if (balanceEl && user) balanceEl.textContent = formatCoins(user.balance);

  const transactionsEl = document.querySelector('[data-transactions]');
  if (!transactionsEl) return;

  const transactions = getTransactions();
  if (!transactions.length) {
    transactionsEl.innerHTML = '<p class="muted">No demo transactions yet.</p>';
    return;
  }

  transactionsEl.innerHTML = transactions.map((tx) => `
    <div class="history-item">
      <div>
        <strong>${tx.type}</strong>
        <p class="muted">${tx.description}</p>
      </div>
      <div><strong>${tx.amount > 0 ? '+' : ''}${formatCoins(tx.amount)}</strong></div>
    </div>
  `).join('');
}
