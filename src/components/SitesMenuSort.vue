<template>
  <div>
    Sites Menu Sort
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

interface Sort {
  field: string;
  order: string;
}

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
