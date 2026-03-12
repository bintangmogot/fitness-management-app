# 📋 Planning Document
## Personal Training & Nutrition Management System
*(Project: Coach Yohan)*

---

## 1. Problem Statement

### Background
Seorang personal trainer di Bali, khususnya di daerah Canggu dan sekitarnya (Kuta, Seminyak), saat ini seringkali kesulitan untuk menemukan dan menjangkau klien internasional (turis/ekspatriat). Turis di daerah Canggu dan Kuta dikenal memiliki gaya hidup yang sangat sehat, peduli dengan bentuk tubuh ideal, dan merupakan market yang paling menjanjikan (worth it) karena mereka berani membayar biaya premium untuk tenaga atau *service* berkualitas tinggi yang ditawarkan oleh *local talent*.

Tantangan utamanya adalah:
1. Bagaimana cara agar turis dari seluruh dunia bisa mengetahui dan yakin bahwa ada personal trainer kredibel di Canggu/Kuta yang cocok dengan harga dan menawarkan *service* luar biasa?
2. Bagaimana cara mengantarkan penawaran produk dan *service* yang menarik secara visual dan interaktif bagi para calon klien?
3. Bagaimana cara mempermudah calon klien dari seluruh dunia untuk menghubungi, membayar, dan memesan layanan personal trainer di Bali sepenuhnya melalui website?

### Target Audience
**Turis & Ekspatriat** internasional yang sedang atau akan berkunjung ke Bali (Canggu, Kuta, Seminyak) dan mencari *personal trainer* / *fitness coach* kredibel untuk menjaga gaya hidup sehat mereka.

### Solution
Membangun platform digital bertahap (Website & Web App) yang diawali dengan *portfolio landing page* elegan untuk membangun *trust*, dan secara progresif akan dilengkapi dengan fitur-fitur kompleks seperti *dynamic food nutrition tracker*, *calendar booking management*, *e-commerce gym essentials*, hingga integrasi AI dan *live chat*.

---

## 2. Development Roadmap / Phases

### 📍 Level 1: MVP (Frontend Landing Page) - *Status: Hampir Selesai*
| Aspect | Detail |
|--------|--------|
| **Type** | Static Single-Page Website (Frontend Only) |
| **Tech Stack** | Vue.js + Vite + Tailwind CSS |
| **Focus** | Portofolio, Edukasi, Leads (CTA to WhatsApp) |

**Features:**
- Hero Section & Tagline "In Shape In Bali"
- Portfolio & Profile Coach Yohan
- Testimonial video (YouTube Unlisted embed)
- Pricing packages (Hanya display harga & benefit)
- Lokasi & gym info
- Direct WhatsApp CTA button

---

### 📍 Level 2: Dynamic Food Nutrition Tracker
| Aspect | Detail |
|--------|--------|
| **Type** | Interactive Frontend Application |
| **Tech Stack** | Vue.js + Vite (State Management & Animations) |
| **Focus** | User Engagement & Interactive Meal Planning |

**Features:**
- **"Build Your Own Plate" System**: User dapat merakit/memilih menu makanan sehat langsung dari *coach*.
- **Dynamic Animation**: Visualisasi dinamis dari piring makanan dan menu yang dirakit, memberikan gambaran jelas seperti apa makanannya nanti.
- **Dynamic Macro Counter**: Perhitungan nutrisi makro (Kalori, Protein, Carbs, Fat) secara *real-time* dan dinamis saat makanan dipilih, beserta kalkulasi total harga.

---

### 📍 Level 3: Gym Booking System
| Aspect | Detail |
|--------|--------|
| **Type** | Full-Stack Web Application |
| **Tech Stack** | Vue.js + Backend Framework + Database |
| **Focus** | User Accounts, Payments & Schedule Management |

**Features:**
- User Authentication (Login/Register).
- Pembayaran langsung seluruh produk dan servis dari *personal trainer* melalui website.
- **Calendar Booking**: Pembelian paket *training* (misal: 10 sesi) mengharuskan user memilih 10 hari berbeda yang tersedia di kalender.
- **Admin Approval**: Jadwal yang sudah di-booking oleh user harus menunggu konfirmasi dan persetujuan dari admin.

