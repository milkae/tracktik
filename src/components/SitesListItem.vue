<template>
  <div class="sites-list__item">
    <div class="sites-list__item__image">
      <img :src="imageUrl" />
    </div>
    <div class="sites-list__item__info">
      <div class="sites-list__item__info__title">
        {{ site.title }}
      </div>
      <div class="sites-list__item__info__address">
        <p>{{ address.street }}</p>
        <p>{{ address.zipCode }} {{ address.city }}</p>
        <p>{{ address.state }}, {{ address.country }}</p>
      </div>
      <div class="sites-list__item__info__contact">
        Main contact: {{ mainContactName }}
      </div>
    </div>
    <router-link :to="url" class="sites-list__item__link"
      ><span class="lnr lnr-chevron-right"></span>
    </router-link>
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

  get address(): string {
    return this.site.address;
  }
}
</script>

<style scoped lang="scss">
.sites-list__item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-top: 1px solid grey;

  &__image {
    margin-right: 0.5rem;
    overflow: hidden;
    border-radius: 50%;
    height: 20vw;
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: grey;

    img {
      border-radius: 50%;
      width: auto;
      height: 100%;
    }
  }

  &__info {
    text-align: left;

    &__address {
      font-size: 0.8rem;
      color: grey;
      margin: 0.5rem 0;

      p {
        margin: 0;
        padding: 0;
      }
    }

    &__contact {
      font-size: 0.8rem;
    }
  }

  &__link {
    margin-left: auto;
    padding: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
  }
}
</style>
