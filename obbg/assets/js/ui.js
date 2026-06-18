const OBBG_BASE = window.location.pathname.includes('/pages/') ? '..' : '.';

function renderHeader(activePage = '') {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const links = [
    ['Home', `${OBBG_BASE}/index.html`, 'home'],
    ['Dashboard', `${OBBG_BASE}/pages/dashboard.html`, 'dashboard'],
    ['Lobby', `${OBBG_BASE}/pages/lobby.html`, 'lobby'],
    ['Wallet', `${OBBG_BASE}/pages/wallet.html`, 'wallet'],
    ['Leaderboard', `${OBBG_BASE}/pages/leaderboard.html`, 'leaderboard'],
    ['Profile', `${OBBG_BASE}/pages/profile.html`, 'profile'],
    ['Strategy', `${OBBG_BASE}/pages/product-strategy.html`, 'strategy'],
    ['Responsible', `${OBBG_BASE}/pages/responsible-gaming.html`, 'responsible'],
    ['Legal', `${OBBG_BASE}/pages/legal-roadmap.html`, 'legal']
  ];

  header.innerHTML = `
    <nav class="navbar">
      <div class="container nav-inner">
        <a class="logo" href="${OBBG_BASE}/index.html" aria-label="OBBG home">
          <span class="logo-mark">O</span>
          <span>OBBG</span>
        </a>
        <button class="nav-toggle" type="button" data-nav-toggle>Menu</button>
        <div class="nav-links" data-nav-links>
          ${links.map(([label, href, key]) => `<a class="${activePage === key ? 'active' : ''}" href="${href}">${label}</a>`).join('')}
        </div>
      </div>
    </nav>
  `;

  const toggle = header.querySelector('[data-nav-toggle]');
  const navLinks = header.querySelector('[data-nav-links]');
  toggle?.addEventListener('click', () => navLinks.classList.toggle('open'));
}

function renderFooter() {
  const footer = document.querySelector('[data-footer]');
  if (!footer) return;
  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <p><strong>OBBG prototype.</strong> Demo coins only. No deposits, withdrawals, cash prizes or real-money play.</p>
      </div>
    </footer>
  `;
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('active');
  window.setTimeout(() => toast.classList.remove('active'), 2600);
}

function openModal(title, bodyHtml, actionsHtml = '') {
  let backdrop = document.querySelector('.modal-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    document.body.appendChild(backdrop);
  }

  backdrop.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true">
      <h2>${title}</h2>
      <div class="lead">${bodyHtml}</div>
      <div class="actions">${actionsHtml || '<button class="btn" type="button" data-close-modal>Close</button>'}</div>
    </div>
  `;

  backdrop.classList.add('active');
  backdrop.querySelectorAll('[data-close-modal]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });
}

function closeModal() {
  document.querySelector('.modal-backdrop')?.classList.remove('active');
}

function formatCoins(value) {
  return `${Number(value || 0).toLocaleString('en-US')} coins`;
}

function getRelativePath(path) {
  return `${OBBG_BASE}/${path}`;
}
