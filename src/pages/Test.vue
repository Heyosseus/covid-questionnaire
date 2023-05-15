  <template>
    <div class="py-24 px-44">
      <Header :count="'3/4'" />

      <Form
        :validation-schema="schema"
        @submit="onSubmit"
        class="mt-16 space-y-10 tracking-wide"
      >
        <label for="vaccine-yes">
          <Field
            type="radio"
            name="vaccine"
            id="vaccine-yes"
            class="form-radio text-black checked:ring-0 focus:ring-0 rounded-full outline-none"
            @click="showLevelHandlerForYes"
            v-model="covidVaccine"
            :value="true"
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
            :value="false"
          />
          არა
        </label>
        <button @submit="onSubmit">click</button>
      </Form>
    </div>
  </template>

  <script setup>
  import Header from '@/components/Header.vue';
  import CustomButton from '@/components/CustomButton.vue';
  import { Field, Form, ErrorMessage } from 'vee-validate';
  import * as rules from '@/config/rules.js';
  import * as messages from '@/config/messages.js';
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
  };
  const showLevelHandlerForNo = () => {
    showForNo.value = true;
    showForYes.value = false;
  };
  const showLinkHandler = () => {
    showLink.value = true;
    showLinkForNo.value = false;  
  };
  const showLinkHandlerForNo = () => {
    showLinkForNo.value = true;
    showLink.value = false;
  };

  // const covidVaccine = ref(localStorage.getItem('had_vaccine') || '');

  const storedVaccineStatus = localStorage.getItem('vaccineStatus');
  
  const covidVaccine = storedVaccineStatus
    ? JSON.parse(storedVaccineStatus)
    : null;

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

  const waitingFor = ref(localStorage.getItem('waiting_for') || null);

  const onSubmit = () => {
    localStorage.setItem('vaccineStatus', JSON.stringify(covidVaccine.value));
    console.log(covidVaccine.value)
    store.commit('vaccine/setVaccinationStage', vaccinatedlevel.value);
    store.commit('vaccine/setWaitingFor', waitingFor.value);
    router.push({ name: 'tips' });
  };
  </script>


