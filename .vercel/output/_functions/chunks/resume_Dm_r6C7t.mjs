import { c as createComponent } from './astro-component_DmwjaYxJ.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_CYPyryNL.mjs';
import { $ as $$Layout } from './Layout_FwtFdios.mjs';

const $$Resume = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-ruvg6z4q": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="resume" class="pt-6 pb-8" data-astro-cid-ruvg6z4q> <div class="container mx-auto px-4" data-astro-cid-ruvg6z4q> <div class="flex justify-end mb-4" data-astro-cid-ruvg6z4q> <a href="/resume.pdf" download class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium" data-astro-cid-ruvg6z4q> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-ruvg6z4q> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" data-astro-cid-ruvg6z4q></path> </svg>
Download Resume
</a> </div> <div class="w-full h-[85vh] rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700" data-astro-cid-ruvg6z4q> <iframe src="/resume.pdf" title="Resume PDF" class="w-full h-full border-0" data-astro-cid-ruvg6z4q></iframe> </div> </div> </section> ` })}`;
}, "/Users/bhargav/dev.gutta/src/pages/resume.astro", void 0);

const $$file = "/Users/bhargav/dev.gutta/src/pages/resume.astro";
const $$url = "/resume";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Resume,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
