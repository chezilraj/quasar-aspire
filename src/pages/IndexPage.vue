<template>
  <q-page class="row">
    <CardsPage />
  </q-page>
</template>

<script lang="ts">
import CardsPage from 'pages/CardsPage.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { CardsPage },
});
</script>
