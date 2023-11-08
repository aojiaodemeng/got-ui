<template>
  <g-card class="box-card">
    <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
  </g-card>
</template>
<style scoped>
.text {
  font-size: 14px;
}

.item {
  padding: 0px 0;
}

.box-card {
  display: inline-block;
  width: 280px;
}
</style>
