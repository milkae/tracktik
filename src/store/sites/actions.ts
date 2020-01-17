import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { SitesState } from "./types";
import api from "@/api";

export const actions: ActionTree<SitesState, RootState> = {
  SEARCH_SITES({ commit }, { options }) {
    return new Promise(async (resolve, reject) => {
      try {
        const sites = await api.searchSites(options);
        commit("SET_SITES", sites);
        resolve(sites);
      } catch (error) {
        reject(error);
      }
    });
  }
};
