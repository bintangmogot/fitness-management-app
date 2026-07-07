<template>
  <section class="relative py-20 px-6 md:px-12 lg:px-20 lg:py-28 xl:px-30 bg-base-200 overflow-hidden" id="clients">
    
    <!-- Decorative Background -->
    <div class="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

    <div class="flex flex-col items-center gap-10 lg:gap-14 mx-auto max-w-7xl relative z-10">
      
      <!-- Section Header -->
      <div class="flex flex-col items-center gap-4 text-center">
        <h2 class="text-5xl md:text-7xl text-base-content font-anton font-black uppercase leading-tight">
          real people. real <span class="text-primary">results.</span>
        </h2>
        <p class="text-base-content/60 font-body text-body-lg max-w-xl">
          A collection of clients who transformed their lives training with Coach Yohan.
        </p>
      </div>

      <!-- Stats Summary -->
      <div class="flex items-center justify-center gap-8 md:gap-16">
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl md:text-4xl font-anton text-primary">50+</span>
          <span class="text-xs md:text-sm font-body text-base-content/60 uppercase tracking-wider">Clients</span>
        </div>
        <div class="w-px h-10 bg-primary/20"></div>
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl md:text-4xl font-anton text-primary">95%</span>
          <span class="text-xs md:text-sm font-body text-base-content/60 uppercase tracking-wider">Success Rate</span>
        </div>
        <div class="w-px h-10 bg-primary/20"></div>
        <div class="flex flex-col items-center gap-1">
          <span class="text-3xl md:text-4xl font-anton text-primary">5+</span>
          <span class="text-xs md:text-sm font-body text-base-content/60 uppercase tracking-wider">Years</span>
        </div>
      </div>

      <!-- ========================================== -->
      <!-- CLIENT GALLERY CAROUSEL -->
      <!-- ========================================== -->
      <div class="w-full relative">

        <!-- ========================================== -->
        <!-- MOBILE: 2-Column Grid (New Request)        -->
        <!-- ========================================== -->
        <div class="md:hidden grid grid-cols-2 gap-3 w-full">
          <div 
            v-for="(client, index) in paginatedClients" 
            :key="'m-grid-' + index"
            class="bg-base-100 border border-primary shadow-md shadow-primary/8  overflow-hidden group transition-all duration-300"
          >
            <!-- Square Image for Mobile -->
            <div class="relative overflow-hidden cursor-pointer" @click="openModal(client.video || client.image)">
              <img 
                :src="client.image" 
                :alt="client.title" 
                class="w-full aspect-square object-cover" 
              />
              <!-- Small Tag -->
              <span class="absolute top-2 left-2 bg-primary text-white text-[8px] font-heading tracking-wider uppercase px-2 py-0.5 z-10">
                {{ client.tag }}
              </span>
              <!-- Play Button Overlay -->
              <div v-if="client.video && !isImage(client.video)" class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-10">
                <div class="w-10 h-10 rounded-full bg-white/20 border-2 hover:bg-base-100 hover:text-primary text-primary-content border-white/40 hover:border-primary backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
                        <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                      </svg>
                </div>
              </div>
            </div>
            <!-- Simple Info -->
            <div class="p-2 flex flex-col gap-1">
              <h3 class="text-lg font-anton uppercase text-base-content leading-tight truncate">{{ client.title }}</h3>
            </div>
          </div>
        </div>

        <!-- ========================================== -->
        <!-- MOBILE: Horizontal Scroll (COMMENTED OUT)  -->
        <!-- ========================================== -->
        <!-- 
        <div 
          class="flex md:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-2 px-2 scrollbar-hide"
          ref="mobileScroll"  
          @scroll="handleMobileScroll"
        >
          <div 
            v-for="(client, index) in clients" 
            :key="'m-' + index"
            class="snap-center shrink-0 w-[80%] bg-base-100 border border-primary/5 overflow-hidden group hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
          >
            <div class="relative overflow-hidden cursor-pointer" @click="openModal(client.image)">
              <img 
                :src="client.image" 
                :alt="client.title" 
                class="w-full aspect-4/3 object-cover group-hover:scale-105 transition-transform duration-500" 
              />
              <span class="absolute top-3 left-3 bg-primary text-white text-[10px] font-heading tracking-[0.15em] uppercase px-3 py-1 shadow-lg shadow-primary/20">
                {{ client.tag }}
              </span>
            </div>
            <div class="p-4 flex items-center justify-between gap-3">
              <div>
                <h3 class="text-lg font-anton uppercase text-base-content leading-tight">{{ client.title }}</h3>
                <p class="text-xs font-body text-base-content/60 mt-0.5">{{ client.desc }}</p>
              </div>
              <span class="shrink-0 text-sm font-heading text-primary bg-primary/8 px-3 py-1.5 tracking-wide">
                {{ client.metric }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex md:hidden justify-center gap-1.5 pt-2">
          <button 
            v-for="(client, index) in clients" 
            :key="'dot-m-' + index"
            class="h-1.5 rounded-full transition-all duration-300"
            :class="activeMobileIndex === index ? 'w-6 bg-primary' : 'w-1.5 bg-base-content/30'"
          ></button>
        </div>
        -->

        <!-- ========================================== -->
        <!-- DESKTOP: 4-Column Grid                     -->
        <!-- ========================================== -->
        <div class="hidden md:block overflow-hidden">
          <div 
            class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 xl:gap-6"
          >
            <div 
              v-for="(client, i) in paginatedClients" 
              :key="i" 
              class="bg-base-100 border border-primary/8 shadow-sm shadow-primary/8 overflow-hidden group hover:border-primary hover:shadow-xl hover:shadow-primary/8 hover:-translate-y-1 transition-all duration-500 animate-card-in"
              :style="{ animationDelay: `${i * 100}ms` }"
            >
              <!-- Image Container -->
              <div class="relative overflow-hidden cursor-pointer" @click="openModal(client.video || client.image)">
                <img 
                  :src="client.image" 
                  :alt="client.title" 
                  class="w-full aspect-9/16 object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                <!-- Tag badge -->
                <span class="absolute top-4 left-4 bg-primary text-white text-[10px] font-heading tracking-[0.15em] uppercase px-3 py-1 shadow-lg shadow-primary/20 z-10">
                  {{ client.tag }}
                </span>

                <!-- Play Button Overlay -->
                <div v-if="client.video && !isImage(client.video)" class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors z-10">
                  <div class="w-16 h-16 rounded-full bg-white/20 border-2 hover:bg-base-100 hover:text-primary text-primary-content border-white/40 hover:border-primary backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" />
                        </svg>
                  </div>
                </div>

                <!-- Zoom icon -->
                <div v-if="!(client.video && !isImage(client.video))" class="absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-md z-10">
                  <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>

                <div class="absolute bottom-0 left-0 w-0 h-[3px] bg-primary group-hover:w-full transition-all duration-500 z-10"></div>
              </div>

              <!-- Info Section -->
              <div class="p-5 xl:p-6">
                <div class="flex flex-col gap-1">
                  <h3 class="text-2xl font-anton uppercase text-base-content leading-tight group-hover:text-primary transition-colors duration-300">{{ client.title }}</h3>
                  <p class="text-sm font-body text-base-content/60">{{ client.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <!-- Media Lightbox Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div v-if="activeMedia" class="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4" @click="closeModal">
          <div class="relative w-auto h-auto max-w-[90vw] max-h-[90vh] bg-black shadow-2xl overflow-hidden flex flex-col items-center justify-center animate-modal-in" @click.stop>
            <button @click="closeModal" class="absolute top-4 right-4 z-20 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-8 h-8 group-hover:rotate-90 transition-transform duration-300">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div class="flex items-center justify-center">
              <iframe 
                  v-if="activeMedia.includes('youtube.com') || activeMedia.includes('youtu.be')"
                  :src="getEmbedUrl(activeMedia)" 
                  class="w-[90vw] aspect-video md:w-[80vw] lg:w-[60vw]"
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen
              ></iframe>
              
              <img 
                  v-else-if="isImage(activeMedia)"
                  :src="activeMedia"
                  class="max-w-full max-h-[90vh] object-contain block"
                  alt="Full screen client photo"
              />

              <video 
                  v-else
                  :src="activeMedia" 
                  controls 
                  autoplay 
                  playsinline
                  class="max-w-full max-h-[90vh] object-contain block"
              ></video>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Pagination UI -->
    <div v-if="totalPages > 1" class="flex items-center justify-center gap-2 mt-8">
      <button 
          v-for="page in totalPages" 
          :key="page"
          @click="setPage(page)"
          :class="[
              'w-10 h-10 font-heading border-2 transition-all',
              currentPage === page 
                  ? 'bg-primary border-primary text-white shadow-md scale-110' 
                  : 'bg-base-100 border-primary/20 text-base-content/60 hover:border-primary/50'
          ]"
      >
          {{ page }}
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';

// ==========================================
// DATA
// ==========================================
const clients = ref([
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/v1782488375/gym-yohanes/images/Clients/mahalini-friends",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1782485735/gym-yohanes/videos/mahalini",
    title: "MAHALINI",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },  
  {

    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/kenan-selfie",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/KENAN",
    title: "KENAN",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/alkesh-selfie",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/ALKESH",
    title: "ALKESH",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/lucas-selfie",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/LUCAS",
    title: "LUCAS",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/MARIA",
    title: "MARIA",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/NEBAI",
    title: "NEBAI",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/LAURA",
    title: "LAURA",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/MIRYAM",
    title: "MIRYAM",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/ERIK",
    title: "ERIK",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/GRETA",
    title: "GRETA",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/MICHELE",
    title: "MICHELE",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/MERLIN",
    title: "MERLIN",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/CLAUDIA_",
    title: "CLAUDIA",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
  {
    image: "https://res.cloudinary.com/workstation-/image/upload/f_auto/gym-yohanes/images/clients/maria-selfie-2",
    video: "https://res.cloudinary.com/workstation-/video/upload/v1772813222/gym-yohanes/videos/AKASH",
    title: "AKASH",
    tag: "PRIVATE PT",
    desc: "Private PT Training Session",
  },
]);

// ==========================================
// STATE
// ==========================================
const activeMedia = ref(null);
const activeMobileIndex = ref(0);
const mobileScroll = ref(null);
const currentPage = ref(1);
const itemsPerPage = 8; // Display 8 clients per page

// ==========================================
// COMPUTED 
// ==========================================
const filteredClients = computed(() => {
    return clients.value;
});

const paginatedClients = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredClients.value.slice(start, end);
});

