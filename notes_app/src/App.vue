<template>
  <div>
    <!-- <NotesComponent /> -->
    <!-- <ExpenseTracker /> -->
    <h1>{{ taskStore.name }}</h1>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favs tasks</button>
    </nav>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You're have {{ taskStore.totalCount }} task left to do</p>
      <div v-for="task1 in taskStore.tasks" :key="task1">
        <TaskDetails :task="task1" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You're have {{ taskStore.favCount }} Favs left to do</p>
      <div v-for="task1 in taskStore.favs" :key="task1">
        <TaskDetails :task="task1" />
      </div>
    </div>
  </div>
</template>

<script>
import TaskDetails from "./components/TaskDetails.vue";
// import NotesComponent from "./components/NotesComponent.vue";
// import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker.vue";

import { useTaskStore } from "./stores/TaskStore";
import { ref } from "vue";
import TaskDetailsVue from "./components/TaskDetails.vue";
export default {
  components: { TaskDetails },
  setup() {
    const taskStore = useTaskStore();
    const filter = ref("all");
    return { taskStore, filter };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}

body {
  background: #eee;
}

/* task list */
.task-list {
  max-width: 640px;
  margin: 20px auto;
}
.task {
  padding: 6px 20px;
  background: #fff;
  margin-top: 20px;
  border-radius: 4px;
  box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.task h3,
.task .icons {
  display: inline-block;
}
.task .icons {
  text-align: right;
}
.task i {
  font-size: 1.4em;
  margin-left: 6px;
  cursor: pointer;
  color: #bbb;
}

/* filter nav */
.filter {
  width: 640px;
  margin: 10px auto;
  text-align: right;
}
.filter button {
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 0.8em;
  font-size: 1em;
}
</style>
