<template>
    <div>
        <AboutLayout />
    </div>
</template>

<script>
import AboutLayout from '../components/layout/AboutLayout.vue'
export default {
    name: 'AboutPage',
    components: {
        AboutLayout
    },
    data() {
        return {
            title: 'About Coach Yohanes - Personal Trainer Canggu',
             description: 'Get to know Coach Yohanes, a certified personal trainer in Canggu, Bali. Learn about his expertise, experience, and approach to fitness.'
        }
    }
}
</script>