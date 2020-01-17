import { MutationTree } from "vuex";
import { SitesState, SitesMenuOptions } from "./types";

export const mutations: MutationTree<SitesState> = {
  UPDATE_OPTIONS(state, options: SitesMenuOptions) {
    state.sitesMenuOptions = { ...state.sitesMenuOptions, ...options };
  }
};
