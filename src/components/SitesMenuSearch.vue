<template>
  <div
    class="sites-menu__search"
    :class="{ 'sites-menu__search--expanded': searchInputIsVisible }"
  >
    <input
      v-model="searchValue"
      v-on:keyup.enter="toggleSearchInput"
      placeholder="Search"
    />
    <button v-show="!searchInputIsVisible" @click="toggleSearchInput">
      <span class="lnr lnr-magnifier"></span>
    </button>
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

  toggleSearchInput() {
    this.searchInputIsVisible = !this.searchInputIsVisible;
  }

  searchInputIsVisible = false;
  searchValue = this.search || "";
}
</script>

<style scoped lang="scss">
.sites-menu__search {
  display: flex;
  align-items: center;

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

  input {
    border: none;
    outline: none;
    padding: 0;
    width: 0;
  }

  &--expanded {
    width: 90%;
    margin: auto;
    input {
      transition: width 1s cubic-bezier(0, 0.795, 0, 1);
      width: 100%;
      padding: 0.5rem 1rem;
      border: 1px solid grey;
      margin-top: 1rem;
    }
  }
}
</style>
