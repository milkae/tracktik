<template>
  <div class="sites-menu">
    <SitesMenuFilters :filters="options.filters" />
    <SitesMenuSort :sort="options.sort" />
    <SitesMenuSearch :search="options.search" />
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

<style scoped lang="scss">
.sites-menu {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 1rem 0;
}
</style>
