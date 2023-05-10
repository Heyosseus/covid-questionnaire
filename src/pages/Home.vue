<template>
  <div
    class="flex flex-col items-center justify-center space-y-12 min-h-[90vh]"
  >
    <!-- <img src="@/assets/images/redberryLogo.png" alt="" class="w-20" /> -->
    <transition name="fade">
      <img
        :src="currentImage"
        :key="imageTransitionKey"
        :class="imageClass"
      />
    </transition>

    <div
      v-if="currentImage === '/src/assets/images/redberryLogo.png'"
    >
      <router-link :to="{ name: 'personal' }"
        ><h1 class="font-case text-2xl text-center font-bold">
          კითხვარის <br />დაწყება
          <!-- <img src="/src/assets/images/kitxvari.png" alt=""> -->
        </h1></router-link
      >
    </div>
  </div>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
export default {
  setup() {
    const currentImage = ref(
      '/src/assets/images/backgroundRedberry.png'
    );

    const imageTransitionKey = ref('image-transition');

    onMounted(() => {
      setTimeout(() => {
        currentImage.value = '/src/assets/images/redberryLogo.png';
      }, 1000);
    });

    const imageClass = computed(() => {
      return currentImage.value ===
        '/src/assets/images/backgroundRedberry.png'
        ? 'w-screen h-screen'
        : '';
    });
    const imageFadeOutClass = computed(() =>
      currentImage.value ===
      '/src/assets/images/backgroundRedberry.png'
        ? 'fade-out'
        : ''
    );

    return {
      currentImage,
      imageTransitionKey,
      imageClass,
      imageFadeOutClass,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
