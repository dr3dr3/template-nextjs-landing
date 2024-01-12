import { getInstance } from '@/lib/utils/featurevisor';
import Card from '@/components/ui/card-with-icon';
import { UnderConstructionIcon, ComingSoonIcon } from '@/components/ui/icon-library';

export default async function ExampleFeatureFlagDarkLaunch() {
  const featureKey = 'exampleDarkLaunch';
  const context = { userId: '123' };
  const f = await getInstance();
  const isEnabled = f.isEnabled(featureKey, context);

  return (
    <>
      <div className=" flex h-screen items-center justify-center">
        {!isEnabled ? (
          <Card title="Under Construction" blurb="This feature is still under development and currently hidden behind a dark launch feature flag. Once 'dev complete' the type of feature flag can be changed (i.e. canary release).">
            <UnderConstructionIcon />
          </Card>
        ) : (
          <Card title="Now Live!" blurb="This feature is visible in sandbox and CI environments for testing purposes, but not yet in Stage and Production environments.">
            <ComingSoonIcon />
          </Card>
        )}
      </div>
    </>
  );
}
