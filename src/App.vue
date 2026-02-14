<template>
  <div class="bg-bg-white font-body min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <!-- <Hero /> -->
      <!-- <Hero2nd /> -->
      <!-- <About /> -->
      <!-- <BentoGrid />
      <Transforms />
      <Services />
      <TestimonialCarousel />
      <TrainingPackages />
      <Location />
      <MealPlan />
      <Facts />
      <Important />
      <ReadyToTransform />
      <CatalogNutrition />
      <Faqs />
      <CTA /> -->
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
</script>