<template>
  <div>
    <SitesMenuFilters :filters="options.filters" />
    <SitesMenuSearch :search="options.search" />
    <SitesMenuSort :sort="options.sort" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import SitesMenuFilters from "@/components/SitesMenuFilters";
import SitesMenuSearch from "@/components/SitesMenuSearch";
import SitesMenuSort from "@/components/SitesMenuSort";

export default Vue.extend({
  name: "SitesMenu",

  computed: mapState("sites", { options: state => state.sitesMenuOptions }),

  watch: {
    options: function(newOptions) {
      this.$emit("submitted", newOptions);
    }
  },

  components: { SitesMenuFilters, SitesMenuSearch, SitesMenuSort }
});
</script>
