jest.mock("@/store/sites/actions");
import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Sites from "@/views/Sites.vue";
import SitesList from "@/components/SitesList.vue";
import SitesMenu from "@/components/SitesMenu.vue";
import { SitesState } from "@/store/sites/types";
import { state as initialState } from "@/store/sites/index";
import { actions } from "@/store/sites/actions";
import sitesFixture from "./fixtures/sites";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("Sites", () => {
  let state: SitesState;

  const build = () => {
    const wrapper = shallowMount(Sites, {
      localVue,
      store: new Vuex.Store({
        modules: {
          sites: {
            namespaced: true,
            state,
            actions
          }
        }
      })
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

  it("renders sitesMenu", () => {
    const { sitesMenu } = build();

    expect(sitesMenu().exists()).toBe(true);
  });

  it("does not renders sitesList if sites prop is empty", () => {
    const { sitesList } = build();

    expect(sitesList().exists()).toBe(false);
  });

  it("renders sitesList if sites prop is not empty", () => {
    state.sites = sitesFixture;
    const { sitesList } = build();

    expect(sitesList().exists()).toBe(true);
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
