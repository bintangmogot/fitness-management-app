<template>
    <div class="min-h-screen bg-base-100 pt-20">
        
        <!-- SECTION 1: Initial About from AboutLayout -->
        <AboutLayout />
        
        <!-- SECTION 2: Expertise & Stats -->
        <StatsGridLayout 
          titleNormal="THE"
          titleHighlight="EXPERTISE."
          subtitle="A decade of experience distilled into a premium coaching service."
          :items="statsItems"
          class="lg:py-32"
        />

        <!-- SECTION 3: Philosophy (Image Right) -->
        <HeroSplitLayout 
          :isReversed="true"
          image="https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/yohanes2"
          subtitle="The Foundation"
          title="PHILOSOPHY"
          tagline="Balance, Sustainability, and Targeted Progression."
          class="lg:py-32"
        >
          <template #buttons>
            <div class="flex flex-col gap-6 w-full text-left font-body text-base-content/80 text-lg">
              <p>
                Living an active lifestyle in Bali shouldn't mean sacrificing the foods you enjoy or spending endless hours in the gym. My training approach focuses on science-backed methods that fit seamlessly into your life.
              </p>
              <ul class="flex flex-col gap-3">
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">1/</span>
                  <span class="text-base"><strong class="text-base-content">Science-Based Programming:</strong> Every rep is calculated based on proven hypertrophy and strength principles.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">2/</span>
                  <span class="text-base"><strong class="text-base-content">Dynamic Nutrition:</strong> Learn how to properly fuel your body without feeling restricted.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">3/</span>
                  <span class="text-base"><strong class="text-base-content">Sustainable Results:</strong> Achieve a transformation that lasts even after your stay in Bali.</span>
                </li>
              </ul>
            </div>
          </template>
        </HeroSplitLayout>

        <!-- SECTION 4: Walkthrough (Image Left) -->
        <HeroSplitLayout
          :isReversed="false"
          image="https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/yohanes3"
          subtitle="The Process"
          title="THE JOURNEY"
          tagline="From Assessment to Progression."
          class="lg:py-32"
        >
          <template #buttons>
             <div class="flex flex-col gap-6 w-full text-left font-body text-base-content/80 text-lg">
              <p>
                Please understand the required process and gym access rules before securing your spot. Here is exactly what to expect:
              </p>
              <ul class="flex flex-col gap-3">
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">1/</span>
                  <span class="text-base"><strong class="text-base-content">Choose & Pay:</strong> Select the training plan that fits your goals and complete the payment to secure your spot.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">2/</span>
                  <span class="text-base"><strong class="text-base-content">Gym Access:</strong> Depending on where you want to train (Avenue Fitness vs Other Gyms), gym access is configured differently.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">3/</span>
                  <span class="text-base"><strong class="text-base-content">Plan Schedule:</strong> Once all access and plans are confirmed, we will coordinate to lock in the dates and times for your sessions.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">4/</span>
                  <span class="text-base"><strong class="text-base-content">Begin Training:</strong> Execute the plan, train hard with me, and start your journey towards your ultimate physique.</span>
                </li>
              </ul>
            </div>
          </template>
        </HeroSplitLayout>

        <!-- SECTION 5: FAQs -->
        <AccordionLayout class="border-t border-base-300 lg:py-32" />

        <!-- SECTION 6: CTA -->
        <CTALayout class="lg:py-32" />

    </div>
</template>

<script>
import AboutLayout from '../components/layout/AboutLayout.vue'
import HeroSplitLayout from '../components/layout/HeroSplitLayout.vue'
import StatsGridLayout from '../components/layout/StatsGridLayout.vue'
import AccordionLayout from '../components/layout/AccordionLayout.vue'
import CTALayout from '../components/layout/CTALayout.vue'

export default {
    name: 'AboutPage',
    components: {
        AboutLayout,
        HeroSplitLayout,
        StatsGridLayout,
        AccordionLayout,
        CTALayout
    },
    data() {
        return {
            title: 'About Coach Yohanes - Personal Trainer Canggu',
            description: 'Get to know Coach Yohanes, a certified personal trainer in Canggu, Bali. Learn about his expertise, experience, and approach to fitness.',
            statsItems: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
                    title: '10+ YEARS EXPERIENCE',
                    description: 'Over a decade in the fitness industry, constantly learning, adapting, and refining the art of physique building.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
                    title: '50+ TRANSFORMATIONS',
                    description: 'Successfully guided dozens of local and international clients toward their ultimate physique and long-term health goals.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>',
                    title: 'ADE RAI CERTIFIED',
                    description: 'Fully certified by the prestigious Rai Institute as a Master Trainer. Equipped with deep knowledge in biomechanics and nutrition.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
                    title: 'EXCLUSIVE ACCESS',
                    description: 'Providing premium training sessions locally at Avenue Fitness / Raider Gym Canggu, tailored specifically for tourists and expats.'
                }
            ]
        }
    }
}
</script>