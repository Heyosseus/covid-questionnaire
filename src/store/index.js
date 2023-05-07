import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      name: '',
      surname: '',
      email: '',
    };
  },
  mutations: {
    setName(state, name) {
      state.name = name;
      localStorage.setItem('name', name);
    },
    setSurname(state, surname) {
      state.surname = surname;
      localStorage.setItem('surname', surname);
    },
    setEmail(state, email) {
      state.email = email;
      localStorage.setItem('email', email);
    },
  },
});

export default store;
