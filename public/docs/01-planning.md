# 📋 Planning Document
## Website Coach Yohan - "In Shape In Bali"

---

## 1. Problem Statement

### Background
Klien adalah seorang personal trainer di Bali (Canggu) dengan target market 90% turis/expatriate. Tantangan utama adalah meningkatkan visibilitas online agar mudah ditemukan oleh turis yang mencari personal trainer terpercaya.

### Target Audience
**Turis/Expatriate** yang mencari personal trainer kredibel di Bali (Canggu, Seminyak, Ubud, Denpasar).

### Solution
Membangun website portfolio yang menampilkan profil, testimonial, dan informasi layanan dengan CTA langsung ke WhatsApp.

---

## 2. Development Phases

### 📍 Level 1: MVP (Landing Page)
| Aspect | Detail |
|--------|--------|
| **Type** | Static Single-Page Website |
| **Tech Stack** | Vue.js + Vite + Tailwind CSS |
| **Hosting** | Vercel / Netlify (Free) |
| **Admin Panel** | ❌ Tidak ada (manual update) |
| **Payment** | ❌ Tidak ada (WhatsApp CTA only) |
| **Login** | ❌ Tidak ada (static only) |

**Features:**
- Portfolio & Profile
- Testimonial video (YouTube Unlisted embed)
- Pricing packages
- Lokasi & gym info
- WhatsApp CTA button

---

### 📍 Level 2: Booking System
| Aspect | Detail |
|--------|--------|
| **Type** | Dynamic Web Application |
| **Tech Stack** | Vue.js + Laravel |
| **Database** | PostgreSQL |
| **Hosting** | VPS (Linux Ubuntu + Apache) |

**Additional Features:**
- Payment Gateway (Xendit)
- Order Management
- Admin Panel (CRUD content)
- User Authentication (Google OAuth)
- Email Notifications

---

### 📍 Level 3: Full E-commerce
| Aspect | Detail |
|--------|--------|
| **Type** | Full-Stack E-commerce |
| **Tech Stack** | Vue.js + Laravel + PostgreSQL |

**Additional Features:**
- Box Meal shopping cart & checkout
- Video subscription (1 month access)
- Calendar booking system
- Sales reports & analytics
- Review/testimonial system
- Multi-language (EN + ID)

---

## 3. MVP Scope (Level 1)

### Products/Services Displayed (MVP)
| No | Product | CTA Action |
|----|---------|------------|
| 1 | Paket Coach PT (10/20/30 sesi) | WhatsApp |

> **Note**: Box Meal dan Video Pelatihan akan ditambahkan di Level 2+

### Testimonial Media
- **Source**: YouTube Unlisted videos
- **Format**: Embedded iframe carousel
- **Benefit**: Free hosting, no bandwidth cost

---

## 4. SEO Strategy

### Target Keywords
```
personal trainer bali, personal trainer canggu, 
fitness coach bali, pt bali, trainer canggu
```

### Technical SEO Checklist
| No | Item | Status | Note |
|----|------|--------|------|
| 1 | Kata kunci utama di setiap halaman | [ ] | Target keywords di heading, content, URL |
| 2 | Meta description & title | [ ] | Unique per section/page |
| 3 | Semantic HTML | [ ] | header, main, section, article, footer |
| 4 | Alt & title pada images | [ ] | Descriptive text dengan keywords |
| 5 | Internal linking | [ ] | Navigation antar section |
| 6 | Backlink building | [ ] | Dari website kredibel (fase lanjut) |
| 7 | Loading cepat | [ ] | Static site = fast |
| 8 | Mobile responsive | [ ] | Tailwind responsive classes |
| 9 | SSL Certificate (HTTPS) | [ ] | Free via Vercel/Netlify |
| 10 | Sitemap | [ ] | sitemap.xml (bisa auto-generate) |
| 11 | Fix broken links & 404 | [ ] | Test semua link sebelum launch |
| 12 | PageSpeed Insights monitoring | [ ] | Target score 90+ |

---

## 5. Unique Selling Points

| USP | Description |
|-----|-------------|
| 🏆 **Certified** | Ade Rai Personal Trainer Certification |
| 📈 **Proven** | 50+ client transformations |
| ⏱️ **Experienced** | 5 years training experience |
| 🏠 **Exclusive** | Private gym facility |

---

## 6. Tech Stack Summary

| Level | Frontend | Backend | Database | Hosting |
|-------|----------|---------|----------|---------|
| Level 1 | Vue.js + Vite + Tailwind | - | - | Vercel/Netlify |
| Level 2 | Vue.js + Vite | Laravel | PostgreSQL | VPS Ubuntu |
| Level 3 | Vue.js + Vite | Laravel | PostgreSQL | VPS Ubuntu |

---

> **Document Version**: 2.0  
> **Last Updated**: January 2026  
> **Status**: ✅ Approved for Level 1 MVP
