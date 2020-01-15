<template>
  <div>
    <SitesList :sites="sites" />
    <SitesMenu />
  </div>
</template>

<script>
import SitesList from "@/components/SitesList";
import SitesMenu from "@/components/SitesMenu";

export default {
  name: "Sites",
  components: {
    SitesList,
    SitesMenu
  },
  data() {
    return {
      sites: []
    };
  }
};
</script>
