<template>
  <div>
    <!-- ==================== NEW VIDEO HERO ==================== -->
    <section id="hero-video" class="relative w-full h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      
      <!-- Background Video -->
      <div class="absolute inset-0 z-0">
        <video
          ref="videoRef"
          autoplay
          loop
          :muted="isMuted"
          playsinline
          class="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        >
          <source src="https://res.cloudinary.com/workstation-/video/upload/v1782208981/gym-yohanes/videos/ADS_WORKOUT_YOHAN.mp4" type="video/mp4" />
        </video>
        
        <!-- Premium Overlays -->
        <!-- Radial gradient for center focus -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>
        
        <!-- Linear gradient for text readability (bottom and left) -->
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 md:via-black/40 to-transparent pointer-events-none"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-black/90 via-black/30 to-transparent pointer-events-none"></div>
      </div>

      <!-- Main Content Container -->
      <div class="relative z-10 container mx-auto px-6 lg:px-12 h-full flex flex-col justify-end pb-24 md:justify-center md:pb-0">
        
        <div class="max-w-5xl" data-aos="fade-up" data-aos-duration="1200" data-aos-easing="ease-out-cubic">
          
          <!-- Eyebrow Text -->
          <div class="flex items-center gap-3 md:gap-5 mb-4 md:mb-6" data-aos="fade-right" data-aos-delay="200">
            <span class="w-12 md:w-20 h-[2px] bg-primary"></span>
            <h1 class="text-white text-xs md:text-sm lg:text-base font-heading tracking-[0.3em] uppercase font-bold opacity-90 drop-shadow-md">
              Get in shape in Canggu, Bali
            </h1>
          </div>
          
          <!-- Main Headline -->
          <h2 class="text-[4rem] leading-[0.9] md:text-[6rem] lg:text-[9rem] font-extrabold italic text-white tracking-tighter mb-6 md:mb-8 drop-shadow-2xl uppercase">
            WITH <span class="text-primary relative inline-block">
              YOHANES
            </span>
          </h2>
          
          <!-- Description -->
          <p class="text-sm md:text-lg lg:text-xl font-body font-medium text-white/80 max-w-2xl mb-10 leading-relaxed md:leading-relaxed drop-shadow-lg border-l-4 border-primary/60 pl-5 md:pl-6" data-aos="fade-up" data-aos-delay="400">
            Transform your physique and performance with gritty, high-impact coaching. <br class="hidden md:block"/><strong class="text-white">No excuses, just results.</strong>
          </p>
          
          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 sm:gap-6" data-aos="fade-up" data-aos-delay="600">
            <router-link to="/pricing" class="btn btn-primary rounded-none px-8 md:px-12 py-3 md:py-4 h-auto text-sm md:text-base font-bold uppercase tracking-[0.15em] hover:-translate-y-1 transition-transform duration-300 border-none text-primary-content">
              Start Your Journey
            </router-link>
            <a href="#about" class="btn btn-outline rounded-none px-8 md:px-12 py-3 md:py-4 h-auto text-sm md:text-base font-bold uppercase tracking-[0.15em] hover:-translate-y-1 transition-transform duration-300 text-white border-white/40 hover:border-white hover:bg-white/10 backdrop-blur-sm">
              Meet Yohanes
            </a>
          </div>

        </div>
      </div>

      <!-- Sound Toggle Button -->
      <button 
        @click="toggleSound"
        class="absolute bottom-8 left-8 z-30 flex items-center justify-center w-12 h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/20 text-white transition-all duration-300 md:bottom-12 md:left-12 group"
        aria-label="Toggle Sound"
      >
        <!-- Speaker Wave (Unmuted) -->
        <svg v-if="!isMuted" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:scale-110 transition-transform">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
        <!-- Speaker X (Muted) -->
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:scale-110 transition-transform">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
        </svg>
      </button>

      <!-- Scroll Down Indicator -->
      <div 
        class="absolute bottom-8 right-8 z-20 flex flex-col items-center gap-4 opacity-60 hover:opacity-100 transition-opacity cursor-pointer md:bottom-12 md:right-12 hidden sm:flex" 
        @click="scrollToNext"
      >
        <span class="text-white text-[0.65rem] md:text-xs font-heading tracking-[0.3em] uppercase rotate-90 translate-y-[-30px] origin-bottom">Scroll</span>
        <div class="w-[1px] h-16 md:h-24 bg-white/20 relative overflow-hidden mt-8">
          <div class="absolute top-0 left-0 w-full h-1/2 bg-primary animate-[scrollDown_2s_ease-in-out_infinite]"></div>
        </div>
      </div>
      
    </section>

    <!-- ==================== OLD HERO COMPONENT ==================== -->
    <section
      v-if="false"
      ref="sectionRef"
      id="hero3"
      class="hero3-section bg-neutral"
    >
      <!-- ==================== MOBILE VERSION (<768px) ==================== -->
      <div v-if="isMobile" class="hero3-mobile">
        <!-- Portrait as background-like element -->
        <div class="hero3-mobile-portrait" data-aos="fade" data-aos-duration="1000">
          <img
            src="https://res.cloudinary.com/workstation-/image/upload/yohanes2b_5e56cf"
            alt="Coach Yohanes - Professional Personal Trainer in Canggu Bali"
            class="w-full h-full object-cover object-center"
          />
          <!-- Dark overlay gradient for text readability -->
          <div class="hero3-mobile-overlay"></div>
        </div>

        <!-- Text on top of portrait -->
        <div class="hero3-mobile-text" data-aos="fade-up" data-aos-delay="300">
          <h1 class="text-white text-sm font-heading tracking-widest uppercase opacity-80">
            ELEVATE YOUR FITNESS
          </h1>
          <h2 class="text-5xl font-extrabold italic text-white leading-[0.95] mt-2 uppercase">
            THE <span class="text-primary">EXPERIENCE</span>
          </h2>
          <p class="mt-4 text-sm font-body font-medium text-white/75 max-w-xs">
            Training isn't just about lifting weights. It's about building resilience, mastering technique, and transforming your lifestyle.
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
      <div 
        v-else
        class="hero3-pinned"
        :style="pinnedStyle"
      >
        <!-- Text Block -->
        <div
          class="hero3-text"
          :style="{
            transform: `translateX(${textTranslateX}vw) scale(${textScale_3})`,
            opacity: textOpacity,
          }"
        >
          <h1 class="text-primary-content text-2xl lg:text-4xl font-heading font-bold leading-tight uppercase">
            ELEVATE YOUR FITNESS
          </h1>
          <h2 class="text-5xl md:text-7xl lg:text-[8.5rem] font-extrabold italic text-primary-content leading-tight mb-[-0.2em] uppercase">
            THE <span class="text-primary">EXPERIENCE</span>
          </h2>
          <p class="mt-6 lg:mt-8 text-base lg:text-lg font-body font-medium text-primary-content/80 max-w-md lg:max-w-xl mx-auto">
            Training with me isn't just about lifting weights. It's about building relentless resilience, mastering your technique, and completely transforming your lifestyle from the inside out.
          </p>
        </div>

        <!-- Main Portrait Photo -->
        <div
          class="hero3-portrait "
          :style="{
            transform: `translateX(${portraitTranslateX}vw) scale(${portraitScale})`,
            opacity: portraitOpacity,
          }"
        >
          <img
            src="https://res.cloudinary.com/workstation-/image/upload/v1771686531/gym-yohanes/images/yohanes-grassmc"
            alt="Coach Yohanes - Professional Personal Trainer in Canggu Bali"
            class="w-full h-full object-cover object-right border-10 border-white border-b-40"
          />
        </div>

        <!-- Scattered Photos -->
        <div
          v-for="(photo, index) in scatteredPhotos"
          :key="index"
          class="hero3-scattered border-4 border-white/80 border-b-20"
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
            class="w-full h-full object-cover opacity-95"
          />
        </div>

        <!-- New Text appearing in Phase 3 -->
        <div 
          class="hero3-text-phase3" 
          :style="{
            opacity: text2Opacity,
            transform: `translateY(${text2TranslateY}px)`
          }"
        >  
          <h2 class="text-5xl md:text-7xl font-extrabold italic text-primary-content leading-tight mb-[-0.2em]">Yes, It's Me...</h2>
        </div>
          <!-- bounce arrow -->
          <div class="bounce-arrow" :style="{opacity: textOpacity}">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10 text-white">
              <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
          </div>
      </div>
      <!-- bounce arrow -->
      <div class="md:hidden mobile-bounce-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

