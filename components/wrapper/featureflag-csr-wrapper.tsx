'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useSdk } from '@featurevisor/react';

export default function ClientSideFeatureFlagWrapper({ children, feature, showDisabled }: { children: React.ReactNode; feature: string; showDisabled: boolean }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get('mode');

  const [isClient, setIsClient] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  const ff = useSdk();
  const isReady = ff.isReady();

  useEffect(() => {
    setIsClient(true);
    if (isReady) {
      setIsEnabled(ff.isEnabled(feature, { userId: '123', mode: mode }));
    }
  }, [ff, isReady, feature, mode]);

  return (
    <>
      {isClient && !isEnabled && showDisabled && (
        <div className="visible">
          Feature flag <code className="mx-1 px-2 py-1 rounded-lg text-neutral-700 dark:text-neutral-300 bg-neutral-200 dark:bg-neutral-800">{feature}</code> is disabled
        </div>
      )}
      {isClient && isEnabled && <div>{children}</div>}
    </>
  );
}
