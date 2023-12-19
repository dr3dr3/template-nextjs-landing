import '@/style/globals.css';
import { getInstance } from '@/utils/featurevisor';

export default async function FeatureFlagSSG() {

  const featureKey = "showLatestChange";
  const context = { userId: "123" };
  // get access to the Featurevisor SDK instance
  const f = await getInstance();
  // evaluate your feature flag, variation, or their variables
  const isEnabled = f.isEnabled(featureKey, context);

  return (
    <>
      <div className=' flex h-screen items-center justify-center'>
        <div>Feature is {isEnabled ? "enabled" : "disabled"}</div>
      </div>
    </>
  )
};
