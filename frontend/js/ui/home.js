export function render() {
  return `
    <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center;padding:24px;">
      <h1 style="font-size:48px;color:#e94560;margin-bottom:8px;">DINOMIC</h1>
      <p style="color:#a0a0b8;margin-bottom:32px;">Endless Runner</p>
      <button class="btn btn-primary" onclick="window.location.hash='#/game'">Jogar Agora</button>
      <button class="btn" onclick="window.location.hash='#/leaderboard'">Ranking</button>
      <button class="btn" onclick="window.location.hash='#/shop'">Loja</button>
    </div>
  `;
}