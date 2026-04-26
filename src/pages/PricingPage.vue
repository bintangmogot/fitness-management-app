<template>
  <div class="min-h-screen bg-base-100 pt-20">

    <!-- Page Hero -->
    <div class="bg-base-100 px-6 lg:px-20 xl:px-32 pt-16 pb-4 text-center max-w-[1440px] mx-auto" data-aos="fade-up">
      <p class="text-primary font-title italic font-black text-xl md:text-2xl tracking-widest mb-2 uppercase">Invest in Yourself</p>
      <h1 class="text-5xl md:text-7xl lg:text-8xl font-anton uppercase leading-[0.9] text-base-content">
        TRAINING <span class="text-primary">PACKAGES.</span>
      </h1>
      <p class="text-base-content/60 font-body text-lg md:text-xl mt-6 max-w-2xl mx-auto">
        Choose the plan that fits your goals and timeline. No hidden fees — just results. Every package includes a custom training plan built around your body, your schedule, and your life in Bali.
      </p>
    </div>

    <!-- Pricing Cards -->
    <PricingLayout
      :tagline="''"
      :titleNormal="''"
      :titleHighlight="''"
      :subtitle="''"
      sectionClass="pt-0"
    />

    <!-- What's Always Included -->
    <section class="bg-base-200/50 py-20 px-6 lg:px-20 xl:px-32" data-aos="fade-up">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="font-anton text-4xl md:text-5xl uppercase text-base-content mb-3">WHAT'S ALWAYS <span class="text-primary">INCLUDED</span></h2>
        <p class="text-base-content/60 font-body text-lg mb-12">No matter which package you pick, these come standard.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div v-for="(item, i) in alwaysIncluded" :key="i"
            class="bg-base-100 border border-l-4 border-primary p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-all">
            <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <div>
              <h4 class="font-anton text-lg uppercase text-base-content/80 mb-1">{{ item.title }}</h4>
              <p class="text-base-content/60 font-body text-sm">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Strip -->
    <AccordionLayout
      class="border-t border-base-300 lg:py-32 max-w-7xl mx-auto"
      title="COMMON QUESTIONS."
      :items="faqs.map(f => ({ question: f.q, answer: f.a }))"
    />

    <!-- CTA -->
    <BannerLayout />
  </div>
</template>

<script>
import PricingLayout from '../components/layout/PricingLayout.vue'
 import AccordionLayout from '../components/layout/AccordionLayout.vue'
import BannerLayout from '../components/layout/BannerLayout.vue'

export default {
  name: 'PricingPage',
  components: { PricingLayout, AccordionLayout, BannerLayout },
  data() {
    return {
      alwaysIncluded: [
        { title: 'WhatsApp Check-ins', desc: 'Direct access to Coach Yohanes for questions, form checks, and motivation throughout your program.' },
        { title: 'Progress Tracking', desc: 'We measure, photograph, and review your progress at key checkpoints to keep the momentum going.' },
        { title: 'Gym Access Guidance', desc: 'Yohanes helps you arrange access to Avenue Fitness or a nearby gym — and you only pay for yourself.' },
        { title: 'Session Scheduling', desc: 'After payment, we align on a schedule that fits your schedule in Bali, whether short-stay or long-term.' },
        { title: 'Warm-up & Cool-down', desc: 'Every session begins with a proper warm-up and ends with a structured recovery protocol.' },
        { title: 'Form & Technique Focus', desc: 'No ego lifting. Every exercise is coached for safety first, performance second.' },
      ],
      faqs: [
        {
          q: 'Do I need a gym membership to train with you?',
          a: 'At Avenue Fitness and Raider Gym, you only pay for your own daily pass — Coach Yohanes covers his own entry. If you prefer another gym in Canggu, reach out and we will figure it out together.'
        },
        {
          q: 'How soon can we start?',
          a: 'Usually within 1–2 days of payment. Just message Coach Yohanes on WhatsApp after booking and he will schedule the first session right away.'
        },
        {
          q: 'Can sessions be spread across multiple weeks?',
          a: 'Absolutely. Packages are valid across your entire stay or beyond. We structure the sessions around your travel plans and goals.'
        },
        {
          q: 'What if I am a complete beginner?',
          a: 'All levels are welcome. The STARTER package is designed exactly for that — a safe, effective introduction to training with no pressure.'
        },
        {
          q: 'Is nutrition coaching included?',
          a: 'Meal plans and macros are included from the MOMENTUM package onwards. For STARTER, you get a full Custom Training Plan and Workout Guide.'
        },
      ]
    }
  }
}
</script>
