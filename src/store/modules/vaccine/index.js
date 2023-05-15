import { ref } from 'vue';

const vaccineModule = {
  namespaced: true,
  state() {
    return {
      had_vaccine: ref(localStorage.getItem('had_vaccine') || ''),
      vaccination_stage: ref(
        localStorage.getItem('vaccination_stage') || ''
      ),
      waiting_for: ref(localStorage.getItem('waiting_for') || ''),
    };
  },
  mutations: {
    setVaccine(state, had_vaccine) {
      state.had_vaccine = had_vaccine;
      localStorage.setItem(
        'had_vaccine',
        JSON.stringify(had_vaccine)
      );
    },
    setVaccinationStage(state, vaccination_stage) {
      state.vaccination_stage = vaccination_stage;
      localStorage.setItem('vaccination_stage', vaccination_stage);
    },
    setWaitingFor(state, waiting_for) {
      state.waiting_for = waiting_for;
      localStorage.setItem('waiting_for', waiting_for);
    },
  },
};

export default vaccineModule;
