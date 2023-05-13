import { ref } from 'vue';

const tipsModule = {
  namespaced: true,
  state() {
    return {
      non_formal_meeting: ref(
        localStorage.getItem('non_formal_meeting') || ''
      ),
      attendance: ref(localStorage.getItem('attendance') || ''),
      meetingsInLive: ref(
        localStorage.getItem('what_about_meetings_in_live') || ''
      ),
      opnionAboutUs: ref(
        localStorage.getItem('tell_us_your_opinion_about_us') || ''
      ),
    };
  },
  mutations: {
    setNonFormalMeeting(state, non_formal_meeting) {
      state.non_formal_meeting = non_formal_meeting;
      localStorage.setItem('non_formal_meeting', non_formal_meeting);
    },
    setAttendance(state, attendance) {
      state.attendance = attendance;
      localStorage.setItem('attendance', attendance);
    },
    setMeetingsInLive(state, meetingsInLive) {
      state.meetingsInLive = meetingsInLive;
      localStorage.setItem(
        'what_about_meetings_in_live',
        meetingsInLive
      );
    },
    setOpnionAboutUs(state, opnionAboutUs) {
      state.opnionAboutUs = opnionAboutUs;
      localStorage.setItem(
        'tell_us_your_opinion_about_us',
        opnionAboutUs
      );
    },
  },
};

export default tipsModule;
