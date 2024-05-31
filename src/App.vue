<script setup>
import {ref} from "vue";
</script>

<template>

  <main>
    <RouterView :key="$route.fullPath" />
  </main>
</template>

<style scoped>

</style>
