# 🗺️ Sitemap
## Personal Training & Nutrition Management System - Architecture & Roadmap

---

## Overview

Sitemap ini menggambarkan struktur website dari **Level 1 (MVP)** hingga proyeksi ekspansi untuk **Level 4 (E-commerce)**. Struktur berkembang seiring dengan penambahan fitur-fitur dinamis dan *full-stack*.

---

## Level 1: MVP (Current)
*Struktur Static Single-Page Landing Page.*

```text
/ (index.html)
│
├── #hero ────────────── Hero Section & Taglines
├── #about ───────────── Profile & Portfolio Coach Yohan
├── #testimonials ────── Video Testimonials
├── #packages ────────── Pricing Packages  
├── #location ────────── Maps, Gym Info & Working Hours
└── #contact ─────────── Direct WhatsApp CTA
```

---

## Level 2: Nutrition Tracker
*Penambahan halaman UI interaktif untuk kustomisasi makanan secara dinamis.*

```text
/
├── (Level 1 sections...)
│
└── /nutrition (Build Your Own Plate)
    ├── Food Selection Categories (Protein, Carbs, Veggies)
    ├── Dynamic Plate Visualizer (Animations & Graphics)
    └── Dynamic Macros & Price Calculator
```

---

## Level 3: Booking System
*Penambahan sistem autentikasi, pembayaran, dan reservasi jadwal via kalender.*

```text
/
├── /login ───────────── User Login / Register
├── /dashboard ───────── User Dashboard (Sisa Sesi, Transaksi)
│
└── /booking ─────────── Calendar Booking System
    ├── Pilih Paket Training (contoh: 10 Sesi)
    ├── Kalender Reservasi (Pilih hari sesuai kuota sesi)
    └── Pembayaran Langsung (Payment Gateway terintegrasi)

/admin ───────────────── Admin Dashboard (Approve jadwal booking, manage users)
```

---

## Level 4: E-Commerce
*Penambahan integrasi toko online belanja produk gym.*

```text
/
├── /shop ────────────── Katalog Produk (Susu, Dumbbell, Protein Bar, dll)
│   ├── /shop/category ─ Kategori produk gym
│   └── /shop/item ───── Detail produk & deskripsi
│
├── /cart ────────────── Keranjang Belanja Interaktif
└── /checkout ────────── Finalisasi Pembayaran & Pengiriman
```

---

> **Document Version**: 2.0  
> **Last Updated**: March 2026
