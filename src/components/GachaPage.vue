<script setup>
import ItemBox from "@/components/Boxs/ItemBox.vue";
import {onUpdated, ref} from "vue";
import SearchBar from "@/components/SearchBar.vue";
import Filter from "@/components/Filter.vue";
import {replaceChar} from "@/data/manipulation.ts";
import Header from "@/components/header.vue";

const props = defineProps({
  game: String,
  items: Object,
  dups: Object,
  elements: Array,
  listShown: Boolean,
  elementSrc: String,
  switchCharImg: String,
  switchWeaponImg: String,
  itemImg: String,
  itemLink: String,
  itemElement: String,
  itemGroup: String
})

defineEmits(['switchList'])


</script>

<template>

<div id="container">

  <Filter
    :listShown="listShown"
    :elements="elements"
    :element-src="elementSrc"
  />
  <div id="gachaPage">
    <Header />
    <div class="switch">
      <img alt="character" :src="switchCharImg">
      <button @click="$emit('switchList')">
        <div :class="`slider ${listShown ? 'sliderLeft' : 'sliderRight'}`"></div>
      </button>
      <img alt="weapon" :src="switchWeaponImg">
    </div>
    <div class="itemList">
      <ItemBox v-for="item in items"
               :game="'StarRail'"
               :item="item"
               :dups="dups"
               :list-shown="listShown"
               :item-img="replaceChar(itemImg, [item.icon])"
               :item-link="replaceChar(itemLink, [item.id, item.name])"
               :item-element="replaceChar(itemElement, [item.element])"
               :item-group="replaceChar(itemGroup, [item.group])"
      />
    </div>
  </div>
</div>

</template>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  align-items: center;

}

#gachaPage {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100vw - 200px);
}

::-webkit-scrollbar {
  display:none;
}

*:focus-visible {
  outline: none;
}



.switch {
  display: flex;
  align-items: center;
  background-color: #222324;
  padding: 5px 10px;
  margin-bottom: 20px;
  border: solid 3px #787168;
  border-radius: 0 0 15px 15px;
  border-top: 0;
}

.switch button {
  color: #888;
  background-color: #363636;
  border-width: 0;
  border-radius: 20px;
  font-size: 1.2em;
  font-style: inherit;
  line-height: inherit;
  height: 24px;
  width: 45px;
  margin: 0 5px;
  padding: 2px;
  transition: all 0.2s ease-in-out;
}

.switch button:hover {
  background-color: #484848;
}

.sliderLeft {
  flex-direction: row;
  margin-left: 0;
  transition: all 0.2s ease-in-out;
}

.sliderRight {
  flex-direction: row-reverse;
  margin-left: 21px;
  transition: all 0.2s ease-in-out;
}

.slider {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: blueviolet;
}



.characters {
  display: flex;
}

.character {
  display: flex;
  border-style: solid;
  border-color: #787168;
  border-radius: 25px;
}

.playerInfo {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-items: center;
}

.itemList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.weaponList {
  display: flex;
  flex-wrap: wrap;
}

.switchGameImage {
  width: 35px;
  margin-left: 10px;
}

@media only screen and (max-width: 600px) {
  .filters {
    margin-top: 40px;
  }

  .switch {
    margin-top: 38px;
    position: fixed;
  }

  .itemList, .weaponList {
    margin-top: 100px;
  }
}
</style>