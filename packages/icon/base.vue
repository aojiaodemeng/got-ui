<template>
  <icon class="got-icon got-internal-icon" />
</template>
<script lang="ts" setup>
import Icon from './icon.vue'
</script>
<style lang="scss">
.got-internal-icon {
  --got-icon-ratio: calc(var(--got-i-size, 24px) * 0.0625);
  --got-icon-6: calc(var(--got-icon-ratio) * 6);
  --got-icon-8: calc(var(--got-icon-ratio) * 8);

  position: relative;
  &:before,
  &:after {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    display: block;
    transition: all 0.15s ease;
    box-sizing: border-box;
  }
}
</style>
