import '@/style/globals.css';
import FeatureFlag from '@/components/feature-flagged/featureflag-csr';

export default async function ExampleFeatureFlagCSR() {

  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
        <FeatureFlag />
      </div>
    </>
  )
};
