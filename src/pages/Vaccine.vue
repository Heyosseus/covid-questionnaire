<template>
  <div class="py-24 px-44">
    <Header :count="'3/4'" />
    <main class="flex justify-between">
      <div class="flex-col">
        <form
          action=""
          class="mt-16 space-y-10 tracking-wide"
          @click="radioButtonHandler"
        >
          <div class="">
            <label for="" class="font-bold text-lg"
              >უკვე აცრილი ხარ?*</label
            >

            <div
              class="flex flex-col mt-6 space-y-2 text-lg font-semibold w-36"
            >
              <label for="vaccine-yes">
                <input
                  type="radio"
                  name="covid-vaccine"
                  id="vaccine-yes"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showLevelHandlerForYes"
                  v-model="covidVaccine"
                  value="yes"
                />
                კი
              </label>
              <label for="vaccine-no">
                <input
                  type="radio"
                  name="covid-vaccine"
                  id="vaccine-no"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showLevelHandlerForNo"
                  v-model="covidVaccine"
                  value="no"
                />
                არა
              </label>
            </div>
          </div>
        </form>
        <!--  -->
        <div v-if="showForYes" class="mt-10">
          <form action="" @click="levelHandler">
            <label for="" class="font-bold text-lg mt-6"
              >აირჩიე რა ეტაპზე ხარ*</label
            >

            <div
              class="flex flex-col mt-6 space-y-2 text-lg font-bold w-[600px]"
            >
              <label for="first_and_registered">
                <input
                  type="radio"
                  name="vaccine-level"
                  id="first_and_registered"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="vaccinatedlevel"
                  value="first_and_registered"
                />
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </label>
              <label for="vaccinated">
                <input
                  type="radio"
                  name="vaccine-level"
                  id="vaccinated"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="vaccinatedlevel"
                  value="vaccinated"
                />
                სრულად აცრილი ვარ
              </label>
              <label for="first_and_not_registered">
                <input
                  type="radio"
                  name="vaccine-level"
                  id="first_and_not_registered"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showLinkHandler"
                  v-model="vaccinatedlevel"
                  value="first_and_not_registered"
                />
                პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
              </label>
            </div>
          </form>
          <div
            v-if="showLink"
            class="mt-16 font-semibold text-lg ml-6"
          >
            <p>
              რომ არ გადადო, <br />
              ბარემ ახლავე დარეგისტრირდი
            </p>

            <p class="mt-6">👉 რეგისტრაციის ბმული</p>
            <a href="#" class="text-blue-600">
              https://booking.moh.gov.ge/</a
            >
          </div>
        </div>
        <div v-if="showForNo" class="mt-10">
          <form action="" @click="waitingForHandler">
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
                  v-model="waitingFor"
                  value="registered_and_waiting_for_date"
                />
                დარეგისტრირებული ვარ და ველოდები რიცხვს
              </label>
              <label>
                <input
                  type="radio"
                  name="vaccine-status"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="waitingFor"
                  value="not_planning"
                />
                არ ვგეგმავ
              </label>
              <label>
                <input
                  type="radio"
                  name="vaccine-status"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showLinkHandler"
                  v-model="waitingFor"
                  value="had_covid_and_planning"
                />
                გადატანილი მაქვს და ვგეგმავ აცრას
              </label>
            </div>
          </form>
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
      <div class="relative">
        <img src="@/assets/images/doctor.png" alt="" class="mt-6"/>
        <transition name="slide-in" appear>
          <img
            src="@/assets/logos/vaccineLogo.png"
            alt=""
            class="absolute top-0 mb-10 left-8 opacity-60"
          />
        </transition>
      </div>
    </main>
    <div class="flex items-center justify-center space-x-28 mt-16">
      <router-link :to="{ name: 'survey' }">
        <img src="@/assets/images/previous.png" alt="" />
      </router-link>

      <router-link :to="{ name: 'tips' }">
        <img src="@/assets/images/next.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const covidVaccine = ref(localStorage.getItem('had_vaccine') || null);
const showForYes = ref(false);
const showForNo = ref(false);
const showLink = ref(false);

const vaccinatedlevel = ref(
  localStorage.getItem('vaccination_stage') || null
);

const waitingFor = ref(localStorage.getItem('waiting_for') || null);

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

const radioButtonHandler = (e) => {
  covidVaccine.value = e.target.value;
  localStorage.setItem('had_vaccine', covidVaccine.value);
};

const levelHandler = (e) => {
  vaccinatedlevel.value = e.target.value;
  localStorage.setItem('vaccination_stage', vaccinatedlevel.value);
};

const waitingForHandler = (e) => {
  waitingFor.value = e.target.value;
  localStorage.setItem('waiting_for', waitingFor.value);
};

const isValid = () => {
  if (
    covidVaccine.value === 'yes' &&
    vaccinatedlevel.value !== null
  ) {
    return true;
  } else if (
    covidVaccine.value === 'no' &&
    vaccinatedlevel.value !== null
  ) {
    return true;
  } else {
    return false;
  }
};
onBeforeRouteLeave((to, _, next) => {
  if (to.path === '/tips' && !isValid()) {
    next(false);
  } else {
    next();
  }
});
</script>

<style>
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.8s ease, opacity 0.6s ease;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translatex(-40%) scale(0.6) translateY(55%);
  opacity: 0;
}

.slide-in-enter-to,
.slide-in-leave-from {
  transform: translatex(0);
  opacity: 0.6;
}
</style>
