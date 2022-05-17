<template>
  <div>
    <h1>This is an Counter page</h1>
    {{ counter }} / {{ test }}
    <button @click="inc">inc</button>
  </div>
</template>
<script>
/* eslint-disable */
import { computed, onMounted, toRef } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    //각각 컴포넌트 (dispatch)--> actions (commit)--> mutations (state)--> state -->모든 컴포넌트에서 활용
    // computed 리턴이 있는경우 사용
    const counter = computed(() => store.state.Counter.counter);
    // computed 리턴이 있는경우 사용(getters)
    const test = computed(() => store.getters["Counter/time2"]);
    
    // commit은 mutaion내 함수 실행
    const inc = () => store.commit("Counter/setCounter", counter.value + 1);

    return { counter, inc, test };
  }
};
</script>