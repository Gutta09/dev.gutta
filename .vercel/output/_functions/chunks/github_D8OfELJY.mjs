const LANG_COLORS = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Go: "#00ADD8",
  Rust: "#dea584",
  Java: "#b07219",
  CSS: "#563d7c",
  HTML: "#e34c26",
  "C++": "#f34b7d",
  C: "#555555",
  Ruby: "#701516",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  PHP: "#4F5D95"
};
function getLangColor(lang) {
  return lang ? LANG_COLORS[lang] ?? "#6b7280" : "#6b7280";
}
function formatRepoName(name) {
  return name.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}
async function fetchPortfolioRepos(username = "Gutta09") {
  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}+topic:portfolio&sort=updated&per_page=20`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28"
        }
      }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.items ?? [];
  } catch {
    return [];
  }
}

export { formatRepoName as a, fetchPortfolioRepos as f, getLangColor as g };
