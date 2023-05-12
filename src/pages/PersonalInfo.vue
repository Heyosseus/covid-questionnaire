<template>
  <div class="py-24 px-44">
    <Header :count="'1/4'" />
    <main class="flex justify-between">
      <div class="h-[512px] mt-20">
        <Form
          @submit="submit"
          class="flex flex-col w-[513px] tracking-wide"
        >
          <label for="name" class="font-bold">სახელი*</label>
          <Field
            type="text"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="იოსებ"
            id="name"
            name="name"
            v-model="name"
            rules="required|alpha|min:3|max:255"
            @focus="setLocale('ka')"
          />

          <ErrorMessage name="name" class="text-red-500 mt-1 ml-4" />

          <label for="surname" class="font-bold mt-6">გვარი*</label>
          <Field
            type="text"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="ჯუღაშვილი"
            v-model="surname"
            name="surname"
            rules="required|min:3|max:255"
            @blur="setLocale('ka')"
          />

          <ErrorMessage
            name="surname"
            class="text-red-500 mt-1 ml-4"
          />

          <label for="email" class="font-bold mt-6">მეილი*</label>
          <Field
            type="email"
            class="p-3 rounded border border-gray-300 mt-1 outline-0"
            placeholder="fbi@redberry.ge"
            id="email"
            name="email"
            rules="required|redberryEmail"
            @blur="setLocale('ka')"
            v-model="email_input"
          />

          <ErrorMessage name="email" class="text-red-500 mt-1 ml-4" />
        </Form>
        <div class="mt-24">
          <div class="h-[1px] w-64 bg-gray-500"></div>
          <p class="text-gray-500 mt-4">
            *-ით მონიშნული ველების შევსება <br />სავალდებულოა
          </p>
        </div>
      </div>
      <img
        src="@/assets/images/couple.png"
        alt=""
        class="w-[800px]"
      />
    </main>
    <!-- <router-link :to="{ name: 'survey' }"> -->
    <button @click="submit">
      <img
        src="@/assets/images/next.png"
        alt=""
        class="mx-auto mt-24"
      />
    </button>
    <!-- </router-link> -->
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as rules from '@/config/rules.js';
import * as messages from '@/config/messages.js';
import { setLocale } from '@vee-validate/i18n';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
components: {
  Header, Form, Field, ErrorMessage;
}
const store = useStore();
const router = useRouter();

const name = ref(localStorage.getItem('first_name') || '');
const surname = ref(localStorage.getItem('last_name') || '');
const email_input = ref(localStorage.getItem('email') || '');

const submit = () => {
  store.commit('setName', name.value);
  store.commit('setSurname', surname.value);
  store.commit('setEmail', email_input.value);
  router.push({ name: 'survey' });
};

// const isValid = () => {
//   return (
//     nameErrorMessage.value === undefined &&
//     name.value !== '' &&
//     surnameErrorMessage.value === undefined &&
//     surname.value !== '' &&
//     emailErrorMessage.value === undefined &&
//     email.value !== ''
//   );
// };

// onBeforeRouteLeave((to, _, next) => {
//   if (to.path === '/survey' && !isValid()) {
//     next(false);
//   } else {
//     localStorage.setItem('first_name', name.value);
//     localStorage.setItem('last_name', surname.value);
//     localStorage.setItem('email', email.value);
//     next();
//   }
// });
</script>

<style></style>
