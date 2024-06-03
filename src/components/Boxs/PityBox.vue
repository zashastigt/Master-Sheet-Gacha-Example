<script setup>
import {onUpdated, ref} from "vue";
import {convertToObject} from "@/data/manipulation.ts";

const props = defineProps({
  pity: Array
})

onUpdated(() => {
  console.log(props.pity)
})

const selectedPerson = ref('')

</script>

<template>
<div class="box">
  <div class="container" v-if="!selectedPerson">
    <div>
      <div>&nbsp</div>
      <div>Normal</div>
      <div>Weapon</div>
      <div>Event</div>
      <div>50/50</div>
    </div>
    <div class="pityInfo" v-for="person in pity">
      <div>{{ person.Name }}</div>
      <div class="pity">
        <div class="pityColumn color5">
          <span>{{ person.Regular }}</span>
          <span>{{ person.Weapon }}</span>
          <span>{{ person.Character }}</span>
        </div>
        <div class="pityColumn color4">
          <span>{{ person.Regular4 }}</span>
          <span>{{ person.Weapon4 }}</span>
          <span>{{ person.Character4 }}</span>
        </div>
      </div>
      <span>{{ person.Guarantee }}</span>
    </div>
  </div>
  <div class="container" v-if="selectedPerson">

  </div>
  <div class="boxName">Pity</div>
</div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
}

.container {
  display: flex;
  height: 100px;
  width: fit-content;
  background-color: #252525;
  border-radius: 20px 20px 20px 0;
  border: #333333 solid 3px;
  padding: 0 10px;
  margin-right: 26px;
}

.boxName {
  position: relative;
  bottom: 0;
  height: 1.3em;
  padding: 0 10px;
  width: fit-content;
  min-width: 55px;
  border-radius: 0 0 15px 15px;
  text-align: center;
  font-size: 1.1em;
  font-weight: 400;
  color: #ddd;
  background-color: #333333;
}

.pityInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pity {
  display: flex;
  width: 50px;
  margin: 0 2px;
  border-radius: 5px;
}

.pityColumn {
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #000;
  width: 50%;
}

.color4 {
  background-color: rgba(148, 112, 187);
}

.color5 {
  background-color: rgba(200, 124, 36);
}

.noColor {
  background-color: #252525;
}

.aColor {
  background-color: #333333;
}


</style>