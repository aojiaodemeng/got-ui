<template>
  <el-row :gutter="12">
    <el-col :span="8">
      <g-card shadow="always"> Always </g-card>
    </el-col>
    <el-col :span="8">
      <g-card shadow="hover"> Hover </g-card>
    </el-col>
    <el-col :span="8">
      <g-card shadow="never"> Never </g-card>
    </el-col>
  </el-row>
</template>
