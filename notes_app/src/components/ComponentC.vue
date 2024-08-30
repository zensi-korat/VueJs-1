<template>
  <div style="background-color: aqua; padding: 10px; margin: 20px">
    <p>This is the ComponentC component.</p>
    <h2>Number of Active users: {{ ActiveUsersNum }}</h2>
    <button @click="hideInactive = !hideInactive">
      {{ toggleHiddenUsers }}
    </button>
    <table>
      <thead>
        <th>Index</th>
        <th>Id</th>
        <th>Name</th>
        <th>Age</th>
        <th>Operation?</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filteredUsers" :key="user.id">
          <td>{{ index + 1 }}</td>
          <td>{{ user.id }}</td>
          <td :class="{ inactive: !user.isActive }">{{ user.name }}</td>
          <td>{{ user.age }}</td>
          <td :class="{ inactive: !user.isActive }">
            <button @click="user.isActive = !user.isActive">
              {{ user.isActive ? "Deactivate" : "Restore" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  ref,
  computed,
} from "vue";
// const isActive = ref();
const users = ref([
  { id: 1001, name: "John", age: 26, isActive: true },
  { id: 1002, name: "Ron", age: 22, isActive: false },
  { id: 1003, name: "Harry", age: 20, isActive: true },
  { id: 1004, name: "Draco", age: 25, isActive: false },
]);

const hideInactive = ref(false);
//computed properties are cached based on reactive dependencies and changes only if reactive depen.. changes
const ActiveUsersNum = computed(
  () => users.value.filter((user) => user.isActive).length
);

const filteredUsers = computed(() =>
  hideInactive.value ? users.value.filter((user) => user.isActive) : users.value
);

const toggleHiddenUsers = computed(() =>
  hideInactive ? "Show All" : "Hide InActive"
);

console.log("ComponentC is setup.");

onBeforeMount(() => {
  console.log("Component1 is before mount.");
});
onMounted(() => {
  console.log("Component1 is mounted.");
});
onBeforeUpdate(() => {
  console.log("Component1 is before update.");
});
onUpdated(() => {
  console.log("Component1 is updated.");
});
onBeforeUnmount(() => {
  console.log("Component1 is before unmount.");
});

//to cleanup things like: timers, DOM eveent listners, server connection
onUnmounted(() => {
  console.log("Component1 is unmounted.");
});
</script>

<style>
.inactive {
  color: red;
  text-decoration: line-through;
}
</style>
