<script setup>
import {ref} from "vue";

const key = ref('')

function handleClick(key) {
  if (key.length !== 0) {
    localStorage.setItem('Key', key)
  }
}
</script>

<template>
  <div class="container">
    <div class="storage_container">
      <input class="storage_text" type="text" v-model="key" />
      <button class="storage_button" @click="handleClick(key)" >Submit</button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.storage_container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.storage_text {
  display: flex;
  width: 35%;
  background-color: #222324;
  border-radius: 25px;
  border-color: white;
  border-style: solid;
  border-width: 1px;
  padding: 0.75em;
  color: #787168;
  font-size: 18px;
  text-align: center;
}

.storage_button {
  margin: 20px;
  display: flex;
  width: 5%;
  background-color: #222324;
  border-color: white;
  border-style: solid;
  font-size: 18px;
  border-radius: 25px;
  color: #787168;
  justify-content: center;
  border-width: 1px;
}
.storage_button:hover {
  box-shadow: inset 0 0 0 2em white
}
</style>