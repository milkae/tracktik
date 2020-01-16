import { shallowMount } from "@vue/test-utils";
import SitesListItem from "@/components/SitesListItem.vue";
import site from "./fixtures/site";

describe("SitesListItem", () => {
  let props: any;

  const build = () => {
    const wrapper = shallowMount(SitesListItem, {
      propsData: props,
      stubs: ["router-link"]
    });
    return {
      wrapper,
      sitesListItemImage: () => wrapper.find(".sites-list__item__image"),
      sitesListItemTitle: () => wrapper.find(".sites-list__item__title"),
      sitesListItemContact: () => wrapper.find(".sites-list__item__contact"),
      sitesListItemLink: () => wrapper.find(".sites-list__item__link")
    };
  };

  beforeEach(() => {
    props = {
      site
    };
  });

  it("renders the component", () => {
    const { wrapper } = build();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("renders main components", () => {
    const {
      sitesListItemImage,
      sitesListItemTitle,
      sitesListItemContact,
      sitesListItemLink
    } = build();

    const {
      site: { images, title, contacts, id }
    } = props;

    expect(sitesListItemImage().exists()).toBe(true);
    expect(sitesListItemImage().attributes().src).toBe(images[0]);

    expect(sitesListItemTitle().exists()).toBe(true);
    expect(sitesListItemTitle().text()).toBe(title);

    expect(sitesListItemContact().exists()).toBe(true);
    expect(sitesListItemContact().text()).toBe(
      contacts.main.firstname + " " + contacts.main.lastname
    );

    expect(sitesListItemLink().exists()).toBe(true);
    expect(sitesListItemLink().attributes().to).toBe(`site/${id}`);
  });
});
