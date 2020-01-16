<template>
  <div>
    Sites Menu Filters
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "SitesMenuFilters",

  props: {
    filters: {
      type: Array,
      required: true
    } as PropOptions<string[]>
  }
});
</script>
