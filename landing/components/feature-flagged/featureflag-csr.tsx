'use client';

import { useState, useEffect } from 'react';
import { useStatus, useFlag } from '@featurevisor/react';

export default function FeatureFlag() {

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true)
  }, []);

  const { isReady } = useStatus();
  const isEnabled = useFlag( "exampleSSG", { userId: "123" } );

  return (
    <>
      <div>
        Feature is
        {!isClient && ("...")}
        {isClient && !isReady && (" loading")}
        {isClient && isReady && !isEnabled && (" disabled")}
        {isClient && isReady && isEnabled && (" enabled")}
      </div>
    </>
  )
};
