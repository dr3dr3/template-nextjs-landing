import HeroJustText from '@/components/hero-just-text';
import Profile from '@/components/profile';

async function getData() {
  const ghRepo = process.env.GITHUB_REPOSITORY || ''
  const ghOwner = ghRepo.replace(/\/.*/, '')
  const user_url = `https://api.github.com/users/${ghOwner}`
//  const user_url = `https://api/github.com/users/dr3dr3`
  const res = await fetch(user_url)
  
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
};

export default async function Test() {
  const data:GitHubUser = await getData()
  return (
    <>
      <HeroJustText />
      <Profile 
        avatar_url={data.avatar_url}
        name={data.name}
        bio={data.bio}
      />
    </>
  )
};

interface GitHubUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_url: string;
  url: string;
  html_url: string;
  followers_url:  string;
  following_url:  string;
  gists_url:  string;
  starred_url:  string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable: boolean | null;
  bio:string;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: string;
  updated_at:  string;
};