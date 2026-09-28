export function render() {
  return `
    <div style="padding:24px;max-width:600px;margin:0 auto;">
      <h1 style="margin-bottom:24px;">Perfil</h1>
      <div class="card" style="margin-bottom:16px;">
        <div id="profile-content"><p>Carregando...</p></div>
      </div>
      <button class="btn" onclick="window.location.hash='#/'>Voltar</button>
    </div>
  `;
}

export async function onMount() {
  const { get } = await import('../api/client.js');
  try {
    const p = await get('/profile');
    const el = document.getElementById('profile-content');
    el.innerHTML = `
      <h2 style="margin-bottom:8px;">${p.username}</h2>
      <p style="color:#a0a0b8;margin-bottom:16px;">Nível ${p.level} · ${p.xp} XP</p>
      <p>Moedas: <strong style="color:#f5c518;">${p.coins}</strong></p>
      <p>Melhor distância: ${p.best_distance || 0}m</p>
    `;
  } catch (e) {
    document.getElementById('profile-content').innerHTML = `<p style="color:#e94560;">${e.message}</p>`;
  }
}