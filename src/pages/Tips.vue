<template>
  <div class="py-24 px-44">
    <Header :count="'4/4'" />

    <Form
      action=""
      class="mt-16 space-y-10 tracking-wide"
      @submit="onSubmit"
    >
      <main class="flex justify-between">
        <div class="flex justify-between">
          <div>
            <p class="w-[500px] tracking-wide font-xl mt-14">
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული
              წევრია. გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით,
              ბევრისთვის არის და ყოფილა წლების განმავლობაში
              მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის კი —
              ჩვენთან გადმოსვლის. <br />
              <br />
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ
              პირისპირ და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
            <div>
              <label for="" class="font-bold text-lg w-80"
                >რა სიხშირით შეიძლება გვქონდეს საერთო <br />
                არაფორმალური ონლაინ შეხვედრები, სადაც ყველა
                <br />სურვილისამებრ ჩაერთვება?*</label
              >

              <div
                class="flex flex-col mt-6 space-y-1 text-lg tracking-wider w-60"
              >
                <label>
                  <Field
                    type="radio"
                    name="covid"
                    class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                    v-model="nonFormalMeeting"
                    value="twice_a_week"
                  />
                  კვირაში ორჯერ
                </label>
                <label>
                  <Field
                    type="radio"
                    name="covid"
                    class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                    v-model="nonFormalMeeting"
                    value="once_a_week"
                  />
                  კვირაში ერთხელ
                </label>
                <label>
                  <Field
                    type="radio"
                    name="covid"
                    class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                    v-model="nonFormalMeeting"
                    value="once_in_a_two_weeks"
                  />
                  ორ კვირაში ერთხელ
                </label>
                <label>
                  <Field
                    type="radio"
                    name="covid"
                    class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                    v-model="nonFormalMeeting"
                    value="once_in_a_month"
                  />
                  თვეში ერთხელ
                </label>
                <ErrorMessage
                  name="covid"
                  class="text-red-500 mt-1 ml-4"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="@/assets/images/bicycle.png"
            alt=""
            width="650"
            class="mt-14"
          />
          <transition name="slide-out-in" appear>
            <img
              src="@/assets/logos/tipsLogo.png"
              alt=""
              class="absolute top-24 left-20 opacity-70"
            />
          </transition>
        </div>
      </main>
      <div class="">
        <Form>
          <label for="" class="font-bold text-lg w-80"
            >კვირაში რამდენი დღე ისურვებდი ოფისიდან
            <br />მუშაობას?*</label
          >
          <div
            class="flex flex-col mt-6 space-y-1 text-lg tracking-wider w-60"
          >
            <label>
              <Field
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="attendance"
                value="0"
              />
              0
            </label>
            <label>
              <Field
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="attendance"
                value="1"
              />
              1
            </label>
            <label>
              <Field
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="attendance"
                value="2"
              />
              2
            </label>
            <label>
              <Field
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="attendance"
                value="3"
              />
              3
            </label>
            <label>
              <Field
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="attendance"
                value="4"
              />
              4
            </label>

            <label>
              <Field
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="attendance"
                value="5"
              />
              5
            </label>
          </div>
        </Form>
      </div>
      <div class="w-[522px]">
        <div class="flex flex-col mt-12">
          <label class="font-bold">
            რას ფიქრობ ფიზიკურ შეკრებებზე?</label
          >
          <textarea
            class="py-12 resize-none mt-2"
            v-model="meetingsInLive"
            @blur="meetingsInLiveHandler"
          />
        </div>
        <div class="flex flex-col w-[522px] mt-10">
          <label class="font-bold">
            რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი,
            რას შეცვლიდი?</label
          >
          <textarea
            class="py-12 resize-none mt-2"
            v-model="opnionAboutUs"
            @blur="opnionAboutUsHandler"
          />
        </div>
        <FinishButton
          class="px-6 py-3 bg-[#208298] text-white font-bold rounded-full flex align-center justify-center mt-10 ml-auto"
        >
          დასრულება
        </FinishButton>
      </div>
      <router-link :to="{ name: 'vaccine' }">
        <img
          src="@/assets/images/previous.png"
          alt=""
          class="mx-auto mt-20"
        />
      </router-link>
    </Form>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import FinishButton from '@/components/FinishButton.vue';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { setLocale } from '@vee-validate/i18n';
