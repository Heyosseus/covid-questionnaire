<template>
  <div class="py-24 px-44">
    <header class="w-full">
      <div class="flex justify-between">
        <img src="../assets/LOGO.png" alt="" />
        <div class="font-monospace text-2xl font-bold">3/4</div>
      </div>
      <div class="h-0.5 w-full bg-slate-800 mt-4"></div>
    </header>
    <main class="flex justify-between">
      <form action="" class="mt-16 space-y-10 tracking-wide">
        <div>
          <label for="" class="font-bold text-lg"
            >უკვე აცრილი ხარ?*</label
          >

          <div
            class="flex flex-col mt-6 space-y-2 text-lg font-semibold w-36"
          >
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                @click="showLevelHandlerForYes"
              />
              კი
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                @click="showLevelHandlerForNo"
              />
              არა
            </label>
          </div>
        </div>
        <!--  -->
        <div v-if="showForYes">
          <label for="" class="font-bold text-lg mt-6"
            >აირჩიე რა ეტაპზე ხარ*</label
          >

          <div
            class="flex flex-col mt-6 space-y-2 text-lg font-bold w-[600px]"
          >
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
            </label>
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              სრულად აცრილი ვარ
            </label>
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                @click="showLinkHandler"
              />
              პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
            </label>
          </div>
           <div v-if="showLink" class="mt-16 font-semibold text-lg ml-6">
            <p>
              რომ არ გადადო, <br> ბარემ ახლავე დარეგისტრირდი
            </p>

            <p class="mt-6">👉 რეგისტრაციის ბმული</p>
            <a href="#" class="text-blue-600">
              https://booking.moh.gov.ge/</a
            >
          </div>
        </div>
        <div v-if="showForNo">
          <label for="" class="font-bold text-lg mt-6"
            >რას ელოდები?*</label
          >

          <div
            class="flex flex-col mt-6 space-y-2 text-lg font-bold w-[500px]"
          >
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              დარეგისტრირებული ვარ და ველოდები რიცხვს
            </label>
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              />
              არ ვგეგმავ
            </label>
            <label>
              <input
                type="radio"
                name="vaccine-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                @click="showLinkHandler"
              />
              გადატანილი მაქვს და ვგეგმავ აცრას
            </label>
          </div>
          <div v-if="showLink" class="mt-16 font-semibold text-lg ml-6">
            <p>
              ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის <br />
              შემდეგ შეგიძლიათ ვაქცინის გაკეთება.
            </p>

            <p class="mt-6">👉 რეგისტრაციის ბმული</p>
            <a href="#" class="text-blue-600">
              https://booking.moh.gov.ge/</a
            >
          </div>
        </div>
      </form>
      <img src="../assets/doctor.png" alt="" />
    </main>
    <div class="flex items-center justify-center space-x-28 mt-16">
      <router-link to="/survey">
        <img src="../assets/previous.png" alt="" />
      </router-link>

      <router-link to="/tips">
        <img src="../assets/next.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const showForYes = ref(false);
const showForNo = ref(false);
const showLink = ref(false);

const showLevelHandlerForYes = () => {
  showForYes.value = true;
  showForNo.value = false;
};
const showLevelHandlerForNo = () => {
  showForNo.value = true;
  showForYes.value = false;
};
const showLinkHandler = () => {
  showLink.value = true;
};

</script>

<style></style>
