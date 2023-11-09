<template>
  <div>
    状态
    <CircleSuccess size="20px" /><CircleError /><CircleWarning /><CircleInfo />
    <backtop />

    <arrow direction="up" />
    <arrow direction="down" />
    <arrow direction="left" />
    <arrow direction="right" />

    <arrow :double="true" direction="up" />
    <arrow :double="true" direction="down" />
    <arrow :double="true" direction="left" />
    <arrow :double="true" direction="right" />
  </div>
</template>
<script setup lang="ts">
import {
  Backtop,
  CircleSuccess,
  CircleInfo,
  CircleWarning,
  CircleError,
  Arrow
} from '../../packages/icon'
</script>
