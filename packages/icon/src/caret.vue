<template>
  <icon class="got-icon-caret" :direction="direction" />
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import Icon from '../base.vue'
defineProps({
  direction: String
})
</script>
<style lang="scss">
.got-icon-caret {
  background-color: transparent;
  border: none;
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-width: 5px;
    border-color: transparent;
    border-style: solid;
  }
  &[direction='up']:before {
    border-top: none;
    border-bottom-color: currentColor;
  }
  &[direction='down']:before {
    border-bottom: none;
    border-top-color: currentColor;
  }
  &[direction='left']:before {
    border-left: none;
    border-right-color: currentColor;
  }
  &[direction='right']:before {
    border-right: none;
    border-left-color: currentColor;
  }
}
</style>
