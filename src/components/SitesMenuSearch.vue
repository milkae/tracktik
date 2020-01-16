<template>
  <div>
    Sites Menu Search
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

export default Vue.extend({
  name: "SitesMenuSearch",

  props: {
    search: {
      type: String,
      required: true
    } as PropOptions<string>
  }
});
</script>
