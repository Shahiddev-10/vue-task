<template>
  <div class="hero-section">
    <div class="container">
      <div class="row flex-wrap justify-content-between">
        <div class="col-lg-6 text-start hero-details">
          <a href="" class="btn btn-success rounded-pill course-btn px-3 py-2">New course</a>
          <h2 class="mt-3 mb-0">iPhone Photo Academy</h2>
          <p class="mt-3"> Sign up now to get notified when this course is available! </p>
          <div class="email-group">
            <input type="text" v-model="email" class="p-3" required />
            <label :class="placeholder.color">
              {{ placeholder.message }}
            </label>
            <i class="fa-regular fa-envelope"></i>
          </div>
          <div>
            <a href="#" :class="validateEmail() ? 'enable-button' : 'disable-button'" class="btn mt-3"
              @click="notifyMe">Please Notify Me</a>
          </div>
        </div>
        <div class="col-lg-6 text-white">
          <phone-carousel />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import phoneCarousel from "./PhoneCarousel.vue";


const placeholder = ref({
  message: "Enter your Email Address",
  color: "text-white-200",
});

const router = useRouter();
const email = ref("");

const validateEmail = () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email.value)) {
    placeholder.value.message = email.value ? "Please enter a valid email address" : "Please enter email address";
    placeholder.value.color = email.value ? 'text-danger' : "text-white-200";
    return false;
  } else {
    placeholder.value.message = "";
    placeholder.value.color = "text-white-200";
    return true;
  }
};

const notifyMe = () => {
  if (validateEmail()) {
    router.push("thank-page");
  }
};

watchEffect(() => {
  validateEmail();
});

</script>

<style scoped>
@import "@/assets/css/hero-section.css";

.disable-button {
  text-align: center;
  padding: 16px 24px;
  width: 100%;
  background: linear-gradient(135deg, #370c14 0%, #280c23 100%);
  border-radius: 6px;
  color: #eeecec;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  border: 1px solid;
  border-color: rgba(212, 28, 61, 1);
  cursor: not-allowed;
}

.disable-button:hover {
  color: #eeecec;
  border-color: rgba(212, 28, 61, 1);
}

@media (min-width: 768px) {


  .disable-button {
    width: 315px;
    font-size: 16px;
  }
}

@media (min-width: 992px) {
  .disable-button {
    width: 201px;
  }
}
</style>