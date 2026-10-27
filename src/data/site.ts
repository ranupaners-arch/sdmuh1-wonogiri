// Fakta terverifikasi dari PRD bagian 0. Item bertanda TODO menunggu data sekolah.
export const site = {
  name: 'SD Muhammadiyah 1 Wonogiri', tagline: "Amar Ma'ruf Nahi Munkar",
  npsn: '20311593', status: 'Swasta', naungan: 'Yayasan PDM Kab. Wonogiri',
  alamat: 'Jln Pelem II, Kajen, Giripurwo, Kec. Wonogiri, Kab. Wonogiri, Jawa Tengah',
  geo: { lat: -7.8176, lng: 110.9248 },
  akreditasi: 'B (SK 1347/BAN-SM/SK/2021, 8 Des 2021)', berdiri: 1967,
  email: 'sdmuh1hwng@gmail.com',
  telepon: '0273-3300718', // TODO: konfirmasi sekolah
  kepsek: 'Parmanto', // TODO: konfirmasi sekolah
  facebook: 'https://facebook.com/sdmuhkajen',
  wa: '', // TODO: nomor WA PPDB format 62xxxxxxxxxx
  kurikulum: 'Kurikulum Merdeka, pagi, 6 hari sekolah',
};
export const waLink = (t = 'Assalamualaikum, saya ingin menanyakan PPDB SD Muhammadiyah 1 Wonogiri.') =>
  site.wa ? `https://wa.me/${site.wa}?text=${encodeURIComponent(t)}` : '/kontak';
export const prestasi = [
  { tahun: 2024, lomba: 'MilkLife Archery Challenge, Kudus', tingkat: 'Nasional', hasil: 'Peringkat 2, Standard Bow KU-12 putri' },
];
export const nav = [['Profil','/profil'],['Program','/program'],['Prestasi','/prestasi'],['Berita','/berita'],['Galeri','/galeri'],['Agenda','/agenda'],['Kontak','/kontak']];
