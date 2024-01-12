'use client';

import { createInstance } from '@featurevisor/sdk';
import { FeaturevisorProvider } from '@featurevisor/react';

const ff = createInstance({
  datafileUrl: process.env.NEXT_PUBLIC_FF_URL,
  // stickyFeatures: {
  //     exampleProdTesting: {
  //         enabled: true
  //     }
  // },
  onReady: () => console.log('Featurevisor provider is ready'),
});

export function Providers({ children }: { children: React.ReactNode }) {
  return <FeaturevisorProvider instance={ff}>{children}</FeaturevisorProvider>;
}
