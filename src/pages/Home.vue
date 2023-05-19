<template>
  <div
    class="flex flex-col items-center justify-center min-h-[100vh]"
  >
    <img
      v-if="currentImage === redberryLogo"
      :src="currentImage"
      :class="imageClass"
    />
    <img
      v-if="currentImage !== redberryLogo"
      :src="currentImage"
      :class="imageClass"
    />

    <div
      v-if="currentImage === redberryLogo"
    >
      <transition name="slide" appear>
        <div class="image-container mt-56 relative" @click="navigate">
          <img
            :src="startQuestionaire"
            alt=""
            class="hover-trigger"
            @mouseenter="showSecondImage = true"
          />
          <img
            v-if="showSecondImage"
            :src="shadowForStart"
            alt=""
            class="show-on-hover"
          />
        </div>
      </transition>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import redberryLogo from "@/assets/images/redberryLogo.png";
import backgroundRedberry from "@/assets/images/backgroundRedberry.png";
import startingSurvey from "@/assets/logos/startingSurvey.png";
import shadow from "@/assets/logos/shadow.png";

const startQuestionaire = ref(startingSurvey);
const shadowForStart = ref(shadow);

const currentImage = ref(backgroundRedberry);
const showSecondImage = ref(false);
const router = useRouter();

const navigate = () => {
  router.push({ name: 'personal' });
};

onMounted(() => {
  setTimeout(() => {
    currentImage.value = redberryLogo;
  }, 900);
});

const imageClass = computed(() => {
  return currentImage.value ===
    backgroundRedberry
    ? 'animate'
    : 'fixed flex justify-end items-center';
});
</script>


<style>
.text:hover {
  text-shadow: 2px 2px rgb(192, 188, 188);
}

.show-on-hover {
  margin-left: 2px;
  position: absolute;
  top: 0;
}
.animate {
  animation: slide-in 0.6s ease forwards;
  transform: scale(1.2);
  animation-delay: 0.4s;
}

@keyframes slide-in {
  0% {
    aspect-ratio: 3/2;
  }

  100% {
    transform: scale(0.09);
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
  transform: translateY(-50%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>
