import { Module } from "vuex";
import { actions } from "./actions";
import { SitesState } from "./types";
import { RootState } from "../types";

export const state: SitesState = {
  sites: [],
  sitesMenuOptions: {
    filters: [],
    sort: { field: "createdAt", order: "asc" },
    search: ""
  }
};

const namespaced: boolean = true;

export const sites: Module<SitesState, RootState> = {
  namespaced,
  state,
  actions,
  mutations: {}
};
