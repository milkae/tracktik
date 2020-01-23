<template>
  <div>
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
  @Prop(Object) readonly filters: object;
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
