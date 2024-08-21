<template>
  <div>
    <!-- <NotesComponent /> -->
    <!-- <ExpenseTracker /> -->
    <h1>{{ name }}</h1>

    <!-- new task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All tasks</button>
      <button @click="filter = 'favs'">Favs tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="loading">Loading tasks....</div>

    <!-- task list -->
    <div class="task-list" v-if="filter === 'all'">
      <p>You're have {{ totalCount }} task left to do</p>
      <div v-for="task1 in tasks" :key="task1">
        <TaskDetails :task="task1" />
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You're have {{ favCount }} Favs left to do</p>
      <div v-for="task1 in tfavs" :key="task1">
        <TaskDetails :task="task1" />
      </div>
    </div>

    <button @click="taskStore.$reset">reset state</button>
    <h1>dfgh</h1>
    <ProvideComponent />
  </div>
</template>

<script setup>
import TaskDetails from "./components/TaskDetails.vue";
// import NotesComponent from "./components/NotesComponent.vue";
// import ExpenseTracker from "./components/ExpenseTracker/ExpenseTracker.vue";

import { useTaskStore } from "./stores/TaskStore";
import { ref, provide } from "vue";
// import TaskDetailsVue from "./components/TaskDetails.vue";
import TaskForm from "./components/TaskForm.vue";
import { storeToRefs } from "pinia";
import ProvideComponent from "./components/ProvideComponent.vue";

const taskStore = useTaskStore();
const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore);

//------------>    provide/inject with string
const message = "this is String message";
provide("message", message);

//----------->    provide/inject with reactive value
const searchText = ref("Hello this is a reactive value");
function updateSearchText() {
  searchText.value = "Updated value from parent";
}

provide("reactiveValue", { searchText, updateSearchText });

//fetch tasks
taskStore.getTasks();
const filter = ref("all");
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
.task i.active {
  color: #ff005d;
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
/* new task form */
.new-task-form {
  background: #e7e7e7;
  padding: 20px 0;
}
form {
  max-width: 400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 10px;
}
form button {
  background: #ffd859;
  border: 0;
  padding: 10px;
  font-family: "Poppins";
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
}
form input {
  border: 0;
  padding: 10px;
  border-radius: 6px;
  color: #555;
  font-size: 1em;
}

/* loading state */
.loading {
  max-width: 640px;
  border: 1px solid #ffd859;
  background: #ffe9a0;
  color: #3a3a3a;
  padding: 5px 0;
  text-align: center;
  margin: 30px auto;
}
</style>
