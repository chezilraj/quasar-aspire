<template>
  <div class="actions">
    <div class="actions__item">
      <span class="icon icon-Freeze-card"
        ><span class="path1"></span><span class="path2"></span
        ><span class="path3"></span
      ></span>
      <span class="actions__item-label"
        >Freeze<br />
        card</span
      >
    </div>
    <div class="actions__item">
      <span class="icon icon-Set-spend-limit"
        ><span class="path1"></span><span class="path2"></span
        ><span class="path3"></span><span class="path4"></span
        ><span class="path5"></span><span class="path6"></span
        ><span class="path7"></span><span class="path8"></span
      ></span>
      <span class="actions__item-label"
        >Set spend<br />
        limit</span
      >
    </div>
    <div class="actions__item">
      <span class="icon icon--white icon-GPay"
        ><span class="path1"></span><span class="path2"></span
        ><span class="path3"></span><span class="path4"></span
        ><span class="path5"></span><span class="path6"></span
      ></span>
      <span class="actions__item-label"
        >Add to<br />
        GPay</span
      >
    </div>
    <div class="actions__item">
      <span class="icon icon-Replace-card"
        ><span class="path1"></span><span class="path2"></span
        ><span class="path3"></span
      ></span>
      <span class="actions__item-label"
        >Replace<br />
        card</span
      >
    </div>
    <div class="actions__item">
      <span class="icon icon-Deactivate-card"
        ><span class="path1"></span><span class="path2"></span
        ><span class="path3"></span
      ></span>
      <span class="actions__item-label"
        >Cancel<br />
        card</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardsActions',
});
</script>
<style lang="scss" scoped>
@import '~src/css/styleguide/headings.scss';

.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #edf3ff;
  padding: 20px 27px;
  border-radius: 16px;
  height: 116px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    text-align: center;
    @include opensans-regular;
    font-size: 13px;
    line-height: 1.2;
    color: #0c365a;
    .icon {
      font-size: 32px;
      margin-bottom: 7px;
    }
    .icon--white {
      color: #ffff;
    }
  }
}
</style>
