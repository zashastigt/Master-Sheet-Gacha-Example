<script setup>
import ItemBox from "@/components/Boxs/ItemBox.vue";
import {computed, ref} from "vue";
import Filter from "@/components/Filtering/Filter.vue";
import {replaceChar} from "@/data/manipulation.ts";
import Header from "@/components/header.vue";
import SearchBar from "@/components/Filtering/SearchBar.vue";

const props = defineProps({
  game: String,
  items: Object,
  dups: Object,
  dupLetter: Array,
  pity: Object,
  elements: Array,
  sheetElements: Array,
  groups: Array,
  sheetGroups: Array,
  listShown: Boolean,
  switchCharImg: String,
  switchWeaponImg: String,
  itemImg: String,
  itemLink: String,
  itemElement: String,
  itemGroup: String
})

defineEmits(['switchList'])

const sliderPosition = computed(() => props.listShown ? 'sliderLeft' : 'sliderRight')

let filterListElement = ref([])
let filterListGroup = ref([])
let filterSearch =ref('')

const list = computed(() => {
  let itemList = props.items
  let sortedList = itemList
    .sort((a, b) => props.listShown ? a.element.localeCompare(b.element) : a.group.localeCompare(b.group))
    .sort((a, b) => b.rarity - a.rarity)
  return sortedList.filter(item =>
    (filterListElement.value.length === 0 || filterListElement.value.includes(item.element)) &&
    (filterListGroup.value.length === 0 || filterListGroup.value.includes(item.group)) &&
    (filterSearch.value.length === 0 || item.name.toLowerCase().includes(filterSearch.value.toLowerCase())))
})
</script>

<template>
<div id="container">
  <Filter
    :listShown="listShown"
    :elements="elements"
    :groups="groups"
    :element-src="itemElement"
    :group-src="itemGroup"
    :filter-list-element="filterListElement"
    :filter-list-group="filterListGroup"
  />
  <div id="gachaPage">
    <Header
      :pity="pity"
      :game="game"
    />
    <div class="switch">
      <div>
        <img alt="character" :src="switchCharImg">
        <button @click="$emit('switchList')">
          <div :class="`slider ${sliderPosition}`"></div>
        </button>
        <img alt="weapon" :src="switchWeaponImg">
      </div>
        <SearchBar v-model:search-value="filterSearch" />
    </div>
    <div class="itemList">
      <ItemBox
        v-for="item in list"
        :key="item.id"
        :game="'StarRail'"
        :item="item"
        :dups="dups"
        :dub-letter="dupLetter"
        :elements="elements"
        :sheet-elements="sheetElements"
        :sheet-groups="sheetGroups"
        :groups="groups"
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
  flex-direction: column;
  align-items: center;
  background-color: #222324;
  padding: 5px 10px;
  margin-bottom: 20px;
  border: solid 3px #787168;
  border-radius: 0 0 15px 15px;
  border-top: 0;
}

.switch > div {
  display: flex;
  align-items: center;
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

.itemList {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

@media only screen and (max-width: 600px) {
  .filters {
    margin-top: 40px;
  }

  .switch {
    margin-top: 38px;
    position: fixed;
  }

  .itemList {
    margin-top: 100px;
  }
}
</style>