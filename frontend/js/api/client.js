// Wrapper HTTP com CSRF e autenticação
const API_BASE = '/api';

let csrfToken = null;

export async function initCsrf() {
  try {
    const res = await fetch('/sanctum/csrf-cookie', { credentials: 'include' });
    csrfToken = res.headers.get('XSRF-TOKEN');
  } catch (e) {
    console.warn('CSRF init failed', e);
  }
}

export async function request(path, options = {}) {
  const url = path.startsWith('http') ? path : `${API_BASE}${path}`;
  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    ...(csrfToken ? { 'X-XSRF-TOKEN': decodeURIComponent(csrfToken) } : {}),
    ...options.headers,
  };

  const res = await fetch(url, {
    credentials: 'include',
    headers,
    ...options,
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(err.message || `HTTP ${res.status}`);
  }

  return res.json();
}

export function get(path, options) { return request(path, { method: 'GET', ...options }); }
export function post(path, body, options) { return request(path, { method: 'POST', body: JSON.stringify(body), ...options }); }
export function put(path, body, options) { return request(path, { method: 'PUT', body: JSON.stringify(body), ...options }); }
export function del(path, options) { return request(path, { method: 'DELETE', ...options }); }