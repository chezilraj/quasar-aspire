<template>
  <div class="cards-accordion">
    <q-list>
      <q-expansion-item
        icon="img:icons/acc1.svg"
        expand-icon="icon-down-arrow"
        label="Card details"
      >
        <q-card>
          <q-card-section> coming soon... </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-expansion-item
        icon="img:icons/acc2.svg"
        expand-icon="icon-down-arrow"
        label="Recent transactions"
        default-opened
      >
        <q-card>
          <q-card-section>
            <div class="transaction">
              <div class="transaction__items">
                <div class="transaction__items-logo">
                  <q-icon class="logo" name="icon-file-storage" />
                </div>
                <div class="transaction__items-details">
                  <div class="title">Hamleys</div>
                  <div class="date">20 May 2020</div>
                  <div class="action">
                    <q-icon name="icon-business-and-finance" />Refund on debit
                    card
                  </div>
                </div>
                <div class="transaction__items-price">
                  <div class="price">S$ 150</div>
                  <q-icon name="icon-next" />
                </div>
              </div>
              <div class="transaction__items">
                <div class="transaction__items-logo">
                  <q-icon class="logo" name="icon-flights" />
                </div>
                <div class="transaction__items-details">
                  <div class="title">Hamleys</div>
                  <div class="date">20 May 2020</div>
                  <div class="action">
                    <q-icon name="icon-business-and-finance" />Refund on debit
                    card
                  </div>
                </div>
                <div class="transaction__items-price">
                  <div class="price">S$ 150</div>
                  <q-icon name="icon-next" />
                </div>
              </div>
              <div class="transaction__items">
                <div class="transaction__items-logo">
                  <q-icon class="logo" name="icon-megaphone" />
                </div>
                <div class="transaction__items-details">
                  <div class="title">Hamleys</div>
                  <div class="date">20 May 2020</div>
                  <div class="action">
                    <q-icon name="icon-business-and-finance" />Refund on debit
                    card
                  </div>
                </div>
                <div class="transaction__items-price">
                  <div class="price">S$ 150</div>
                  <q-icon name="icon-next" />
                </div>
              </div>
              <div class="transaction__items">
                <div class="transaction__items-logo">
                  <q-icon class="logo" name="icon-file-storage" />
                </div>
                <div class="transaction__items-details">
                  <div class="title">Hamleys</div>
                  <div class="date">20 May 2020</div>
                  <div class="action">
                    <q-icon name="icon-business-and-finance" />Refund on debit
                    card
                  </div>
                </div>
                <div class="transaction__items-price">
                  <div class="price">S$ 150</div>
                  <q-icon name="icon-next" />
                </div>
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>
    </q-list>
  </div>
</template>
<script>
export default {
  name: 'CardsAccordion',
};
</script>
<style lang="scss" scoped>
@import '~src/css/styleguide/headings.scss';

.q-tab {
  &__label {
    text-transform: initial;
    @include heading-semibold;
  }
}
.q-expansion-item {
  background: #f5f9ff;
  border: 1px solid #f5f5f5;
  margin-bottom: 24px;
  border-radius: 8px;
  filter: drop-shadow(0 0 8px #0000000a);
}
.transaction {
  &__items {
    display: flex;
    border-bottom: 1px solid #f5f5f5;
    padding-top: 16px;
    cursor: pointer;
    &:last-child {
      border-bottom: none;
    }
    .logo {
      width: 48px;
      height: 48px;
      background: #009dff1a;
      border-radius: 50%;
      margin-right: 12px;
    }

    &:hover {
      .price {
        color: #01d167;
      }
    }
  }
  &__items-details {
    display: flex;
    flex-direction: column;

    .title {
      @include heading-semibold;
      font-size: 14px;
      margin-bottom: 4px;
    }

    .date {
      @include opensans-regular;
      font-size: 13px;
      margin-bottom: 12px;
      color: #aaaaaa;
    }

    .action {
      @include heading-semibold;
      font-size: 12px;
      margin-bottom: 16px;
      color: #325baf;
      cursor: pointer;

      .q-icon {
        width: 24px;
        height: 20px;
        color: #fff;
        background: #325baf;
        border-radius: 50%;
        margin-right: 8px;
        font-size: 8px;
      }
    }
  }

  &__items-price {
    display: flex;
    margin-left: auto;
    .price {
      @include heading-bold;
      font-size: 14px;
      margin-right: 10px;
    }
  }
}
</style>
<style lang="scss">
.q-expansion-item__toggle-icon {
  &:before {
    opacity: 0.15;
  }
}
</style>
