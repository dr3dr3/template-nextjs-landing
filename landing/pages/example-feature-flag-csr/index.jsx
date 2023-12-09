import '@/style/globals.css';
import { FeaturevisorProvider } from "@featurevisor/react";
import { getInstance } from '@/utils/featurevisor';
import FeatureFlag from '../../components/featureflag-csr';

const f = await getInstance();

export default function ExampleFeatureFlagCSR() {
  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
        <FeaturevisorProvider instance={f}>
          <FeatureFlag />
        </FeaturevisorProvider>
      </div>
    </>
  )
};