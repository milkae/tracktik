<template>
  <div>
    <button @click="onSort('asc')">Asc</button>
    <button @click="onSort('desc')">Desc</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component
export default class SitesMenuSort extends Vue {
  @Prop(Object) readonly sort: object;
  @Mutation("UPDATE_OPTIONS", { namespace: "sites" }) updateOptions;
  @Watch("sortValue")
  onSort(val: string) {
    this.updateOptions({ sort: { field: "title", order: val } });
  }
}
</script>
