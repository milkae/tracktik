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
import { Vue, Component, Prop } from "vue-property-decorator";
import { Site, SiteContact } from "@/store/sites/types";

@Component
export default class SitesListItem extends Vue {
  @Prop({ type: Object, required: true }) readonly site!: Site;
  get imageUrl(): string {
    return this.site.images[0];
  }
  get mainContact(): SiteContact {
    return this.site.contacts.main;
  }
  get mainContactName(): string {
    return this.mainContact.firstName + " " + this.mainContact.lastName;
  }
  get url(): string {
    return `site/${this.site.id}`;
  }
}
</script>
