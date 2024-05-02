<template>
  <div>
    <form @submit.prevent="handleSubmit"></form>
    <input type="text" placeholder="I need to..." v-model="newTask" />
    <button @click="handleSubmit">Add</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useTaskStore } from "../stores/TaskStore.js";
export default {
  setup() {
    const taskStore = useTaskStore();
    const newTask = ref("");

    const handleSubmit = () => {
      if (newTask.value.length > 0) {
        console.log("zensi");
        taskStore.addTask({
          title: newTask.value,
          isFav: false,
          id: Math.floor(Math.random() * 1000),
        });
        newTask.value = "";
      }
    };
    return { handleSubmit, newTask };
  },
};
</script>

<style></style>
