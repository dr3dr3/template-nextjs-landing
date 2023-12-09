'use client'

import { useFlag, useStatus } from "@featurevisor/react";

export default function FeatureFlag() {
  const { isReady } = useStatus();
  const isEnabled = useFlag("showLatestChange");

  if (isReady && isEnabled) {
    return <div className="latest">Feature is ready and enabled</div>;
  }

  if (!isReady) {
    return <div className="latest">Checking feature...</div>;
  }

  return <div className="latest">Feature is disabled</div>;
};