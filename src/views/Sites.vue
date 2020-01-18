<template>
  <div>
    <SitesMenu @submitted="searchSites" />
    <SitesList v-if="sites.length" :sites="sites" />
  </div>
</template>

<script>
import Vue from "vue";
import { State, Action, Getter } from "vuex-class";
import Component from "vue-class-component";
import { Site, SiteContact } from "@/store/sites/types";
import SitesList from "@/components/SitesList";
import SitesMenu from "@/components/SitesMenu";
const namespace = "sites";

@Component({
  components: {
    SitesList,
    SitesMenu
  }
})
export default class Sites extends Vue {
  @State("sites", { namespace }) sites;
  @Action("SEARCH_SITES", { namespace }) searchSites;

  mounted() {
    this.searchSites({});
  }
}
</script>
