<template>
  <q-item :manual-focus="isManualFocus" tag="a" target="_blank" :href="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  data() {
    return {
      isManualFocus: true,
    };
  },
  props: {
    title: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
<style lang="scss" scoped>
.q-item {
  font-size: 16px;
  padding: 8px 0;
  margin-bottom: 60px;
  &:hover {
    color: $primary;
    .q-icon {
      color: $primary;
    }
    .q-focus-helper {
      opacity: 0 !important;
    }
  }
  &__section--avatar {
    min-width: auto;
  }
  &:nth-child(2) {
    color: #01d167;
  }
}
</style>
