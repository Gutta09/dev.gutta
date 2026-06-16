export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  updated_at: string;
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

export async function fetchPortfolioRepos(username = 'Gutta09'): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}+topic:portfolio&sort=updated&per_page=20`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
        },
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return (data.items as GitHubRepo[]) ?? [];
  } catch {
    return [];
  }
}
