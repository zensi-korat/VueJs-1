<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <p>x</p>
        {{ newNote }}
        <textarea v-model.trim="newNote" />
        <p v-if="errorMessage">{{ errorMessage }}</p>
        <button @click="addNote">Add Note</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="cards-container">
        <div
          class="card"
          v-for="note in notes"
          :key="note.id"
          :style="{ backgroundColor: note.backgroundColor }"
        >
          <p class="main-text">{{ note.text }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-Us") }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const newNote = ref("");
const errorMessage = ref("");
const notes = ref([]);

function getRandomColor() {
  return "hsl(" + Math.random() * 360 + ", 100%, 75%)";
}

const addNote = () => {
  if (newNote.value.length < 10) {
    return (errorMessage.value = "Note needs to be 10 characters long");
  }
  notes.value.push({
    id: Math.floor(Math.random() * 1000000),
    text: newNote.value,
    date: new Date(),
    backgroundColor: getRandomColor(),
  });
  showModal.value = false;
  newNote.value = "";
  errorMessage.value = "";
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  max-width: 1000px;
  padding: 10px;
  margin: 0 auto;
}

h1 {
  font-weight: bold;
  margin-bottom: 25px;
  font-size: 75px;
}

.card {
  width: 225px;
  height: 225px;
  background-color: rgb(237, 182, 44);
  padding: 10px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  margin-bottom: 20px;
}

.main-text {
  line-height: 1.25;
  font-size: 17.5px;
  font-weight: bold;
}

.date {
  font-size: 12.5px;
  margin-top: auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header button {
  border: none;
  padding: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  background-color: rgb(21, 20, 20);
  border-radius: 1000px;
  color: white;
  font-size: 20px;
}
.cards-container {
  display: flex;
  flex-wrap: wrap;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.77);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

main {
  height: 100vh;
  width: 100vw;
}

.modal {
  width: 750px;
  background-color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal button {
  padding: 10px 20px;
  font-size: 20px;
  width: 100%;
  background-color: blueviolet;
  border: none;
  color: white;
  cursor: pointer;
  margin-top: 15px;
}

.modal p {
  font-size: 14px;
  color: red;
  cursor: pointer;
}

textarea {
  width: 100%;
  height: 200px;
  padding: 5px;
  font-size: 20px;
}
</style>
