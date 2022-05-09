<template>
  <div class="cards">
    <div class="cards__blance">
      <div class="cards__blance-label">Available balance</div>
      <div class="cards__blance-amount">
        <div class="blance-amount"><span>S$</span> 3,000</div>
        <q-btn icon="icon-box" label="New card" @click="addCardModal = true" />
      </div>
    </div>
    <CardsTab />
    <q-dialog v-model="addCardModal">
      <q-card class="q-pa-lg">
        <q-card-section>
          <div class="text-h6">Add new card</div>
        </q-card-section>
        <q-card-section style="max-height: 50vh" class="scroll">
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
            <q-input
              filled
              v-model="name"
              label="Card name*"
              hint="Enter your card name"
              lazy-rules
            />

            <q-card-actions align="right">
              <q-btn
                label="Cancel"
                type="reset"
                color="primary"
                flat
                class="q-ml-sm"
                v-close-popup
              />
              <q-btn
                label="Add Card"
                type="submit"
                color="primary"
                v-close-popup
              />
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import CardsTab from 'components/CardsTab.vue';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import cardData from '../resources/card.json';

export default defineComponent({
  name: 'CardsPage',
  components: { CardsTab },
  created() {
    this.$store.commit('cards/addCard', cardData);
  },
  setup() {
    const $store = useStore();
    const name = ref('');
    const cardColor = ref('#' + ((Math.random() * 0xffffff) << 0).toString(16));
    const cardNumber = ref(
      Math.floor(1000000000000000 + Math.random() * 9000000000000000)
    );
    function onSubmit() {
      const cardObject = {
        id: randomNumber(104, 200),
        name: name.value,
        card_number: cardNumber.value.toString(),
        expiry: randomNumber(1, 30) + '/' + randomNumber(22, 30),
        color: cardColor.value,
      };
      $store.commit('cards/addCard', cardObject);
      onReset();
    }

    function onReset() {
      name.value = '';
    }

    function randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    return {
      onSubmit,
      onReset,
      name,
      addCardModal: ref(false),
    };
  },
});
</script>

<style lang="scss" scoped>
@import '~src/css/styleguide/headings.scss';

.cards {
  width: 100%;

  @media screen and (min-width: 768px) {
    padding: 60px 60px 90px;
  }

  &__blance {
    padding-bottom: 40px;
    @media screen and (max-width: 767px) {
      background: #0c365a;
      padding-top: 30px;
      padding-left: 24px;
      padding-righ: 24px;
    }
  }

  &__blance-label {
    font-size: 14px;
    color: #fff;
    margin-bottom: 18px;
    @media screen and (min-width: 768px) {
      color: #222222;
    }
  }

  &__blance-amount {
    @include heading-bold;
    display: flex;
    justify-content: space-between;

    .blance-amount {
      display: flex;
      align-items: center;
      font-size: 26px;
      color: #fff;
      @media screen and (min-width: 768px) {
        color: #222222;
      }
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
    color: #23cefd;
    text-transform: initial;
    max-width: 109px;
    padding: 4px 12px;
    border-radius: 4px;

    @media screen and (min-width: 768px) {
      color: #fff;
      background: #325baf;
      margin-right: 24px;
    }

    @media screen and (max-width: 767px) {
      margin-right: 24px;
    }

    .q-icon {
      color: #325baf;
      font-size: 16px;
      @media screen and (min-width: 768px) {
        color: #fff;
      }
    }
    &:before {
      @media screen and (max-width: 767px) {
        box-shadow: none;
      }
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
.q-dialog {
  .q-card {
    width: 400px;
  }
}
</style>
