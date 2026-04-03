<template>
  <section class="py-20 px-6 md:px-12 lg:px-20 xl:px-30 bg-base-200" id="transforms">
    <div class="flex flex-col items-center gap-12 max-w-7xl mx-auto">
      
      <!-- Header -->
      <div class="flex flex-col items-center gap-4 text-center">
        <h2 class="text-5xl md:text-7xl text-base-content font-anton font-black uppercase leading-tight">
          The <span class="text-primary">Transforms.</span>
        </h2>
        <p class="text-md md:text-lg text-base-content/80 font-body font-normal leading-relaxed max-w-2xl">
          Don't just take my word for it. Hear from the people who transformed their lives in Bali.
        </p>
      </div>

      <!-- ========================================== -->
      <!-- VIDEO CAROUSEL WRAPPER -->
      <!-- ========================================== -->
      <div class="w-full relative group/carousel">
        
        <!-- Navigation Buttons (Desktop Only) -->
        <button 
          v-if="hasMultiplePages"
          @click="prevPage" 
          class="hidden md:flex absolute left-1 lg:-left-16 xl:-left-20 top-1/2 -translate-y-1/2 z-10 btn btn-square rounded-none btn-outline text-primary hover:text-white bg-base-100 hover:bg-primary hover:border-primary border-2 hover:shadow-md w-10 h-10 xl:w-12 xl:h-12 transition-all duration-300"
          :disabled="isAnimating"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button 
          v-if="hasMultiplePages"
          @click="nextPage" 
          class="hidden md:flex absolute right-1 lg:-right-16 xl:-right-20 top-1/2 -translate-y-1/2 z-10 btn btn-square rounded-none btn-outline text-primary hover:text-white bg-base-100 hover:bg-primary hover:border-primary border-2 hover:shadow-md w-10 h-10 xl:w-12 xl:h-12 transition-all duration-300"
          :disabled="isAnimating"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <!-- Video Cards Container -->
        <!-- Mobile: Horizontal Scroll | Desktop: Grid 3 Cols (Paged) -->
        <div 
          ref="scrollContainer"
          :class="['w-full flex items-stretch overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:overflow-visible scrollbar-hide transition-all duration-500', transforms.length < 3 ? 'md:flex md:justify-center' : 'md:grid md:grid-cols-3']"
          @scroll="handleScroll"
        >
          
          <!-- Loop Items (Filtered by Page on Desktop, All on Mobile) -->
          <div 
            v-for="(item, index) in displayedItems" 
            :key="item.id" 
            :class="['min-w-[85%] md:min-w-0 snap-center flex flex-col bg-base-100 shadow-card hover:shadow-card-hover transition-all duration-300 group cursor-pointer border-l-4 md:border-l-6 border-primary xl:border-primary/50 xl:hover:border-primary animate-fade-in', transforms.length < 3 ? 'md:w-[400px]' : 'md:min-w-0']"
            @click="openVideo(item.video)"
          >
            
            <!-- Video Thumbnail (Adaptive Ratio) -->
            <div class="relative w-full aspect-4/3 md:aspect-3/4 bg-base-200 overflow-hidden">
              <img :src="item.image" :alt="item.author" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              
              <!-- Play Button Overlay -->
              <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                <div class="w-16 h-16 rounded-full bg-white/20 border-2 hover:bg-base-100 hover:text-primary text-primary-content border-white/40 hover:border-primary backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                      </svg>
                </div>
              </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col gap-4 flex-1">
              <!-- Stars -->
              <div class="flex gap-1 text-primary">
                <StarIcon v-for="n in 5" :key="n" class="w-5 h-5" />
              </div>

              <!-- Quote Headline -->
              <h3 class="font-anton text-2xl uppercase text-base-content/80 leading-tight">
                "{{ item.headline }}"
              </h3>

              <!-- Body Text -->
              <p class="text-base-content/80 font-body text-sm leading-relaxed flex-1 line-clamp-4">
                "{{ item.text }}"
              </p>

              <!-- Author -->
              <div class="pt-4 border-t border-primary/20">
                <p class="font-heading text-base-content/80 text-lg tracking-wide uppercase">
                  - {{ item.author }}, <span class="text-base-content/60">{{ item.role }}</span>
                </p>
              </div>
            </div>

          </div>

        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center gap-2 mt-4">
           <!-- Mobile Dots (All items) -->
           <div class="flex md:hidden gap-2">
             <button 
                v-for="(item, index) in transforms" 
                :key="'dot-m-'+index"
                class="h-2 rounded-full transition-all duration-300"
                :class="activeMobileIndex === index ? 'w-6 bg-primary' : 'w-2 bg-base-content/30'"
             ></button>
           </div>
           
           <!-- Desktop Dots (Pages) -->
           <div class="hidden md:flex gap-2" v-if="hasMultiplePages">
             <button 
                v-for="page in totalPages" 
                :key="'dot-d-'+page"
                class="w-3 h-3 rounded-full transition-all duration-300 hover:bg-primary/50"
                :class="currentPage === page ? 'bg-primary scale-125' : 'bg-base-content/30'"
                @click="goToPage(page)"
             ></button>
           </div>
        </div>

      </div>

      <!-- CTA -->
      <div class="flex flex-col items-center mt-4">
        <a href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I%20just%20saw%20the%20transformation%20results%20on%20your%20website%20and%20they%20are%20inspiring!%20I'm%20ready%20to%20start%20my%20own%20journey.%20Can%20we%20discuss%20a%20personal%20training%20plan%20for%20me?" target="_blank" class="bg-primary px-8 py-3 text-button font-heading text-primary-content shadow-card hover:bg-primary-focus transition-all hover-lift w-full sm:w-auto">START YOUR JOURNEY</a>
      </div>

    </div>

    <!-- Video Modal -->
    <div v-if="activeVideo" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-all duration-300 backdrop-blur-sm" @click="closeVideo">
      <!-- Container adapts to content size -->
      <div class="relative w-auto h-auto max-w-[90vw] max-h-[90vh] bg-black rounded-none shadow-2xl overflow-hidden flex flex-col items-center justify-center" @click.stop>
        
        <!-- Close Button -->
        <button @click="closeVideo" class="absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Video Player -->
        <div class="flex items-center justify-center">
            <iframe 
                v-if="activeVideo.includes('youtube.com') || activeVideo.includes('youtu.be')"
                :src="getEmbedUrl(activeVideo)" 
                class="w-[90vw] aspect-video md:w-[80vw] lg:w-[60vw]"
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
            ></iframe>
            
            <video 
                v-else
                :src="activeVideo" 
                controls 
                autoplay 
                playsinline
                class="max-w-full max-h-[90vh] object-contain block"
            ></video>
        </div>

      </div>
    </div>

  </section>
