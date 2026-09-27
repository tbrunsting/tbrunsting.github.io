/**
 * Tools shown on the homepage and About page.
 *
 * Listed only because they are used in the current published work
 * (the Transfer Market Efficiency repository). Add to this list as new
 * projects use new tools.
 */
export interface Skill {
  name: string;
  /** Short description of what the tool is used for. */
  role: string;
  /**
   * Brand icon key from Simple Icons (CC0), or 'chart' for a neutral icon.
   * Power BI has no licensed icon in Simple Icons (Microsoft logos were
   * removed at Microsoft's request), so it uses a generic chart glyph.
   */
  icon: 'python' | 'postgresql' | 'r' | 'git' | 'chart';
}

export const skills: Skill[] = [
  { name: 'Python', role: 'Data acquisition & validation', icon: 'python' },
  { name: 'PostgreSQL', role: 'SQL data modelling & warehousing', icon: 'postgresql' },
  { name: 'R', role: 'Statistical scoring & modelling', icon: 'r' },
  { name: 'Power BI', role: 'Visualisation & communication', icon: 'chart' },
  { name: 'Git & GitHub', role: 'Versioned, documented work', icon: 'git' },
];
