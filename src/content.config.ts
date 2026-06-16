import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const postCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    date: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  posts: postCollection,
};
