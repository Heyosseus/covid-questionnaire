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
        <keep-alive>
          <form
            @click.prevent="submit"
            method="POST"
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
            <span v-if="nameError" class="text-red-500 mt-1 ml-4">{{
              nameError
            }}</span>
            <label for="surname" class="font-bold mt-6">გვარი*</label>
            <input
              type="text"
              class="p-3 rounded border border-gray-300 mt-1 outline-0"
              placeholder="ჯუღაშვილი"
              id="surname"
              v-model="surname"
            />
            <span
              v-if="surnameError"
              class="text-red-500 mt-1 ml-4"
              >{{ surnameError }}</span
            >
            <label for="email" class="font-bold mt-6">მეილი*</label>
            <input
              type="email"
              class="p-3 rounded border border-gray-300 mt-1 outline-0"
              placeholder="fbi@redberry.ge"
              id="email"
              v-model="email"
            />
            <span v-if="emailError" class="text-red-500 mt-1 ml-4">{{
              emailError
            }}</span>
          </form>
        </keep-alive>
        <div class="mt-24">
          <div class="h-[1px] w-64 bg-gray-500"></div>
          <p class="text-gray-500 mt-4">
            *-ით მონიშნული ველების შევსება <br />სავალდებულოა
          </p>
        </div>
      </div>
      <img src="../assets/couple.png" alt="" class="" width="800" />
    </main>
    <button type="submit">click</button>
    <router-link to="/survey">
      <img src="../assets/next.png" alt="" class="mx-auto mt-24" />
    </router-link>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from 'vue';
import store from '../store/index';
export default {
  setup() {
    const state = reactive({
      name: localStorage.getItem('name') || '',
      surname: localStorage.getItem('surname') || '',
      email: localStorage.getItem('email') || '',
      nameError: null,
      surnameError: null,
      emailError: null,
    });

    const submit = () => {
      store.commit('setName', state.name);
      store.commit('setSurname', state.surname);
      store.commit('setEmail', state.email);
    };

    const validateForm = () => {
      let isValid = true;

      if (!state.name) {
        state.nameError = 'სახელის ველი სავალდებულოა';
        isValid = false;
      } else if (state.name.length < 3) {
        state.nameError =
          'სახელის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
        isValid = false;
      } else if (state.name.length > 255) {
        state.nameError =
          'სახელის ველი უნდა შედგებოდეს 255 სიმბოლოსგან';
        isValid = false;
      } else {
        state.nameError = null;
      }

      if (!state.surname) {
        state.surnameError = 'გვარის ველი სავალდებულოა';
        isValid = false;
      } else if (state.surname.length < 3) {
        state.surnameError =
          'გვარის ველი უნდა შედგებოდეს მინიმუმ 3 სიმბოლოსგან';
        isValid = false;
      } else if (state.surname.length > 255) {
        state.surnameError =
          'გვარის ველი უნდა შედგებოდეს 255 სიმბოლოსგან';
        isValid = false;
      } else {
        state.surnameError = null;
      }

      if (!state.email) {
        state.emailError = 'იმეილი სავალდებულოა';
        isValid = false;
      } else if (!/^[\w-.]+@redberry\.ge$/.test(state.email)) {
        state.emailError =
          'გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(state.email)) {
        state.emailError = 'თქვენ მიერ შეყვანილი მეილი არასწორია';
        isValid = false;
      } else {
        state.emailError = null;
      }

      return isValid;
    };

    watch(
      () => [state.name, state.surname, state.email],
      () => {
        validateForm();
      },
      { deep: true }
    );
    return { ...toRefs(state), submit };
  },
};
</script>

<style></style>
