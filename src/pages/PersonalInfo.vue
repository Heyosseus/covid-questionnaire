<template>
  <div class="py-24 px-44">
    <Header :count="'1/4'" />
    <main class="flex justify-between">
      <div class="h-[512px] mt-20">
        <Form
          @submit="submit"
          class="flex flex-col w-[513px] tracking-wide"
        >
          <label for="name" class="font-bold">სახელი*</label>
          <Field
            type="text"
            name="name"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="იოსებ"
            id="name"
            rules="required|min:3"
            v-model="name"
          />

          <ErrorMessage name="name" class="text-red-500 mt-1 ml-4" />

          <label for="surname" class="font-bold mt-6">გვარი*</label>
          <Field
            type="text"
            name="surname"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="ჯუღაშვილი"
            rules="required|min:3"
            v-model="surname"
          />

          <ErrorMessage
            name="surname"
            class="text-red-500 mt-1 ml-4"
          />
          <label for="email" class="font-bold mt-6">მეილი*</label>
          <Field
            type="email"
            name="email"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="fbi@redberry.ge"
            id="email"
            rules="required|email"
            v-model="email_input"
          />

          <ErrorMessage name="email" class="text-red-500 mt-1 ml-4" />
        </Form>
        <div class="mt-24">
          <div class="h-[1px] w-64 bg-gray-500"></div>
          <p class="text-gray-500 mt-4">
            *-ით მონიშნული ველების შევსება <br />სავალდებულოა
          </p>
        </div>
      </div>
      <div class="relative">
        <img
          src="@/assets/images/couple.png"
          class="w-[800px] z-20"
        />
        <transition name="slide" appear key="personal">
          <img
            src="@/assets/logos/personalLogo.png"
            alt=""
            class="absolute top-48 left-20 opacity-80 z-10"
          />
        </transition>
      </div>
    </main>
    <router-link
      :to="{ name: 'survey' }"
      @click="saveDataToLocalStorage"
    >
      <img src="@/assets/images/next.png" class="mx-auto mt-24" />
    </router-link>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import { defineRule } from 'vee-validate';
import { required, min, email } from '@vee-validate/rules';

import { useStore } from 'vuex';

const store = useStore();

defineRule('min', min);
defineRule('email', email);
defineRule('required', required);

const name = ref(store.state.name);
const surname = ref(store.state.surname);
const email_input = ref(store.state.email_input);

const saveDataToLocalStorage = () => {
  localStorage.setItem('first_name', name.value);
  localStorage.setItem('last_name', surname.value);
  localStorage.setItem('email', email_input.value);
};

const submit = () => {
  console.log('submit');
};

{
  Header, Form, Field, ErrorMessage;
}

// onBeforeRouteLeave((to, _, next) => {
//   if (to.path === '/survey' && !isValid()) {
//     next(false);
//   } else {
//     localStorage.setItem('first_name', name.value);
//     localStorage.setItem('last_name', surname.value);
//     localStorage.setItem('email', email.value);
//     next();
//   }
// });
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
