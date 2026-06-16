import { c as createComponent } from './astro-component_B7fJIgt0.mjs';
import 'piccolore';
import { m as maybeRenderHead, a as addAttribute, r as renderTemplate } from './entrypoint_w09a8xBA.mjs';
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const isHome = Astro2.url.pathname === "/";
  const link = (hash) => isHome ? hash : `/${hash}`;
  return renderTemplate`${maybeRenderHead()}<nav class="site-nav"> <a class="nav-logo" href="/"><span>//</span> bhargav.dev</a> <ul class="nav-links-list"> <li><a${addAttribute(link("#skills"), "href")}>Skills</a></li> <li><a${addAttribute(link("#projects"), "href")}>Projects</a></li> <li><a${addAttribute(link("#experience"), "href")}>Experience</a></li> <li><a${addAttribute(link("#contact"), "href")}>Contact</a></li> </ul> <a class="nav-cta" href="mailto:bhargavgutta910@gmail.com">Hire Me</a> </nav>`;
}, "/Users/bhargav/dev.gutta/src/components/Navbar.astro", void 0);

export { $$Navbar as $ };
