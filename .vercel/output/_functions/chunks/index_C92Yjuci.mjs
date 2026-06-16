import { c as createComponent } from './astro-component_B7fJIgt0.mjs';
import 'piccolore';
import { m as maybeRenderHead, r as renderTemplate, a as addAttribute, c as renderComponent, d as renderHead } from './entrypoint_w09a8xBA.mjs';
import { $ as $$Navbar } from './Navbar_DvUutKWX.mjs';
import 'clsx';
import { g as getCollection } from './_astro_content_Cc9DiPx-.mjs';
import { f as fetchPortfolioRepos, g as getLangColor, a as formatRepoName } from './github_D8OfELJY.mjs';

let projects = [
  {
    title: "Learn Wave",
    status: "",
    description:
      "An AI-powered course builder that automatically generates complete courses with YouTube videos and lessons using OpenAI and YouTube APIs. Features include AI-generated courses for any topic, YouTube integration with embedded videos, structured progressive learning, and customizable difficulty levels.",
    image: "/Learnwave.jpeg",
    link: "https://github.com/Gutta09/LearnWave/tree/main",
  },
  {
    title: "Low Echo Chess",
    status: "",
    description:
      "A reverse chess game where you play the worst case moves — it's dumb chess! A fun twist on the classic game with modern web technologies.",
    image: "/dumbChess.jpg",
    link: "https://github.com/bhargavgutta/",
  },
];

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  const postEntries = await getCollection("posts");
  const githubRepos = await fetchPortfolioRepos();
  const featuredProjects = githubRepos.length > 0 ? githubRepos.slice(0, 2).map((r) => ({
    name: formatRepoName(r.name),
    description: r.description ?? "",
    url: r.html_url,
    language: r.language,
    langColor: getLangColor(r.language),
    stars: r.stargazers_count
  })) : projects.slice(0, 2).map((p) => ({
    name: p.title,
    description: p.description,
    url: p.link,
    language: null,
    langColor: "#6b7280",
    stars: 0
  }));
  const skills = [
    "JavaScript",
    "TypeScript",
    "Python",
    "Go",
    "SQL",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Astro",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "AWS Lambda",
    "Git",
    "Vercel"
  ];
  return renderTemplate`${maybeRenderHead()}<main class="max-w-2xl mx-auto px-4 sm:px-6 pt-24 pb-24"> <!-- Hero --> <section class="mb-16"> <div class="flex items-start justify-between gap-6 mb-6"> <div class="flex-1"> <p class="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-2"> <span>👋</span> <span>Hi, I'm</span> </p> <h1 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
Bhargav Gutta
</h1> <p class="text-base text-gray-500 dark:text-gray-400 mb-5">
Full Stack Developer &nbsp;·&nbsp; CS @ SRM University AP
</p> <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
I build full-stack web applications and enjoy integrating AI into products.
          Currently a sophomore at SRM University AP. I practice LeetCode to keep my problem-solving sharp
          and like working on projects that actually ship.
          Outside of code — gym, reading, and video games.
</p> </div> <img src="/GOT.jpeg" alt="Bhargav Gutta" class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover flex-shrink-0 border-2 border-gray-100 dark:border-gray-800"> </div> <div class="flex flex-wrap gap-2"> <a href="mailto:bhargavgutta910@gmail.com" class="inline-flex items-center gap-1.5 text-sm font-medium bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-full hover:opacity-80 transition-opacity">
Contact Me
</a> <a href="https://github.com/Gutta09" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
GitHub
</a> <a href="https://www.linkedin.com/in/bhargavgutta/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
LinkedIn
</a> <a href="https://leetcode.com/u/ySH4mNLSXa/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-4 py-2 rounded-full hover:border-gray-400 dark:hover:border-gray-500 transition-colors">
LeetCode
</a> </div> </section> <!-- Experience --> <section class="mb-14"> <h2 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Experience</h2> <div class="flex gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">E</div> <div class="flex-1 min-w-0"> <div class="flex items-start justify-between gap-2 flex-wrap"> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white">Edubot Technologies</h3> <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Full Stack Developer Intern · Remote</p> </div> <span class="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">Jun – Jul 2025</span> </div> <ul class="mt-3 space-y-1.5 text-sm text-gray-600 dark:text-gray-300"> <li class="flex gap-2"><span class="text-gray-300 dark:text-gray-600 mt-1">–</span><span>Completed 8-week MERN stack program (MongoDB, Express, React, Node.js).</span></li> <li class="flex gap-2"><span class="text-gray-300 dark:text-gray-600 mt-1">–</span><span>Built a full-stack Expense Tracker with JWT auth, RBAC, and real-time dashboard.</span></li> <li class="flex gap-2"><span class="text-gray-300 dark:text-gray-600 mt-1">–</span><span>Implemented RESTful APIs, client-side routing, and CSV export with React Context API.</span></li> </ul> </div> </div> </section> <!-- Education --> <section class="mb-14"> <h2 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Education</h2> <div class="flex gap-4"> <div class="flex-shrink-0 w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700">S</div> <div class="flex-1 min-w-0"> <div class="flex items-start justify-between gap-2 flex-wrap"> <div> <h3 class="text-sm font-semibold text-gray-900 dark:text-white">SRM University AP</h3> <p class="text-xs text-gray-500 dark:text-gray-400 mt-0.5">B.Tech, Computer Science &amp; Engineering · Amaravathi, India</p> </div> <span class="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap">2023 – 2027</span> </div> <p class="mt-2 text-sm text-gray-600 dark:text-gray-300">GPA: 7.54 / 10</p> </div> </div> </section> <!-- Skills --> <section class="mb-14"> <h2 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Skills</h2> <div class="flex flex-wrap gap-2"> ${skills.map((skill) => renderTemplate`<span class="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"> ${skill} </span>`)} </div> </section> <!-- Projects --> <section class="mb-14"> <div class="flex items-center justify-between mb-6"> <h2 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Projects</h2> <a href="/projects" class="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">View all →</a> </div> <div class="space-y-3"> ${featuredProjects.map((project) => renderTemplate`<a${addAttribute(project.url, "href")} target="_blank" rel="noopener noreferrer" class="group flex gap-4 items-start p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-all duration-200"> <div class="flex-1 min-w-0"> <div class="flex items-center gap-2 mb-1"> <h3 class="text-sm font-medium text-gray-900 dark:text-white">${project.name}</h3> <svg class="w-3 h-3 text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </div> <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed mb-2">${project.description}</p> <div class="flex items-center gap-3"> ${project.language && renderTemplate`<span class="flex items-center gap-1.5 text-xs text-gray-400 dark:text-gray-500"> <span class="w-2 h-2 rounded-full"${addAttribute(`background-color: ${project.langColor}`, "style")}></span> ${project.language} </span>`} ${project.stars > 0 && renderTemplate`<span class="flex items-center gap-1 text-xs text-gray-400 dark:text-gray-500"> <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"> <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path> </svg> ${project.stars} </span>`} </div> </div> </a>`)} </div> ${githubRepos.length > 0 && renderTemplate`<p class="mt-3 text-xs text-gray-300 dark:text-gray-700">Auto-synced from GitHub</p>`} </section> <!-- Writing --> <section> <div class="flex items-center justify-between mb-6"> <h2 class="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Writing</h2> <a href="/blog" class="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">View all →</a> </div> <div class="space-y-3"> ${postEntries.slice(0, 2).map((blog) => renderTemplate`<a${addAttribute(`/posts/${blog.id.replace(/\.mdx?$/, "")}`, "href")} class="group flex gap-4 items-start p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-all duration-200"> <img${addAttribute(blog.data.image, "src")}${addAttribute(blog.data.title, "alt")} class="w-12 h-12 rounded-lg object-cover flex-shrink-0"> <div class="flex-1 min-w-0"> <div class="flex items-baseline justify-between gap-3 mb-1 flex-wrap"> <h3 class="text-sm font-medium text-gray-900 dark:text-white">${blog.data.title}</h3> <span class="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap flex-shrink-0">${blog.data.date}</span> </div> <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">${blog.data.description}</p> </div> </a>`)} </div> </section> </main>`;
}, "/Users/bhargav/dev.gutta/src/components/About.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', `><meta name="description" content="Hi! I'm Bhargav Gutta, a full stack developer. Check out my projects, blogs, and what I'm currently working on."><meta property="og:title" content="Bhargav Gutta"><meta property="og:description" content="Bhargav Gutta's Portfolio"><meta property="og:image" content="/newWebsite.jpg"><meta property="og:url" content="https://dev.gutta.com"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="Bhargav Gutta"><meta name="twitter:description" content="Bhargav Gutta's Portfolio"><script type="application/ld+json">
      {
        "@context": "https://schema.org/",
        "@type": "Person",
        "name": "Bhargav Gutta",
        "url": "https://dev.gutta.com/",
        "sameAs": [
          "https://www.linkedin.com/in/bhargavgutta/",
          "https://github.com/Gutta09",
          "https://dev.gutta.com/"
        ],
        "jobTitle": "Full Stack Developer"
      }
    <\/script><title>Bhargav Gutta</title>`, '</head> <body class="bg-white dark:bg-[#121212] min-h-screen pt-14"> ', " ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderComponent($$result, "About", $$About, {}));
}, "/Users/bhargav/dev.gutta/src/pages/index.astro", void 0);

const $$file = "/Users/bhargav/dev.gutta/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
