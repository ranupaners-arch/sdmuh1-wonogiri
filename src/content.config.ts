import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const berita = defineCollection({ loader: glob({ pattern: '**/*.md', base: './src/content/berita' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), category: z.string().default('Kegiatan'), summary: z.string() }) });
export const collections = { berita };
