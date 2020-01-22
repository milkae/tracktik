import { Module } from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { ClientsState } from "./types";
import { RootState } from "../types";

export const state: ClientsState = {
  clients: []
};

const namespaced: boolean = true;

export const clients: Module<ClientsState, RootState> = {
  namespaced,
  state,
  actions,
  mutations
};
