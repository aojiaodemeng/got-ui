<template>
  <div :class="cns" :style="style">
    <span><slot></slot></span>
  </div>
</template>
<script lang="ts" setup>
import { computed, defineProps, PropType } from 'vue'
import { type IThemeType } from '../common/interface'
defineOptions({
  name: 'GTag'
})

const props = defineProps({
  type: { type: String as PropType<IThemeType | 'light' | 'dark'>, default: 'default' },
  outline: Boolean,
  style: Object,
  round: { type: Boolean, default: false }
})

const cns = computed(() => {
  const cns = ['g-tag', 'g-tag-' + props.type]
  if (props.outline) cns.push('g-tag-outline')
  if (props.round) cns.push('g-tag-round')
  return cns
})
</script>
<style lang="scss">
.g-tag {
  height: 22px;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  vertical-align: middle;
  cursor: default;
  padding: 0 8px;

  &-primary {
    background-color: var(--got-primary-bg);
    color: var(--got-primary-color);
    border-color: var(--got-primary-bd);
  }
  &-warning {
    background-color: var(--got-warning-bg);
    color: var(--got-warning-color);
    border-color: var(--got-warning-bd);
  }
  &-error {
    background-color: var(--got-error-bg);
    color: var(--got-error-color);
    border-color: var(--got-error-bd);
  }
  &-success {
    background-color: var(--got-success-bg);
    color: var(--got-success-color);
    border-color: var(--got-success-bd);
  }

  &-info {
    background-color: var(--got-info-bg);
    color: var(--got-info-color);
    border-color: var(--got-info-bd);
  }

  &-default {
    background-color: var(--got-default-bg);
    color: var(--got-default-color);
    border-color: var(--got-default-bd);
  }
  &-light {
    background-color: #ffffff;
    color: #595959;
    border-color: #595959;
  }
  &-dark {
    background-color: #333333;
    color: #ccc;
    border-color: #ccc;
  }
  &-outline {
    border-style: dashed;
  }
  &-round {
    border-radius: 10px;
  }
}
</style>
