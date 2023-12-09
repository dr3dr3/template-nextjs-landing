const isGithubActions = process.env.GITHUB_ACTIONS || false
const ghRepo = process.env.GITHUB_REPOSITORY || ''

const repo = ghRepo.replace(/\/.*/, '')
const user_url = `https://api/github.com/users${repo}`

async function getData(user_url:string) {
    const res = await fetch(user_url)
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
};