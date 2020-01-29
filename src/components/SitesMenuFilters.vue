<template>
  <div class="sites-menu__filters">
    <select v-if="clients.length" v-model="client">
      <option value="">All sites</option>
      <option v-for="client in clients" :key="client.id" :value="client.id">{{
        client.givenName
      }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch, Prop } from "vue-property-decorator";
import { State, Action, Mutation } from "vuex-class";

const namespace = "clients";

@Component
export default class SitesMenuFilters extends Vue {
  @Prop(Object) readonly filters: any;
  @State("clients", { namespace }) clients;
  @Action("GET_CLIENTS", { namespace }) getClients;
  @Mutation("UPDATE_OPTIONS", { namespace: "sites" }) updateOptions;
  @Watch("client")
  onClientChange(val: string, oldVal: string) {
    this.updateOptions({ filters: { clientId: this.client } });
  }

  client = this.filters.clientId || "";

  mounted() {
    this.getClients();
  }
}
</script>

<style scoped lang="scss">
.sites-menu__filters {
  position: relative;
  display: flex;
  height: 3em;
  line-height: 3;
  overflow: hidden;

  &::after {
    content: "\25BC";
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 1em;
    cursor: pointer;
    pointer-events: none;
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    box-shadow: none;
    border: 0;
    background-image: none;
    flex: 1;
    padding: 0 0.5em;
  }
}
</style>
