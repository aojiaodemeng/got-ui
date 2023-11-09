<template>
  <div class="got-loading-bounce">
    <div class="got-loading-indicator"></div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  color: String,
  size: String
})

const style = computed(() => {
  const style = {} as { [k: string]: unknown }
  if (props.color) style['--got-i-color'] = props.color
  if (props.size) style['--got-i-size'] = props.size
  return style
})
</script>
<style lang="scss">
@keyframes got-bounce-loading {
  0% {
    height: 3px;
    opacity: 0.3;
  }
  100% {
    height: 16px;
    opacity: 1;
  }
}
.got-loading-bounce {
  position: relative;
  width: 3px;
  height: 16px;
  margin: 0 6px;

  .got-loading-indicator,
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 3px;
    height: 16px;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: currentColor;
    border-radius: 2px;
    backface-visibility: hidden;
  }
  &:before {
    animation: got-bounce-loading 0.6s 0s infinite ease-in-out alternate both;
    left: -6px;
  }
  .got-loading-indicator {
    background-color: currentColor;
    animation: got-bounce-loading 0.6s 0.4s infinite ease-in-out alternate both;
  }
  &:after {
    animation: got-bounce-loading 0.6s 0.8s infinite ease-in-out alternate both;
    right: -6px;
  }
}
</style>
