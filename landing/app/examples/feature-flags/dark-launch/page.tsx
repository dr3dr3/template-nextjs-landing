import { getInstance } from '@/utils/featurevisor';
import Card from '@/components/ui/card-with-icon';
import { UnderConstructionIcon, ComingSoonIcon } from '@/components/ui/icon-library';

export default async function ExampleFeatureFlagDarkLaunch() {

  const featureKey = "exampleDarkLaunch";
  const context = { userId: "123" };
  const f = await getInstance();
  const isEnabled = f.isEnabled(featureKey, context);

  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
        { isEnabled ? (
            <Card 
                title="Under Construction" 
                blurb="This feature is still under development and currently hidden behind a dark launch feature flag. Once ready it will be be turned on in the production environment."
                >
                <UnderConstructionIcon />
            </Card>
        ) : (
            <Card 
                title="Coming Soon" 
                blurb="This feature is visible in sandbox and CI environments, but not in Stage or Production. A dark launch feature flag is being used. Once ready it can be turned on in production environment."
                >
                <ComingSoonIcon />
            </Card>
        )}
      </div>
    </>
  )
};
