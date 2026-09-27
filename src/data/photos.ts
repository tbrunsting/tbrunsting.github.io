/**
 * Site-wide photography (not tied to a single project).
 *
 * All photos are from Unsplash under the Unsplash License
 * (https://unsplash.com/license): free to use, including commercially,
 * without permission or attribution. Photographers are credited anyway.
 */
import heroSoccer from '@/assets/photos/hero-soccer.jpg';
import heroFootball from '@/assets/photos/hero-football.jpg';
import heroBasketball from '@/assets/photos/hero-basketball.jpg';
import heroBaseball from '@/assets/photos/hero-baseball.jpg';

export interface SportPhoto {
  sport: string;
  src: ImageMetadata;
  /** CSS object-position used to keep the ball in frame inside each panel. */
  position: string;
  /** Per-photo tone adjustment so bright photos sit well on charcoal. */
  filter?: string;
  credit: string;
  source: string;
}

/** Order = left-to-right order of the homepage hero panels. */
export const heroPhotos: SportPhoto[] = [
  {
    sport: 'Soccer',
    src: heroSoccer,
    position: '66% 62%',
    filter: 'brightness(1.05) contrast(1.05)',
    credit: 'Konstantin Evdokimov',
    source: 'https://unsplash.com/photos/white-and-black-soccer-ball-on-black-sand-JP0qiWQzjrg',
  },
  {
    sport: 'American football',
    src: heroFootball,
    position: '48% 28%',
    filter: 'brightness(0.62) saturate(0.85) contrast(1.1)',
    credit: 'Isaac Lind',
    source: 'https://unsplash.com/photos/red-and-white-football-ball-lr-5SjADBXg',
  },
  {
    sport: 'Basketball',
    src: heroBasketball,
    position: '55% 60%',
    filter: 'brightness(0.8) contrast(1.08)',
    credit: 'Kylie Osullivan',
    source: 'https://unsplash.com/photos/brown-and-black-basketball-ball-BfaBLVCBTI8',
  },
  {
    sport: 'Baseball',
    src: heroBaseball,
    position: '26% 40%',
    filter: 'brightness(0.62) contrast(1.12) saturate(0.9)',
    credit: 'Ben Hershey',
    source: 'https://unsplash.com/photos/white-and-red-baseball-on-brown-soil-at-daytime-xJPCSJkxRys',
  },
];

/** Every photographer whose work appears on the site, for the footer credit line. */
export const photoCredits = [
  ...heroPhotos.map((p) => p.credit),
  'Timur Shakerzianov',
];
