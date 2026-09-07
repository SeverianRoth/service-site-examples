const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#site-menu');
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); menu.classList.toggle('open', open); });
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); }));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(other => { const selected = other === button; other.classList.toggle('active', selected); other.setAttribute('aria-pressed', String(selected)); });
  let count = 0;
  document.querySelectorAll('[data-kind]').forEach(card => { card.hidden = filter !== 'all' && filter !== card.dataset.kind; if (!card.hidden) count++; });
  document.querySelector('#filter-status').textContent = `Showing ${count} ${count === 1 ? 'property' : 'properties'}.`;
}));
