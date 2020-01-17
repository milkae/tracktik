jest.mock("@/api");
import flushPromises from "flush-promises";
import { actions } from "@/store/sites/actions";
import api from "@/api";
import sitesFixture from "./fixtures/sites";

describe("store actions", () => {
  let commit: any;

  beforeEach(() => {
    commit = jest.fn();
  });

  it("searches for sites", async () => {
    const options = {
      filters: ["New"],
      sort: { field: "createdAt", order: "asc" },
      search: "Adonis"
    };

    const searchSites = actions.SEARCH_SITES as Function;

    await searchSites({ commit }, { options });
    await flushPromises();

    expect(api.searchSites).toHaveBeenCalledWith(options);
    expect(commit).toHaveBeenCalledWith("SET_SITES", sitesFixture);
  });
});