// NEW SECTION LOGIC
const videoRef = ref(null)
const isMuted = ref(false) // Default to sound ON

const toggleSound = () => {
  isMuted.value = !isMuted.value
  if (videoRef.value) {
    videoRef.value.muted = isMuted.value
  }
}

const scrollToNext = () => {
  const oldHeroSection = document.getElementById('hero3');
  if(oldHeroSection) {
     oldHeroSection.scrollIntoView({ behavior: 'smooth' });
  } else {
     window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  }
}

// OLD SECTION LOGIC
const sectionRef = ref(null)
const scrollProgress = ref(0)
const pinState = ref('before')
const windowWidth = ref(1024)
let ticking = false

const isMobile = computed(() => windowWidth.value < 768)

// Mobile gallery
const mobileGallery = [
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes/yohanes',
    alt: 'Yohanes Training',
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes/run-community3',
    alt: 'Gym Interior',
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes/yohanes3',
    alt: 'Client Clemens',
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes/run-yohanes',
    alt: 'Gym Equipment',
  },
]

// Scattered photos (used on tablet & desktop)
const scatteredPhotos = [
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_500/gym-yohanes/images/yohanes/yohanes3',
    alt: 'Yohanes Bike',
    size: 'clamp(120px, 18vw, 240px)',
    startX: -80, startY: -60,
    endX: -32, endY: -22,
    rotation: -15,
    z: 20,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_400/gym-yohanes/images/yohanes/yohanes4',
    alt: 'Grass MC',
    size: 'clamp(100px, 14vw, 200px)',
    startX: 80, startY: -80,
    endX: 30, endY: -28,
    rotation: 12,
    z: 15,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_400/gym-yohanes/images/yohanes/yohanes',
    alt: 'Tripul',
    size: 'clamp(110px, 15vw, 210px)',
    startX: -90, startY: 70,
    endX: -35, endY: 20,
    rotation: 8,
    z: 25,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_400/gym-yohanes/images/yohanes/yohanes2',
    alt: 'Legpress',
    size: 'clamp(100px, 13vw, 190px)',
    startX: 90, startY: 80,
    endX: 32, endY: 25,
    rotation: -10,
    z: 18,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes/yohanes6',
    alt: 'Intigh',
    size: 'clamp(80px, 10vw, 150px)',
    startX: 100, startY: -20,
    endX: 38, endY: -8,
    rotation: -18,
    z: 12,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes/run-community',
    alt: 'Run Community 3',
    size: 'clamp(70px, 8vw, 130px)',
    startX: 0, startY: -100,
    endX: -5, endY: -35,
    rotation: -5,
    z: 5,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_300/gym-yohanes/images/yohanes/run-community2',
    alt: 'Run Community 2',
    size: 'clamp(70px, 8vw, 150px)',
    startX: 0, startY: -100,
    endX: 10, endY: -25,
    rotation: 22,
    z: 5,
  },
  {
    src: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto,w_400/gym-yohanes/images/yohanes/run-community3',
    alt: 'Run Community',
    size: 'clamp(80px, 11vw, 160px)',
    startX: -40, startY: 100,
    endX: -20, endY: 14,
    rotation: 12,
    z: 30,
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
const textTranslateX = computed(() => -32 * phase2.value)
const textScale = computed(() => 1 - 0.45 * phase2.value)
const textOpacity = computed(() => {
  const afterPhase2 = 1 - 0.15 * phase2.value
  return afterPhase2 * (1 - phase3.value)
})

const portraitTranslateX = computed(() => 60 * (1 - phase2.value))
const portraitOpacity = computed(() => phase2.value)

const phase3 = computed(() => easeOut(subProgress(0.55, 0.9)))
const portraitScale = computed(() => 1 - 0.28 * phase3.value)

const scatteredOpacity = computed(() => phase3.value)
const textScale_3 = computed(() => textScale.value * (1 - phase3.value))
const scatteredScale = computed(() => 0.3 + 1 * phase3.value)

const text2Opacity = computed(() => phase3.value)
const text2TranslateY = computed(() => 200 * (1 - phase3.value))

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

  // Handle browser autoplay policies for unmuted video
  if (videoRef.value) {
    videoRef.value.muted = false; // Try with sound
    const playPromise = videoRef.value.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Autoplay with sound failed (browser policy), fallback to muted autoplay
        isMuted.value = true;
        videoRef.value.muted = true;
        videoRef.value.play();
      });
    }
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
/* ==================== NEW SECTION STYLES ==================== */
@keyframes scrollDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(200%); }
}

