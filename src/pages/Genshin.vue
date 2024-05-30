<script setup>
import {onUpdated, ref} from "vue";
import GachaPage from "@/components/GachaPage.vue";
import {useGachaStore} from "@/data/fetchData.ts";

const listShown = ref(true)
const elements = ["Fire", "Ice", "Water", "Electric", "Wind", "Rock", "Grass"]
const store = useGachaStore()

store.getCharacterInfo(`https://api.ambr.top/v2/en/avatar`, 'Genshin', [])
store.getWeaponInfo(`https://api.ambr.top/v2/en/weapon`, 'Genshin', [])


store.getSheetDataGenshin()

// function trailblazerFix() {
//   return Object.values(store.characters).map(item => {
//     if (item.name === 'Trailblazer') {
//       item.name = item.name + ' ' + item.types.combatType
//     }
//     return item
//   })
// }

onUpdated(() => {
  console.log(store.dups)
  console.log(store.characters)
})
</script>

<template>
  <GachaPage v-if="store.characters"
             :game="'Genshin'"
             :items="listShown ? store.characters : store.weapons"
             :dups="store.dups"
             :elements="elements"
             :list-shown="listShown"
             :element-src="`https://api.ambr.top/assets/UI/UI_Buff_Element_{var1}.png`"
             :switch-char-img="`./charGI.webp`"
             :switch-weapon-img="`./weaponGI.webp`"
             :item-img="`https://api.ambr.top/assets/UI/{var1}.png`"
             :item-link="listShown ? `https://hsr.yatta.top/en/archive/avatar/{var1}/{var2}` : `https://hsr.yatta.top/en/archive/equipment/{var1}/{var2}`"
             :item-element="`https://api.ambr.top/assets/UI/UI_Buff_Element_{var1}.png`"
             :item-group="`https://api.ambr.top/assets/UI/UI_GachaTypeIcon_{var1}.png`"
             @switch-list="listShown = !listShown"
  />
</template>

<style scoped>

</style>