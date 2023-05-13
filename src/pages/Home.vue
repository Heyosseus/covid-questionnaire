<template>
  <div
    class="flex flex-col items-center space-y-6 justify-center min-h-[100vh]"
  >
    <img
      v-show="currentImage === '/src/assets/images/redberryLogo.png'"
      :src="currentImage"
      :class="imageClass"
    />
    <img
      v-show="currentImage !== '/src/assets/images/redberryLogo.png'"
      :src="currentImage"
      :class="imageClass"
    />

    <div
      v-if="currentImage === '/src/assets/images/redberryLogo.png'"
    >
      <router-link :to="{ name: 'personal' }">
        <transition name="slide" appear>
          <h1 class="font-case text-2xl text-center font-bold text">
            კითხვარის <br />დაწყება
          </h1>
        </transition>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const currentImage = ref('/src/assets/images/backgroundRedberry.png');

onMounted(() => {
  setTimeout(() => {
    currentImage.value = '/src/assets/images/redberryLogo.png';
  }, 900);
});

const imageClass = computed(() => {
  return currentImage.value ===
    '/src/assets/images/backgroundRedberry.png'
    ? 'animate'
    : '';
});
</script>

<style>
.text:hover {
  text-shadow: 2px 2px rgb(192, 188, 188);
}
.animate {
  animation: slide-in 0.9s ease forwards;
  transform: scale(1.2);
  animation-delay: 0.3s;
}

@keyframes slide-in {
  0% {
    aspect-ratio: 3/2;
  }

  100% {
    transform: scale(0.08);
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: fill;
    animation-fill-mode: forwards;
    visibility: hidden;
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.6s ease-in, opacity 2s ease;

}

.slide-enter-from,
.slide-leave-to {
  transform: translateY(-60%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translatey(0);
  opacity: 1;
}
</style>
