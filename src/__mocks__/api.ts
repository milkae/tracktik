import sitesFixture from "../../tests/unit/fixtures/sites";

export default {
  searchSites: jest.fn().mockResolvedValue(sitesFixture)
};
