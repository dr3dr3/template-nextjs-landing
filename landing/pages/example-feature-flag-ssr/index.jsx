import '@/style/globals.css';
import Layout from '@/layouts/featureflag-examples';
import FeatureFlag from '../../components/featureflag-ssr';

export default function ExampleFeatureFlagSSG() {
  return (
    <Layout>
      <div className=' flex h-screen items-center justify-center'>
        <FeatureFlag />
      </div>
    </Layout>
  )
};