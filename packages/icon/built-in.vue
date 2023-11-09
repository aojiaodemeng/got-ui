<template>
  <icon class="got-builtin-icon"><slot :outline="outline"></slot></icon>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Icon from './icon.vue'

const props = defineProps({
  outline: Boolean
})
</script>
<style lang="scss">
.got-builtin-icon {
  svg {
    vertical-align: top;
    fill: currentColor;
  }
}
</style>
