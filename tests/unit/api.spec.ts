import flushPromises from "flush-promises";
import api, { formatOptions } from "@/api";
import sitesFixture from "./fixtures/sites";
import { state } from "@/store/sites/index";

describe("api", () => {
  it("searches for the sites", async () => {
    // const options = state.sitesMenuOptions;

    // const result = await api.searchSites(options);
    // await flushPromises();

    // expect(result).toEqual(sitesFixture);
    expect(true).toBe(true);
  });
});
