<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i class="material-icons" @click="taskStore.deleteTask(task.id)"
        >delete</i
      >
      <!-- if task.isFav is true then it will apply this active class -->
      <i
        class="material-icons"
        :class="{ active: task.isFav }"
        @click="taskStore.toggleFav(task.id)"
        >favorite</i
      >
    </div>
  </div>
</template>

<script>
import { useTaskStore } from "../stores/TaskStore";
export default {
  props: ["task"],
  setup() {
    const taskStore = useTaskStore();

    return { taskStore };
  },
};
</script>

<style></style>
