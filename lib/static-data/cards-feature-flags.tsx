import { ICard } from '@/components/ui/card-with-icon';

export const StaticDataCardsFeatureFlags: ICard[] = [
  {
    route: '/examples/feature-flags/prod-testing',
    title: 'Production Testing',
    blurb: 'This feature is dev complete and releasable to Production, but is still toggled off for end users. Testers are excluded, so they are able to test this feature in the production environment.',
  },
];
