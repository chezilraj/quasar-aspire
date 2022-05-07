<template>
  <div class="cards">
    <div class="cards__blance">
      <div class="cards__blance-label">Available balance</div>
      <div class="cards__blance-amount">
        <div class="blance-amount"><span>S$</span> 3,000</div>
        <q-btn icon="icon-box" text-color="white" label="New card" />
      </div>
    </div>
    <CardsTab />
  </div>
</template>

<script lang="ts">
import CardsTab from 'components/CardsTab.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardsPage',
  components: { CardsTab },
});
</script>

<style lang="scss" scoped>
@import '~src/css/styleguide/headings.scss';

.cards {
  width: 100%;
  padding: 60px 60px 90px;

  &__blance {
    margin-bottom: 40px;
  }

  &__blance-label {
    font-size: 14px;
    color: #222222;
    margin-bottom: 18px;
  }

  &__blance-amount {
    @include heading-bold;
    display: flex;
    justify-content: space-between;

    .blance-amount {
      display: flex;
      align-items: center;
      font-size: 26px;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 24px;
      background: #01d167;
      color: #ffff;
      border-radius: 4px;
      margin-right: 12px;
      font-size: 13px;
    }
  }

  .q-btn {
    @include heading-bold;
    font-size: 13px;
    background: #325baf;
    text-transform: initial;
    max-width: 109px;
    padding: 4px 12px;
    border-radius: 4px;

    .q-icon {
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>

<style lang="scss">
.q-btn {
  .q-icon {
    margin-right: 6px;
    font-size: 16px;
  }
}
</style>
