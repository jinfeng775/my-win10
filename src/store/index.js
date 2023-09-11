import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    calendarShow: false,
    windowedShow: false,
  },
  getters: {
  },
  mutations: {
    SET_CALENDARSHOW(state, calendarShow) {
      state.calendarShow = calendarShow
    },
    SET_WINDOWEDSHOW(state, windowedShow) {
      state.windowedShow = windowedShow
    },
  },
  actions: {
    setCalendarShow({
      commit
    }, calendarShow) {
      commit('SET_CALENDARSHOW', calendarShow)
    },
    setWindowedShoww({
      commit
    }, windowedShow) {
      commit('SET_WINDOWEDSHOW', windowedShow)
    }
  },
  modules: {
  }
})
