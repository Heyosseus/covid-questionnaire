<template>
  <div class="py-24 px-44">
    <Header :count="'1/4'" />
    <main class="flex justify-between">
      <div class="h-[512px] mt-20">
        <form
          @submit="submit"
          class="flex flex-col w-[513px] tracking-wide"
        >
          <label for="name" class="font-bold">სახელი*</label>
          <input
            type="text"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="იოსებ"
            id="name"
            v-model="name"
          />

          <span class="text-red-500 mt-1 ml-4">{{
            nameErrorMessage
          }}</span>
          <label for="surname" class="font-bold mt-6">გვარი*</label>
          <input
            type="text"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="ჯუღაშვილი"
            v-model="surname"
          />

          <span class="text-red-500 mt-1 ml-4">{{
            surnameErrorMessage
          }}</span>
          <label for="email" class="font-bold mt-6">მეილი*</label>
          <input
            type="email"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="fbi@redberry.ge"
            id="email"
            v-model="email"
          />

          <span class="text-red-500 mt-1 ml-4">{{
            emailErrorMessage
          }}</span>
        </form>
        <div class="mt-24">
          <div class="h-[1px] w-64 bg-gray-500"></div>
          <p class="text-gray-500 mt-4">
            *-ით მონიშნული ველების შევსება <br />სავალდებულოა
          </p>
        </div>
      </div>
      <img
        src="@/assets/images/couple.png"
        alt=""
        class="w-[800px]"
      />
    </main>
    <router-link :to="{ name: 'survey' }">
      <img
        src="@/assets/images/next.png"
        alt=""
        class="mx-auto mt-24"
      />
    </router-link>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { useNameValidation } from '@/validations/nameValidation';
import { useSurnameValidation } from '@/validations/surnameValidation';
import { useEmailValidation } from '@/validations/emailValidation';
import { computed, watch } from 'vue';
import { onBeforeRouteLeave, useRouter } from 'vue-router';

const { name, nameErrorMessage } = useNameValidation();

const { surname, surnameErrorMessage } = useSurnameValidation();

const { email, emailErrorMessage } = useEmailValidation();

const isValid = () => {
  return (
    nameErrorMessage.value === undefined &&
    name.value !== '' &&
    surnameErrorMessage.value === undefined &&
    surname.value !== '' &&
    emailErrorMessage.value === undefined &&
    email.value !== ''
  );
};

watch(
  [nameErrorMessage, surnameErrorMessage, emailErrorMessage],
  (newValues) => {
    console.log(newValues);
    console.log(name.value);
  }
);

onBeforeRouteLeave((to, _, next) => {
  if (to.path === '/survey' && !isValid()) {
    next(false);
  } else {
    localStorage.setItem('name', name.value);
    localStorage.setItem('surname', surname.value);
    localStorage.setItem('email', email.value);
    next();
  }
});
</script>

<style></style>
