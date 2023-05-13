<template>
  <div class="py-24 px-44">
    <Header :count="'4/4'" />

    <main class="flex justify-between">
      <form
        action=""
        class="mt-16 space-y-10 tracking-wide"
        @click="meetingHandler"
      >
        <p class="w-[500px] tracking-wide font-xl mt-14">
          რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია.
          გარემო, რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის
          და ყოფილა წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის
          მიზეზი, ბევრისთვის კი — ჩვენთან გადმოსვლის. <br />
          <br />
          პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ
          და ყოველდღიური კომუნიკაციაც გაიშვიათდა.
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
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="nonFormalMeeting"
                value="twice_a_week"
              />
              კვირაში ორჯერ
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="nonFormalMeeting"
                value="once_a_week"
              />
              კვირაში ერთხელ
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="nonFormalMeeting"
                value="once_in_two_weeks"
              />
              ორ კვირაში ერთხელ
            </label>
            <label>
              <input
                type="radio"
                name="covid-status"
                class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
                v-model="nonFormalMeeting"
                value="once_a_month"
              />
              თვეში ერთხელ
            </label>
          </div>
        </div>
      </form>
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
      <form action="" @click="attendanceHandler">
        <label for="" class="font-bold text-lg w-80"
          >კვირაში რამდენი დღე ისურვებდი ოფისიდან
          <br />მუშაობას?*</label
        >
        <div
          class="flex flex-col mt-6 space-y-1 text-lg tracking-wider w-60"
        >
          <label>
            <input
              type="radio"
              name="covid-status"
              class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              v-model="attendance"
              value="0"
            />
            0
          </label>
          <label>
            <input
              type="radio"
              name="covid-status"
              class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              v-model="attendance"
              value="1"
            />
            1
          </label>
          <label>
            <input
              type="radio"
              name="covid-status"
              class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              v-model="attendance"
              value="2"
            />
            2
          </label>
          <label>
            <input
              type="radio"
              name="covid-status"
              class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              v-model="attendance"
              value="3"
            />
            3
          </label>
          <label>
            <input
              type="radio"
              name="covid-status"
              class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              v-model="attendance"
              value="4"
            />
            4
          </label>

          <label>
            <input
              type="radio"
              name="covid-status"
              class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
              v-model="attendance"
              value="5"
            />
            5
          </label>
        </div>
      </form>
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
          რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
          შეცვლიდი?</label
        >
        <textarea
          class="py-12 resize-none mt-2"
          v-model="opnionAboutUs"
          @blur="opnionAboutUsHandler"
        />
        <button @click="submit">click</button>
      </div>
      <button
        class="px-6 py-3 bg-[#208298] text-white font-bold rounded-full flex align-center justify-center mt-10 ml-auto"
      >
        დასრულება
      </button>
    </div>
    <router-link :to="{ name: 'vaccine' }">
      <img
        src="@/assets/images/previous.png"
        alt=""
        class="mx-auto mt-20"
      />
    </router-link>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { ref } from 'vue';
import { useStore } from 'vuex';
const store = useStore();

const nonFormalMeeting = ref(
  localStorage.getItem('non_formal_meeting') || null
);

const attendance = ref(localStorage.getItem('attendance') || null);

const meetingsInLive = ref(
  localStorage.getItem('what_about_meetings_in_live') || null
);
const opnionAboutUs = ref(
  localStorage.getItem('tell_us_your_opinion_about_us') || null
);

const submit = () => {
  store.commit('tips/setNonFormalMeeting', nonFormalMeeting.value);
  store.commit('tips/setAttendance', attendance.value);
  store.commit('tips/setMeetingsInLive', meetingsInLive.value);
  store.commit('tips/setOpnionAboutUs', opnionAboutUs.value);
}

// const meetingHandler = (e) => {
//   nonFormalMeeting.value = e.target.value;
//   localStorage.setItem('non_formal_meeting', nonFormalMeeting.value);
// };

// const attendanceHandler = (e) => {
//   attendance.value = e.target.value;
//   localStorage.setItem('attendance', attendance.value);
// };

// const meetingsInLiveHandler = (e) => {
//   meetingsInLive.value = e.target.value;
//   localStorage.setItem(
//     'what_about_meetings_in_live',
//     meetingsInLive.value
//   );
// };
// const opnionAboutUsHandler = (e) => {
//   opnionAboutUs.value = e.target.value;
//   localStorage.setItem(
//     'tell_us_your_opinion_about_us',
//     opnionAboutUs.value
//   );
// };
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
