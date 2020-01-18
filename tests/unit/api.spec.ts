import flushPromises from "flush-promises";
import nock from "nock";
import api, { formatOptions } from "@/api";
import sitesFixture from "./fixtures/sites";
import { state } from "@/store/sites/index";

describe("api", () => {
  it("searches for the sites", async () => {
    const options = state.sitesMenuOptions;

    const request = nock("https://tracktik-challenge.staffr.com")
      .get(`/sites?${formatOptions(options)}`)
      .reply(200, sitesFixture);

    const result = await api.searchSites(options);
    await flushPromises();

    expect(result).toEqual(sitesFixture);
    expect(request.isDone()).toBe(true);
  });
});
