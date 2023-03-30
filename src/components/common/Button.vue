<template>
  <div>
    <a
      href="#"
      :class="validateEmail() ? 'enable-button' : 'disable-button'"
      class="btn mt-3"
      disabled
      @click="notifyMe"
      >Please Notify Me</a
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import "@/assets/css/common/button.css";
</style>