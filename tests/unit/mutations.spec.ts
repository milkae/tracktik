import { mutations } from "@/store/sites/mutations";
import { state as initialState } from "@/store/sites/index";
import sites from "./fixtures/sites";
import { SitesState } from "@/store/sites/types";

describe("mutations", () => {
  let state: SitesState;

  beforeEach(() => {
    state = { ...initialState };
  });

  it("sets new sites", () => {
    const expectedSites = sites;

    mutations.SET_SITES(state, expectedSites);

    expect(state.sites).toEqual(expectedSites);
    expect(state.sites).not.toBe(expectedSites);
  });

  it("updates sites menu options", () => {
    const newOptions = {
      filters: { clientId: "1" },
      sort: { field: "createdAt", order: "asc" },
      search: "Adonis"
    };

    mutations.UPDATE_OPTIONS(state, newOptions);

    expect(state.sitesMenuOptions).toEqual(newOptions);
    expect(state.sitesMenuOptions).not.toBe(newOptions);
  });
});
