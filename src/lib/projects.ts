import { getCollection, type CollectionEntry } from 'astro:content';
import { withBase } from './paths';

export type Project = CollectionEntry<'projects'>;

/**
 * All projects, newest first, with featured projects ahead of the rest.
 * Drafts are visible in `astro dev` but excluded from production builds.
 */
export async function getProjects(): Promise<Project[]> {
  const entries = await getCollection('projects', ({ data }) =>
    import.meta.env.PROD ? !data.draft : true,
  );
  return entries.sort((a, b) => {
    if (a.data.featured !== b.data.featured) return a.data.featured ? -1 : 1;
    const aDate = (a.data.publishedAt ?? a.data.updatedAt)?.valueOf() ?? 0;
    const bDate = (b.data.publishedAt ?? b.data.updatedAt)?.valueOf() ?? 0;
    if (aDate !== bDate) return bDate - aDate;
    return a.data.title.localeCompare(b.data.title);
  });
}

export function projectUrl(project: Project): string {
  return withBase(`/projects/${project.id}/`);
}

export const statusLabel: Record<Project['data']['status'], string> = {
  'in-progress': 'In progress',
  published: 'Published',
  archived: 'Archived',
};

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
