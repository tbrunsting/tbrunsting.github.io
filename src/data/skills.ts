/**
 * Tools and skills shown on the homepage and About page.
 *
 * Listed only because they are used in the current published work
 * (the Transfer Market Efficiency repository). Add to this list as new
 * projects use new tools.
 */
export interface SkillGroup {
  title: string;
  description: string;
  tools: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Data acquisition & validation',
    description: 'Collecting, freezing and checking source data before any analysis depends on it.',
    tools: ['Python'],
  },
  {
    title: 'Data modelling & warehousing',
    description: 'Designing relational schemas and verifying results independently in SQL.',
    tools: ['SQL', 'PostgreSQL'],
  },
  {
    title: 'Statistical scoring',
    description: 'Building reproducible scoring and modelling pipelines.',
    tools: ['R'],
  },
  {
    title: 'Visualisation & communication',
    description: 'Turning validated results into dashboards and readable case studies.',
    tools: ['Power BI'],
  },
  {
    title: 'Workflow',
    description: 'Versioned, documented, reproducible project work.',
    tools: ['Git', 'GitHub'],
  },
];
