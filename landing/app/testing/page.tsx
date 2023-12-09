import DevOpsRoles from '@/components/devops-roles';

export default async function Test() {
  return (
    <>
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-primary-900 dark:text-primary-100">
          <div className="mt-5 overflow-hidden grid grid-cols-1 md:grid-cols-3 justify-items-center">
            <DevOpsRoles role='Developer' />
            <DevOpsRoles role='Product' />
            <DevOpsRoles role='Architect' />
            <DevOpsRoles role='Infrastructure' />
            <DevOpsRoles role='Scrum Master' />
            <DevOpsRoles role='Security' />
            <DevOpsRoles role='Product Team' />
            <DevOpsRoles role='Platform Team' />
            <DevOpsRoles role='The Business' />
          </div>
        </div>
      </div>
    </>
  )
};

