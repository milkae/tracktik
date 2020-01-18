<template>
  <div>
    Sites Menu Sort
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Sort } from "@/store/sites/types";

export default Vue.extend({
  name: "SitesMenuSort",

  props: {
    sort: {
      type: Object,
      required: true
    } as PropOptions<Sort>
  }
});
</script>
