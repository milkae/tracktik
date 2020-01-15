import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Sites from "@/views/Sites.vue";
import SitesList from "@/components/SitesList.vue";
import SitesMenu from "@/components/SitesMenu.vue";
import initialState from "@/store/state";
import siteFixture from "./fixtures/site";

const localVue = createLocalVue();
localVue.use(Vuex);

interface State {
  sites: object[];
}

describe("Sites", () => {
  let state: State;

  const build = () => {
    const wrapper = shallowMount(Sites, {
      localVue,
      store: new Vuex.Store({ state })
    });

    return {
      wrapper,
      sitesList: () => wrapper.find(SitesList),
      sitesMenu: () => wrapper.find(SitesMenu)
    };
  };

  beforeEach(() => {
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
    state.sites = [siteFixture];
    const { sitesList } = build();

    expect((sitesList().vm as any).sites).toBe(state.sites);
  });
});
