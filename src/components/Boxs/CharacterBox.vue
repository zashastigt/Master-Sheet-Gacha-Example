<script setup>


import {useGachaStore} from "@/data/fetchData.ts";
import {onUpdated, ref} from "vue";

defineProps({
  game: String,
  item: Object,
  itemImg: String,
  itemLink: String,
  itemElement: String,
  itemGroup: String
})

</script>

<template>
<div class="characterBox">
  <div class="characterContainer">
    <div class="characterPortrait">
      <a class="characterImgLink" :href="itemLink" target="_blank">
        <img class="characterImg" alt="img" :src="itemImg">
      </a>
    </div>
    <div :class="`rarityStrip ${parseInt(item.rank) === 5 ? 'rarityFiveStar' : 'rarityFourStar'}`"></div>
    <div class="characterInfo">
      <img class="characterElement" alt="element" :src="itemElement">
      <img class="characterGroup" alt="group" :src="itemGroup">
    </div>
<!--    <div class="characterCE" v-for="person in store.dups.Characters[character.name]">-->
<!--      <div class="CE">-->
<!--        <div>{{person}}</div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
  <div class="characterName">{{item.name}}</div>
</div>
</template>

<style scoped>


* {
  font-family: "Fira Sans", serif;
}

.characterBox {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
}

.characterContainer {
  display: flex;
  height: 100px;
  width: fit-content;
  background-color: #252525;
  border-radius: 20px 20px 20px 0;
  border: #333333 solid 3px;
}

.characterPortrait {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  background-color: transparent;
  border-radius: 17px 0 0 16px;
  overflow: hidden;
}

.characterPortrait:hover {
  transform: rotate(2deg);
}

.characterName {
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

.characterImg {
  height: 100%;
}

.characterImgLink {
  display: flex;
  height: 100%;
  justify-content: center;
}

.characterImgGI {
  height: 100%;
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

.characterInfo {
  display: flex;
  flex-direction: column;
}

.characterInfo > * {
  height: 50px;
}

.characterCE {
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
  margin: 0;
}

.CE .personName {
  height: 25%;
  font-size: 1.2em;
  font-weight: 300;
  text-align: center;
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