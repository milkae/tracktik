<template>
  <div>
    <SitesList :sites="sites" />
    <SitesMenu />
  </div>
</template>

<script>
import { mapState } from "vuex";
import SitesList from "@/components/SitesList";
import SitesMenu from "@/components/SitesMenu";

export default {
  name: "Sites",
  components: {
    SitesList,
    SitesMenu
  },
  computed: mapState(["sites"])
};
</script>
