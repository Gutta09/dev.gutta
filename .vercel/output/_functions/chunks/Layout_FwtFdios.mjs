import { c as createComponent } from './astro-component_DmwjaYxJ.mjs';
import 'piccolore';
import { a as addAttribute, d as renderHead, c as renderComponent, e as renderSlot, r as renderTemplate } from './entrypoint_CYPyryNL.mjs';
import { $ as $$Navbar } from './Navbar_B_ZrFTto.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Bhargav Gutta's Portfolio Website"><meta property="og:title" content="Bhargav's Portfolio"><meta property="og:description" content="Bhargav Gutta's Portfolio Website"><meta property="og:image" content="/newWebsite.jpg"><meta property="og:url" content="https://dev.gutta.com"><title>Bhargav Gutta</title>${renderHead()}</head> <body class="bg-white dark:bg-[#121212] min-h-screen pt-14"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <main class="max-w-2xl mx-auto px-4 sm:px-6 py-12"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/bhargav/dev.gutta/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
