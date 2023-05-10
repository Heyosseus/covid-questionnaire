import { createStore } from 'vuex';
import { ref } from 'vue';
import surveyModules from './modules/survey/index.js';
const store = createStore({
  state() {},
  modules: surveyModules,
});

export default store;
