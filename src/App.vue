<script setup>
import {ref} from "vue";
import Login from "@/pages/login.vue";

const storageKey = ref(localStorage.getItem('Key'))

</script>

<template>

  <main>
    <Login v-if="!storageKey" :storage-key="storageKey" />
    <RouterView v-if="storageKey" :key="$route.fullPath" />
  </main>
</template>

<style scoped>

</style>
