export function render() {
  return `
    <div style="padding:24px;max-width:1200px;margin:0 auto;">
      <h1 style="margin-bottom:24px;">Loja</h1>
      <div id="shop-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;">
        <p>Carregando skins...</p>
      </div>
    </div>
  `;
}

export async function onMount() {
  const { get } = await import('../api/client.js');
  try {
    const skins = await get('/skins');
    const grid = document.getElementById('shop-grid');
    grid.innerHTML = skins.map(s => `
      <div class="card rarity-${s.rarity}">
        <div style="height:80px;background:#0f0f1a;border-radius:8px;margin-bottom:12px;display:flex;align-items:center;justify-content:center;">?</div>
        <h3 style="margin-bottom:4px;">${s.name}</h3>
        <p style="color:#a0a0b8;font-size:14px;margin-bottom:8px;">${s.rarity}</p>
        <button class="btn btn-gold" onclick="alert('Integração com backend em Fase 4')">Comprar — ${s.price} moedas</button>
      </div>
    `).join('');
  } catch (e) {
    document.getElementById('shop-grid').innerHTML = `<p>Erro ao carregar: ${e.message}</p>`;
  }
}