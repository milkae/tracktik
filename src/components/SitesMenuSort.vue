<template>
  <div>
    <button @click="onSort()">
      <span
        class="lnr lnr-arrow-down-circle"
        :class="{ rotated: order === 'desc' }"
      ></span>
    </button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component
export default class SitesMenuSort extends Vue {
  @Prop(Object) readonly sort: object;
  @Mutation("UPDATE_OPTIONS", { namespace: "sites" }) updateOptions;
  onSort() {
    this.order = this.order === "asc" ? "desc" : "asc";
    this.updateOptions({ sort: { field: "title", order: this.order } });
  }

  order = "asc";
}
</script>

<style scoped lang="scss">
button {
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lnr {
  display: inline-block;
  transition: transform 0.3s ease-out;
  font-size: 1.5rem;
}

.rotated {
  transform: rotate(-180deg);
}
</style>
