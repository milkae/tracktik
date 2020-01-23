import { shallowMount, createLocalVue } from "@vue/test-utils";
import SitesMenu from "@/components/SitesMenu.vue";
import SitesMenuFilters from "@/components/SitesMenuFilters.vue";
import SitesMenuSort from "@/components/SitesMenuSort.vue";
import SitesMenuSearch from "@/components/SitesMenuSearch.vue";
import Vuex from "vuex";
import { state as initialState } from "@/store/sites/index";
import { actions } from "@/store/sites/actions";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("SitesMenu", () => {
  let state: any;

  const build = () => {
    const wrapper = shallowMount(SitesMenu, {
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
      sitesMenuFilters: () => wrapper.find(SitesMenuFilters),
      sitesMenuSort: () => wrapper.find(SitesMenuSort),
      sitesMenuSearch: () => wrapper.find(SitesMenuSearch)
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
    const { sitesMenuFilters, sitesMenuSort, sitesMenuSearch } = build();

    expect(sitesMenuFilters().exists()).toBe(true);
    expect(sitesMenuSort().exists()).toBe(true);
    expect(sitesMenuSearch().exists()).toBe(true);
  });

  it('calls "submitted" event when options changes', () => {
    const { wrapper } = build();
    const newOptions = {
      filters: { clientId: "1" },
      sort: { field: "createdAt", order: "asc" },
      search: "Adonis"
    };

    (wrapper.vm as any).$options.watch.options.call(wrapper.vm, newOptions);

    expect(wrapper.emitted("submitted")[0]).toEqual([newOptions]);
  });

  it("passes according binded option prop to child components", () => {
    const {
      wrapper,
      sitesMenuFilters,
      sitesMenuSort,
      sitesMenuSearch
    } = build();
    const options = {
      filters: { clientId: "1" },
      sort: { field: "createdAt", order: "asc" },
      search: "Adonis"
    };
    wrapper.setData({ options });

    expect((sitesMenuFilters().vm as any).filters).toBe(options.filters);
    expect((sitesMenuSort().vm as any).sort).toEqual(options.sort);
    expect((sitesMenuSearch().vm as any).search).toBe(options.search);
  });
});
