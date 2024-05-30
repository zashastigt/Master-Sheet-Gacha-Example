<script setup>
import {ref} from "vue";
import {replaceChar} from "@/data/manipulation.ts";

const props = defineProps({
  listShown: Boolean,
  elements: Array,
  elementSrc: String
})

const checked = ref(false)

</script>

<template>
<div class="filters">

  <ul :class="`elements ${listShown ? '' : 'elementHidden'}`">
    <label v-for="element in elements">
      <input type="checkbox" value="" @change="checked = !checked" :checked="checked">
      <img :alt="element" :class="`element ${checked === true ? 'opaque' : ''}`" :src="`${replaceChar(elementSrc, element)}`">
      <span>{{}}</span>
    </label>
  </ul>

  <ul class="weapons">
    <label>
      <input type="checkbox" value="" @change="" :checked="checked">
      <img alt="#" :class="`element`" :src="``">
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

.elements, .weapons {
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
  border-left: none;
  border-radius: 0 15px 15px 0;
}

.weapons {
  right: 0;
  border-right: none;
  border-radius: 15px 0 0 15px;
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

.element, .weapon {
  min-height: 50px;
  min-width: 50px;
  max-height: 50px;
  max-width: 50px;
  opacity: 50%;
}

.element:hover, .weapon:hover {
  transform: rotate(5deg);
}

.opaque {
  opacity: 100%;
}

.weapon {
  background-color: #2A2C2D;
  border-radius: 50%;
}

input[type=checkbox] {
  display: none;
}
</style>