<template>
  <div class="py-24 px-44">
    <Header :count="'2/4'" />
    <main class="flex justify-between">
      <div class="flex-col">
        <form
          class="mt-16 space-y-10 tracking-wide"
          @click="covidStatusHandler"
        >
          <div>
            <label for="" class="font-bold text-lg"
              >გაქვს გადატანილი Covid-19?*</label
            >

            <div
              class="flex flex-col mt-6 space-y-1 text-lg font-bold w-36"
            >
              <label for="status-yes">
                <input
                  type="radio"
                  name="covid-status"
                  id="status-yes"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showAntiTest"
                  v-model="covidStatus"
                  value="yes"
                />
                კი
              </label>
              <label for="status-no">
                <input
                  type="radio"
                  name="covid-status"
                  id="status-no"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="covidStatus"
                  value="no"
                />
                არა
              </label>
              <label for="status-Ihave">
                <input
                  type="radio"
                  name="covid-status"
                  id="status-Ihave"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="covidStatus"
                  value="Ihave"
                />
                ახლა მაქვს
              </label>
            </div>
          </div>
          <!--  -->
        </form>
        <div v-if="showAnti" class="mt-10">
          <form action="" @click="vaccineStatusHandler">
            <label for="" class="font-bold text-lg mt-6"
              >ანტისხეულების ტესტი გაკეთებული გაქვს?*</label
            >

            <div
              class="flex flex-col mt-6 space-y-1 text-lg font-bold w-36"
            >
              <label for="vaccine-status-yes">
                <input
                  type="radio"
                  name="vaccine-status"
                  id="vaccine-status-yes"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showNum"
                  v-model="vaccineStatus"
                  value="true"
                />
                კი
              </label>
              <label for="vaccine-status-no">
                <input
                  type="radio"
                  name="vaccine-status"
                  id="vaccine-status-no"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showAntiTestDate"
                  v-model="vaccineStatus"
                  value="false"
                />
                არა
              </label>
            </div>
          </form>
        </div>
        <!--  -->
        <div v-if="date" class="flex flex-col mt-10">
          <form action="">
            <label for="" class="font-bold text-lg mt-6"
              >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
              როდის გქონდა Covid-19*</label
            >
            <input type="date" class="w-96 mt-6" />
          </form>
        </div>

        <div v-if="num" class="flex flex-col mt-10">
          <form action="" @click="antibodiesHandler">
            <label for="" class="font-bold text-lg mt-6"
              >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />
              რიცხვი და ანტისხეულების რაოდენობა*</label
            >
            <input
              type="date"
              class="w-96 mt-6"
              placeholder="რიცხვი"
              v-model="number"
            />
            <input
              type="number"
              class="w-96 mt-6"
              placeholder="ანტისხეულების რაოდენობა"
              v-model="testDate"
            />
          </form>
        </div>
      </div>
      <img src="@/assets/images/gumBoy.png" alt="" width="900" />
    </main>
    <div class="flex items-center justify-center space-x-28">
      <router-link :to="{ name: 'personal' }">
        <img src="@/assets/images/previous.png" alt="" />
      </router-link>
      <router-link :to="{ name: 'vaccine' }">
        <img src="@/assets/images/next.png" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref, watch } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';

const covidStatus = ref(localStorage.getItem('had_covid') || null);
const vaccineStatus = ref(
  localStorage.getItem('had_antibody_test') || null
);

const testDate = ref(localStorage.getItem('test_date') || null);
const number = ref(localStorage.getItem('number') || null);

const showAnti = ref(false);
const date = ref(false);
const num = ref(false);
const showAntiTest = () => {
  showAnti.value = true;
};
const showAntiTestDate = () => {
  date.value = true;
  num.value = false;
};

const showNum = () => {
  num.value = true;
  date.value = false;
};

const covidStatusHandler = (e) => {
  covidStatus.value = e.target.value;
  localStorage.setItem('had_covid', covidStatus.value);
  console.log(covidStatus.value);
};

const vaccineStatusHandler = (e) => {
  vaccineStatus.value = e.target.value;
  localStorage.setItem('had_antibody_test', vaccineStatus.value);
  console.log(vaccineStatus.value);
};

const antibodiesHandler = () => {
  localStorage.setItem('number', number.value);
  localStorage.setItem('test_date', testDate.value);
};

const isValid = () => {
  if (covidStatus.value === 'no' || covidStatus.value === 'Ihave') {
    return true;
  } else if (
    covidStatus.value === 'yes' &&
    vaccineStatus.value === 'true'
  ) {
    return true;
  } else {
    return false;
  }
};

onBeforeRouteLeave((to, _, next) => {
  if (to.path === '/vaccine' && !isValid()) {
    next(false);
  } else {
    next();
  }
});
</script>

<style></style>
