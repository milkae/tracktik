import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { sites } from "@/store/sites/index";
import { clients } from "@/store/clients/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {},
  mutations: {},
  actions: {},
  modules: { sites, clients }
};

export default new Vuex.Store<RootState>(store);
