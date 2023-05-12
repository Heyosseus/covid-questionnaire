import { createStore } from 'vuex';
import { ref } from 'vue';
import surveyModules from './modules/survey/index.js';
const store = createStore({
  state() {
    return {
      name: localStorage.getItem('first_name') || '',
      surname: localStorage.getItem('last_name') || '',
      email_input: localStorage.getItem('email') || '',
    };
  },
  mutations: {
    setName(state, name) {
      state.name = name;
      localStorage.setItem('first_name', name);
    },
    setSurname(state, surname) {
      state.surname = surname;
      localStorage.setItem('last_name', surname);
    },
    setEmail(state, email) {
      state.email = email;
      localStorage.setItem('email', email_input);
    },
  },
  modules: surveyModules,
});

export default store;
