import { Suspense } from 'react'
import ClientSideFeatureFlagWrapper from '@/components/wrapper/featureflag-csr-wrapper';
import Card from '@/components/ui/card-with-icon';
import { EyeSlashIcon } from '@heroicons/react/24/solid';
import { StaticDataCardsFeatureFlags } from '@/static-data/cards-feature-flags';

function Fallback() {
  return <div>...</div>
};

export default async function ExampleFeatureFlagTestInProduction() {

  const staticData = StaticDataCardsFeatureFlags.filter(i => i.route === '/examples/feature-flags/prod-testing')[0];

  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
        <Suspense fallback={<Fallback />}>
          <ClientSideFeatureFlagWrapper feature="exampleProdTesting" showDisabled={true}>
            <Card 
            title={staticData.title} 
            blurb={staticData.blurb}
            >
              <EyeSlashIcon />
            </Card>
          </ClientSideFeatureFlagWrapper>
        </Suspense>
      </div>
    </>
  )
};
