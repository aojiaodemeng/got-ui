<template>
  <div class="g-breadcrumb">
    <div class="g-breadcrumb-item" v-for="(item, idx) in paths" :key="idx">{{ item.text }}</div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue'
import { type INavNode } from '../common/interface'
defineOptions({
  name: 'GBreadcrumb'
})
defineProps({
  paths: { type: Array as PropType<Array<INavNode>>, default: () => [] }
})
</script>
<style lang="scss">
@import '../style/mixin.scss';

.g-breadcrumb {
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
  line-height: 1;
  cursor: default;
  &-item {
    padding-right: 5px;
    margin-right: 5px;
    &:nth-last-of-type(n + 2) {
      position: relative;
      &:after {
        @include rlMx(rgba(0, 0, 0, 0.8));
        top: 2px;
        bottom: 2px;
      }
    }
    &:nth-last-of-type(1) {
      color: var(--got-primary-color);
    }
  }
}

/* @import '../../assets/style/fn.scss';

.g-breadcrumb {
  display: flex;
  align-items: center;
  color: var(--g-c);
  font-weight: var(--g-fw-m);
  font-size: 15px;
  line-height: 1;
  &-item {
    flex: 0 0 auto;
    padding-right: 5px;
    margin-right: 5px;
    &:nth-last-of-type(n + 2) {
      position: relative;
      &:after {
        @include rlMx(var(--g-c));
        top: 2px;
        bottom: 2px;
      }
    }
    &:nth-last-of-type(1) {
      color: var(--g-primary);
    }
  }
} */
</style>
