import { Suspense } from 'react'
import ClientSideFeatureFlagWrapper from '@/components/wrapper/featureflag-csr-wrapper';
import Card from '@/components/ui/card-with-icon';
import { GitHubIcon } from '@/components/ui/icon-library';

function Fallback() {
  return <div>...</div>
};

export default async function ExampleFeatureFlagTestInProduction() {

  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
        <Suspense fallback={<Fallback />}>
          <ClientSideFeatureFlagWrapper feature="exampleProdTesting" showDisabled={true}>
            <Card 
            title="Production Testing" 
            blurb="This feature is dev complete and releasable to Production, but is still toggled off for end users. Testers are excluded, so they are able to test this feature in the production environment."
            >
              <GitHubIcon />
            </Card>
          </ClientSideFeatureFlagWrapper>
        </Suspense>
      </div>
    </>
  )
};
