import { getInstance } from '@/lib/utils/featurevisor';

export async function getStaticProps() {
  const featureKey = "showLatestChange";
  const context = { userId: "123" };

  // get access to the Featurevisor SDK instance
  const f = await getInstance();

  // evaluate your feature flag, variation, or their variables
  const isEnabled = f.isEnabled(featureKey, context);

  // pass your evaluation as regular props
  return {
    props: {
      isEnabled: isEnabled,
    },
  };
};

export default function FeatureFlag(props) {
  return (
    <>
      <div>Feature is {props.isEnabled ? "enabled" : "disabled"}</div>
    </>
  )
};