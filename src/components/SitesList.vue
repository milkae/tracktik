<template>
  <div>
    Sites list
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

interface Site {}

@Component
export default class SitesList extends Vue {
  @Prop({ type: Array, required: true }) readonly sites!: Site;
}
</script>
