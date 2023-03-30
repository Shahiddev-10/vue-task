<template>
  <div>
    <Header/>
    <hero-section/>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    Header
  }
}
</script>
<style scoped>
.navbar{
  display: none;
}

@media (min-width: 768px) {
  .navbar{
  display: block;
}
}
</style>
