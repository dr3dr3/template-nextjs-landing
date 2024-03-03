'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useFlag, useStatus } from '@featurevisor/react';

export default function ClientSideFeatureFlagWrapper({ children, feature, showDisabled }: { children: React.ReactNode; feature: string; showDisabled: boolean }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  //const [isClient, setIsClient] = useState(false);
  const [ff, setFF] = useState(false);

  const { isReady } = useStatus();

  const context = { userId: '123', mode: mode };
  const isEnabled = useFlag(feature, context);

  useEffect(() => {
    //setIsClient(true);
    setFF(isEnabled);
  }, [isReady, isEnabled]);

  // if (showDisabled && !isEnabled ) return (
  //   <div className="visible">
  //     Feature flag <code className="mx-1 px-2 py-1 rounded-lg text-neutral-700 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800">{feature}</code> is disabled
  //   </div>
  // )

  return <>{ff && <div>{children}</div>}</>;
}
