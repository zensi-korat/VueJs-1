<template>
  <div>
    <div>Component A</div>
    <ComponentB />

    <div>{{ main }}</div>
    <button @click="$emit('deleteItem')">$Emit from child</button>
    <div class="form-wrapper">
      <p>email valid: {{ isValidEmail }}</p>
      <p>password valid: {{ isStrongPassword }}</p>
      <p>password matches: {{ isPasswordConfirmed }}</p>
      <div v-if="email != ' ' && !isValidEmail">Invalid Password</div>
      <input
        :class="{ valid: isValidEmail == true, invalid: isValidEmail == false }"
        v-model="email"
        type="text"
        placeholder="Email"
      />
      <div v-if="password != ' ' && !isStrongPassword">Weak Password</div>
      <input
        :class="{
          valid: isStrongPassword == true,
          invalid: isStrongPassword == false,
        }"
        v-model="password"
        type="password"
        placeholder="Password"
      />
      <input
        :class="{
          valid: isPasswordConfirmed == true,
          invalid: isPasswordConfirmed == false,
        }"
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
      />
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<script setup>
import { inject, ref, computed } from "vue";
import ComponentB from "./ComponentB.vue";

const main = inject("main", "default value");
const startValidation = ref(false);
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const isValidEmail = computed(() => {
  return startValidation.value
    ? /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)
    : null;
});

const isStrongPassword = computed(() => {
  return startValidation.value
    ? /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(
        password.value
      )
    : null;
});

const isPasswordConfirmed = computed(() => {
  return startValidation.value ? password.value == confirmPassword.value : null;
});

function register() {
  startValidation.value = true;
}
</script>

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  width: 20%;
  gap: 10px;
  margin: 20px;
}
.form-wrapper > * {
  font-size: 16px;
  padding: 5px 10px;
}

.valid {
  background-color: greenyellow;
}

.invalid {
  background-color: crimson;
}
</style>
