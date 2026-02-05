# 🎨 Wireframe
## Website Coach Yohan - MVP (Level 1)

---

## Design Overview

| Aspect | Specification |
|--------|---------------|
| **Type** | Single-page landing |
| **Style** | Modern, clean, professional, bold |
| **Theme** | Light (white background) |
| **Button Style** | Sharp corners (no rounded), bold |
| **Card Style** | Sharp corners, subtle shadow |
| **Responsive** | Mobile-first design |

### Color Palette
```
┌──────────────────────────────────────────────────────┐
│  PRIMARY    │  SECONDARY  │  BACKGROUND  │  ACCENT   │
│  #0046DE    │  #000000    │  #FFFFFF     │  #0046DE  │
│  ████████   │  ████████   │  ░░░░░░░░    │  ████████ │
│  (Blue)     │  (Black)    │  (White)     │  (Blue)   │
└──────────────────────────────────────────────────────┘
```
other colors:
- #7f8fcc (secondary text)
)

### Typography
| Type | Font | Weight | Style |
|------|------|--------|-------|
| **Heading H1-H3** | Bebas Neue / Oswald | 700 (Bold) | UPPERCASE |
| **Body Text** | Inter / Poppins | 400-500 | Normal |
| **Button Text** | Inter / Poppins | 600-700 | UPPERCASE |
| **Caption** | Inter | 400 | Normal |

---

## Section 1: Hero
### `#hero`

### Desktop Version
```
┌─────────────────────────────────────────────────────────────────┐
│  [LOGO: Coach Yohan]                    [Menu: About | ... ]    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ┌──────────────────┐                         │
│                    │                  │                         │
│                    │   HERO IMAGE     │                         │
│                    │  (Full-width)    │                         │
│                    │                  │                         │
│                    └──────────────────┘                         │
│                                                                 │
│                      COACH YOHAN                                │
│                   ─────────────────                             │
│                   "In Shape In Bali"                            │
│                                                                 │
│          ┌──────────────┐    ┌──────────────┐                   │
│          │  BOOK NOW    │    │  LEARN MORE  │                   │
│          │   (Primary)  │    │  (Secondary) │                   │
│          └──────────────┘    └──────────────┘                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Version
```
┌─────────────────────┐
│ ☰    Coach Yohan    │
├─────────────────────┤
│                     │
│  ┌───────────────┐  │
│  │               │  │
│  │  HERO IMAGE   │  │
│  │  (Full-width) │  │
│  │               │  │
│  └───────────────┘  │
│                     │
│    COACH YOHAN      │
│  ───────────────    │
│ "In Shape In Bali"  │
│                     │
│  ┌───────────────┐  │
│  │   BOOK NOW    │  │
│  └───────────────┘  │
│  ┌───────────────┐  │
│  │  LEARN MORE   │  │
│  └───────────────┘  │
│                     │
└─────────────────────┘
```

### Copywriting:
| Element | Text |
|---------|------|
| **Headline** | COACH YOHAN |
| **Tagline** | "Transform Your Body. Elevate Your Life." |
| **Subtext** | Premium Personal Training in Canggu, Bali |
| **CTA Primary** | BOOK YOUR SESSION |
| **CTA Secondary** | LEARN MORE |

### Keterangan:
| Element | Deskripsi |
|---------|-----------|
| **Background** | Full-width image Coach Yohan sedang training, dengan overlay gelap untuk readability |
| **Logo** | Text "Coach Yohan" di kiri atas, fixed position |
| **Navigation** | Horizontal menu di desktop, hamburger di mobile |
| **Headline** | Nama besar + tagline di tengah |
| **CTA Primary** | "Book Your Session" → scroll ke `#packages`, warna blue #0046DE |
| **CTA Secondary** | "Learn More" → scroll ke `#about`, outline style |

---

## Section 2: About / Portfolio
### `#about`

