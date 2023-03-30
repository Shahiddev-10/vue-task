<template>
  <div class="phone-carousel">
    <img src="../assets/image/shadow.png" alt="" class="shadow-img img-fluid" />
    <div class="phone-img">
      <img src="../assets/image/iPhone.png" alt="" class="img-fluid" />
      <transition-group tag="div" class="main__slider" name="main__slide-image" mode="out-in">
        <img v-for="(slide, index) of slides" :key="index" v-show="index === currentActiveSlide"
          :src="require(`../assets/image/${slide.img}.png`)" alt="slide image"
          class="main__slide-image big-carousel img-fluid" />
      </transition-group>
      <aside class="aside">
        <transition-group tag="div" name="aside__slide-image" mode="out-in" class="aside__slider">
          <img v-for="(slide, index) of slides" :key="index" v-show="index === nextActiveSlide"
            @click="handleSlideChange(1)" class="aside__slide-image mg-fluid small-carousel"
            :src="require(`../assets/image/${slide.img}.png`)" />
        </transition-group>
        <ul class="progress-indicator" :data-slides-count="'0' + slides.length">
          <li v-for="(slide, index) of slides" :key="index" :class="
            index === currentActiveSlide
              ? 'progress-indicator__bar  progress-indicator__bar--active'
              : 'progress-indicator__bar'
          "></li>
        </ul>
      </aside>

      <div class="carousel-nav position-absolute d-flex justify-content-between mx-auto" data-glide-el="controls[nav]">
        <button class="carousel-next-btn btn" data-glide-dir="=1" v-for="item in bottomSide" :key="item.id" :style="
          item.isActive
            ? 'background-color: #ffff'
            : 'background-color: #3A3A3A'
        "></button>
      </div>
      <img src="../assets/image/camera-controls.png" alt="" class="img-fluid camera-controls" />
      <button class="btn camera-button" @click="handleSlideChange(-1)"></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
const currentActiveSlide = ref(0);
const slides = ref([
  {
    img: "carousel-photo1",
  },
  {
    img: "carousel-photo2",
  },
  {
    img: "carousel-photo3",
  },
  {
    img: "carousel-photo4",
  },
]);

const bottomSide = ref([
  {
    id: 0,
    isActive: true,
  },
  {
    id: 3,
    isActive: false,
  },
  {
    id: 2,
    isActive: false,
  },
  {
    id: 1,
    isActive: false,
  },
]);

const handleSlideChange = (val) => {
  let direction;
  const calculatedNextSlide = currentActiveSlide.value + val;
  console.log(currentActiveSlide.value);
  if (val > 0) {
    direction = "next";
  } else {
    direction = "previous";
  }
  if (direction === "next" && calculatedNextSlide < slides.value.length) {
    currentActiveSlide.value += val;
  } else if (direction === "next") {
    currentActiveSlide.value = 0;
  } else if (direction === "previous" && calculatedNextSlide < 0) {
    currentActiveSlide.value = slides.value.length - 1;
  } else {
    currentActiveSlide.value += val;
  }
  bottomSide.value.forEach((el) => {
    if (el.id == currentActiveSlide.value) el.isActive = true;
    else el.isActive = false;
  });
};
const play = () => {
  setInterval(function () {
    handleSlideChange(-1);
  }, 8000);
};
onMounted(() => {
  play();
});
const nextActiveSlide = computed(() => {
  return currentActiveSlide.value + 1 >= slides.value.length
    ? 0
    : currentActiveSlide.value + 1;
});
</script>

<style scoped>
@import '@/assets/css/common/phone-carousal.css';

.carousel-next-btn {
  width: 55px;
  height: 1px;
  border-radius: 0;
  padding: 0;
}
</style>