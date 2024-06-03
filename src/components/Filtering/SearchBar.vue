<script setup>
const searchValue = defineModel('searchValue')
</script>

<template>
<input class="search" placeholder="Search" v-model="searchValue">
</template>

<style scoped>
.search {
  display: flex;
  width: 100%;
  background-color: #333;
  border: none;
  border-radius: 25px;
  padding: 1px 0;
  margin-top: 3px;
  color: #787168;
  font-size: 16px;
  align-self: center;
  text-align: center;
}
</style>