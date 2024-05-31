<script setup>
import {onUpdated, ref} from "vue";
import GachaPage from "@/components/GachaPage.vue";
import {useGachaStore} from "@/data/fetchData.ts";

const listShown = ref(true)
const elements = ["Fire", "Ice", "Water", "Electric", "Wind", "Rock", "Grass"]
const store = useGachaStore()

store.getCharacterInfo(`https://api.ambr.top/v2/en/avatar`, 'Genshin', [
  '10000005-pyro',
  '10000005-cryo',
  '10000005-hydro',
  '10000005-electro',
  '10000005-anemo',
  '10000005-geo',
  '10000005-dendro',

])
store.getWeaponInfo(`https://api.ambr.top/v2/en/weapon`, 'Genshin', [])


store.getSheetDataGenshin()

function travelerFix() {
  return Object.values(store.characters).map(item => {
    if (item.name === 'Traveler') {
      switch (item.element) {
        case 'Fire':
          item.name = item.name + ' ' + 'Pyro'
          break
        case 'Ice':
          item.name = item.name + ' ' + 'Cryo'
          break
        case 'Water':
          item.name = item.name + ' ' + 'Hydro'
          break
        case 'Electric':
          item.name = item.name + ' ' + 'Electro'
          break
        case 'Wind':
          item.name = item.name + ' ' + 'Anemo'
          break
        case 'Rock':
          item.name = item.name + ' ' + 'Geo'
          break
        case 'Grass':
          item.name = item.name + ' ' + 'Dendro'
          break
      }
    }
    return item
  })
}

onUpdated(() => {
  console.log(store.dups)
  console.log(store.characters)
})
</script>

<template>
  <GachaPage v-if="store.characters"
             :game="'Genshin'"
             :items="listShown ? travelerFix(store.characters) : store.weapons"
             :dups="store.dups"
             :elements="elements"
             :list-shown="listShown"
             :element-src="`https://api.ambr.top/assets/UI/UI_Buff_Element_{var1}.png`"
             :switch-char-img="`./charGI.webp`"
             :switch-weapon-img="`./weaponGI.webp`"
             :item-img="`https://api.ambr.top/assets/UI/{var1}.png`"
             :item-link="listShown ? `https://ambr.top/en/archive/avatar/{var1}/{var2}` : `https://ambr.top/en/archive/avatar/{var1}/{var2}`"
             :item-element="`https://api.ambr.top/assets/UI/UI_Buff_Element_{var1}.png`"
             :item-group="`https://api.ambr.top/assets/UI/UI_GachaTypeIcon_{var1}.png`"
             @switch-list="listShown = !listShown"
  />
</template>

<style scoped>

</style>