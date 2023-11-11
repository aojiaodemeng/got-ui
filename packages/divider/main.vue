<template>
  <div :class="['got-divider', 'got-divider-' + type, 'got-divider-' + align]" :style="style">
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, type PropType } from 'vue'
import { type IThemeType } from '../common/interface'
defineOptions({
  name: 'GDivider'
})

const props = defineProps({
  type: { type: String as PropType<IThemeType>, default: 'normal' },
  align: { type: String as PropType<'left' | 'center' | 'right'>, default: 'center' },
  offset: { type: Number, default: 32 }
})
const style = computed(() => {
  return {
    '--got-divider-offset': props.offset + 'px'
  }
})
</script>
<style lang="scss">
.got-divider {
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #000;
  font-weight: bold;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &-primary {
    color: var(--got-primary-color);
  }
  &-info {
    color: var(---got-info-status-color);
  }
  &-success {
    color: var(--got-success-status-color);
  }
  &-error {
    color: var(--got-error-status-color);
  }
  &-warning {
    color: var(--got-warning-status-color);
  }

  &:before,
  &:after {
    content: '';
    flex: 1;
    height: 0;
    border-top: 1px dashed currentColor;
  }
  &:before {
    margin-right: #000;
  }
  &:after {
    margin-left: #000;
  }
  &-left {
    &:before {
      width: var(--got-divider-offset);
      flex: 0 0 auto;
    }
  }
  &-right {
    &:after {
      width: var(--got-divider-offset);
      flex: 0 0 auto;
    }
  }
  a,
  strong,
  span,
  label {
    font-weight: bold;
  }
}
</style>
