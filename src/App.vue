<script setup></script>

<template>
  <div>
    <router-view v-slot="slotProps">
      <transition name="image-transition" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </div>
</template>

<style scoped>
.image-transition-enter-active,
.image-transition-leave-active {
  transition: opacity 0.4s ease-in;
}

.image-transition-enter,
.image-transition-leave-to {
  opacity: 0.6;
}

.slide-out-enter-to,
.slide-out-leave-from {
  opacity: 0.8;
}
</style>
