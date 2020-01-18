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
import SitesMenuFilters from "@/components/SitesMenuFilters.vue";
import SitesMenuSearch from "@/components/SitesMenuSearch.vue";
import SitesMenuSort from "@/components/SitesMenuSort.vue";

export default Vue.extend({
  name: "SitesMenu",

  computed: mapState("sites", {
    options: (state: any) => state.sitesMenuOptions
  }),

  watch: {
    options: function(newOptions) {
      this.$emit("submitted", newOptions);
    }
  },

  components: { SitesMenuFilters, SitesMenuSearch, SitesMenuSort }
});
</script>
