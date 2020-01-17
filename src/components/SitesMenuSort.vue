<template>
  <div>
    Sites Menu Sort
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Sort } from "@/store/sites/type";

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