### Desktop Version
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                        ABOUT ME                                 │
│                   ─────────────────                             │
│                                                                 │
│   ┌───────────┐    ┌─────────────────────────────────────────┐  │
│   │           │    │                                         │  │
│   │   PHOTO   │    │  Hi, I'm Yohan — a certified personal   │  │
│   │  (Coach)  │    │  trainer based in Canggu, Bali. With    │  │
│   │           │    │  5+ years of experience and 50+ client  │  │
│   │           │    │  transformations, I help expats and     │  │
│   └───────────┘    │  travelers achieve their fitness goals. │  │
│                    │                                         │  │
│                    └─────────────────────────────────────────┘  │
│                                                                 │
│   ┌────────────────────────────────────────────────────────┐    │
│   │  🏆 Ade Rai   │  📈 50+ Trans-  │  ⏱️ 5 Years    │  🏠 Private │
│   │   Certified  │   formations   │   Experience  │   Gym     │
│   └────────────────────────────────────────────────────────┘    │
│                                                                 │
│                    TRANSFORMATIONS                              │
│                   ─────────────────                             │
│                                                                 │
│   ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐            │
│   │ Before  │  │ Before  │  │ Before  │  │ Before  │            │
│   │  After  │  │  After  │  │  After  │  │  After  │            │
│   └─────────┘  └─────────┘  └─────────┘  └─────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Version
```
┌─────────────────────┐
│                     │
│      ABOUT ME       │
│   ───────────────   │
│                     │
│  ┌───────────────┐  │
│  │               │  │
│  │     PHOTO     │  │
│  │    (Coach)    │  │
│  │               │  │
│  └───────────────┘  │
│                     │
│  Hi, I'm Yohan...   │
│  (Bio text)         │
│                     │
│  ┌────┐┌────┐       │
│  │🏆  ││📈  │       │
│  │Cert││50+ │       │
│  └────┘└────┘       │
│  ┌────┐┌────┐       │
│  │⏱️  ││🏠  │       │
│  │5yr ││Gym │       │
│  └────┘└────┘       │
│                     │
│   TRANSFORMATIONS   │
│   ───────────────   │
│                     │
│  ┌─────┐  ┌─────┐   │
│  │B / A│  │B / A│   │
│  └─────┘  └─────┘   │
│  ┌─────┐  ┌─────┐   │
│  │B / A│  │B / A│   │
│  └─────┘  └─────┘   │
│                     │
└─────────────────────┘
```

### Copywriting:
| Element | Text |
|---------|------|
| **Headline** | MEET YOUR COACH |
| **Bio** | "I'm Yohan — an Ade Rai certified personal trainer based in the heart of Canggu, Bali. With over 5 years of experience and 50+ successful client transformations, I specialize in helping expats and travelers achieve their fitness goals — whether it's building muscle, losing fat, or staying fit during your stay in paradise." |
| **Subheading** | REAL RESULTS, REAL PEOPLE |
| **Credential 1** | Ade Rai Certified |
| **Credential 2** | 50+ Transformations |
| **Credential 3** | 5 Years Experience |
| **Credential 4** | Private Gym |

### Keterangan:
| Element | Deskripsi |
|---------|-----------|
| **Layout** | 2 kolom di desktop: foto kiri, text kanan. Stack di mobile |
| **Photo** | Professional photo Coach Yohan |
| **Bio** | 2-3 paragraf singkat tentang pengalaman dan approach |
| **Credentials** | 4 icon cards horizontal: certification, transformations, experience, private gym |
| **Gallery** | Grid foto before/after transformations, clickable untuk zoom |

---

## Section 3: Testimonials
### `#testimonials`

### Desktop Version
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   WHAT MY CLIENTS SAY                           │
│                   ─────────────────────                         │
│                                                                 │
│    ◀    ┌───────────────────────────────────────────┐    ▶      │
│         │             ┌─────────────┐               │           │
│         │             │             │               │           │
│         │             │YOUTUBE EMBED│               │           │
│         │             │(9:16 ratio) │               │           │
│         │             │             │               │           │
│         │             └─────────────┘               │           │
│         │                                           │           │
│         │   "Quote text here..."                    │           │
│         │                    — Name, Country         │           │
│         └───────────────────────────────────────────┘           │
│                         ○ ● ○ ○                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Version
```
┌─────────────────────┐
│                     │
│  WHAT MY CLIENTS    │
│       SAY           │
│  ───────────────   │
│                     │
│  ┌───────────────┐  │
│  │               │  │
│  │ YOUTUBE EMBED │  │
│  │   (9:16)      │  │
│  │               │  │
│  └───────────────┘  │
│                     │
│  "Quote text..."    │
│   — Name, Country   │
│                     │
│      ◀ ● ▶          │
│                     │
└─────────────────────┘
```

### Copywriting:
| Element | Text |
|---------|------|
| **Headline** | WHAT MY CLIENTS SAY |
| **Subtext** | Real stories from real people |
| **Testimonial 1** | "Best decision I made in Bali! Lost 8kg in 6 weeks and gained so much confidence." — Sarah M., Australia |
| **Testimonial 2** | "Yohan's training is intense but fun. Finally found a trainer who understands my goals." — Mike T., USA |
| **Testimonial 3** | "Professional, punctual, and knows his stuff. Highly recommend!" — Anna K., Germany |

### Keterangan:
| Element | Deskripsi |
|---------|-----------|
| **Layout** | Carousel dengan swipe gesture di mobile |
| **Video** | YouTube Unlisted embed, 9:16 portrait ratio |
| **Quote** | Text testimonial di bawah video |
| **Navigation** | Dots indicator + swipe di mobile |

---

