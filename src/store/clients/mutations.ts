import { MutationTree } from "vuex";
import { ClientsState, Client } from "./types";

export const mutations: MutationTree<ClientsState> = {
  SET_CLIENTS(state: ClientsState, clients: Client[]) {
    state.clients = [...clients];
  }
};
