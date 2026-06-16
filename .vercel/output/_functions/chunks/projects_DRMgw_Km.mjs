import { c as createComponent } from './astro-component_B7fJIgt0.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_w09a8xBA.mjs';
import { $ as $$Layout } from './Layout_BYP47cQF.mjs';
import { f as fetchPortfolioRepos, a as formatRepoName, g as getLangColor } from './github_D8OfELJY.mjs';

const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const repos = await fetchPortfolioRepos();
  const noProjects = repos.length === 0;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex items-baseline justify-between mb-8"> <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Projects</h1> <a href="https://github.com/Gutta09" target="_blank" rel="noopener noreferrer" class="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
View GitHub →
</a> </div> ${noProjects ? renderTemplate`<p class="text-sm text-gray-400 dark:text-gray-500">
No projects found. Add the <code class="bg-gray-100 dark:bg-gray-800 px-1.5 py-0.5 rounded text-xs">portfolio</code> topic to GitHub repos you want to feature here.
</p>` : renderTemplate`<div class="space-y-3"> ${repos.map((repo) => {
    const displayName = formatRepoName(repo.name);
    const langColor = getLangColor(repo.language);
    const visibleTopics = repo.topics.filter((t) => t !== "portfolio");
    const liveUrl = repo.homepage?.startsWith("http") ? repo.homepage : null;
    return renderTemplate`<div class="p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-all duration-200"> <div class="flex items-start justify-between gap-3 mb-2"> <div class="flex items-center gap-2 flex-wrap min-w-0"> <h2 class="text-sm font-semibold text-gray-900 dark:text-white">${displayName}</h2> ${visibleTopics.slice(0, 4).map((topic) => renderTemplate`<span class="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full border border-gray-200 dark:border-gray-700"> ${topic} </span>`)} </div> <div class="flex items-center gap-2 flex-shrink-0"> ${liveUrl && renderTemplate`<a${addAttribute(liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
Live ↗
</a>`} <a${addAttribute(repo.html_url, "href")} target="_blank" rel="noopener noreferrer" class="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
GitHub ↗
</a> </div> </div> ${repo.description && renderTemplate`<p class="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3"> ${repo.description} </p>`} <div class="flex items-center gap-4"> ${repo.language && renderTemplate`<span class="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"> <span class="w-2.5 h-2.5 rounded-full flex-shrink-0"${addAttribute(`background-color: ${langColor}`, "style")}></span> ${repo.language} </span>`} ${repo.stargazers_count > 0 && renderTemplate`<span class="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500"> <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> ${repo.stargazers_count} </span>`} </div> </div>`;
  })} </div>`}<p class="mt-8 text-xs text-gray-300 dark:text-gray-600 text-center">
Auto-synced from GitHub · Add the <code class="bg-gray-100 dark:bg-gray-800 px-1 rounded">portfolio</code> topic to a repo to feature it here
</p> ` })}`;
}, "/Users/bhargav/dev.gutta/src/pages/projects.astro", void 0);

const $$file = "/Users/bhargav/dev.gutta/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
