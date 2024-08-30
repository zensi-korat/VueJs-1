<template>
  <div>Component B</div>
  <div>{{ searchText }}</div>
  <div>{{ stringMsg }}</div>
  <div>
    <button @click="updateSearchText">Update Search Text</button>
  </div>
  <div class="card">
    <h4>Name: {{ wizard.name }}</h4>
    <h4>Name: {{ wizard.wand }}</h4>
    <button @click="changeNameCase">Change name to upper case</button>
    <button @click="changeWandCore">Change wand core</button>
    <button @click="changeWizard">Change wizard</button>
  </div>
  <div>
    <h4>{{ wizards }}</h4>
    <button @click="wizards.push('Draco Mallfoy')">Add new Wizard</button>
  </div>
  <input type="text" ref="input" />
  <h4 ref="title">Life cycle hooks</h4>
  <!-- <h4>{{ number }}</h4> -->
  <button @click="number++">Increment by one</button>

  <ComponentC />
</template>

<script setup>
import {
  inject,
  onBeforeMount,
  onBeforeUpdate,
  onMounted,
  onUpdated,
  ref,
  watch,
} from "vue";
import ComponentC from "./ComponentC";

const { searchText, updateSearchText } = inject("reactiveValue");
const stringMsg = inject("message");

const wizard = ref({
  id: 1001,
  name: "Harry Potter",
  house: "Gryffindor",
  age: 17,
  wand: {
    core: "Phoenix feather",
    wood: "Holy",
  },
});

function changeNameCase() {
  wizard.value.name = wizard.value.name.toUpperCase();
}

function changeWandCore() {
  wizard.value.wand.core = "Unicorn hair";
}

function changeWizard() {
  wizard.value = {
    id: 1002,
    name: "Hermione Granger",
    house: "Gryffindor",
    age: 17,
    wand: {
      core: "Dragon heartstring",
      wood: "Vine",
    },
  };
}

// ------> Watchers
// watch(
//   () => wizard.value.name,
//   (newValue, oldValue) => {
//     console.log("wizard's array's name is being watched", newValue, oldValue);
//   },
//   { immediate: true }
// );

watch(
  wizard,
  (newValue, oldValue) => {
    console.log("wizard's array's name is being watched", newValue, oldValue);
  },
  { deep: true }
);

watch(
  wizard,
  () => {
    localStorage.setItem("wizardStorage", JSON.stringify(wizard.value));
  },
  { deep: true }
);

let wizards = ref(["Harry", "Hermione", "Ron"]);

let input = ref();

//------> Lifecycle hooks
let number = ref(1);
let title = ref();
//on setup
console.log("App component is setup");

//on before mount
onBeforeMount(() => {
  console.log("App component before mount");
  console.log(number.value);
  console.log(title.value); // undefined in o/p as template is not mounted. hence not good idea to use ref in beforemount
});

//mount
onMounted(() => {
  console.log("App component is mounted");
  console.log(title.value);
  console.log(searchText.value);
  input.value.focus();
});

//if you want to read from dom before it is updated then beforeupate is usefull as it alllow us to change but the dom updates
onBeforeUpdate(() => {
  console.log("App component is before update");
});

onUpdated(() => {
  console.log("App component is updated");
});
</script>

<style scoped>
div {
  font-size: 24px;
  margin-bottom: 10px;
}

.card {
  background-color: lavenderblush;
  color: rgb(0, 0, 0);
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>
