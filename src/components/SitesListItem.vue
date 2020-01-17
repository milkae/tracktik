<template>
  <div class="sites-list__item">
    <img class="sites-list__item__image" :src="imageUrl" />
    <div class="sites-list__item__title">
      {{ site.title }}
    </div>
    <div class="sites-list__item__contact">
      {{ mainContactName }}
    </div>
    <router-link :to="url" class="sites-list__item__link">></router-link>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Site, Contact } from "@/store/sites/type";

export default Vue.extend({
  name: "SitesListItem",

  props: {
    site: {
      type: Object,
      required: true
    }
  } as PropOptions<Site>,

  computed: {
    imageUrl(): string {
      return this.site.images[0];
    },
    mainContact(): Contact {
      return this.site.contacts.main;
    },
    mainContactName(): string {
      return this.mainContact.firstname + " " + this.mainContact.lastname;
    },
    url(): string {
      return `site/${this.site.id}`;
    }
  }
});
</script>
