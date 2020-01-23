<template>
  <div>
    <input v-model="searchValue" placeholder="Search" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component
export default class SitesMenuSearch extends Vue {
  @Prop(String) readonly search: string;
  @Mutation("UPDATE_OPTIONS", { namespace: "sites" }) updateOptions;
  @Watch("searchValue")
  onSearchChange(val: string, oldVal: string) {
    this.updateOptions({ search: val });
  }

  searchValue = this.search || "";
}
</script>