## Section 4: Packages
### `#packages`

### Desktop Version
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                     TRAINING PACKAGES                           │
│                   ─────────────────────                         │
│                                                                 │
│   ┌─────────────┐   ┌─────────────┐   ┌─────────────┐           │
│   │   STARTER   │   │   POPULAR   │   │   PREMIUM   │           │
│   │             │   │  ★ BEST ★   │   │             │           │
│   ├─────────────┤   ├─────────────┤   ├─────────────┤           │
│   │  10 SESI    │   │  20 SESI    │   │  30 SESI    │           │
│   │  IDR X.XXX  │   │  IDR X.XXX  │   │  IDR X.XXX  │           │
│   │ ✓ Benefit   │   │ ✓ Benefit   │   │ ✓ Benefit   │           │
│   │ [WHATSAPP]  │   │ [WHATSAPP]  │   │ [WHATSAPP]  │           │
│   └─────────────┘   └─────────────┘   └─────────────┘           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Version
```
┌─────────────────────┐
│                     │
│  TRAINING PACKAGES  │
│  ─────────────────  │
│                     │
│  ┌───────────────┐  │
│  │    STARTER    │  │
│  │    10 SESI    │  │
│  │   IDR X.XXX   │  │
│  │  [WHATSAPP]   │  │
│  └───────────────┘  │
│                     │
│  ┌───────────────┐  │
│  │★★ POPULAR ★★ │  │
│  │    20 SESI    │  │
│  │   IDR X.XXX   │  │
│  │  [WHATSAPP]   │  │
│  └───────────────┘  │
│                     │
│  ┌───────────────┐  │
│  │    PREMIUM    │  │
│  │    30 SESI    │  │
│  │   IDR X.XXX   │  │
│  │  [WHATSAPP]   │  │
│  └───────────────┘  │
│                     │
└─────────────────────┘
```

### Copywriting:
| Element | Text |
|---------|------|
| **Headline** | CHOOSE YOUR PLAN |
| **Subtext** | Flexible packages tailored to your goals |
| **Package 1** | STARTER — 10 Sessions — Perfect for short-term visitors |
| **Package 2** | POPULAR — 20 Sessions — Most chosen by clients |
| **Package 3** | PREMIUM — 30 Sessions — Maximum results, best value |
| **CTA** | BOOK VIA WHATSAPP |

### Benefits (contoh):
- Personal training session (60 min)
- Customized workout plan
- Nutrition guidance
- Progress tracking
- Flexible scheduling

### Keterangan:
| Element | Deskripsi |
|---------|-----------|
| **Layout** | 3 cards horizontal desktop, vertical stack mobile |
| **Highlight** | Card POPULAR dengan warna biru #0046DE |
| **CTA** | WhatsApp dengan pre-filled message |

---

## Section 5: Location
### `#location`

### Desktop Version
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                       TRAIN WITH ME                             │
│                   ─────────────────────                         │
│                                                                 │
│   ┌───────────────────────────────────────────────────────┐     │
│   │                       GOOGLE MAPS EMBED                    │     │
│   └───────────────────────────────────────────────────────┘     │
│                                                                 │
│   ┌─────────────────────┐   ┌─────────────────────────────┐     │
│   │    GYM PHOTO        │   │  📍 [Gym Name]              │     │
│   │                     │   │     Jl. Pantai Batu Bolong  │     │
│   │                     │   │  🕜 Mon-Sat: 06:00 - 21:00  │     │
│   └─────────────────────┘   └─────────────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Version
```
┌─────────────────────┐
│                     │
│    TRAIN WITH ME    │
│  ────────────────  │
│                     │
│  ┌───────────────┐  │
│  │ GOOGLE MAPS   │  │
│  │     EMBED     │  │
│  └───────────────┘  │
│                     │
│  ┌───────────────┐  │
│  │   GYM PHOTO   │  │
│  └───────────────┘  │
│                     │
│  📍 [Gym Name]       │
│  Jl. Batu Bolong    │
│  Canggu, Bali       │
│                     │
│  🕜 Open Hours       │
│  Mon-Sat 06:00-21:00│
│  Sun 07:00-18:00    │
│                     │
└─────────────────────┘
```

### Copywriting:
| Element | Text |
|---------|------|
| **Headline** | TRAIN WITH ME |
| **Subtext** | Located in the heart of Canggu, Bali |
| **Gym Name** | Avenue Fitness Canggu (atau nama gym lain) |
| **Address** | Jl. Pantai Batu Bolong No. XX, Canggu, Bali |
| **Hours** | Mon-Sat: 06:00 - 21:00 \| Sunday: 07:00 - 18:00 |

