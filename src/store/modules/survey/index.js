import { ref } from 'vue';

const surveyModule = {
  namespaced: true,
  state() {
    return {
      had_covid: ref(localStorage.getItem('had_covid') || ''),
      had_antibody_test: ref(
        localStorage.getItem('had_antibody_test') || ''
      ),
      antibodies: {
        number: ref(localStorage.getItem('number') || ''),
        test_date: ref(localStorage.getItem('test_date') || ''),
      },
      covid_sickeness_date: ref(
        localStorage.getItem('covid_sickness_date') || ''
      ),
    };
  },
  mutations: {
    setHadCovid(state, had_covid) {
      state.had_covid = had_covid;
      localStorage.setItem('had_covid', had_covid);
    },
    setHadAntibodyTest(state, had_antibody_test) {
      state.had_antibody_test = had_antibody_test;
      localStorage.setItem('had_antibody_test', had_antibody_test);
    },
    setAntibodies(state, antibodies) {
      state.antibodies = antibodies;
      localStorage.setItem('antibodies', JSON.stringify(antibodies));
    },

    setCovidSicknessDate(state, covid_sickness_date) {
      state.covid_sickness_date = covid_sickness_date;
      localStorage.setItem(
        'covid_sickness_date',
        covid_sickness_date
      );
    },
  },
};

export default surveyModule;
