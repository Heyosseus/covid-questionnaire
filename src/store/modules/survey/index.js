const surveyModules = {
  state() {
    return {
      covidStatus: '',
      vaccineStatus: '',
      testDate: '',
      number: '',
    };
  },
  getters: {
    getCovidStatus(state) {
      return state.covidStatus;
    },
  },
  mutations: {
    setCovidStatus(state, covidStatus) {
      state.covidStatus = covidStatus;
    },
    setVaccineStatus(state, vaccineStatus) {
      state.vaccineStatus = vaccineStatus;
    },
    setTestDate(state, testDate) {
      state.testDate = testDate;
    },
    setNumber(state, number) {
      state.number = number;
    },
  },
};

export default surveyModules;
