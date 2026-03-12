<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/coach" alt="Gym Motivation Splash" width="720" style="border-radius: 12px; object-fit: cover;" />
</p>

<h1 align="center">✦ Personal Training & Nutrition Management System — Coach Yohan</h1>

<p align="center">
  <b>A comprehensive, full-stack personal training platform & dynamic nutrition tracker.</b><br/>
  Built with Vue 3 · Laravel 11 · Tailwind CSS 4
</p>

<p align="center">
  <a href="https://vuejs.org"><img src="https://img.shields.io/badge/Frontend-Vue_3.5-42b883?style=flat-square&logo=vue.js&logoColor=white" /></a>
  <a href="https://laravel.com"><img src="https://img.shields.io/badge/Backend-Laravel_11-FF2D20?style=flat-square&logo=laravel&logoColor=white" /></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white" /></a>
  <a href="https://postgresql.org"><img src="https://img.shields.io/badge/Database-PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white" /></a>
</p>

---

## 📖 About

**Personal Training & Nutrition Management System (Coach Yohan)** is a modern, end-to-end digital platform designed specifically for personal trainers operating in high-value tourist areas like Canggu and Kuta, Bali. 

This platform serves dual purposes:
1. **As a Business Tool:** It helps a professional PT acquire international clients (tourists/expats), process bookings, and manage nutrition digitally.
2. **As a Developer Showcase (Monorepo):** It demonstrates full-stack engineering capabilities, bringing together a reactive Vue 3 frontend and a robust Laravel API backend into a single repository for easy evaluation by recruiters and tech leads.

### 🎯 Problem It Solves

Personal trainers in Bali struggle to stand out to international tourists who demand premium, seamless digital experiences. This application **solves that by providing a world-class booking and nutrition tracking experience**:

- **For Clients (Expats/Foreigners):** Allows them to view coach credentials, book training sessions via an interactive calendar, and dynamically build their own healthy meal plates with real-time macro-nutrient calculations.
- **For The Coach:** A centralized dashboard to manage schedules, track client progress, process payments (via Xendit/Midtrans), and sell e-commerce gym essentials.
- **For Tech Recruiters:** A transparent, production-ready codebase showcasing clean MVC architecture, REST API design, state management, and modern UI/UX implementation.

---

## ✨ Features

| Module | Description |
|---|---|
| **Landing & Portfolio** | Sleek, dark/light-themed presentation of the Coach's profile, transformations, and video testimonials. Highly optimized for SEO to capture "bali personal trainer" keywords. |
| **Dynamic Nutrition Tracker** | An interactive "Build Your Own Plate" UI. Users can select proteins, carbs, and veggies, while the Vue app animates the plate and calculates macros (Calories, Protein, Fat) dynamically. |
| **Calendar Booking System** | Full-stack reservation system. Users buy session packages and allocate them to specific calendar days. The Laravel backend handles collision detection and admin approval state. |
| **Gym E-Commerce** | Integrated shop to sell physical products (Whey Protein, Supplements, Gear) with a reactive shopping cart and secure checkout gateway. |
| **Admin Dashboard** | Protected backend routes for the Coach to review pending bookings, manage product inventory, and update custom meal components. |

---

## 🏗️ Architecture & Repository Strategy

To demonstrate full-stack proficiency while keeping deployment practical, this project utilizes a **Monorepo Strategy**. 

```
fitness-management-app/
│
├── frontend/                   # Vue 3 SPA (Public Interface)
│   ├── src/components/         # Reusable UI elements (Tailwind)
│   ├── src/views/              # Page layouts (Home, Nutrition, Booking)
│   ├── src/stores/             # Pinia state management (Cart, Auth, Macros)
│   └── package.json            # Vite & Vue dependencies
│
└── backend/                    # Laravel 11 API (Core Logic)
    ├── app/Http/Controllers/   # API logic (BookingController, ProductController)
    ├── database/migrations/    # PostgreSQL schema definitions
    ├── routes/api.php          # RESTful endpoints
    └── composer.json           # PHP dependencies
```

*Note: For security, the `.env` file containing actual database credentials and payment gateway secret keys is heavily excluded via `.gitignore` and only provisioned on the production server.*

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** ≥ 18.x
- **PHP** ≥ 8.2 & **Composer**
- **PostgreSQL** Database

### 1. Frontend Setup (Vue 3)
```bash
cd frontend
npm install
npm run dev
# The frontend will be available at http://localhost:5173
```

### 2. Backend Setup (Laravel 11)
```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
# The API will be available at http://localhost:8000
```

---

## 🛠️ Tech Stack Highlights

- **Frontend:** Vue 3 (Composition API), Vite, Tailwind CSS 4, Vue Router, Pinia
- **Backend:** Laravel 11 (REST API), Eloquent ORM, Sanctum (Authentication)
- **Database:** PostgreSQL
- **Integrations:** Cloudinary (Media), Payment Gateway (Upcoming)

---

## 📸 Screenshots

<details>
<summary><b>🏠 Homepage (Full Page)</b></summary>
<br/>
<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/readme/homepageA" alt="Homepage" width="600" />
</p>
<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/readme/homepageB" alt="Homepage" width="600" />
</p>
</details>

<details>
<summary><b>🍴 Meal Plan Page</b></summary>
<br/>
<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/readme/meal-plan-page" alt="Project Archive" width="600" />
</p>
</details>

<details>
<summary><b>🧑 Clients Page</b></summary>
<br/>
<p align="center">
  <img src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/readme/clients-page" alt="Project Archive" width="600" />
</p>
</details>

---

## 📬 Contact the Developer

| Channel | Link |
|---|---|
| **Email** | [bintangaprilian100@gmail.com](mailto:bintangaprilian100@gmail.com) |
| **LinkedIn** | [contact-bintangsurya](https://www.linkedin.com/in/contact-bintangsurya/) |
| **GitHub** | [@bintangmogot](https://github.com/bintangmogot) |

---

## 📄 License & Open Source Scope

The structural architecture and frontend UI codebase of this project are open-sourced under the [MIT License](LICENSE) to serve as an engineering portfolio. Proprietary client data and production `.env` variables remain strictly confidential.

---

<p align="center">
  <sub>Built with ❤️ by <a href="https://github.com/bintangmogot">Bintang Aprilian Surya</a> — © 2026</sub>
</p>
