<template>
  <div class="bg-base-100 min-h-screen pt-24 pb-20 px-6 md:px-12 lg:px-20 xl:px-30">
    <div class="max-w-7xl mx-auto">

      <!-- Header -->
      <header class="mb-16 text-center">
        <h1 class="text-6xl md:text-8xl font-anton uppercase text-base-content leading-none mb-4">Get In <span class="text-primary italic">Touch</span></h1>
        <p class="text-base-content/60 font-body max-w-2xl mx-auto text-lg">
          Ready to start your fitness journey in Bali? Reach out through any of these channels — Coach Yohanes is just a message away.
        </p>
      </header>

      <!-- Contact Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">

        <!-- Left: Contact Cards -->
        <div class="flex flex-col gap-6">

          <!-- WhatsApp Card -->
          <a href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I%20want%20to%20start%20today.%20Please%20help%20me%20choose%20the%20best%20program%20for%20my%20goals.%20Thank%20you!" target="_blank" rel="noopener noreferrer" class="group bg-base-200 border border-base-300 hover:border-primary p-8 flex items-start gap-6 transition-all duration-300">
            <div class="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
              <svg class="w-7 h-7 text-primary group-hover:text-primary-content transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </div>
            <div>
              <h3 class="text-2xl font-anton uppercase text-base-content mb-1 group-hover:text-primary transition-colors">WhatsApp</h3>
              <p class="text-base-content/60 font-body mb-2">Fastest way to reach Coach Yohanes. Typically replies within an hour.</p>
              <span class="text-primary font-heading text-sm uppercase tracking-wider border-b border-primary pb-0.5">+62 859-3953-3337</span>
            </div>
          </a>

          <!-- Email Card -->
          <a href="mailto:johnmogot07@gmail.com" class="group bg-base-200 border border-base-300 hover:border-primary p-8 flex items-start gap-6 transition-all duration-300">
            <div class="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
              <svg class="w-7 h-7 text-primary group-hover:text-primary-content transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            </div>
            <div>
              <h3 class="text-2xl font-anton uppercase text-base-content mb-1 group-hover:text-primary transition-colors">Email</h3>
              <p class="text-base-content/60 font-body mb-2">For detailed inquiries, program proposals, or business collaborations.</p>
              <span class="text-primary font-heading text-sm uppercase tracking-wider border-b border-primary pb-0.5">johnmogot07@gmail.com</span>
            </div>
          </a>

          <!-- Instagram Card -->
          <a href="https://www.instagram.com/itsyohanfit" target="_blank" rel="noopener noreferrer" class="group bg-base-200 border border-base-300 hover:border-primary p-8 flex items-start gap-6 transition-all duration-300">
            <div class="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
              <svg class="w-7 h-7 text-primary group-hover:text-primary-content transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </div>
            <div>
              <h3 class="text-2xl font-anton uppercase text-base-content mb-1 group-hover:text-primary transition-colors">Instagram</h3>
              <p class="text-base-content/60 font-body mb-2">Follow for daily workout content, client transformations, and Bali gym life.</p>
              <span class="text-primary font-heading text-sm uppercase tracking-wider border-b border-primary pb-0.5">@itsyohanfit</span>
            </div>
          </a>

          <!-- TikTok Card -->
          <a href="https://www.tiktok.com/@yohanes.mogot" target="_blank" rel="noopener noreferrer" class="group bg-base-200 border border-base-300 hover:border-primary p-8 flex items-start gap-6 transition-all duration-300">
            <div class="w-14 h-14 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-all duration-300">
              <svg class="w-7 h-7 text-primary group-hover:text-primary-content transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </div>
            <div>
              <h3 class="text-2xl font-anton uppercase text-base-content mb-1 group-hover:text-primary transition-colors">TikTok</h3>
              <p class="text-base-content/60 font-body mb-2">Quick fitness tips, exercise tutorials, and behind-the-scenes training clips.</p>
              <span class="text-primary font-heading text-sm uppercase tracking-wider border-b border-primary pb-0.5">@yohanes.mogot</span>
            </div>
          </a>

        </div>

        <!-- Right: Location & Map -->
        <div class="flex flex-col gap-6">

          <!-- Location Info Card -->
          <div class="bg-base-200 border border-base-300 p-8">
            <div class="inline-block bg-primary/10 text-primary px-3 py-1 text-sm font-bold uppercase tracking-wider mb-4">Training Location</div>
            <h3 class="text-3xl font-anton uppercase text-base-content leading-none mb-4">Avenue Fitness Canggu</h3>
            
            <div class="flex flex-col gap-5 mt-6">
              <!-- Address -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content/80 uppercase tracking-wide text-sm font-heading mb-1">Address</h4>
                  <p class="text-base-content/60 font-body">Jl. Pantai Batu Bolong No.55, Canggu, North Kuta, Badung Regency, Bali 80351, Indonesia</p>
                </div>
              </div>

              <!-- Hours -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content/80 uppercase tracking-wide text-sm font-heading mb-1">Opening Hours</h4>
                  <div class="grid grid-cols-[80px_1fr] gap-x-4 text-base-content/60 font-body">
                    <span class="font-medium">Sun - Fri</span>
                    <span>08:00 AM - 09:00 PM</span>
                    <span class="font-medium">Saturday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              <!-- Service Area -->
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-primary/10 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <h4 class="font-bold text-base-content/80 uppercase tracking-wide text-sm font-heading mb-1">Service Area</h4>
                  <p class="text-base-content/60 font-body">Canggu, Seminyak, Kerobokan, North Kuta, Badung, and wider Denpasar area.</p>
                </div>
              </div>
            </div>

            <a href="https://www.google.com/maps/place/?q=place_id:ChIJO45gI5gk0i0RwBRJQ0QUZmk" target="_blank" rel="noopener noreferrer" class="mt-8 w-full text-center bg-primary text-primary-content py-4 font-heading uppercase tracking-wider hover:bg-primary-focus transition-colors duration-300 block">
              Get Directions
            </a>
          </div>

          <!-- Map Embed -->
          <div class="border border-base-300 overflow-hidden h-[350px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.4093867375276!2d115.13083627589578!3d-8.652516691394336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2489823028e3b%3A0x69661414434914c0!2sAvenue%20Fitness%20Canggu!5e0!3m2!1sen!2sid!4v1707577882431!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              allowfullscreen 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              class="grayscale hover:grayscale-0 transition-all duration-700 border-0"
            ></iframe>
          </div>

        </div>
      </div>

      <!-- CTA Banner -->
      <section class="bg-primary p-12 md:p-16 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-linear-to-br from-primary from-50% to-[#001A52] to-100% opacity-90 pointer-events-none"></div>
        <div class="relative z-10">
          <h2 class="text-4xl md:text-6xl font-anton uppercase text-white leading-none mb-4">Ready To <span class="text-transparent bg-clip-text bg-linear-to-br from-white to-blue-200 italic">Transform?</span></h2>
          <p class="text-white/80 font-body max-w-xl mx-auto text-lg mb-8">
            Stop waiting for the "perfect time". Let's build the best version of you starting today.
          </p>
          <a href="https://wa.me/6285939533337?text=Hi%20Coach%20Yohan!%20I%20want%20to%20start%20today.%20Please%20help%20me%20choose%20the%20best%20program%20for%20my%20goals.%20Thank%20you!" target="_blank" class="inline-flex items-center gap-3 bg-white text-primary px-10 py-5 font-heading font-bold text-lg uppercase tracking-wider hover:bg-base-200 hover:scale-105 transition-all shadow-lg">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>

    </div>
  </div>
</template>

<script setup>
// Contact Page — Coach Yohanes
</script>