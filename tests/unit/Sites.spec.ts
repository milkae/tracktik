import { shallowMount } from "@vue/test-utils";
import Sites from "@/views/Sites.vue";
import SitesList from "@/components/SitesList.vue";
import SitesMenu from "@/components/SitesMenu.vue";

describe("Sites", () => {
  const build = () => {
    const wrapper = shallowMount(Sites, {
      data: () => ({
        sites: []
      })
    });

    return {
      wrapper,
      sitesList: () => wrapper.find(SitesList),
      sitesMenu: () => wrapper.find(SitesMenu)
    };
  };

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
    const { wrapper, sitesList } = build();
    wrapper.setData({
      sites: [{ name: "Site name" }]
    });

    expect((sitesList().vm as any).sites).toBe((wrapper.vm as any).sites);
  });
});
