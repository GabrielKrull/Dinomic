// Componentes reutilizáveis (modal, toast, loader)

export function modal(title, body, actions = []) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <h3 style="margin-bottom:12px;">${title}</h3>
      <div style="margin-bottom:16px;">${body}</div>
      <div style="display:flex;gap:8px;justify-content:flex-end;">
        ${actions.map(a => `<button class="btn ${a.primary ? 'btn-primary' : ''}" data-action="${a.label}">${a.label}</button>`).join('')}
      </div>
    </div>
  `;
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
  overlay.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = actions.find(a => a.label === btn.dataset.action);
      if (action) action.onClick();
      overlay.remove();
    });
  });
  document.body.appendChild(overlay);
  return overlay;
}

export function toast(message, type = 'info') {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = message;
  t.style.borderColor = type === 'error' ? '#e94560' : type === 'success' ? '#00e676' : '#e94560';
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

export function loader() {
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:2000;color:#fff;';
  el.textContent = 'Carregando...';
  return el;
}