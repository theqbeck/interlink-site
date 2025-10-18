# Interlink Website

Move to Spain the Smart Way — admissions, visas, relocation.

## ▶️ Quick start

```bash
# 1) Install deps
npm i

# 2) Run local dev
npm run dev

# 3) Build for production
npm run build
```

## 📩 Lead form (Kommo + Google Sheets + Email)

The form posts to a Google Apps Script endpoint (already connected to your Kommo integration and Google Sheets).  
Webhook URL is configured inside `src/components/LeadForm.jsx`:

```
https://script.google.com/macros/s/AKfycbzeUtEkipy-f8Goa0keMGjG0yb76--jovBLFWdJJHH23acSi2nyZ7mjDCUTEflSxtie/exec
```

You can change it there anytime.

## 🚀 Deploy

- **Vercel** (recommended): Import this repo → Framework: Vite → Build command `npm run build` → Output dir `dist`.
- **GitHub Pages** (static): `npm run build` and publish `/dist` folder.

## 🧭 Pages

- `/` Home
- `/services`
- `/how-it-works`
- `/testimonials`
- `/blog` (placeholder)
- `/about`
- `/contact`

## 📁 Assets

Brand logo and Barcelona photos are in `/public/images/`:
- interlink_logo_web.png
- interlink_logo_web.svg
- pexels-aleksandar-pasaric-1388030.jpg
- pexels-ken-cheung-11025841.jpg
- dennis-van-den-worm-RoM8ocpgBkI-unsplash.jpg
- miguel-baixauli-Dw-0Sic6dgU-unsplash.jpg