</template>

<script setup>
import { StarIcon } from '@heroicons/vue/24/solid';
import { ref, computed, onMounted, onUnmounted } from 'vue';

// ==========================================
// DATA
// ==========================================
const transforms = [
  {
    id: 1,
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/test1", 
    video: "https://res.cloudinary.com/workstation-/video/upload/q_auto,w_1280/gym-yohanes/videos/test1", 
    headline: "Best Decision Ever",
    text: "I came to Bali feeling out of shape. 3 months with Yohan changed everything. The accountability is next level.",
    author: "Bebo",
    role: "Entrepreneur"
  }
];

// ==========================================
// STATE & LOGIC
// ==========================================
const itemsPerPage = 3;
const currentPage = ref(1);
const activeMobileIndex = ref(0);
const activeVideo = ref(null);
const scrollContainer = ref(null);
const isAnimating = ref(false);

// Responsive Check
const isMobile = ref(false);
const checkMobile = () => {
    isMobile.value = window.innerWidth < 768;
};
onMounted(() => {
    checkMobile();
    window.addEventListener('resize', checkMobile);
});
onUnmounted(() => window.removeEventListener('resize', checkMobile));

// Computed
const totalPages = computed(() => Math.ceil(transforms.length / itemsPerPage));
const hasMultiplePages = computed(() => totalPages.value > 1);

const displayedItems = computed(() => {
    if (isMobile.value) return transforms; // Show all on mobile for scrolling
    
    // Pagination for Desktop
    const start = (currentPage.value - 1) * itemsPerPage;
    return transforms.slice(start, start + itemsPerPage);
});

// Navigation Methods
const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
    } else {
        currentPage.value = 1; // Loop back
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
    } else {
        currentPage.value = totalPages.value; // Loop to end
    }
};

const goToPage = (page) => {
    currentPage.value = page;
};

// Mobile Scroll Handling
const handleScroll = (e) => {
    if (!isMobile.value) return;
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const itemWidth = container.clientWidth * 0.85; // Approximate width based on CSS
    const index = Math.round(scrollLeft / itemWidth);
    activeMobileIndex.value = Math.min(index, transforms.length - 1);
};

// Video Handling
const openVideo = (url) => {
    activeVideo.value = url;
    document.body.style.overflow = 'hidden';
};

const closeVideo = () => {
    activeVideo.value = null;
    document.body.style.overflow = '';
};

// Helper to convert YouTube URL to Embed URL
const getEmbedUrl = (url) => {
    let videoId = '';
    if (url.includes('youtu.be')) {
        videoId = url.split('/').pop();
    } else if (url.includes('youtube.com')) {
        const urlParams = new URL(url).searchParams;
        videoId = urlParams.get('v');
    }
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
};
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.5s ease-out forwards;
}
</style>



