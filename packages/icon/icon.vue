<template>
  <i
    class="g-icon"
    :type="type"
    :style="style"
    :disabled="disabled"
    :hover="hover && state.hover && !disabled"
    ><slot></slot
  ></i>
</template>
<script lang="ts" setup>
import { reactive, defineProps, PropType, computed } from 'vue'
import { IThemeType } from '../common/interface'
const props = defineProps({
  hover: { type: Boolean, default: true },
  type: String as PropType<IThemeType>,
  disabled: Boolean,
  color: String,
  size: String
})
const state = reactive({
  // hover: !('ontouchstart' in window)
  hover: false
})
const style = computed(() => {
  const style = {} as { [k: string]: unknown }
  if (props.color) style['--got-i-color'] = props.color
  if (props.size) style['--got-i-size'] = props.size
  return style
})
</script>
<style lang="scss">
.g-icon {
  display: inline-block;
  vertical-align: middle;

  text-indent: initial;
  box-sizing: border-box;
  flex: 0 0 auto;
  font-style: normal;
  text-align: center;
  line-height: 1;

  color: var(--got-i-color, inherit);
  font-size: var(--got-i-size, 24px);
  width: var(--got-i-size, 24px);
  height: var(--got-i-size, 24px);
  &[disabled='true'] {
    cursor: not-allowed !important;
    opacity: 0.4 !important;
  }
}
</style>
