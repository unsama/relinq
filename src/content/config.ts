import { defineCollection, z } from 'astro:content';

const about = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    founded: z.number(),
    mission: z.string(),
  }),
});

const journey = defineCollection({
  type: 'content',
  schema: z.object({
    year: z.number(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { about, journey };
