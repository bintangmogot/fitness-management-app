<template>
  <div class="bg-bg-white font-body min-h-screen overflow-x-hidden">
    <Navbar />
    <main>
      <Hero />
      <Hero2nd />
      <About />
      <TestimonialCarousel />
      <Transforms />
      <TrainingPackages />
      <MealPlan />
      <Facts />
      <Location />
      <Important />
      <ReadyToTransform />
      <CTA />
      <CatalogNutrition />
      <Faqs />
      <Services />
      <BentoGrid />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Hero2nd from './components/Hero2nd.vue';
import About from './components/About.vue';
import TestimonialCarousel from './components/TestimonialCarousel.vue';
import Transforms from './components/Transforms.vue';
import TrainingPackages from './components/TrainingPackages.vue';
import MealPlan from './components/MealPlan.vue';
import Facts from './components/Facts.vue'
import CTA from './components/CTA.vue';
import Faqs from './components/Faqs.vue';
import Footer from './components/Footer.vue';
import Location from './components/Location.vue';
import ReadyToTransform from './components/ReadyToTransform.vue';
import Important from './components/Important.vue';
import CatalogNutrition from './components/CatalogNutrition.vue';
import Services from './components/Services.vue';
import BentoGrid from './components/BentoGrid.vue';
</script>