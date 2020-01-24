<template>
  <ul class="sites-list">
    <SitesListItem v-for="site in sites" :key="site.id" :site="site" />
  </ul>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import SitesListItem from "@/components/SitesListItem.vue";
import { Site } from "@/store/sites/types";

export default Vue.extend({
  name: "SitesList",

  props: {
    sites: {
      type: Array,
      required: true
    } as PropOptions<Site[]>
  },

  components: { SitesListItem }
});
</script>

<style scoped lang="scss">
.sites-list {
  padding: 0;
  margin: 0;
}
</style>
