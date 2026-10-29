/**
 * Resolves static assets against Vite's base URL (e.g. /marrage-inv/ for GitHub Pages or / locally)
 */
export const getAssetUrl = (path) => {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const rawBase = import.meta.env?.BASE_URL || '/';
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  return `${base}${cleanPath}`;
};
