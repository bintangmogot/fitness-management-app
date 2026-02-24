<template>
  <section
    ref="sectionRef"
    id="hero3"
    class="hero3-section bg-neutral"
  >
    <!-- ==================== MOBILE VERSION (<768px) ==================== -->
    <!-- Full-screen hero feel, no scroll-jacking, subtle AOS animations -->
    <div v-if="isMobile" class="hero3-mobile">
      <!-- Portrait as background-like element -->
      <div class="hero3-mobile-portrait" data-aos="fade" data-aos-duration="1000">
        <img
          src="https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-bike"
          alt="Coach Yohanes"
          class="w-full h-full object-cover"
        />
        <!-- Dark overlay gradient for text readability -->
        <div class="hero3-mobile-overlay"></div>
      </div>

      <!-- Text on top of portrait -->
      <div class="hero3-mobile-text" data-aos="fade-up" data-aos-delay="300">
        <h1 class="text-white text-sm font-heading tracking-widest uppercase opacity-80">
          GET IN SHAPE IN BALI
        </h1>
        <h2 class="text-5xl font-extrabold italic text-white leading-[0.95] mt-2">
          WITH <span class="text-primary">YOHANES</span>
        </h2>
        <p class="mt-4 text-sm font-body font-medium text-white/75 max-w-xs">
          Transform your physique and performance with gritty, high-impact coaching.
        </p>
      </div>

      <!-- Mini gallery at the bottom -->
      <div class="hero3-mobile-gallery" data-aos="fade-up" data-aos-delay="500">
        <div v-for="(photo, i) in mobileGallery" :key="i" class="hero3-mobile-thumb">
          <img :src="photo.src" :alt="photo.alt" class="w-full h-full object-cover" />
        </div>
      </div>
    </div>

    <!-- ==================== TABLET & DESKTOP (>=768px) ==================== -->
    <!-- Full 3-phase scroll-driven animation -->
    <div 
      v-else
      class="hero3-pinned"
      :style="pinnedStyle"
    >
      <!-- Text Block -->
      <div
        class="hero3-text"
        :style="{
          transform: `translateX(${textTranslateX}vw) scale(${textScale})`,
          opacity: textOpacity,
        }"
      >
        <h1 class="text-primary-content text-xl lg:text-2xl font-heading leading-tight">
          GET IN SHAPE IN BALI
        </h1>
        <h2 class="text-5xl md:text-7xl lg:text-9xl font-extrabold italic text-primary-content leading-tight mb-[-0.2em]">
          WITH <span class="text-primary">YOHANES</span>
        </h2>
        <p class="mt-6 lg:mt-8 text-base lg:text-lg font-body font-medium text-primary-content/80 max-w-xl">
          Transform your physique and performance with gritty, high-impact coaching. No excuses, just results.
        </p>
      </div>

      <!-- Main Portrait Photo -->
      <div
        class="hero3-portrait"
        :style="{
          transform: `translateX(${portraitTranslateX}vw) scale(${portraitScale})`,
          opacity: portraitOpacity,
        }"
      >
        <img
          src="https://res.cloudinary.com/workstation-/image/upload/v1771686531/gym-yohanes/images/yohanes-bike"
          alt="Coach Yohanes"
          class="w-full h-full object-cover"
        />
      </div>

      <!-- Scattered Photos -->
      <div
        v-for="(photo, index) in scatteredPhotos"
        :key="index"
        class="hero3-scattered"
        :style="{
          transform: `translate(${getScatteredX(index)}vw, ${getScatteredY(index)}vh) scale(${scatteredScale}) rotate(${getScatteredRotation(index)}deg)`,
          opacity: scatteredOpacity,
          width: photo.size,
          height: photo.size,
          zIndex: photo.z,
        }"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          class="w-full h-full object-cover shadow-2xl"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const scrollProgress = ref(0)
const pinState = ref('before')
const windowWidth = ref(1024)
let ticking = false

const isMobile = computed(() => windowWidth.value < 768)

// Mobile gallery
const mobileGallery = [
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes-about',
    alt: 'Yohanes Training',
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes-legpress',
    alt: 'Gym Interior',
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes-grassmc',
    alt: 'Client Clemens',
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes-tripul',
    alt: 'Gym Equipment',
  },
]

// Scattered photos (used on tablet & desktop)
const scatteredPhotos = [
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-bike',
    alt: 'Yohanes Training',
    size: 'clamp(100px, 15vw, 220px)',
    startX: -70, startY: -70,
    endX: -28, endY: -18,
    rotation: -12,
    z: 5,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-grassmc',
    alt: 'Gym Interior',
    size: 'clamp(80px, 12vw, 180px)',
    startX: 70, startY: -70,
    endX: 22, endY: -22,
    rotation: 8,
    z: 4,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-tripul',
    alt: 'Gym Equipment',
    size: 'clamp(90px, 13vw, 190px)',
    startX: -70, startY: 60,
    endX: -26, endY: 16,
    rotation: 6,
    z: 6,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-legpress',
    alt: 'Client Clemens',
    size: 'clamp(80px, 11vw, 170px)',
    startX: 70, startY: 60,
    endX: 25, endY: 18,
    rotation: -8,
    z: 3,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-bike',
    alt: 'Client Result',
    size: 'clamp(70px, 10vw, 160px)',
    startX: -80, startY: 0,
    endX: -35, endY: -2,
    rotation: 15,
    z: 2,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-about',
    alt: 'Client Transformation',
    size: 'clamp(80px, 12vw, 175px)',
    startX: 80, startY: 0,
    endX: 32, endY: 2,
    rotation: -5,
    z: 4,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes-tbar',
    alt: 'Training Session',
    size: 'clamp(60px, 9vw, 140px)',
    startX: 0, startY: -80,
    endX: -5, endY: -30,
    rotation: 3,
    z: 1,
  },
]

