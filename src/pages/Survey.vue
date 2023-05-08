<template>
  <div class="py-24 px-44">
    <header class="w-full">
      <div class="flex justify-between">
        <img src="../assets/images/LOGO.png" alt="" />
        <div class="font-monospace text-2xl font-bold">2/4</div>
      </div>
      <div class="h-0.5 w-full bg-slate-800 mt-4"></div>
    </header>
    <main class="flex justify-between">
      <form action="" class="mt-16 space-y-10 tracking-wide">
        <div>
          <label for="" class="font-bold text-lg"
            >გაქვს გადატანილი Covid-19?*</label
          >

          <div
            class="flex flex-col mt-6 space-y-1 text-lg font-bold w-36"
          >
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                @click="showAntiTest"
              />
              კი
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              არა
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              ახლა მაქვს
            </label>
          </div>
        </div>
        <!--  -->
        <div v-if="showAnti">
          <label for="" class="font-bold text-lg mt-6"
            >ანტისხეულების ტესტი გაკეთებული გაქვს?*</label
          >

          <div
            class="flex flex-col mt-6 space-y-1 text-lg font-bold w-36"
          >
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                @click="showAntiTestDate"
              />
              კი
            </label>
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="selectedValue"
              />
              არა
            </label>
          </div>
        </div>
        <!--  -->
        <div v-if="date" class="flex flex-col">
          <label for="" class="font-bold text-lg mt-6"
            >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
            როდის გქონდა Covid-19*</label
          >
          <input type="date" class="w-96 mt-6" />
        </div>
      </form>
      <img src="../assets/images/gumBoy.png" alt="" width="900" />
    </main>
    <div class="flex items-center justify-center space-x-28">
      <router-link to="/identification">
        <img src="../assets/images/previous.png" alt="" />
      </router-link>
      <router-link to="/vaccine">
        <img src="../assets/images/next.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const showAnti = ref(false);
const date = ref(false);
const showAntiTest = () => {
  showAnti.value = true;
};
const showAntiTestDate = () => {
  date.value = true;
};

const radio = () => {
  const selectedValue = ref('');

  watch(selectedValue, (newValue) => {
    localStorage.setItem('selectedRadioValue', newValue);
  });

  selectedValue.value =
    localStorage.getItem('selectedRadioValue') || '';

  return {
    selectedValue,
  };
};
</script>

<style></style>
