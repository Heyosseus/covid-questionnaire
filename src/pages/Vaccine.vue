<template>
  <div class="py-24 px-44">
    <BaseHeader :count="'3/4'" />

    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      class="mt-16 space-y-10 tracking-wide"
    >
      <main class="flex justify-between">
        <div class="flex-col">
          <div>
            <label class="font-bold text-lg">უკვე აცრილი ხარ?*</label>

            <div
              class="flex flex-col mt-6 space-y-2 text-lg font-semibold w-36"
            >
              <label for="vaccine-yes">
                <Field
                  type="radio"
                  name="vaccine"
                  id="vaccine-yes"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showLevelHandlerForYes"
                  v-model="covidVaccine"
                  value="true"
                />
                კი
              </label>
              <label for="vaccine-no">
                <Field
                  type="radio"
                  name="vaccine"
                  id="vaccine-no"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showLevelHandlerForNo"
                  v-model="covidVaccine"
                  value="false"
                />
                არა
              </label>
            </div>
            <!-- <ErrorMessage
              name="vaccine"
              class="text-red-500 mt-1 ml-4"
            /> -->
          </div>

          <div v-if="showForYes" class="mt-10">
            <!-- <Form> -->
            <label class="font-bold text-lg mt-6"
              >აირჩიე რა ეტაპზე ხარ*</label
            >

            <div
              class="flex flex-col mt-6 space-y-2 text-lg font-bold w-[600px]"
            >
              <label for="first_and_registered">
                <Field
                  type="radio"
                  name="vaccine-level"
                  id="first_and_registered"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="vaccinatedlevel"
                  value="first_dosage_and_registered_on_the_second"
                />
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </label>
              <label for="vaccinated">
                <Field
                  type="radio"
                  name="vaccine-level"
                  id="vaccinated"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="vaccinatedlevel"
                  value="fully_vaccinated"
                />
                სრულად აცრილი ვარ
              </label>
              <label for="first_and_not_registered">
                <Field
                  type="radio"
                  name="vaccine-level"
                  id="first_and_not_registered"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showLinkHandler"
                  v-model="vaccinatedlevel"
                  value="first_dosage_and_not_registered_yet"
                />
                პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
              </label>

              <ErrorMessage
                name="vaccine-level"
                class="text-red-500 mt-1 ml-4"
              />
            </div>
            <!-- </Form> -->
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
            <Form>
              <label class="font-bold text-lg mt-6"
                >რას ელოდები?*</label
              >
              <div
                class="flex flex-col mt-6 space-y-2 text-lg font-bold w-[500px]"
              >
                <label>
                  <Field
                    type="radio"
                    name="vaccine-status"
                    class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                    v-model="waitingFor"
                    value="registered_and_waiting"
                  />
                  დარეგისტრირებული ვარ და ველოდები რიცხვს
                </label>
                <label>
                  <Field
                    type="radio"
                    name="vaccine-status"
                    class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                    v-model="waitingFor"
                    value="not_planning"
                  />
                  არ ვგეგმავ
                </label>
                <label>
                  <Field
                    type="radio"
                    name="vaccine-status"
                    class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                    @click="showLinkHandlerForNo"
                    v-model="waitingFor"
                    value="had_covid_and_planning_to_be_vaccinated"
                  />
                  გადატანილი მაქვს და ვგეგმავ აცრას
                </label>
              </div>
            </Form>
          </div>
          <div
            v-if="showLinkForNo"
            class="mt-16 font-semibold text-lg ml-6"
          >
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
          <img src="@/assets/images/doctor.png" alt="" class="mt-6" />
          <transition name="slide-in" appear>
            <icon-vaccine
              class="absolute top-0 mb-10 left-8 opacity-60"
            ></icon-vaccine>
          </transition>
        </div>
      </main>

      <div class="flex justify-center items-center space-x-20">
        <div>
          <router-link :to="{ name: 'survey' }">
            <icon-previous-button></icon-previous-button>
          </router-link>
        </div>
        <CustomButton type="submit"></CustomButton>
      </div>
    </Form>
  </div>
</template>

<script setup>
import BaseHeader from '@/components/BaseHeader.vue';
import CustomButton from '@/components/CustomButton.vue';
import IconVaccine from '../components/icons/IconVaccine.vue';
import IconPreviousButton from '../components/icons/IconPreviousButton.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const showForYes = ref(false);
const showForNo = ref(false);
const showLink = ref(false);
const showLinkForNo = ref(false);

const showLevelHandlerForYes = () => {
  showForYes.value = true;
  showForNo.value = false;
  localStorage.setItem('had_vaccine', true);
};
const showLevelHandlerForNo = () => {
  showForNo.value = true;
  showForYes.value = false;
  localStorage.setItem('had_vaccine', false);
};
const showLinkHandler = () => {
  showLink.value = true;
  showLinkForNo.value = false;
};
const showLinkHandlerForNo = () => {
  showLinkForNo.value = true;
  showLink.value = false;
};

const covidVaccine = ref(localStorage.getItem('had_vaccine') || '');

const waitingFor = ref(localStorage.getItem('i_am_waiting') || '');

const vaccinatedlevel = ref(
  localStorage.getItem('vaccination_stage') || null
);
const schema = {
  vaccine: (value) => {
    if (value) {
      return true;
    }
    return 'ეს ველი სავალდებულოა';
  },
};

const onSubmit = () => {
  store.commit('vaccine/setVaccine', covidVaccine.value);
  store.commit('vaccine/setVaccinationStage', vaccinatedlevel.value);
  store.commit('vaccine/setWaitingFor', waitingFor.value);
  console.log(waitingFor.value);
  router.push({ name: 'tips' });
};
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
