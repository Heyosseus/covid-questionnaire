<template>
  <div class="py-24 px-44">
    <BaseHeader :count="'2/4'" />

    <Form
      :validation-schema="schema"
      @submit="onSubmit"
      class="mt-8 tracking-wide"
    >
      <main class="flex justify-between">
        <div class="flex-col">
          <div>
            <label class="font-bold text-lg">გაქვს გადატანილი Covid-19?*</label>
            <div class="flex flex-col mt-6 space-y-1 text-lg font-bold w-36">
              <label for="status-yes">
                <Field
                  type="radio"
                  name="status"
                  id="status-yes"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showAntiTest"
                  v-model="covidStatus"
                  value="yes"
                  rules="required"
                />
                კი
              </label>
              <label for="status-no">
                <Field
                  type="radio"
                  name="status"
                  id="status-no"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="covidStatus"
                  value="no"
                  @click="clickHandler"
                />
                არა
              </label>
              <label for="status-Ihave">
                <Field
                  type="radio"
                  name="status"
                  id="status-Ihave"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  v-model="covidStatus"
                  value="have_right_now"
                  @click="clickHandler"
                />
                ახლა მაქვს
              </label>
            </div>
            <ErrorMessage name="status" class="text-red-500 mt-1 ml-4" />
          </div>
          <div v-if="showAnti" class="mt-10">
            <label class="font-bold text-lg mt-6"
              >ანტისხეულების ტესტი გაკეთებული გაქვს?*</label
            >

            <div class="flex flex-col mt-6 space-y-1 text-lg font-bold w-36">
              <label for="vaccine-status-yes">
                <Field
                  type="radio"
                  name="vaccine-status"
                  id="vaccine-status-yes"
                  class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                  @click="showNum"
                  v-model="vaccineStatus"
                  value="true"
                  rules="required"
                />
                კი
              </label>
              <label for="vaccine-status-no">
                <Field
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
          </div>

          <div v-if="date" class="flex flex-col mt-4">
            <div class="flex flex-col">
              <label class="font-bold text-lg mt-6"
                >მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) <br />
                როდის გქონდა Covid-19*</label
              >
              <Field
                type="date"
                class="w-96 mt-6"
                placeholder="დდ/თთ/წწ"
                @focus="setLocale('ka')"
                @blur="clickHandler"
                name="sickness"
                v-model="sicknessDate"
                rules="required"
              />
              <ErrorMessage name="sickness" class="text-red-500 mt-2 ml-4" />
              <Field class="hidden" name="sickness" />
            </div>
          </div>

          <div v-if="num" class="flex flex-col mt-10">
            <label for="" class="font-bold text-lg"
              >თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი <br />
              რიცხვი და ანტისხეულების რაოდენობა*</label
            >
            <br />
            <Field
              type="text"
              class="w-96 mt-6"
              placeholder="რიცხვი"
              v-model="number"
              name="testNum"
              rules="required"
            />

            <br />
            <Field
              type="date"
              class="w-96 mt-6"
              placeholder="ანტისხეულების რაოდენობა"
              v-model="testDate"
              name="test"
            />
          </div>
        </div>
        <div class="relative">
          <img src="@/assets/images/gumBoy.png" alt="" width="900" />
          <transition name="slide-out" appear key="survey">
            <icon-survey
              class="absolute bottom-96 left-16 opacity-80 z-30"
            ></icon-survey>
          </transition>
        </div>
      </main>
      <div class="flex justify-center items-center space-x-20">
        <div class="">
          <router-link :to="{ name: 'personal' }">
            <icon-previous-button></icon-previous-button>
          </router-link>
        </div>
        <CustomButton type="submit">click</CustomButton>
      </div>
    </Form>
  </div>
</template>

<script setup>
import BaseHeader from "@/components/BaseHeader.vue";
import CustomButton from "../components/CustomButton.vue";
import IconSurvey from "../components/icons/IconSurvey.vue";
import IconPreviousButton from "../components/icons/IconPreviousButton.vue";
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import { setLocale } from "@vee-validate/i18n";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const covidStatus = ref(localStorage.getItem("had_covid") || "");

const vaccineStatus = ref(localStorage.getItem("had_antibody_test") || "");

const testDate = ref("");
const number = ref("");

onMounted(() => {
  const storedAntibodies = localStorage.getItem("antibodies");
  const antibodies = storedAntibodies ? JSON.parse(storedAntibodies) : null;

  if (antibodies) {
    testDate.value = antibodies.test_date || "";
    number.value = antibodies.number || "";
  }

  const storedShowAnti = localStorage.getItem("showAnti");
  const storedDate = localStorage.getItem("date");
  const storedNum = localStorage.getItem("num");

  showAnti.value = storedShowAnti === "true";
  date.value = storedDate === "true";
  num.value = storedNum === "true";
});

const sicknessDate = ref(localStorage.getItem("covid_sickness_date") || "");
const showAnti = ref(false);
const date = ref(false);
const num = ref(false);

const showAntiTest = () => {
  showAnti.value = true;
  localStorage.setItem("showAnti", "true");
  localStorage.setItem("date", "false");
  localStorage.setItem("num", "false");
};
const showAntiTestDate = () => {
  date.value = true;
  num.value = false;
  localStorage.setItem("showAnti", "true");
  localStorage.setItem("date", "true");
  localStorage.setItem("num", "false");
};

const showNum = () => {
  num.value = true;
  date.value = false;
  localStorage.setItem("showAnti", "true");
  localStorage.setItem("date", "false");
  localStorage.setItem("num", "true");
};

const clickHandler = () => {
  showAnti.value = false;
  localStorage.setItem("showAnti", "false");
  date.value = false;
  localStorage.setItem("date", "false");
  num.value = false;
  localStorage.setItem("num", "false");
};

const schema = {
  status: (value) => {
    if (value) {
      return true;
    }

    return "ეს ველი სავალდებულოა";
  },
};

const onSubmit = () => {
  store.commit("survey/setHadCovid", covidStatus.value);
  store.commit("survey/setHadAntibodyTest", vaccineStatus.value);
  store.commit("survey/setCovidSicknessDate", sicknessDate.value);
  const antibodies = {
    test_date: testDate.value || null,
    number: number.value || null,
  };
  localStorage.setItem("antibodies", JSON.stringify(antibodies));
  router.push({ name: "vaccine" });
};
</script>

<style>
.slide-out-enter-active,
.slide-out-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.slide-out-enter-from,
.slide-out-leave-to {
  transform: translatex(65%) scale(0.8) translateY(-45%);
  opacity: 0;
}

.slide-out-enter-to,
.slide-out-leave-from {
  transform: translatex(0);
  opacity: 0.8;
}
</style>
