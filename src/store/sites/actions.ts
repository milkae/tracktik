import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { SitesState } from "./types";

export const actions: ActionTree<SitesState, RootState> = {
  SEARCH_SITES: () => true
};
