<template>
  <div>
    <CircleSuccess /><CircleError /><CircleWarning /><CircleInfo />
    <times /><tick /><plus /><minus /><Square /><SquareCheck /><SquareHalfCheck /><SquareMinus /><SquarePlus /><SquareTick />
    <arrow direction="up" />
    <arrow direction="down" />
    <arrow direction="left" />
    <arrow direction="right" />

    <arrow :double="true" direction="up" />
    <arrow :double="true" direction="down" />
    <arrow :double="true" direction="left" />
    <arrow :double="true" direction="right" />
    <caret direction="up" />
    <caret direction="down" />
    <caret direction="left" />
    <caret direction="right" />
    <Tselect /> <backtop /><Time /> <Theme /><Sun /><Moon /><Sort /><Search />

    <Navicon /><Mobile /><Eye /> <Exclam /><Ellipsis /><Datetime /><Cselect /><Date />
    <div><loading-spin /></div>
    <div><loading-bounce /></div>
  </div>
</template>
<script lang="ts" setup>
import {
  CircleSuccess,
  CircleError,
  CircleWarning,
  CircleInfo,
  Times,
  Tick,
  Plus,
  Minus,
  Square,
  SquareCheck,
  SquareHalfCheck,
  SquareMinus,
  SquarePlus,
  SquareTick,
  Arrow,
  Caret,
  Tselect,
  Time,
  Theme,
  Sun,
  Sort,
  Search,
  Moon,
  Navicon,
  Mobile,
  Eye,
  Exclam,
  Ellipsis,
  Datetime,
  Date,
  Cselect,
  LoadingSpin,
  LoadingBounce
} from '../../../packages/icon'
</script>
