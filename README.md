# Website SD Muhammadiyah 1 Wonogiri

Website profil sekolah untuk SD Muhammadiyah 1 Wonogiri (Giripurwo, Kec. Wonogiri), diperuntukkan bagi calon wali murid, siswa, dan masyarakat umum yang mencari informasi profil, program, dan PPDB sekolah. Saat ini masih berupa scaffold awal (v0.1); sebagian halaman masih menunggu data resmi dari sekolah.

## Fitur utama

- Halaman beranda: ringkasan profil, berita terbaru, dan daftar prestasi
- Halaman Profil, Program, Guru, Prestasi, Galeri, Agenda, dan Kontak
- Halaman Berita dengan daftar artikel dan halaman detail per artikel (sumber konten: file Markdown)
- Halaman PPDB dengan tombol kontak cepat via WhatsApp
- Tombol "Tanya PPDB lewat WhatsApp" yang mengambang di tampilan mobile
- SEO dasar: meta description, Open Graph, canonical URL, data terstruktur `EducationalOrganization` (JSON-LD), `robots.txt`, dan sitemap

## Tech stack

- [Astro 5](https://astro.build/) — framework situs statis
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`) — styling
- `@astrojs/sitemap` — generate sitemap otomatis
- TypeScript (strict, dari `astro/tsconfigs/strict`)
- Konten berita dikelola lewat Astro Content Collections (file Markdown di `src/content/berita/`)

## Cara menjalankan lokal

```bash
npm install
npm run dev       # jalankan server pengembangan
npm run build     # build untuk produksi
npm run preview   # preview hasil build
```

Proyek ini tidak memerlukan environment variable untuk dijalankan secara lokal (tidak ada file `.env.example`).

## Struktur folder

```
src/
  content/berita/     artikel berita (Markdown)
  content.config.ts   skema collection "berita"
  data/site.ts         data profil sekolah (nama, alamat, kontak, prestasi, menu navigasi)
  layouts/Base.astro   layout utama (header, footer, SEO, tombol WhatsApp)
  pages/               halaman situs (beranda, profil, program, guru, prestasi, galeri, agenda, kontak, ppdb, berita)
  styles/global.css    style global (Tailwind)
public/                aset statis (robots.txt, dll.)
```

## Deploy

Situs di-deploy via Cloudflare Pages menggunakan integrasi Git langsung (push ke branch `main` akan memicu build & deploy otomatis di Cloudflare, tanpa GitHub Actions).

## Kredit

Dibuat oleh **Ranupane Rimba Argana**, founder [Kukerjain](https://kukerjain.dev).

- [kukerjain.dev](https://kukerjain.dev)
- [ranupane.kukerjain.dev](https://ranupane.kukerjain.dev)