@supports (-webkit-touch-callout: none) {
  .h-\[100svh\] {
    height: -webkit-fill-available;
  }
}

/* ==================== OLD SECTION STYLES ==================== */
.hero3-section {
  position: relative;
  height: 350vh;
}

@media (max-width: 767px) {
  .hero3-section {
    height: auto;
  }
}

.hero3-mobile {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 8.5rem;
  gap: 0;
}

.hero3-mobile-portrait {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero3-mobile-portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

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

.hero3-mobile-text {
  position: relative;
  z-index: 2;
  padding: 0 1.5rem;
  margin-bottom: 1.25rem;
}

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
  max-width: 800px;
  padding: 0 1.5rem;
  will-change: transform, opacity;
  transform-origin: center center;
}

.hero3-portrait {
  position: absolute;
  z-index: 8;
  width: clamp(320px, 30vw, 500px);
  height: clamp(400px, 30vh, 700px);
  overflow: hidden;
  will-change: transform, opacity;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5);
}

.hero3-scattered {
  position: absolute;
  z-index: 7;
  overflow: hidden;
  will-change: transform, opacity;
}

.hero3-text-phase3 {
  position: absolute;
  bottom: 20%;
  z-index: 50;
  text-align: center;
  width: 100%;
  pointer-events: none;
}

.bounce-arrow, .mobile-bounce-arrow {
  animation: bounce 1.5s ease-in-out infinite;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
}

.bounce-arrow {
  bottom: 15%;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(10px);
  }
}
</style>
