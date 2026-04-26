<template>
    <div class="min-h-screen bg-base-100 pt-20">
        
        <!-- SECTION 1: Initial About from AboutLayout -->
        <AboutLayout />
        
        <!-- SECTION 2: Expertise & Stats -->
        <StatsGridLayout 
          titleNormal="REASONS"
          titleHighlight="TO CHOOSE ME"
          subtitle="All of my clients are from different backgrounds and have different goals, but they all have one thing in common: they want to get in shape and live a healthier lifestyle. I help them achieve their goals by providing them with the tools, knowledge, and support they need to succeed."
          :items="statsItems"
          class="lg:py-32 max-w-7xl xl:px-0 mx-auto w-full"
        />

        <!-- SECTION 3: The Origin (Building the Foundation) -->
        <HeroSplitLayout 
          :isReversed="true"
          image="https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/yohanes3"
          subtitle="The Origin"
          title="SURABAYA"
          tagline="From Java to a Lifetime of Discipline."
          class="lg:py-32 max-w-7xl mx-auto w-full px-6 lg:px-20 xl:px-0"
        >
          <template #buttons>
            <div class="flex flex-col gap-4 w-full text-left font-body text-base-content/80 text-lg">
              <ul class="flex flex-col gap-3">
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">1/</span>
                  <span class="text-base"><strong class="text-base-content">My Why:</strong> I grew up in Surabaya watching my father smoke his whole life. I made a promise to myself — I would go the opposite direction. That decision changed everything for me.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">2/</span>
                  <span class="text-base"><strong class="text-base-content">Going Against the Norm:</strong> I started going to the gym when I was still in Senior High School. Back then in Indonesia, nobody really talked about fitness. I was one of the few, and that made me fall deeper in love with it.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">3/</span>
                  <span class="text-base"><strong class="text-base-content">More Than a Trainer:</strong> I graduated with a Bachelor's in English — I believe understanding people deeply is just as important as understanding the body. Communication is everything in coaching.</span>
                </li>
              </ul>
            </div>
          </template>
        </HeroSplitLayout>

        <!-- SECTION 4: The Canggu Life (Community & Expertise) -->
        <HeroSplitLayout
          :isReversed="false"
          image="https://res.cloudinary.com/workstation-/image/upload/f_auto/q_auto/gym-yohanes/images/yohanes/yohanes"
          subtitle="Present Day"
          title="CANGGU"
          tagline="Multifaceted Excellence in Bali."
          class="lg:py-32 max-w-7xl mx-auto w-full px-6 lg:px-20 xl:px-0"
        >
          <template #buttons>
             <div class="flex flex-col gap-4 w-full text-left font-body text-base-content/80 text-lg">
              <ul class="flex flex-col gap-3">
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">1/</span>
                  <span class="text-base"><strong class="text-base-content">Home in Canggu:</strong> I moved to Bali and never looked back. I now manage and train full-time at Avenue Fitness. Every day I get to help people — tourists, expats, locals — transform their bodies and mindset.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">2/</span>
                  <span class="text-base"><strong class="text-base-content">Wearing Many Hats:</strong> Outside the gym, I handle marketing for <a class="text-primary hover:underline" href="https://shakeup-protein.com/" target="_blank">Shakeup Protein</a> and teach Bahasa Indonesia online to students around the world through <a class="text-primary hover:underline" href="https://preply.com/en/tutor/6989705" target="_blank">Preply</a>. I like staying busy and growing in every direction.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="text-primary font-bold">3/</span>
                  <span class="text-base"><strong class="text-base-content">I Know Your Name:</strong> I make it a point to know every single member's name. The gym should feel like family — not a service. That's the culture I try to build every day.</span>
                </li>
              </ul>
            </div>
          </template>
        </HeroSplitLayout>

        <!-- SECTION 5: Column Layout -->
        <ColumnLayout />

        <!-- SECTION 7: CTA -->
        <BannerLayout />

    </div>
</template>

<script>
import AboutLayout from '../components/layout/AboutLayout.vue'
import HeroSplitLayout from '../components/layout/HeroSplitLayout.vue'
import StatsGridLayout from '../components/layout/StatsGridLayout.vue'
import AccordionLayout from '../components/layout/AccordionLayout.vue'  
import BannerLayout from '../components/layout/BannerLayout.vue'
import ColumnLayout from '../components/layout/ColumnLayout.vue'

export default {
    name: 'AboutPage',
    components: {
        AboutLayout,
        HeroSplitLayout,
        StatsGridLayout,
        AccordionLayout,
          BannerLayout
    },
    data() {
        return {
            title: 'About Coach Yohanes - Personal Trainer Canggu',
            description: 'Get to know Coach Yohanes, a certified personal trainer in Canggu, Bali. Learn about his expertise, experience, and approach to fitness.',
            statsItems: [
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>',
                    title: 'EXPERIENCED INSTRUCTOR',
                    description: 'With over a decade in the fitness industry and Master Trainer certification from the prestigious Rai Institute, my holistic approach ensures safe, continuous progress for your fitness journey in Canggu.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>',
                    title: 'TAILORED PROGRAMS',
                    description: 'From customized hypertrophy to mobility and core conditioning, the training is personalized to meet your unique needs and help you achieve your ultimate physique goals.'
                },
                {
                    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/></svg>',
                    title: 'ALL-LEVELS FRIENDLY',
                    description: 'My training sessions are designed to be inclusive and accessible. Whether you’re a beginner or an advanced athlete, the plan is scaled to match your skill level, ensuring a safe and effective experience.'
                },
                {
                  icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>',
                  title: 'EXCLUSIVE ACCESS',
                  description: 'Providing premium training sessions locally at Avenue Fitness and Raider Gym in Canggu. As an exclusive perk here, you only pay for your own gym pass—you never have to cover my entry fee.'
                }
            ]
        }
    }
}
</script>