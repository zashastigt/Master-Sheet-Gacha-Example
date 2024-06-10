<script setup>
import {onUpdated, ref} from "vue";
import {postData} from "@/data/postData.ts";

const props = defineProps({
  pity: Object,
  game: String
})

console.log(props.pity)
onUpdated(()=>{
  console.log(props.pity)
})
function changePity(person, game, pity) {
  console.log({
    name: person,
    gameName: game,
    pity: pity
  })
  postData({
    name: person,
    gameName: game,
    pity: pity
  })
}

</script>

<template>
<div class="container" v-if="pity">
  <div class="gameBox" v-for="(person, personKey) in pity">
    <span>{{ personKey }}</span>
    <div class="testBox">
      <div class="typeBox" v-for="(type, typeKey) in person">
        <span>{{ typeKey }}</span>
        <div class="pityBox">
          <span class="color4">{{ type.star4 }}</span>
          <span class="color5">{{ type.star5 }}</span>
        </div>
        <button class="plusButton" @click="pity[personKey][typeKey].star4 += 1; pity[personKey][typeKey].star5 += 1; changePity(personKey, game, pity[personKey])">+1</button>
        <div class="buttonBox">
          <button class="color4" @click="pity[personKey][typeKey].star4 = 0; changePity(personKey, game, pity[personKey])">
            <img class="resetButton" :src="`./reset.png`" alt="reset">
          </button>
          <button class="color5" @click="pity[personKey][typeKey].star4 = 0; pity[personKey][typeKey].star5 = 0; changePity(personKey, game, pity[personKey])" >
            <img class="resetButton" :src="`./reset.png`" alt="reset">
          </button>
        </div>
        <span>{{ type.guarantee }}</span>
      </div>
    </div>
  </div>
  <span class="scrollText" v-if="!pity">Loading...</span>
</div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 150px;
  overflow: scroll;
}

.gameBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  border: #333333 2px solid;
  border-radius: 20px;
  background-color: #333333;
}

.testBox2 {
  display: flex;
}

.personBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

.testBox {
  display: flex;
}

.typeBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2px;
}

.pityBox {
  display: flex;
  width: 100%;
}

.pityBox > span {
  width: 50%;
  text-align: center;
}

.plusButton {
  width: 100%;
  border: 0;
  border-radius: 50px;
  background-color: #bbb;
}

.buttonBox {
  display: flex;
  width: 100%;
  border-radius: 50px;
}

.buttonBox > button {
  width: 50%;
  border: 0;
  border-radius: 50px;
}

button:hover {
  transform: scale(1.1);
}

.resetButton {
  height: 10px;
}

.color4 {
  background-color: rgba(148, 112, 187);
  color: black;
}

.color5 {
  background-color: rgba(200, 124, 36);
  color: black;
}

.scrollText {
  position: absolute;
  top: 50%;
  right: 0;
  transform: rotate(90deg);
}

</style>