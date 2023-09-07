import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    calendarShow: false
  },
  getters: {
  },
  mutations: {
    SET_CALENDARSHOW(state, calendarShow) {
      state.calendarShow = calendarShow
    },
  },
  actions: {
    setCalendarShow({
      commit
    }, calendarShow) {
      commit('SET_CALENDARSHOW', calendarShow)
    }
  },
  modules: {
  }
})
