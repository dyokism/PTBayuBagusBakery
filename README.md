# PT Bayu Bagus Bakery

Sistem estimasi pasokan & web B2B PT Bayu Bagus Bakery. Dibuat dengan stack Vanilla JS + Vite.

## Tech Stack
- **Core**: HTML5, Vanilla JS (ES Modules), CSS3
- **Build**: Vite v5.4.21
- **UI & Font**: Google Fonts (Outfit & Sora), Native HTML5 `<dialog>`

## Audit Lighthouse

| Kategori | Mobile | Desktop |
|---|---|---|
| **Performance** | **100** | **100** |
| **Accessibility** | **100** | **100** |
| **Best Practices** | **100** | **100** |
| **SEO** | **100** | **100** |

## Struktur Direktori

```text
BayuBagusBakery/
├── index.html               # Halaman utama, meta SEO, & skema JSON-LD Bakery
├── package.json             # Konfigurasi dependensi & skrip Vite
├── LICENSE                  # Lisensi MIT
├── public/
│   ├── robots.txt           # File instruksi crawler mesin pencari
│   ├── sitemap.xml          # XML Sitemap index
│   └── assets/              # Gambar WebP produk, hero, & logo
└── src/
    ├── scripts/
    │   ├── app.js           # Entry point & inisialisasi lazy map
    │   ├── data/
    │   │   └── products.js  # Data utama 14 produk & informasi BPOM
    │   └── components/      # Modul UI (katalog, kalkulator B2B, modal, header, toast)
    └── styles/              # Modul CSS (token warna, reset, hero, komponen)
```

## Command Line

```bash
npm install      # Install dependensi
npm run dev      # Dev server (http://localhost:5173/)
npm run build    # Output ke dist/
npm run preview  # Production preview & audit Lighthouse (http://localhost:4173/)
```

## License

[MIT License](LICENSE)
