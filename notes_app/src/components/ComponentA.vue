<template>
  <div>
    <div>Component A</div>
    <ComponentB />

    <div>{{ main }}</div>
  </div>
</template>

<script setup>
import { inject } from "vue";
import ComponentB from "./ComponentB.vue";

const main = inject("main", "default value");
</script>
