import HeroJustText from '@/components/ui/hero-just-text';
import GitHubProfile from '@/components/feature-flagged/github-profile';

export default async function Home() {

  return (
    <>
      <HeroJustText 
        title="DevOps Demo"
        subtitle="Learn by Doing"
        blurb="Something"/>
      <GitHubProfile />
    </>
  )
};
