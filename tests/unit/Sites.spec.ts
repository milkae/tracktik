import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Sites from "@/views/Sites.vue";
import SitesList from "@/components/SitesList.vue";
import SitesMenu from "@/components/SitesMenu.vue";
import initialState, { RootState } from "@/store/state";
jest.mock("@/store/actions");
import actions from "@/store/actions";
import sitesFixture from "./fixtures/sites";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Sites", () => {
  let state: RootState;

  const build = () => {
    const wrapper = shallowMount(Sites, {
      localVue,
      store: new Vuex.Store({ state, actions })
    });

    return {
      wrapper,
      sitesList: () => wrapper.find(SitesList),
      sitesMenu: () => wrapper.find(SitesMenu)
    };
  };

  beforeEach(() => {
    jest.resetAllMocks();
    state = { ...initialState };
  });

  it("renders the component", () => {
    const { wrapper } = build();

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main child components", () => {
    const { sitesList, sitesMenu } = build();

    expect(sitesList().exists()).toBe(true);
    expect(sitesMenu().exists()).toBe(true);
  });

  it("passes a binded sites prop to sites list component", () => {
    state.sites = sitesFixture;
    const { sitesList } = build();

    expect((sitesList().vm as any).sites).toBe(state.sites);
  });

  it('send filters when received "submitted" with filters defined', () => {
    const filters = { title: "New" };
    const { sitesMenu } = build();

    sitesMenu().vm.$emit("submitted", { filters });

    expect(actions.SEARCH_SITES).toHaveBeenCalled();
    expect((actions.SEARCH_SITES as jest.Mock).mock.calls[0][1]).toEqual({
      filters
    });
  });

  it('send query when received "submitted" with query defined', () => {
    const query = "New";
    const { sitesMenu } = build();

    sitesMenu().vm.$emit("submitted", { query });

    expect(actions.SEARCH_SITES).toHaveBeenCalled();
    expect((actions.SEARCH_SITES as jest.Mock).mock.calls[0][1]).toEqual({
      query
    });
  });

  it('send sort when received "submitted" with sort defined', () => {
    const sort = { field: "createdAt", order: "desc" };
    const { sitesMenu } = build();

    sitesMenu().vm.$emit("submitted", { sort });

    expect(actions.SEARCH_SITES).toHaveBeenCalled();
    expect((actions.SEARCH_SITES as jest.Mock).mock.calls[0][1]).toEqual({
      sort
    });
  });
});
