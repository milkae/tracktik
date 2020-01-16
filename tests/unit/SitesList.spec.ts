import { shallowMount } from "@vue/test-utils";
import SitesList from "@/components/SitesList.vue";
import SitesListItem from "@/components/SitesListItem.vue";
import sites from "./fixtures/sites";

describe("SitesList", () => {
  let props: any;

  const build = () => {
    const wrapper = shallowMount(SitesList, {
      propsData: props
    });

    return {
      wrapper,
      sitesListItem: () => wrapper.find(SitesListItem)
    };
  };

  beforeEach(() => {
    props = {
      sites
    };
  });

  it("renders the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders at least an item", () => {
    const { sitesListItem } = build();
    expect(sitesListItem().exists()).toBe(true);
  });
});
