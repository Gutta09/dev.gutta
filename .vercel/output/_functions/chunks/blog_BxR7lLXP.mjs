import { c as createComponent } from './astro-component_B7fJIgt0.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute } from './entrypoint_w09a8xBA.mjs';
import { g as getCollection } from './_astro_content_Cc9DiPx-.mjs';
import { $ as $$Layout } from './Layout_BYP47cQF.mjs';

const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  let postEntries = await getCollection("posts");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold text-gray-900 dark:text-white mb-8">Writing</h1> <div class="space-y-3"> ${postEntries.map((blog) => renderTemplate`<a${addAttribute(`/posts/${blog.id.replace(/\.mdx?$/, "")}`, "href")} class="group flex gap-4 items-start p-4 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50/50 dark:hover:bg-gray-900/50 transition-all duration-200"> <img${addAttribute(blog.data.image, "src")}${addAttribute(blog.data.title, "alt")} class="w-12 h-12 rounded-lg object-cover flex-shrink-0"> <div class="flex-1 min-w-0"> <div class="flex items-baseline justify-between gap-3 mb-1 flex-wrap"> <h2 class="text-sm font-medium text-gray-900 dark:text-white">${blog.data.title}</h2> <span class="text-xs text-gray-400 dark:text-gray-500 whitespace-nowrap flex-shrink-0">${blog.data.date}</span> </div> <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">${blog.data.description}</p> </div> </a>`)} </div> ` })}`;
}, "/Users/bhargav/dev.gutta/src/pages/blog.astro", void 0);

const $$file = "/Users/bhargav/dev.gutta/src/pages/blog.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
