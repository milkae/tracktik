import { ActionTree } from "vuex";
import { RootState } from "@/store/types";
import { ClientsState } from "./types";
import api from "@/api";

export const actions: ActionTree<ClientsState, RootState> = {
  GET_CLIENTS({ commit }): any {
    return new Promise(async (resolve, reject) => {
      try {
        const clients = await api.getClients();
        commit("SET_CLIENTS", clients);
        resolve(clients);
      } catch (error) {
        reject(error);
      }
    });
  }
};
