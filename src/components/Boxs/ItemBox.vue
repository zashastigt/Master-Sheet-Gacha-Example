<script setup>
import {computed} from "vue";

const props = defineProps({
  game: String,
  item: Object,
  dups: Object,
  listShown: Boolean,
  itemImg: String,
  itemLink: String,
  itemElement: String,
  itemGroup: String
})

function ceColor(CE) {
  if (CE.includes('6')) {
    return 'all'
  } else if(CE === '') {
    return 'none'
  } else {
    return 'some'
  }
}

const rarityColor = computed(() => {
  if (props.item.rarity === 5) {
    return 'rarityFiveStar'
  } else if (props.item.rarity === 4) {
    return 'rarityFourStar'
  } else {
    return 'rarityThreeStar'
  }
})

function changeLevel(direction, name, CE) {
  console.log(direction)
  console.log(name)
  console.log(CE)
}

</script>

<template>
<div class="box">
  <div class="container">
    <div class="portrait">
      <a class="imgLink" :href="itemLink" target="_blank">
        <img class="imgItem" alt="img" :src="itemImg">
      </a>
    </div>
    <div :class="`rarityStrip ${rarityColor}`"></div>
    <div class="info">
      <img v-if="listShown" class="element" alt="element" :src="itemElement">
      <img class="group" alt="group" :src="itemGroup">
    </div>
    <div class="itemCE">
      <div class="CE" v-if="dups" v-for="(CE, key) in listShown ? dups.Characters[item.name]?.CE : dups.Weapons[item.name]?.CE">
        <div class="personName">{{key}}</div>
        <div class="CECount" :class="ceColor(CE)">{{CE}}</div>
        <div class="buttons">
          <button
            class="up"
            @click="changeLevel('up', listShown ? dups.Characters[item.name]?.Name : dups.Weapons[item.name]?.Name, CE)" v-if="listShown ? !CE.includes('6') : !CE.includes('5')">+</button>
          <button class="down" @click="changeLevel('down', listShown ? dups.Characters[item.name]?.Name : dups.Weapons[item.name]?.Name, CE)" v-if="CE !== ''">-</button>
        </div>
      </div>
    </div>
    <div v-if="!dups">Loading...</div>
  </div>
  <div class="name">{{item.name}}</div>
</div>
</template>

<style scoped>
* {
  font-family: "Fira Sans", serif;
}

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
}

.portrait {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  background-color: transparent;
  border-radius: 17px 0 0 16px;
  overflow: hidden;
}

.portrait:hover {
  transform: rotate(2deg);
}

.name {
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

.imgItem {
  height: 100%;
}

.imgLink {
  display: flex;
  height: 100%;
  justify-content: center;
}

.rarityStrip {
  width: 5px;
}

.rarityFiveStar {
  background-color: rgba(200,124,36);
}

.rarityFourStar {
  background-color: rgba(148,112,187);
}

.rarityThreeStar {
  background-color: rgb(32, 69, 204);
}

.info {
  display: flex;
  flex-direction: column;
}

.info > * {
  height: 50px;
}

.group {
  transform: scale(0.8);
}

.itemCE {
  display: flex;
  border-radius:  0 20px 20px 0;
}

.up:hover {
  transform: translateY(-1px);
}

.down:hover {
  transform: translateY(-1px);
}

.CE {
  width: 60px;
  height: 100%;
  margin: 0;
}

.CE .personName {
  height: 25%;
  font-size: 1.2em;
  font-weight: 300;
  text-align: center;
  color: #ddd;
}

.CE .CECount {
  height: 50%;
  font-size: 2.8em;
  color: #ddd;
  text-align: center;
}

.CE:first-child .CECount {
  margin-left: 5px;
  border-radius: 10px 0 0 10px;
}

.CE:last-child .CECount {
  margin-right: 5px;
  border-radius: 0 10px 10px 0;
}

.CE .all {
  background-color: #023a02;
}

.CE .some {
  background-color: green;
}

.CE .none {
  background-color: darkred;
}

.CE .buttons {
  display: grid;
  height: 25%;
  grid-template-columns: repeat(5, 1fr);
}

.CE .buttons button {
  color: #888;
  background-color: transparent;
  border-width: 0;
  font-size: 1.5em;
  font-style: inherit;
  line-height: inherit;
  padding: 0;
}
.CE .buttons button.up{
  grid-column: 2;
}
.CE .buttons button.down{
  grid-column: 4;
}
</style>