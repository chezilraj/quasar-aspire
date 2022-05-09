<template>
  <div class="cards__carousel">
    <div class="cards__show-number">
      <q-icon name="icon-remove_red_eye-24px" />Show card number
    </div>
    <q-carousel
      v-model="slide"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      height="250px"
    >
      <q-carousel-slide
        v-for="(card, index) in allCards"
        :name="index + 1"
        class="column no-wrap"
        :key="index"
      >
        <div class="row justify-start items-center no-wrap">
          <div class="card" :style="{ background: card.color }">
            <div class="card__logo">
              <q-icon name="icon-Aspire-Logo" />
            </div>
            <div class="card__holder-name">{{ card.name }}</div>
            <div class="card__number">
              <div class="card__number-hidden">
                <span
                  v-for="(num, index) in card.card_number &&
                  card.card_number.split('')"
                  :key="index"
                  :class="{ 'hidden-digit': index <= 11 }"
                >
                  {{ num }}
                </span>
              </div>
            </div>
            <div class="card__meta">
              <div class="card__validity">
                <span class="label">Thru:</span>
                <p class="info">{{ card.expiry }}</p>
              </div>
              <div class="card__cvv">
                <span class="label">CVV:</span>
                <p class="info">***</p>
              </div>
            </div>
            <div class="card__provider">
              <q-icon name="icon-Visa-Logo" />
            </div>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'CardsCarousel',
  setup() {
    const $store = useStore();
    const allCards = computed({
      get: () =>
        $store.state.cards.allCards.filter((card) => !card.isCancelled),
    });

    return {
      allCards,
      slide: ref(1),
    };
  },
};
</script>
<style lang="scss" scoped>
@import '~src/css/styleguide/headings.scss';

.q-carousel {
  @media screen and (max-width: 767px) {
    background: #0c365a;
    padding-left: 24px;
    padding-right: 24px;
  }
}
.q-carousel__slide {
  padding: 0;
}
.q-carousel__navigation .q-btn {
  margin: 6px 4px;
  padding: 0;
}
.q-btn--dense.q-btn--round {
  min-height: 8px;
  min-width: 8px;
}
.q-carousel__navigation-icon--active {
  .q-icon {
    width: 16px;
    background: #01d167;
    border-radius: 8px;
  }
}
.q-panel-parent {
  overflow: initial;
}

.q-btn .q-icon {
  font-size: 8px;
}
.cards__carousel {
  margin-bottom: 56px;
}
.card {
  width: 100%;
  height: 248px;
  border-radius: 16px;
  padding: 27px;
  @media screen and (max-width: 767px) {
    overflow: hidden;
  }

  &__logo {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 27px;
    .q-icon {
      color: #fff;
      font-size: 30px;
      width: auto;
    }
  }

  &__holder-name {
    @include heading-bold;
    font-size: 24px;
    line-height: 1.2;
    letter-spacing: 0.58px;
    color: #fff;
    margin-bottom: 27px;
  }

  &__number {
    display: flex;
    align-items: center;
    color: #fff;
    @include heading-bold;
    font-size: 14px;
    letter-spacing: 3.46px;
    margin-bottom: 18px;
  }
  &__number-hidden {
    display: flex;
    align-items: center;
    span {
      margin-right: 6px;
      &:nth-child(4n) {
        margin-right: 27px;
      }

      &.hidden-digit {
        width: 9px;
        height: 9px;
        background: #fff;
        border-radius: 50%;
        font-size: 0;
      }
    }
  }
  &__meta {
    display: flex;
    @include heading-bold;
    color: #fff;
    align-items: center;
    margin-bottom: 9px;
    .label {
      margin-right: 4px;
    }
  }
  &__validity {
    display: flex;
    margin-right: 36px;
  }
  &__cvv {
    display: flex;
  }
  &__provider {
    display: flex;
    justify-content: flex-end;
    .q-icon {
      color: #fff;
      font-size: 26px;
      width: auto;
    }
  }
}
</style>
<style lang="scss">
.cards {
  &__show-number {
    margin-bottom: 12px;
    color: #01d167;
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    @media screen and (max-width: 767px) {
      padding-right: 24px;
    }
    .q-icon {
      margin-right: 6px;
    }
  }
  &__carousel {
    .q-carousel__navigation--bottom {
      bottom: -20px;
    }
    .q-carousel__navigation-icon {
      margin: 0;
      padding: 0;
      min-height: 8px;
      min-width: 8px;
      .q-focus-helper {
        display: none;
      }
      .q-icon {
        font-size: 8px;
        color: rgba(1, 209, 103, 0.2);
      }
      &--active {
        .q-icon {
          width: 16px;
          height: 8px;
          overflow: hidden;
          font-size: 16px;
          color: #01d167;
        }
      }
    }
  }
}
</style>
