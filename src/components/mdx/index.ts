/**
 * Components available inside every project MDX file without an import.
 * Use any, all or none of them — the case-study structure is up to each project.
 */
import Callout from './Callout.astro';
import CodeBlock from './CodeBlock.astro';
import DataPipeline from './DataPipeline.astro';
import Figure from './Figure.astro';
import FindingCard from './FindingCard.astro';
import FindingGrid from './FindingGrid.astro';
import Formula from './Formula.astro';
import ResourceLinks from './ResourceLinks.astro';
import Table from './Table.astro';
import TechnicalNote from './TechnicalNote.astro';
import DashboardEmbed from '../DashboardEmbed.astro';
import PlaceholderNote from '../PlaceholderNote.astro';

export const mdxComponents = {
  // HTML element overrides
  table: Table,
  // Named components
  Callout,
  CodeBlock,
  DataPipeline,
  DashboardEmbed,
  Figure,
  FindingCard,
  FindingGrid,
  Formula,
  PlaceholderNote,
  ResourceLinks,
  TechnicalNote,
};
