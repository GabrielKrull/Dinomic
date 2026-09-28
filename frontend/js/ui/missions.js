export function render() {
  return `
    <div style="padding:24px;max-width:800px;margin:0:auto;">
      <h1 style="margin-bottom:24px;">Missões & Conquistas</h1>
      <h2 style="margin-bottom:12px;color:#f5c518;">Missões Diárias</h2>
      <div id="daily-missions"><p>Carregando...</p></div>
      <h2 style="margin:24px 0 12px;color:#9d4edd;">Conquistas</h2>
      <div id="achievements"><p>Carregando...</p></div>
    </div>
  `;
}

export async function onMount() {
  const { get } = await import('../api/client.js');
  try {
    const missions = await get('/missions');
    document.getElementById('daily-missions').innerHTML = missions.map(m => `
      <div class="card" style="margin-bottom:8px;">
        <strong>${m.name}</strong>
        <p style="color:#a0a0b8;font-size:14px;">${m.description}</p>
        <p style="font-size:12px;">Progresso: ${m.current_progress}/${m.objective_value} · Recompensa: ${m.reward_coins} moedas, ${m.reward_xp} XP</p>
      </div>
    `).join('') || '<p style="color:#a0a0b8;">Nenhuma missão ativa.</p>';
  } catch (e) {
    document.getElementById('daily-missions').innerHTML = `<p style="color:#e94560;">${e.message}</p>`;
  }
}