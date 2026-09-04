import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const magazine = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/magazine' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    tagColor: z.enum(['coral', 'sun', 'sea', 'palm', 'plum']).optional(),
    color: z.enum(['sun', 'coral', 'sea', 'palm', 'plum', 'ink', 'sand']).default('sun'),
    motif: z.enum(['sun', 'waves', 'domino', 'palm', 'drum', 'plate', 'mic', 'people', 'star', 'book', 'flag']).default('sun'),
    image: z.string().optional(),
    author: z.string().default('Redactie Hopi Amor'),
    readingTime: z.number().default(4),
    featured: z.boolean().default(false),
  }),
});

export const collections = { magazine };
