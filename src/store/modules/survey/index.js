import { ref } from 'vue';

const surveyModule = {
  nammspaced: true,
  state() {
    return {
      had_covid: ref(localStorage.getItem('had_covid') || ''),
      had_antobody_test: ref(
        localStorage.getItem('had_antibody_test') || ''
      ),
      number: ref(localStorage.getItem('number') || ''),
      test_date: ref(localStorage.getItem('test_date') || ''),
    };
  },
  mutations: {
    setHadCovid(state, had_covid) {
      state.had_covid = had_covid;
      localStorage.setItem('had_covid', had_covid);
    },
    setHadAntibodyTest(state, had_antobody_test) {
      state.had_antobody_test = had_antobody_test;
      localStorage.setItem('had_antibody_test', had_antobody_test);
    },
    setNumber(state, number) {
      state.number = number;
      localStorage.setItem('number', number);
    },
    setTestDate(state, test_date) {
      state.test_date = test_date;
      localStorage.setItem('test_date', test_date);
    },
  },
};

export default surveyModule;
