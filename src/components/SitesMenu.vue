<template>
  <div>
    <SitesMenuFilters :filters="options.filters" />
    <SitesMenuSearch :search="options.search" />
    <SitesMenuSort :sort="options.sort" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import SitesMenuFilters from "@/components/SitesMenuFilters";
import SitesMenuSearch from "@/components/SitesMenuSearch";
import SitesMenuSort from "@/components/SitesMenuSort";

export default Vue.extend({
  name: "SitesMenu",

  data() {
    return {
      options: {
        filters: [],
        sort: { field: "createdAt", order: "asc" },
        search: ""
      }
    };
  },

  watch: {
    options: function(newOptions) {
      this.$emit("submitted", newOptions);
    }
  },

  components: { SitesMenuFilters, SitesMenuSearch, SitesMenuSort }
});
</script>
