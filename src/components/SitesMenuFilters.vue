<template>
  <div>
    Sites Menu Filters
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { mapMutations } from "vuex";

export default Vue.extend({
  name: "SitesMenuFilters",

  props: {
    filters: {
      type: Array,
      required: true
    } as PropOptions<string[]>
  },

  methods: {
    ...mapMutations({
      updateOptions: "UPDATE_OPTIONS"
    })
  }
});
</script>
