import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    shortDesc: z.string(),
    description: z.string(),
    cover: z.string(),
    link: z.string().optional(),
    images: z.array(z.string()).optional().default([]),
  }),
});

export const collections = { projects };
