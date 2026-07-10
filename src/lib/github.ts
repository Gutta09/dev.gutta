export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  languages_url: string;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
  /** all languages in the repo, largest first */
  languages: string[];
}

const LANG_COLORS: Record<string, string> = {
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Python: '#3572A5',
  Go: '#00ADD8',
  Rust: '#dea584',
  Java: '#b07219',
  CSS: '#563d7c',
  HTML: '#e34c26',
  'C++': '#f34b7d',
  C: '#555555',
  Ruby: '#701516',
  Swift: '#F05138',
  Kotlin: '#A97BFF',
  Dart: '#00B4AB',
  PHP: '#4F5D95',
};

export function getLangColor(lang: string | null): string {
  return lang ? (LANG_COLORS[lang] ?? '#6b7280') : '#6b7280';
}

export function formatRepoName(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function ghHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
  };
  // optional: set GITHUB_TOKEN on Vercel to raise the API rate limit
  const token = import.meta.env.GITHUB_TOKEN ?? process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;
  return headers;
}

async function fetchLanguages(url: string): Promise<string[]> {
  try {
    const res = await fetch(url, { headers: ghHeaders() });
    if (!res.ok) return [];
    const data = (await res.json()) as Record<string, number>;
    return Object.entries(data)
      .sort(([, a], [, b]) => b - a)
      .map(([lang]) => lang);
  } catch {
    return [];
  }
}

// cache per server instance: GitHub allows only 60 unauthenticated requests/hour
// and each uncached render costs ~9 (repo list + languages per repo)
let cache: { repos: GitHubRepo[]; at: number } | null = null;
const CACHE_TTL_MS = 10 * 60 * 1000;

export async function fetchPortfolioRepos(username = 'Gutta09'): Promise<GitHubRepo[]> {
  if (cache && Date.now() - cache.at < CACHE_TTL_MS) return cache.repos;
  try {
    // list repos directly (instead of the search API) so new topics apply immediately
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
      { headers: ghHeaders() }
    );
    if (!res.ok) return [];
    const data = (await res.json()) as GitHubRepo[];
    const repos = data.filter(r => r.topics?.includes('portfolio'));
    const languages = await Promise.all(repos.map(r => fetchLanguages(r.languages_url)));
    const result = repos.map((r, i) => ({
      ...r,
      languages: languages[i].length > 0 ? languages[i] : r.language ? [r.language] : [],
    }));
    if (result.length > 0) cache = { repos: result, at: Date.now() };
    return result;
  } catch {
    return [];
  }
}
