export function render() {
  return `
    <div style="position:fixed;inset:0;">
      <div id="game-container" style="width:100%;height:100%;"></div>
      <div style="position:absolute;top:16px;left:16px;z-index:10;">
        <button class="btn" onclick="window.location.hash='#/'">Voltar</button>
      </div>
    </div>
  `;
}

export async function onMount() {
  const container = document.getElementById('game-container');
  if (container._phaser) return;
  // Placeholder: real Phaser init will be wired in Fase 2
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext('2d');
  container.appendChild(canvas);

  let speed = 200;
  let distance = 0;
  const player = { x: 100, y: canvas.height - 80, w: 32, h: 32, jumping: false, vy: 0 };
  const obstacles = [];
  const coins = [];

  function spawnObstacle() {
    obstacles.push({ x: canvas.width + 20, y: canvas.height - 80, w: 24, h: 24 });
  }
  function spawnCoin() {
    coins.push({ x: canvas.width + 20, y: canvas.height - 160, r: 10 });
  }

  function update(dt) {
    speed += 0.5 * dt;
    distance += speed * dt / 1000;
    player.vy += 0.8 * dt;
    player.y += player.vy * dt;
    if (player.y > canvas.height - 80) { player.y = canvas.height - 80; player.vy = 0; }

    for (let i = obstacles.length - 1; i >= 0; i--) {
      obstacles[i].x -= speed * dt / 1000;
      if (obstacles[i].x + obstacles[i].w < 0) obstacles.splice(i, 1);
    }
    for (let i = coins.length - 1; i >= 0; i--) {
      coins[i].x -= speed * dt / 1000;
      if (coins[i].x + coins[i].r < 0) coins.splice(i, 1);
    }

    if (Math.random() < 0.01) spawnObstacle();
    if (Math.random() < 0.008) spawnCoin();
  }

  function draw() {
    ctx.fillStyle = '#0f0f1a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    // Ground
    ctx.fillStyle = '#16213e';
    ctx.fillRect(0, canvas.height - 40, canvas.width, 40);
    // Player
    ctx.fillStyle = '#e94560';
    ctx.fillRect(player.x, player.y, player.w, player.h);
    // Obstacles
    ctx.fillStyle = '#ff6b6b';
    obstacles.forEach(o => ctx.fillRect(o.x, o.y, o.w, o.h));
    // Coins
    ctx.fillStyle = '#f5c518';
    coins.forEach(c => { ctx.beginPath(); ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2); ctx.fill(); });
    // Score
    ctx.fillStyle = '#fff';
    ctx.font = '24px monospace';
    ctx.fillText(`Dist: ${Math.floor(distance)}`, 16, 32);
  }

  let last = performance.now();
  function loop(now) {
    const dt = now - last;
    last = now;
    update(dt);
    draw();
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  container._phaser = true;
  window.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'ArrowUp') {
      player.vy = -12;
      e.preventDefault();
    }
  });
}