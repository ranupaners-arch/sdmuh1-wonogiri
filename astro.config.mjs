import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// TODO: ganti site setelah domain final dikonfirmasi sekolah
export default defineConfig({ site: 'https://sdmuhwng.sch.id', integrations: [sitemap()], vite: { plugins: [tailwindcss()] } });
