<template>
  <div :class="['got-card', `${shadow}-shadow`]">
    <div v-if="$slots.header || header" class="got-card-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :style="bodyStyle" class="got-card-body">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineOptions({
  name: 'GCard'
})

defineProps({
  header: {
    type: String,
    default: ''
  },
  /**
   * @description CSS style of card body
   */
  bodyStyle: {
    type: String,
    default: ''
  },
  /**
   * @description custom class name of card body
   */
  bodyClass: String,
  /**
   * @description when to show card shadows
   */
  shadow: {
    type: String,
    values: ['always', 'hover', 'never'],
    default: 'always'
  }
})
</script>

<style lang="scss" scoped>
.got-card {
  border-radius: 4px;
  border: 1px solid rgb(228, 231, 237);
  overflow: hidden;
  &.always-shadow {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }

  .got-card-header {
    padding: 18px 20px;
  }
  .got-card-body {
    padding: 20px;
  }
}
</style>
