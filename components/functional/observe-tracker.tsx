import { Card, Title, Tracker, Flex, Text } from '@tremor/react';
import { getContinuousDeploymentWorkflow } from '@/lib/api/ssg-at-build/github';

export default async function TrackerCD() {
  const stats = await getContinuousDeploymentWorkflow();
  const success = stats.filter((i) => i.color === 'emerald');

  return (
    <Card className="max-w-2xl mx-auto">
      <Title className="font-bold">Status</Title>
      <Text>Deployments</Text>
      <Flex justifyContent="end" className="mt-4">
        <Text>Success {((success.length / stats.length) * 100).toFixed(2)}%</Text>
      </Flex>
      <Tracker data={stats} className="mt-2" />
    </Card>
  );
}
