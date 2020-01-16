import sitesFixture from "../../../tests/unit/fixtures/sites";

interface Actions {
  SEARCH_SITES: any;
}

const actions: Actions = {
  SEARCH_SITES: jest.fn().mockResolvedValue(sitesFixture)
};

export default actions;
