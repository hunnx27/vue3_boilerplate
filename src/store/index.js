import { createStore } from "vuex";
import { Counter } from "@/store/modules/Counter";
import { ModuleA } from "@/store/modules/ModuleA";

export default createStore({
  modules: { Counter, ModuleA }
});