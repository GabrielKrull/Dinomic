export function render() {
  return `
    <div style="padding:24px;max-width:800px;margin:0 auto;">
      <h1 style="margin-bottom:24px;">Ranking</h1>
      <div id="leaderboard"><p>Carregando ranking...</p></div>
    </div>
  `;
}

export async function onMount() {
  const { get } = await import('../api/client.js');
  try {
    const items = await get('/leaderboard');
    const el = document.getElementById('leaderboard');
    if (!items.length) {
      el.innerHTML = '<p style="color:#a0a0b8;">Nenhum registro ainda.</p>';
      return;
    }
    el.innerHTML = items.map((p, i) => `
      <div class="card" style="display:flex;align-items:center;gap:16px;margin-bottom:8px;">
        <span class="rank-${i + 1}" style="font-size:24px;font-weight:700;min-width:32px;">${i + 1}</span>
        <div style="flex:1;">
          <strong>${p.username}</strong>
          <p style="color:#a0a0b8;font-size:14px;">Nível ${p.level} · ${p.best_distance}m</p>
        </div>
        <strong style="color:#f5c518;">${p.score}</strong>
      </div>
    `).join('');
  } catch (e) {
    document.getElementById('leaderboard').innerHTML = `<p style="color:#e94560;">${e.message}</p>`;
  }
}