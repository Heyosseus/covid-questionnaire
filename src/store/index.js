import { ref } from 'vue';
import { createStore } from 'vuex';
import surveyModule from './modules/survey/index';

const store = createStore({
  state() {
    return {
      name: ref(localStorage.getItem('first_name') || ''),
      surname: ref(localStorage.getItem('last_name') || ''),
      email_input: ref(localStorage.getItem('email') || ''),
    }},
     mutations: {
    setName(state, name) {
      state.name = name;
      localStorage.setItem('first_name', name);
    },
    setSurname(state, surname) {
      state.surname = surname;
      localStorage.setItem('last_name', surname);
    },
    setEmail(state, email_input) {
      state.email_input = email_input;
      localStorage.setItem('email', email_input);
    },
  },
  modules: {
    survey: surveyModule,
  },
    }


);

export default store;
