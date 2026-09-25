import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().default('/images/new/T4 KIMCHI JJIGAE.webp'),
    imageAlt: z.string().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
