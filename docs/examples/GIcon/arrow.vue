<template>
  <div>
    <arrow direction="up" />
    <arrow direction="down" />
    <arrow direction="left" />
    <arrow direction="right" />

    <arrow :double="true" direction="up" />
    <arrow :double="true" direction="down" />
    <arrow :double="true" direction="left" />
    <arrow :double="true" direction="right" />
  </div>
  <div>
    <caret direction="up" />
    <caret direction="down" />
    <caret direction="left" />
    <caret direction="right" />
  </div>
</template>
<script lang="ts" setup>
import { Arrow, Caret } from '../../../packages/icon'
</script>
