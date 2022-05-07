<template>
  <div class="card-tabs__wrapper">
    <q-tabs v-model="tab" align="justify">
      <q-tab name="my-card" label="My debit cards" />
      <q-tab name="all-company" label="All company cards" />
    </q-tabs>

    <q-card>
      <q-tab-panels v-model="tab">
        <q-tab-panel name="my-card">
          <div class="row">
            <div class="col col-px">
              <CardsCarousel />
              <CardsActions />
            </div>
            <div class="col col-px">
              <CardsAccordion />
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="all-company">
          <div class="text-h6">All company cards</div>
          coming soon...
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import CardsCarousel from 'components/CardsCarousel.vue';
import CardsAccordion from 'components/CardsAccordion.vue';
import CardsActions from 'components/CardsActions.vue';

export default defineComponent({
  name: 'CardsTab',
  components: { CardsCarousel, CardsAccordion, CardsActions },
  setup() {
    return {
      tab: ref('my-card'),
      innerTab: ref('innerMyCard'),
    };
  },
});
</script>
<style lang="scss" scoped>
@import '~src/css/styleguide/headings.scss';

.q-card {
  border-radius: 8px;
  box-shadow: none;
  filter: drop-shadow(0 2px 12px #00000014);
}
.q-tab-panel {
  padding-top: 40px;
  padding-bottom: 40px;
  padding-left: 20px;
  padding-right: 20px;
}
.q-tab {
  flex: 0 0 auto;
  padding: 0;
  margin-right: 32px;
  margin-bottom: 16px;
  &__label {
    text-transform: initial;
  }
}
.col-px {
  padding-left: 20px;
  padding-right: 20px;
}
</style>

<style lang="scss">
.q-tab {
  min-height: 34px;
  &__label {
    color: rgba(34, 34, 34, 0.3);
    text-transform: initial;
  }
  &--active {
    .q-tab__label {
      font-weight: 600;
      color: rgba(34, 34, 34, 1);
    }
  }

  .q-focus-helper {
    display: none;
  }
  &__indicator {
    border: 1px solid #23cefd;
  }
}
</style>
