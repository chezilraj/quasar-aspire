<template>
  <q-layout view="lHh lpR lFf">
    <q-drawer show-if-above v-model="leftDrawerOpen" :width="340" side="left">
      <div class="q-drawer__header">
        <div class="q-drawer__header-logo">
          <q-img src="../assets/aspire-logo.svg" style="max-width: 125px" />
        </div>
        <div class="q-drawer__header-label">
          Trusted way of banking for 3,000+ SMEs and startups in Singapore
        </div>
      </div>
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Home',
    icon: 'icon-Home',
    link: '#',
  },
  {
    title: 'Cards',
    icon: 'icon-Card',
    link: '#',
  },
  {
    title: 'Payments',
    icon: 'icon-Payments',
    link: '#',
  },
  {
    title: 'Credit',
    icon: 'icon-Credit',
    link: '#',
  },
  {
    title: 'Settings',
    icon: 'icon-Account',
    link: '#',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
<style lang="scss">
.q-drawer {
  background: $secondary;
  color: $colorWhite;
  &__content {
    padding: 48px;
  }
  &__header-logo {
    margin-bottom: 19px;
  }
  &__header-label {
    margin-bottom: 81px;
    opacity: 0.3;
    line-height: 1.4;
  }
}
</style>
