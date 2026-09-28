// SPA router hash-based + bootstrap
import { initCsrf } from './api/client.js';

const routes = {
  '/': () => import('./ui/home.js'),
  '/login': () => import('./ui/login.js'),
  '/register': () => import('./ui/register.js'),
  '/game': () => import('./ui/game.js'),
  '/shop': () => import('./ui/shop.js'),
  '/inventory': () => import('./ui/inventory.js'),
  '/profile': () => import('./ui/profile.js'),
  '/leaderboard': () => import('./ui/leaderboard.js'),
  '/missions': () => import('./ui/missions.js'),
  '/settings': () => import('./ui/settings.js'),
};

const app = document.getElementById('app');

async function render(hash) {
  const path = hash.replace('#', '') || '/';
  const loader = routes[path];
  if (!loader) {
    app.innerHTML = '<h1>404</h1>';
    return;
  }
  try {
    const mod = await loader();
    app.innerHTML = mod.render ? mod.render() : '';
    if (mod.onMount) await mod.onMount();
  } catch (e) {
    app.innerHTML = `<h1>Erro</h1><p>${e.message}</p>`;
  }
}

window.addEventListener('hashchange', () => render(location.hash));

async function bootstrap() {
  await initCsrf();
  render(location.hash);
}

bootstrap();