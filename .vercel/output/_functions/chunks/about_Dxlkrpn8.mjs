import { c as createComponent } from './astro-component_B7fJIgt0.mjs';
import 'piccolore';
import { c as renderComponent, r as renderTemplate, m as maybeRenderHead } from './entrypoint_w09a8xBA.mjs';
import { $ as $$Layout } from './Layout_BYP47cQF.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="about" class="flex overflow-x-hidden pt-5"> <div class="container mx-auto flex justify-center pb-20 text-lg leading-relaxed md:w-[80%] lg:w-[60%] flex-col items-start pt-3 space-y-3"> <h1 class="title-font sm:text-4xl text-3xl mb-6 font-medium dark:text-titlePurple text-black py-2">
About Me
</h1> <p class="leading-relaxed dark:text-opacity-70 dark:text-gray-300 text-lg">
I'm Bhargav Gutta, a passionate full-stack developer dedicated to creating elegant solutions to complex problems.
</p> <p class="leading-relaxed dark:text-opacity-70 dark:text-gray-300 text-lg">
With experience in modern web technologies and a love for continuous learning, I work on projects that challenge me and allow me to grow as a developer.
</p> <h2 class="title-font sm:text-2xl text-xl mt-8 mb-4 font-medium dark:text-titlePurple text-black">
My Skills
</h2> <ul class="leading-relaxed dark:text-opacity-70 dark:text-gray-300 text-lg list-disc list-inside space-y-2"> <li>Frontend: HTML, CSS, JavaScript, React, Astro</li> <li>Backend: Node.js, Python, Express</li> <li>Database: MongoDB, PostgreSQL</li> <li>Tools: Git, Docker, AWS</li> </ul> <h2 class="title-font sm:text-2xl text-xl mt-8 mb-4 font-medium dark:text-titlePurple text-black">
Let's Connect
</h2> <p class="leading-relaxed dark:text-opacity-70 dark:text-gray-300 text-lg">
I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
</p> <a href="mailto:bhargav@example.com" class="inline-flex text-white dark:bg-byz dark:hover:bg-containerGray dark:hover:text-white dark:text-white dark:text-opacity-90 bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-black rounded text-lg">
Send me an Email
</a> </div> </section> ` })}`;
}, "/Users/bhargav/dev.gutta/src/pages/about.astro", void 0);

const $$file = "/Users/bhargav/dev.gutta/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
