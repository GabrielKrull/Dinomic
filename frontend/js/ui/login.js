export function render() {
  return `
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;padding:24px;">
      <div class="card" style="width:100%;max-width:400px;">
        <h2 style="margin-bottom:24px;text-align:center;">Entrar</h2>
        <form id="login-form">
          <label style="display:block;margin-bottom:4px;">Email</label>
          <input type="email" id="login-email" required style="width:100%;padding:10px;margin-bottom:16px;background:#0f0f1a;border:1px solid #2a2a3e;border-radius:8px;color:#fff;">
          <label style="display:block;margin-bottom:4px;">Senha</label>
          <input type="password" id="login-password" required style="width:100%;padding:10px;margin-bottom:16px;background:#0f0f1a;border:1px solid #2a2a3e;border-radius:8px;color:#fff;">
          <button type="submit" class="btn btn-primary" style="width:100%;">Entrar</button>
        </form>
        <p style="text-align:center;margin-top:16px;color:#a0a0b8;">
          Nao tem conta? <a href="#/register" style="color:#e94560;">Cadastre-se</a>
        </p>
      </div>
    </div>
  `;
}

export async function onMount() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { post } = await import('../api/client.js');
    try {
      await post('/auth/login', {
        email: document.getElementById('login-email').value,
        password: document.getElementById('login-password').value,
      });
      window.location.hash = '#/game';
    } catch (err) {
      alert(err.message);
    }
  });
}