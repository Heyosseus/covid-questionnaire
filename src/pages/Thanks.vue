<template>
  <div class="min-h-[100vh] bg-[#232323]">
    <div
      class="flex flex-col items-center justify-center mx-auto min-h-[90vh] w-96 space-y-6"
    >
      <transition name="slide-in" appear>
        <icon-star class="mr-auto ml-8"></icon-star>
      </transition>
      <transition name="fade-out" appear>
        <img src="@/assets/logos/thankyou.png" alt="" />
      </transition>

      <transition name="slide-out" appear>
        <icon-star class="ml-auto mr-6 w-6 h-6"></icon-star>
      </transition>
    </div>
  </div>
</template>
<script setup>
import IconStar from '../components/icons/IconStar.vue';
</script>
<style>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.4s ease, opacity 0.6s ease;
  transition-delay: 0.8s;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translatex(90%) scale(0.8) translateY(80%);
  opacity: 0;
}

.slide-in-enter-to,
.slide-in-leave-from {
  transform: translatex(0);
  opacity: 1;
}

/*  */
.slide-out-enter-active,
.slide-out-leave-active {
  transition: transform 0.4s ease, opacity 0.6s ease;
  transition-delay: 0.8s;
}

.slide-out-enter-from,
.slide-out-leave-to {
  transform: translatex(-100%) scale(0.8) translateY(-80%);
  opacity: 0;
}

.slide-out-enter-to,
.slide-out-leave-from {
  transform: translatex(0);
  opacity: 1;
}
/*  */
.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 1s ease;
}

.fade-out-enter-from,
.fade-out-leave-to {
  opacity: 0;
}

.fade-out-enter-to,
.fade-out-leave-from {
  opacity: 1;
  transition-duration: 1s;
}
</style>
