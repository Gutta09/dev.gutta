import { c as createComponent } from './astro-component_B7fJIgt0.mjs';
import 'piccolore';
import { a as addAttribute, d as renderHead, c as renderComponent, e as renderSlot, r as renderTemplate } from './entrypoint_w09a8xBA.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Cc9DiPx-.mjs';
import { $ as $$Navbar } from './Navbar_DvUutKWX.mjs';

const $$BlogLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BlogLayout;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Bhargav Gutta's Portfolio Website"><title>Bhargav Gutta</title>${renderHead()}</head> <body class="bg-white dark:bg-[#121212] min-h-screen pt-14"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="max-w-2xl mx-auto px-4 sm:px-6 py-12 blog-post prose dark:prose-invert prose-gray prose-sm sm:prose-base leading-relaxed"> ${renderSlot($$result, $$slots["default"])} </div> </body></html>`;
}, "/Users/bhargav/dev.gutta/src/layouts/BlogLayout.astro", void 0);

async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { slug: post.id.replace(/\.mdx?$/, "") },
    props: { post }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const resolvedPost = post ?? (await getCollection("posts")).find(
    (entry) => entry.id.replace(/\.mdx?$/, "") === Astro2.params.slug
  );
  if (!resolvedPost) {
    throw new Error(`Post not found for slug: ${Astro2.params.slug}`);
  }
  const { Content } = await renderEntry(resolvedPost);
  return renderTemplate`${renderComponent($$result, "BlogLayout", $$BlogLayout, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "/Users/bhargav/dev.gutta/src/pages/posts/[slug].astro", void 0);

const $$file = "/Users/bhargav/dev.gutta/src/pages/posts/[slug].astro";
const $$url = "/posts/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