// ==================
// Pinned style (JS-controlled sticky)
// ==================
const pinnedStyle = computed(() => {
  if (pinState.value === 'pinned') {
    return { position: 'fixed', top: '0', left: '0', width: '100%', height: '100vh' }
  }
  if (pinState.value === 'after') {
    return { position: 'absolute', bottom: '0', left: '0', width: '100%', height: '100vh' }
  }
  return { position: 'absolute', top: '0', left: '0', width: '100%', height: '100vh' }
})

// ==================
// Animation phases (tablet & desktop share the same logic)
// ==================
function subProgress(start, end) {
  return Math.min(1, Math.max(0, (scrollProgress.value - start) / (end - start)))
}

function easeOut(t) {
  return 1 - Math.pow(1 - t, 3)
}

const phase2 = computed(() => easeOut(subProgress(0.25, 0.55)))
const textTranslateX = computed(() => -20 * phase2.value)
const textScale = computed(() => 1 - 0.45 * phase2.value)
const textOpacity = computed(() => 1 - 0.15 * phase2.value)

const portraitTranslateX = computed(() => 60 * (1 - phase2.value))
const portraitOpacity = computed(() => phase2.value)

const phase3 = computed(() => easeOut(subProgress(0.55, 0.9)))
const portraitScale = computed(() => 1 - 0.28 * phase3.value)

const scatteredOpacity = computed(() => phase3.value)
const scatteredScale = computed(() => 0.3 + 0.7 * phase3.value)

function getScatteredX(index) {
  const photo = scatteredPhotos[index]
  return photo.startX + (photo.endX - photo.startX) * phase3.value
}

function getScatteredY(index) {
  const photo = scatteredPhotos[index]
  return photo.startY + (photo.endY - photo.startY) * phase3.value
}

function getScatteredRotation(index) {
  const photo = scatteredPhotos[index]
  const startRot = photo.rotation * 3
  return startRot + (photo.rotation - startRot) * phase3.value
}

// ==================
// Scroll handler
// ==================
function updateProgress() {
  if (!sectionRef.value || isMobile.value) return

  const rect = sectionRef.value.getBoundingClientRect()
  const sectionHeight = sectionRef.value.offsetHeight
  const viewportHeight = window.innerHeight
  const scrollable = sectionHeight - viewportHeight
  if (scrollable <= 0) return

  if (rect.top > 0) pinState.value = 'before'
  else if (rect.bottom < viewportHeight) pinState.value = 'after'
  else pinState.value = 'pinned'

  const progress = -rect.top / scrollable
  scrollProgress.value = Math.min(1, Math.max(0, progress))
  ticking = false
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(updateProgress)
    ticking = true
  }
}

function onResize() {
  windowWidth.value = window.innerWidth
  updateProgress()
}

onMounted(() => {
  windowWidth.value = window.innerWidth
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })
  updateProgress()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
/* ==================== SECTION ==================== */
.hero3-section {
  position: relative;
  height: 300vh;
}

/* Mobile: normal flow, no scroll-jacking */
@media (max-width: 767px) {
  .hero3-section {
    height: auto;
  }
}

/* ==================== MOBILE LAYOUT ==================== */
.hero3-mobile {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 1.5rem;
  gap: 0;
}

/* Portrait fills the entire mobile viewport as a background */
.hero3-mobile-portrait {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero3-mobile-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
}

/* Dark gradient overlay so text is readable */
.hero3-mobile-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(15, 15, 35, 0.95) 0%,
    rgba(15, 15, 35, 0.7) 35%,
    rgba(15, 15, 35, 0.2) 60%,
    transparent 100%
  );
}

/* Text sits at the bottom over the portrait */
.hero3-mobile-text {
  position: relative;
  z-index: 2;
  padding: 0 1.5rem;
  margin-bottom: 1.25rem;
}

/* Gallery row at the very bottom */
.hero3-mobile-gallery {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.375rem;
  padding: 0 1.5rem;
}

.hero3-mobile-thumb {
  aspect-ratio: 1/1;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

/* ==================== PINNED CONTAINER (Tablet & Desktop) ==================== */
.hero3-pinned {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: inherit;
  z-index: 1;
}

.hero3-text {
  position: absolute;
  z-index: 10;
  text-align: center;
  max-width: 700px;
  padding: 0 1.5rem;
  will-change: transform, opacity;
  transform-origin: center center;
}

.hero3-portrait {
  position: absolute;
  z-index: 8;
  width: clamp(220px, 30vw, 450px);
  height: clamp(300px, 45vh, 650px);
  overflow: hidden;
  will-change: transform, opacity;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

.hero3-scattered {
  position: absolute;
  z-index: 7;
  overflow: hidden;
  will-change: transform, opacity;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}
</style>
