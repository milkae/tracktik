<template>
  <div>
    <SitesList :sites="sites" />
    <SitesMenu @submitted="searchSites" />
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
  methods: {
    searchSites({ filters, query, sort }) {
      this.$store.dispatch("SEARCH_SITES", { filters, query, sort });
    }
  },
  computed: mapState(["sites"])
};
</script>
