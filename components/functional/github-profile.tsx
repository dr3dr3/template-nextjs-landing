import { display } from '@/style/fonts';
import { getInstance } from '@/lib/utils/featurevisor';
import { getUser } from '@/lib/api/ssg-at-build/github';
import Avatar from '@/components/ui/avatar';

export default async function GitHubProfile() {
  const data = await getUser();

  const featureKey = 'showGitHubProfile';
  const context = { userId: '123' };
  const f = await getInstance();
  const isEnabled = f.isEnabled(featureKey, context);

  return (
    <>
      {isEnabled ? (
        <div className="mx-auto max-w-2xl sm:px-4 lg:px-8">
          <div className="text-center sm:text-left sm:flex">
            <div className="px-8 mb-4 sm:flex-shrink-0 sm:mb-0 sm:mr-4">
              <Avatar avatar_url={data.avatar_url} size={120} alt="GitHub Profile Image" />
            </div>
            <div className="px-12 items-center">
              <h4 className={`${display.className} text-primary dark:text-secondary font-bold text-2xl pt-4`}>{data.name}</h4>
              <p className="mt-1">{data.bio}</p>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
