<template>
  <div class="py-24 px-44">
    <BaseHeader :count="'1/4'" />
    <Form
      @submit="onSubmit"
      :name="name"
      :surname="surname"
      :email="email_input"
    />
  </div>
</template>

<script setup>
import BaseHeader from '@/components/BaseHeader.vue';
import Form from '../components/personal/PersonalForm.vue'; 
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease, opacity 0.8s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translatex(-40%) scale(0.6) translateY(45%);
  opacity: 0;
}

.slide-enter-to,
.slide-leave-from {
  transform: translatex(0);
  opacity: 0.8;
}
</style>
