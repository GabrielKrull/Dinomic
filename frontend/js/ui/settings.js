export function render() {
  const saved = JSON.parse(localStorage.getItem('dinomic_settings') || '{}');
  return `
    <div style="padding:24px;max-width:500px;margin:0 auto;">
      <h1 style="margin-bottom:24px;">Configurações</h1>
      <div class="card">
        <label style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
          <input type="checkbox" id="settings-music" ${saved.music ? 'checked' : ''}>
          <span>Música</span>
        </label>
        <label style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
          <input type="checkbox" id="settings-sfx" ${saved.sfx ? 'checked' : ''}>
          <span>Efeitos sonoros</span>
        </label>
        <label style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
          <input type="checkbox" id="settings-mute" ${saved.mute ? 'checked' : ''}>
          <span>Mudo</span>
        </label>
        <button class="btn btn-primary" id="settings-save"> Salvar</button>
        <button class="btn" onclick="window.location.hash='#/'" style="margin-left:8px;">Voltar</button>
      </div>
    </div>
  `;
}

export function onMount() {
  document.getElementById('settings-save').addEventListener('click', () => {
    const settings = {
      music: document.getElementById('settings-music').checked,
      sfx: document.getElementById('settings-sfx').checked,
      mute: document.getElementById('settings-mute').checked,
    };
    localStorage.setItem('dinomic_settings', JSON.stringify(settings));
    alert('Configurações salvas!');
  });
}