### Keterangan:
| Element | Deskripsi |
|---------|-----------|
| **Map** | Google Maps embed dengan pin lokasi gym |
| **Photo** | Foto interior/exterior gym |
| **Info** | Nama gym, alamat lengkap, jam operasional |
| **Mobile** | Stack vertical: map → photo → info |

---

## Section 6: Contact / CTA
### `#contact`

### Desktop Version
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                   READY TO TRANSFORM?                           │
│                   ────────────────────                          │
│                                                                 │
│               Start your fitness journey today.                 │
│            Message me on WhatsApp to book a session.            │
│                                                                 │
│                    ┌─────────────────────┐                      │
│                    │   📱 CHAT NOW       │                      │
│                    └─────────────────────┘                      │
│                                                                 │
│                      ┌───┐  ┌───┐  ┌───┐                        │
│                      │IG │  │TT │  │YT │                        │
│                      └───┘  └───┘  └───┘                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Mobile Version
```
┌─────────────────────┐
│                     │
│  READY TO TRANSFORM?│
│  ─────────────────  │
│                     │
│  Start your fitness │
│  journey today.     │
│                     │
│  ┌───────────────┐  │
│  │               │  │
│  │  📱 CHAT NOW  │  │
│  │   (WhatsApp)  │  │
│  │               │  │
│  └───────────────┘  │
│                     │
│   ┌──┐ ┌──┐ ┌──┐    │
│   │IG│ │TT│ │YT│    │
│   └──┘ └──┘ └──┘    │
│                     │
└─────────────────────┘
```

### Copywriting:
| Element | Text |
|---------|------|
| **Headline** | READY TO TRANSFORM? |
| **Subtext** | Your fitness journey starts with a single message. Let's build the best version of you — together. |
| **CTA** | CHAT WITH ME ON WHATSAPP |
| **Alternative CTA** | Or email me at: yohan@email.com |

### Keterangan:
| Element | Deskripsi |
|---------|-----------|
| **Background** | Blue #0046DE atau gradient untuk standout |
| **WhatsApp Button** | Large button full-width di mobile, warna hijau |
| **Social Links** | Instagram, TikTok, YouTube icons |
| **Style** | Kontras dengan section lain untuk trigger action |

---

## Footer

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   © 2026 Coach Yohan. All rights reserved.                      │
│                                                                 │
│   Instagram | TikTok | YouTube          Made with ♥ by [Dev]    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Mobile Navigation

```
┌──────────────────┐
│ ☰  Coach Yohan   │  ← Hamburger menu
├──────────────────┤
│                  │
│  ✕               │  ← Close button
│                  │
│  Home            │
│  About           │
│  Testimonials    │
│  Packages        │
│  Location        │
│  Contact         │
│                  │
│  ┌────────────┐  │
│  │  CHAT NOW  │  │  ← Sticky WhatsApp
│  └────────────┘  │
│                  │
└──────────────────┘
```

---

## Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 640px | Single column, stacked |
| Tablet | 640px - 1024px | 2 columns where applicable |
| Desktop | > 1024px | Full layout |

---

## Component Library (Tailwind Classes)

### Buttons
```css
/* Primary Button (Blue) */
.btn-primary: bg-[#0046DE] hover:bg-blue-800 text-white font-bold py-3 px-8 uppercase tracking-wide

/* Secondary Button (Outline) */
.btn-secondary: border-2 border-[#0046DE] text-[#0046DE] hover:bg-[#0046DE] hover:text-white font-bold py-3 px-8 uppercase tracking-wide

/* WhatsApp Button */
.btn-whatsapp: bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 uppercase tracking-wide

/* Button Notes: NO rounded corners (sharp edges) */
```

### Cards
```css
/* Pricing Card */
.card: bg-white border border-gray-200 p-6 shadow-md hover:shadow-lg transition-shadow

/* Highlighted Card (Popular) */
.card-highlight: bg-[#0046DE] text-white p-6 shadow-lg

/* Card Notes: NO rounded corners (sharp edges) */
```

### Typography
```css
/* Heading */
.heading: font-['Bebas_Neue'] text-black uppercase tracking-wide

/* Subheading */
.subheading: font-['Inter'] text-[#0046DE] font-semibold uppercase

/* Body Text */
.body-text: font-['Inter'] text-gray-700 leading-relaxed
```

### Sections
```css
/* Light Section (default) */
.section-light: bg-white py-20 px-4 md:px-8 lg:px-16

/* Blue Section (accent) */
.section-blue: bg-[#0046DE] text-white py-20 px-4 md:px-8 lg:px-16

/* Dark Section */
.section-dark: bg-black text-white py-20 px-4 md:px-8 lg:px-16
```

---

> **Document Version**: 1.1  
> **Last Updated**: January 2026  
> **Design Reference**: Avenue Fitness style (sharp, bold, professional)  
> **Next Step**: UI Design (High-fidelity mockup)
