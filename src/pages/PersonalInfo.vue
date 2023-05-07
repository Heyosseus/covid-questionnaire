<template>
  <div class="py-24 px-44">
    <header class="w-full">
      <div class="flex justify-between">
        <img src="../assets/LOGO.png" alt="" />
        <div class="font-monospace text-2xl font-bold">1/4</div>
      </div>
      <div class="h-0.5 w-full bg-slate-800 mt-4"></div>
    </header>

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
            v-bind="nameValidationListeners"
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
            v-bind="surnameValidationListeners"
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
            v-bind="emailValidationListeners"
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
      <img src="../assets/couple.png" alt="" class="" width="800" />
    </main>
    <button @submit="submit">click</button>
    <router-link to="/survey">
      <img src="../assets/next.png" alt="" class="mx-auto mt-24" />
    </router-link>
  </div>
</template>

<script>
import { useNameValidation } from '../validations/nameValidation';
import { useSurnameValidation } from '../validations/surnameValidation';
import { useEmailValidation } from '../validations/emailValidation';
import { computed } from 'vue';

export default {
  setup() {
    const { name, nameErrorMessage, nameValidationListeners } =
      useNameValidation();

    const {
      surname,
      surnameErrorMessage,
      surnameValidationListeners,
    } = useSurnameValidation();

    const { email, emailErrorMessage, emailValidationListeners } =
      useEmailValidation();

    function submit() {
      console.log('submit');
    }

    return {
      name,
      nameErrorMessage,
      nameValidationListeners,
      surname,
      surnameErrorMessage,
      surnameValidationListeners,
      email,
      emailErrorMessage,
      emailValidationListeners,
      submit,
    };
  },
};

</script>

<style></style>
