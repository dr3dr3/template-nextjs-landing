import '@/style/globals.css';
import FeatureFlag from '../../components/featureflag-ssg';

export default function ExampleFeatureFlagSSG() {
  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
        <FeatureFlag />
      </div>
    </>
  )
};