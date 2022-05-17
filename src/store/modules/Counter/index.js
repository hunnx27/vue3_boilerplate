/* eslint-disable */
export const Counter = {
  namespaced: true,

  // 변수 초기화
  state: () => ({
    counter: 10 
  }),

  // 스테이트 변경시 사용
  mutations: {
    setCounter(state, value) {
      state.counter = value;
    }
  },


  // 뮤테이션 Trigger
  actions: {
    test() {
      console.log(4);
    }
  },

  getters: {
    time2(state) {
      return state.counter * 2;
    }
  }
};