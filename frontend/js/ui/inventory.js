export function render() {
  return `
    <div style="padding:24px;max-width:800px;margin:0 auto;">
      <h1 style="margin-bottom:24px;">Inventário</h1>
      <div id="inventory-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:16px;">
        <p>Carregando inventário...</p>
      </div>
    </div>
  `;
}

export async function onMount() {
  const { get } = await import('../api/client.js');
  try {
    const items = await get('/inventory');
    const grid = document.getElementById('inventory-grid');
    if (!items.length) {
      grid.innerHTML = '<p style="color:#a0a0b8;">Você não possui skins ainda. Visite a loja!</p>';
      return;
    }
    grid.innerHTML = items.map(s => `
      <div class="card rarity-${s.rarity}" style="border-color:${s.equipped ? '#f5c518' : 'transparent'}">
        <div style="height:60px;background:#0f0f1a;border-radius:8px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;">?</div>
        <h3 style="margin-bottom:4px;font-size:14px;">${s.name}</h3>
        ${s.equipped ? '<span style="color:#f5c518;font-size:12px;">Equipada</span>' : ''}
      </div>
    `).join('');
  } catch (e) {
    document.getElementById('inventory-grid').innerHTML = `<p>Erro: ${e.message}</p>`;
  }
}