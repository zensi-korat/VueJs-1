<template>
  <div>Component B</div>
  <div>{{ message }}</div>
</template>

<script>
import { inject } from "vue";

const message = inject("message");
</script>
