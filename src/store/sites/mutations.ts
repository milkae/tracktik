import { MutationTree } from "vuex";
import { SitesState, SitesMenuOptions, Site } from "./types";

export const mutations: MutationTree<SitesState> = {
  UPDATE_OPTIONS(state: SitesState, options: SitesMenuOptions) {
    state.sitesMenuOptions = { ...state.sitesMenuOptions, ...options };
  },
  SET_SITES(state: SitesState, sites: Site[]) {
    state.sites = [...sites];
  }
};