import { useRouter } from 'vue-router';
import axios, { all } from 'axios';
import * as rules from '@/config/rules.js';
import * as messages from '@/config/messages.js';

const store = useStore();
const router = useRouter();
const nonFormalMeeting = ref(
  localStorage.getItem('non_formal_meeting') || null
);

const attendance = ref(
  localStorage.getItem('number_of_days_from_office') || null
);

const meetingsInLive = ref(
  localStorage.getItem('what_about_meetings_in_live') || ''
);
const opnionAboutUs = ref(
  localStorage.getItem('tell_us_your_opinion_about_us') || ''
);
const antibodies = JSON.parse(localStorage.getItem('antibodies'));
const onSubmit = () => {
  store.commit('tips/setNonFormalMeeting', nonFormalMeeting.value);
  store.commit('tips/setAttendance', attendance.value);
  store.commit('tips/setMeetingsInLive', meetingsInLive.value);
  store.commit('tips/setOpnionAboutUs', opnionAboutUs.value);
  const data = {
    first_name: localStorage.getItem('first_name'),
    last_name: localStorage.getItem('last_name'),
    email: localStorage.getItem('email'),
    had_covid: localStorage.getItem('had_covid'),
    had_antibody_test:
      localStorage.getItem('had_covid') === 'yes'
        ? localStorage.getItem('had_antibody_test')
        : undefined,
    had_vaccine: JSON.parse(localStorage.getItem('had_vaccine')),
    covid_sickness_date:
      localStorage.getItem('had_antibody_test') === false
        ? localStorage.getItem('covid_sickness_date')
        : undefined,
    antibodies: {
      test_date:
        antibodies && antibodies.test_date
          ? antibodies.test_date
          : undefined,
      number:
        antibodies && antibodies.number
          ? antibodies.number
          : undefined,
    },
    vaccination_stage:
      localStorage.getItem('had_vaccine') === 'true'
        ? localStorage.getItem('vaccination_stage')
        : undefined,
    i_am_waiting:
      localStorage.getItem('had_vaccine') === 'false'
        ? localStorage.getItem('i_am_waiting')
        : undefined,

    non_formal_meetings: localStorage.getItem('non_formal_meeting'),

    number_of_days_from_office: localStorage.getItem(
      'number_of_days_from_office'
    ),
    what_about_meetings_in_live: localStorage.getItem(
      'what_about_meetings_in_live'
    ),
    tell_us_your_opinion_about_us: localStorage.getItem(
      'tell_us_your_opinion_about_us'
    ),
  };
  Object.keys(data).forEach((key) => {
    if (data[key] === undefined) {
      delete data[key];
    }
  });

  axios
    .post('https://covid19.devtest.ge/api/create', data)
    .then((response) => {
      if (response.status === 201) {
        console.log('Record created successfully!');
        router.push({ name: 'thanks' });
        localStorage.clear();
      }
    })
    .catch((error) => {
      if (error.response && error.response.status === 422) {
        console.log('Unprocessable Entity Error');
        console.log(error.response.data); // Log the error response data
      } else {
        console.log('Other Error');
        console.log(error);
      }
    });
};
</script>

<style>
.slide-out-in-enter-active,
.slide-out-in-leave-active {
  transition: transform 1s ease, opacity 1s ease;
}

.slide-out-in-enter-from,
.slide-out-in-leave-to {
  transform: translatex(5%) scale(1.2) translateY(-25%);
  opacity: 0;
}

.slide-out-in-enter-to,
.slide-out-in-leave-from {
  transform: translatex(0);
  opacity: 0.7;
}
</style>
