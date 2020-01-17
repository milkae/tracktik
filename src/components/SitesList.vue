<template>
  <ul class="sites-list">
    <SitesListItem v-for="site in sites" :site="site" />
  </ul>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import SitesListItem from "@/components/SitesListItem";
import { Site } from "@/store/sites/type";

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
