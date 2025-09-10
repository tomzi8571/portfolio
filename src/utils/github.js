export async function fetchPopularRepos(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) {
      console.error('GitHub API error', res.status)
      return []
    }
    const data = await res.json()
      console.log(data)
    return data
      .filter((r) => !r.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 9)
  } catch (e) {
    console.error('GitHub API error', e)
    return []
  }
}

