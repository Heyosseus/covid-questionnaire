import { ref } from 'vue';

const vaccineModule = {
  namespaced: true,
  state() {
    return {
      had_vaccine: ref(localStorage.getItem('had_vaccine') || ''),
      vaccination_stage: ref(
        localStorage.getItem('vaccination_stage') || ''
      ),
      waiting_for: ref(localStorage.getItem('i_am_waiting') || ''),
    };
  },
  mutations: {
    setVaccine(state, had_vaccine) {
      state.had_vaccine = had_vaccine;
      localStorage.setItem('had_vaccine', had_vaccine);
    },
    setVaccinationStage(state, vaccination_stage) {
      state.vaccination_stage = vaccination_stage;
      localStorage.setItem('vaccination_stage', vaccination_stage);
    },
    setWaitingFor(state, waiting_for) {
      state.waiting_for = waiting_for;
      localStorage.setItem('i_am_waiting', waiting_for);
    },
  },
};

export default vaccineModule;
