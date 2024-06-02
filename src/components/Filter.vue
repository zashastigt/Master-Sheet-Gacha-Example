<script setup>
import {ref} from "vue";
import {replaceChar} from "@/data/manipulation.ts";

const props = defineProps({
  listShown: Boolean,
  elements: Array,
  groups: Array,
  elementSrc: String,
  filterListElement: Array,
  filterListGroup: Array
})

let checked = ref(false)

function addToFilter(item, list) {
  if (list.includes(item)) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === item) {
        list = list.splice(i, 1)
      }
    }
  } else {
    list.push(item)
  }
}

</script>

<template>
<div class="filters">

  <ul :class="`elements ${listShown ? '' : 'elementHidden'}`">
    <label v-for="element in elements">
      <input type="checkbox" value="" :key="element" @click="addToFilter(element, filterListElement)" @change="checked = !checked" :checked="checked">
      <img :alt="element" :class="`element ${checked === true ? 'opaque' : ''}`" :src="`${replaceChar(elementSrc, element)}`">
      <span>{{}}</span>
    </label>
  </ul>

  <ul class="groups">
    <label v-for="group in groups">
      <input type="checkbox" value="" :key="group" @click="addToFilter(group, filterListGroup)" @change="checked = !checked" :checked="checked">
      <img :alt="group" :class="`group ${checked === true ? 'opaque' : ''}`" :src="`${replaceChar(elementSrc, group)}`">
      <span>{{}}</span>
    </label>
  </ul>

</div>
</template>

<style scoped>
.filters {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  z-index: 2;
}

.elements, .groups {
  display: flex;
  justify-content: space-between;
  background-color: #222324;
  border-style: solid;
  border-color: #787168;
  width: fit-content;
  flex-direction: column;
  margin: 0;
  position: fixed;
  padding: 10px
}

.elements {
  left: 0;
  border-top: none;
  border-left: none;
  border-radius: 0 0 15px 0;
}

.groups {
  right: 0;
  border-top: none;
  border-right: none;
  border-radius: 0 0 0 15px;
}

.elementsHidden {
  display: none;
}
label {
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 4px;
  width: 70px;
  user-select: none;
}

.element, .group {
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  opacity: 50%;
}

.element:hover, .group:hover {
  transform: rotate(5deg);
}

.opaque {
  opacity: 100%;
}

.group {
  background-color: #2A2C2D;
  border-radius: 50%;
}

input[type=checkbox] {
  display: none;
}
</style>