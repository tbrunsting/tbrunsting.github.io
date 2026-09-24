/**
 * Prefix an internal path with the configured base path so links keep working
 * if the site is ever served from a sub-directory (e.g. GitHub project pages).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}

/** Normalise a pathname for comparison: strip the base and ensure a trailing slash. */
export function normalizePath(pathname: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  let p = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
  if (!p.startsWith('/')) p = `/${p}`;
  return p.endsWith('/') ? p : `${p}/`;
}