---

### 📍 Level 4: E-Commerce Gym Products
| Aspect | Detail |
|--------|--------|
| **Type** | Full-Stack E-commerce |
| **Focus** | Retail Gym Essentials |

**Features:**
- Toko online standar layaknya e-commerce pada umumnya.
- Menjual barang-barang kebutuhan *gym* seperti: Susu protein, dumbbell, protein bar, apparel, dll.
- Order & Inventory management.

---

### 📍 Level 5: Live Chat & AI Integration (Future)
| Aspect | Detail |
|--------|--------|
| **Type** | Advanced Features |

**Features:**
- **Live Chat**: Fasilitas bagi user untuk langsung bertanya di dalam web.
- **AI Integration**: (Konsep dalam eksplorasi) Solusi berbasis AI untuk meningkatkan *customer experience* maupun operasional *trainer*.

---

## 3. SEO Strategy & Marketing

### Target Keywords
```text
personal trainer bali, personal trainer canggu, fitness coach kuta,
bali fitness coach, pt bali canggu, workout in bali
```

| No | Item | Detail |
|----|------|--------|
| 1 | Kata kunci utama | Target keywords di heading, content, URL |
| 2 | Meta description | Unique per section/page |
| 3 | Alt & title images| Descriptive text dengan keywords |

---

## 4. Unique Selling Points

| USP | Description |
|-----|-------------|
| 🌍 **Global Standard** | Pembayaran internasional & UX setara global app |
| 🥗 **Nutrition Clarity** | Tracker nutrisi dinamis, visualisasi real-time |
| 🏆 **Certified** | Ade Rai Personal Trainer Certification |
| 📈 **Proven** | 50+ client transformations |
| 🏠 **Exclusive** | Akses ke *private gym facility* di Canggu |

---

## 5. Tech Stack Summary

| Level | Frontend | Backend | Database | Hosting |
|-------|----------|---------|----------|---------|
| Level 1 | Vue.js + Vite + Tailwind | - | - | Vercel/Netlify |
| Level 2 | Vue.js + Vite + Tailwind | - | - | Vercel/Netlify |
| Level 3 | Vue.js + Vite | Laravel (API) | PostgreSQL | VPS Ubuntu |
| Level 4 | Vue.js + Vite | Laravel (API) | PostgreSQL | VPS Ubuntu |
| Level 5 | Vue.js + Vite | Laravel / AI Service | PostgreSQL | VPS Ubuntu |

---

## 6. Repository Strategy

Untuk memaksimalkan nilai *showcase* kepada HR dan Rekruter, sekaligus memudahkan integrasi, proyek ini akan menggunakan konsep **Monorepo (Satu Repositori untuk Semua)** yang bersifat **Public**.

Struktur Repositori (`fitness-management-app`):
```text
fitness-management-app/
├── frontend/  (Vue 3 + Vite + Tailwind CSS)
└── backend/   (Laravel 11 REST API)
```

**Alasan Pemilihan Strategi:**
- **Showcase Maksimal**: HR/Rekruter cukup mengunjungi satu *link* repositori GitHub untuk melihat secara penuh kemampuan *Full-Stack* Anda (mengatur Vue.js di sisi depan, dan mendesain MVC/Database Laravel di sisi belakang).
- **Keamanan Terjamin**: File `.env` milik Laravel (yang berisi *password database*, *payment keys*, dll) **tidak akan pernah di-push** ke GitHub secara otomatis karena aturan bawaan `.gitignore`. Sehingga source code bisa dibaca publik tanpa membocorkan rahasia *client/production*.
- **Manajemen Mudah**: Sinkronisasi fitur (contoh: fitur *Booking* di frontend dan backend) bisa di-commit dalam satu *Pull Request*.

---

> **Document Version**: 3.2  
> **Last Updated**: March 2026  
> **Status**: ✅ Approved for Documentation Expansion
