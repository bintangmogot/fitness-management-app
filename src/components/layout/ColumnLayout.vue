<template>
  <div class="flex flex-col w-full font-body">
    <!-- Top Image Full Width -->
    <div class="w-full h-[50vh] md:h-[80vh] relative min-h-[400px]">
      <img :src="image" :alt="imageAlt" class="w-full h-full object-cover" />
    </div>

    <!-- Content Area with Background -->
    <div :class="`w-full ${bgColor} ${textColor} py-16 px-6 lg:px-20 xl:px-32 lg:py-32 flex flex-col items-center`">
      <div class="max-w-4xl w-full flex flex-col gap-16">
        
        <!-- Sections Loop -->
        <div v-for="(section, index) in sections" :key="index" class="flex flex-col items-center">
            <!-- Title -->
            <h2 class="text-2xl md:text-4xl font-title uppercase font-bold tracking-wider text-center mb-3">
              {{ section.title }}
            </h2>
            <!-- Short Divider Line -->
            <div class="w-12 h-1 bg-current mx-auto mb-8"></div>
            <!-- Content -->
            <div :class="`text-base md:text-lg leading-relaxed w-full space-y-6 ${section.align || 'text-left'}`" v-html="section.content"></div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
    image: {
        type: String,
        default: 'https://res.cloudinary.com/workstation-/image/upload/f_auto,q_auto/gym-yohanes/images/yohanes/run-community2'
    },
    imageAlt: {
        type: String,
        default: 'Community'
    },
    bgColor: {
        type: String,
        default: 'bg-[#0F0F23]'
    },
    textColor: {
        type: String,
        default: 'text-[white]'
    },
    sections: {
        type: Array,
        default: () => [
            {
                title: 'SUNDAY RUN CLUB & RECOVERY',
                align: 'text-center',
                content: '<p>Every Sunday, we host our signature Interval Running Club. It\'s more than just a workout—it\'s where the community connects. After hitting the intervals, everyone gathers to get to know each other while enjoying our premium recovery facilities.</p><p>As a participant, you get full access to the <strong>recovery area</strong> (Sauna, Ice Bath, and Jacuzzi) and <a href="https://avenuefitnessbali.com/" target="_blank"><strong>free entry to Avenue Fitness gym</strong></a> for the day. We also provide free drinks and fresh fruit to refuel your body after the session.</p>'
            },
            {
                title: 'WEDNESDAY FUN RUN',
                align: 'text-center',
                content: '<p>Join us every Wednesday for our Fun Run Club. We keep the pace social and the energy high. The highlight is our partnership with local cafes like <a href="https://linktr.ee/somunch" target="_blank"><strong>So Munch Cafe</strong></a>. After the run, we head over to enjoy free coffee, fresh coconuts, or fruit while catching up with the crew. It\'s the perfect mid-week reset for the Bali running community. </p><p>Same like Sunday Run Club, you will get full access to the <strong>recovery area</strong> (Sauna, Ice Bath, and Jacuzzi) and <a href="https://avenuefitnessbali.com/" target="_blank"><strong>free entry to Avenue Fitness gym</strong></a> for the day.</p>'
            }
        ]
    }
})
</script>