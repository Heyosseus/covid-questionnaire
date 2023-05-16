<template>
  <Form @submit="onSubmit" class="tracking-wide">
    <main class="flex justify-between">
      <div class="flex flex-col w-[512px] mt-20">
        <label for="name" class="font-bold">სახელი*</label>
        <Field
          type="text"
          name="name"
          class="p-3 rounded border border-gray-300 mt-1 outline-0"
          placeholder="იოსებ"
          id="name"
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

        <ErrorMessage name="surname" class="text-red-500 mt-1 ml-4" />
        <label for="email" class="font-bold mt-6">მეილი*</label>
        <Field
          type="email"
          name="email"
          class="p-3 rounded border border-gray-300 mt-1 outline-0"
          placeholder="fbi@redberry.ge"
          id="email"
          rules="required|redberryEmail"
          @blur="setLocale('ka')"
          v-model="email_input"
        />

        <ErrorMessage name="email" class="text-red-500 mt-1 ml-4" />

        <div class="mt-24">
          <div class="h-[1px] w-64 bg-gray-500"></div>
          <p class="text-gray-500 mt-4">
            *-ით მონიშნული ველების შევსება <br />სავალდებულოა
          </p>
        </div>
      </div>

      <div class="relative">
        <img
          src="@/assets/images/couple.png"
          class="w-[800px] z-20"
        />
        <transition name="slide" appear key="personal">
          <img
            src="@/assets/logos/personalLogo.png"
            alt=""
            class="absolute top-48 left-20 opacity-80 z-10"
          />
        </transition>
      </div>
    </main>
    <div class="flex justify-center items-center">
      <CustomButton type="submit">click</CustomButton>
    </div>
  </Form>
</template>

<script setup>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { setLocale } from '@vee-validate/i18n';
import { ref } from 'vue';
import CustomButton from '@/components/CustomButton.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
components: {
  Form, Field, ErrorMessage, CustomButton;
}
props: ['name', 'surname', 'email_input'];

const store = useStore();
const router = useRouter();

const name = ref(localStorage.getItem('first_name') || '');
const surname = ref(localStorage.getItem('last_name') || '');
const email_input = ref(localStorage.getItem('email') || '');

const onSubmit = () => {
  store.commit('setName', name.value);
  store.commit('setSurname', surname.value);
  store.commit('setEmail', email_input.value);
  router.push({ name: 'survey' });
};
</script>
