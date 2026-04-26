<template>
  <div class="min-h-screen bg-base-100 pt-20">
    
    <!-- Page Header -->
    <div class="pt-16 pb-6 px-6 lg:px-20 xl:px-32 max-w-[1500px] mx-auto" data-aos="fade-down">
      <p class="text-primary font-title italic font-black text-xl md:text-2xl tracking-widest mb-2 uppercase">What We Work On</p>
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-anton uppercase text-base-content leading-[0.9]">
        TRAINING <span class="text-primary">PROGRAMS.</span>
      </h1>
      <p class="text-base-content/60 font-body text-lg md:text-xl mt-6 max-w-3xl">
        Every body is different, every goal is personal. These are the focus areas I build your training around — 
        whether you're here for two weeks or two years.
      </p>
    </div>

    <!-- Programs Grid -->
    <section class="py-12 lg:py-20 px-6 md:px-12 lg:px-20 xl:px-32 max-w-[1500px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 shadow-xl">
        
        <div v-for="(program, index) in programs" :key="index" 
             class="flex flex-col h-full border border-base-content/20 group cursor-default shadow-[10px_10px_0px_0px_oklch(var(--p))] hover:shadow-[12px_12px_0px_0px_oklch(var(--p))] hover:-translate-y-1 transition-all duration-300"
             data-aos="fade-up" :data-aos-delay="index * 60">
          
          <!-- Image -->
          <div class="aspect-4/3 w-full overflow-hidden relative bg-neutral">
            <img :src="program.image" :alt="program.title" 
                 class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <!-- Number badge -->
            <span class="absolute bottom-4 left-4 font-anton text-5xl text-white/20 leading-none select-none">
              {{ String(index + 1).padStart(2, '0') }}
            </span>
          </div>
          
          <!-- Content -->
          <div class="p-6 md:p-8 flex-grow flex flex-col bg-base-100">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-8 h-1 bg-primary"></div>
              <p class="text-primary font-heading text-xs uppercase tracking-widest">{{ program.tag }}</p>
            </div>
            <h3 class="font-anton text-2xl md:text-3xl uppercase mb-4 text-base-content tracking-wide leading-tight">
              {{ program.title }}
            </h3>
            <p class="font-body text-sm text-base-content/60 leading-relaxed flex-grow">
              {{ program.description }}
            </p>
            <!-- Who it's for -->
            <div class="mt-6 pt-5 border-t border-base-content/10">
              <p class="text-xs font-heading uppercase tracking-widest text-base-content/40 mb-2">Ideal for</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="(tag, tIndex) in program.idealFor" :key="tIndex"
                      class="text-xs font-heading uppercase tracking-wider px-3 py-1 border border-primary/30 text-primary bg-primary/5">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- Bottom Note -->
    <section class="px-6 lg:px-20 xl:px-32 pb-16 max-w-[1500px] mx-auto" data-aos="fade-up">
      <div class="border-l-4 border-primary pl-6 md:pl-10 py-4 max-w-3xl">
        <p class="font-heading text-lg md:text-xl text-base-content/80 uppercase tracking-wide mb-2">
          Not sure which program fits you?
        </p>
        <p class="text-base-content/60 font-body">
          That is completely normal. Send me a message and we will figure it out together during a free consultation. 
          Most clients combine two or three of these focus areas into one training plan.
        </p>
      </div>
    </section>

    <!-- CTA -->
    <BannerLayout />
  </div>
</template>

<script setup>
import BannerLayout from '../components/layout/BannerLayout.vue'

const programs = [
  {
    tag: 'Body Transformation',
    title: 'FAT LOSS & BODY RECOMPOSITION',
    description: 'The most requested program. We combine resistance training with strategic cardio and a meal plan built around what is actually available in Bali. The goal is simple — lower your body fat percentage while building or preserving lean muscle. We track progress with photos, measurements, and how your clothes fit. Not just the scale.',
    image: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/v1727932644/gym-yohanes/1-client.jpg',
    idealFor: ['Weight Loss', 'First Timers', 'Short-Stay Visitors']
  },
  {
    tag: 'Strength & Performance',
    title: 'STRENGTH BUILDING',
    description: 'Progressive overload done right. We focus on compound movements — squat, bench, deadlift, overhead press — and build a structured program that gets you stronger week after week. Every session is logged, every set has a purpose. Whether you have been lifting for years or just want to feel strong for the first time.',
    image: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/avenue3',
    idealFor: ['Intermediate', 'Advanced', 'Athletes']
  },
  {
    tag: 'Muscle Development',
    title: 'HYPERTROPHY & AESTHETICS',
    description: 'For those who want to look the part, not just perform. We train with higher volume, controlled tempos, and targeted isolation work to build size and symmetry. Back, chest, shoulders, arms, legs — we hit everything with intention. You will see the difference in the mirror within weeks.',
    image: 'https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/yohanes3',
    idealFor: ['Bodybuilding', 'Aesthetics', 'Mass Gain']
  },
  {
    tag: 'Conditioning',
    title: 'FUNCTIONAL FITNESS & CONDITIONING',
    description: 'Move better, feel better. This program blends full-body strength work with metabolic conditioning — think circuit training, kettlebell flows, and bodyweight complexes. It is designed for people who want to be fit for life, not just look good at the beach. Although you will probably look good at the beach too.',
    image: 'https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/run-community3',
    idealFor: ['General Fitness', 'Surfers', 'Active Lifestyle']
  },
  {
    tag: 'Recovery & Mobility',
    title: 'MOBILITY & INJURY PREVENTION',
    description: 'Crucial for anyone who trains hard or sits at a desk all day. We work on joint mobility, flexibility, posture correction, and movement patterns that keep your body healthy long-term. Every session includes targeted stretching, activation drills, and breathing work. This is the program most people skip — and the one they need most.',
    image: 'https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/run-community',
    idealFor: ['Desk Workers', 'Recovery', 'All Levels']
  },
  {
    tag: 'Nutrition',
    title: 'MEAL PLANNING & MACRO COACHING',
    description: 'Training is only half the equation. I build a custom meal plan based on your goals, your budget, and what you can actually find in Canggu. No restrictive diets, no expensive supplements — just practical, sustainable eating that supports your training. We adjust weekly based on your progress and how your body responds.',
    image: 'https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/run-community2',
    idealFor: ['All Programs', 'Dietary Guidance', 'Macro Tracking']
  }
]
</script>