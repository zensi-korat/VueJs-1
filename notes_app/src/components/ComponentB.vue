<template>
  <div>Component B</div>
  <div>{{ searchText }}</div>
  <div>{{ stringMsg }}</div>
  <div>
    <button @click="updateSearchText">Update Search Text</button>
  </div>
</template>

<script setup>
import { inject, onMounted } from "vue";

const { searchText, updateSearchText } = inject("reactiveValue");
const stringMsg = inject("message");

onMounted(() => {
  console.log(searchText.value);
});
</script>

<style scoped>
div {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
