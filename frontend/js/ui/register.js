export function render() {
  return `
    <div style="display:flex;align-items:center;justify-content:center;height:100vh;padding:24px;">
      <div class="card" style="width:100%;max-width:400px;">
        <h2 style="margin-bottom:24px;text-align:center;">Criar Conta</h2>
        <form id="register-form">
          <label style="display:block;margin-bottom:4px;">Nome de Usuário</label>
          <input type="text" id="register-username" required style="width:100%;padding:10px;margin-bottom:12px;background:#0f0f1a;border:1px solid #2a2a3e;border-radius:8px;color:#fff;">
          <label style="display:block;margin-bottom:4px;">Email</label>
          <input type="email" id="register-email" required style="width:100%;padding:10px;margin-bottom:12px;background:#0f0f1a;border:1px solid #2a2a3e;border-radius:8px;color:#fff;">
          <label style="display:block;margin-bottom:4px;">Senha</label>
          <input type="password" id="register-password" required style="width:100%;padding:10px;margin-bottom:16px;background:#0f0f1a;border:1px solid #2a2a3e;border-radius:8px;color:#fff;">
          <button type="submit" class="btn btn-primary" style="width:100%;">Cadrastre-se</button>
        </form>
        <p style="text-align:center;margin-top:16px;color:#a0a0b8;">
          Já tem conta? <a href="#/login" style="color:#e94560;">Entre</a>
        </p>
      </div>
    </div>
  `;
}

export async function onMount() {
  const form = document.getElementById('register-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const { post } = await import('../api/client.js');
    try {
      await post('/auth/register', {
        username: document.getElementById('register-username').value,
        email: document.getElementById('register-email').value,
        password: document.getElementById('register-password').value,
      });
      window.location.hash = '#/game';
    } catch (err) {
      alert(err.message);
    }
  });
}