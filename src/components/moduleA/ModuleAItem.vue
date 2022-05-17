<template>
  <div>
    <h1>This is an ModuleA page</h1>
    {{ counter }}
    {{ doubleCount }}
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
    
    // computed 리턴이 있는경우 사용
    const counter = computed(() => store.state.ModuleA.count);
    // computed 리턴이 있는경우 사용
    const doubleCount = computed(() => store.getters['ModuleA/doubleCount']);

    // commit은 mutaion내 함수 실행
    const inc = () => store.commit("ModuleA/increment", counter.value + 1);

    return { counter, inc, doubleCount };
  }
};
</script>