const totalPages = computed(() => {
    return Math.ceil(filteredClients.value.length / itemsPerPage);
});


// ==========================================
// METHODS
// ==========================================

const handleMobileScroll = () => {
  if (!mobileScroll.value) return;
  const container = mobileScroll.value;
  const scrollLeft = container.scrollLeft;
  const itemWidth = container.clientWidth * 0.80 + 16;
  activeMobileIndex.value = Math.round(scrollLeft / itemWidth);
};

const openModal = (mediaUrl) => {
  activeMedia.value = mediaUrl;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  activeMedia.value = null;
  document.body.style.overflow = '';
};

// ==========================================
// HELPERS
// ==========================================
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

const isImage = (url) => {
    if (!url) return false;
    return url.match(/\.(jpeg|jpg|gif|png|webp)$/i) != null || url.includes('/image/');
};

// ==========================================
// LIFECYCLE
// ==========================================
onMounted(() => {
});

onUnmounted(() => {
});

const setPage = (page) => {
    currentPage.value = page;
    // Scroll ke atas section clients
    document.getElementById('clients')?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
@keyframes cardIn {
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-card-in {
  animation: cardIn 0.5s ease-out both;
}

@keyframes pingSlow {
  0% { transform: scale(1); opacity: 0.4; }
  100% { transform: scale(2); opacity: 0; }
}
.animate-ping-slow {
  animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}
.animate-modal-in {
  animation: modalIn 0.3s ease-out;
}

.modal-enter-active { transition: opacity 0.3s ease; }
.modal-leave-active { transition: opacity 0.2s ease; }
.modal-enter-from, .modal-leave-to { opacity: 0; }

.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
.scrollbar-hide::-webkit-scrollbar { display: none; }
</style>
