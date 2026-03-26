
const KEY = 'gtrd_prefs';
const FAV = 'gtrd_favs';

function read(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } }

export function getPrefs() {
  return read(KEY, { theme: prefersDark() ? 'dark' : 'light', saver: 'off', lang: 'es' });
}
export function setPref(key, value) {
  const p = getPrefs(); p[key] = value; localStorage.setItem(KEY, JSON.stringify(p));
}

export function saveFavorite(route) {
  const arr = read(FAV, []);
  arr.push(route);
  localStorage.setItem(FAV, JSON.stringify(arr));
}

export function listFavorites() { return read(FAV, []); }
export function removeFavorite(idx) {
  const arr = read(FAV, []); arr.splice(idx,1); localStorage.setItem(FAV, JSON.stringify(arr));
}

function prefersDark() { return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches); }
