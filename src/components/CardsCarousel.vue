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
      <q-carousel-slide :name="1" class="column no-wrap">
        <div class="row justify-start items-center no-wrap">
          <div class="card green">
            <div class="card__logo">
              <q-icon name="icon-Aspire-Logo" />
            </div>
            <div class="card__holder-name">Mark Henry</div>
            <div class="card__number">
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              2020
            </div>
            <div class="card__meta">
              <div class="card__validity">
                <span class="label">Thru:</span>
                <p class="info">12/20</p>
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
      <q-carousel-slide :name="2" class="column no-wrap">
        <div class="row justify-start items-center no-wrap">
          <div class="card blue">
            <div class="card__logo">
              <q-icon name="icon-Aspire-Logo" />
            </div>
            <div class="card__holder-name">Mark Henry</div>
            <div class="card__number">
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              4557
            </div>
            <div class="card__meta">
              <div class="card__validity">
                <span class="label">Thru:</span>
                <p class="info">02/23</p>
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
      <q-carousel-slide :name="3" class="column no-wrap">
        <div class="row justify-start items-center no-wrap">
          <div class="card pink">
            <div class="card__logo">
              <q-icon name="icon-Aspire-Logo" />
            </div>
            <div class="card__holder-name">Mark Henry</div>
            <div class="card__number">
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              <div class="card__number-hidden">
                <span></span><span></span><span></span><span></span>
              </div>
              9897
            </div>
            <div class="card__meta">
              <div class="card__validity">
                <span class="label">Thru:</span>
                <p class="info">06/26</p>
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
import { ref } from 'vue';

export default {
  name: 'CardsCarousel',
  setup() {
    return {
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

  &.green {
    background: #01d167;
  }

  &.blue {
    background: #536dff;
  }

  &.pink {
    background: #c71585;
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
    span {
      width: 9px;
      height: 9px;
      background: #fff;
      border-radius: 50%;
      margin-right: 6px;
      &:last-child {
        margin-right: 27px;
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
