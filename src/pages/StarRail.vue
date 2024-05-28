<script setup>
import {onUpdated, ref} from "vue";

import GachaPage from "@/components/GachaPage.vue";
import {useGachaStore} from "@/data/fetchData.ts";

const listShown = ref(true)
const elements = ["Fire", "Ice", "Physical", "Wind", "Imaginary", "Quantum"]
const store = useGachaStore()

store.getCharacterInfo(`https://api.yatta.top/hsr/v2/en/avatar`, [8001, 8003, 8005, 8007, 8009, 8011, 8013])
store.getWeaponInfo(`https://api.yatta.top/hsr/v2/en/equipment`, [])


store.getSheetDataStarRail()


function trailblazerFix() {
  return Object.values(store.characters).map(item => {
    if (item.name === 'Trailblazer') {
      item.name = item.name + ' ' + item.types.combatType
    }
    return item
  })
}

onUpdated(() => {
  console.log(store.dups)
})

</script>

<template>
  <GachaPage v-if="trailblazerFix(store.characters)"
             :game="'StarRail'"
             :items="listShown ? trailblazerFix(store.characters) : store.weapons"
             :dups="store.dups"
             :elements="elements"
             :list-shown="listShown"
             :switch-char-img="`./charSR.webp`"
             :switch-weapon-img="`./weaponSR.webp`"
             :item-img="listShown ? `https://api.yatta.top/hsr/assets/UI/avatar/medium/{var1}.png` : `https://api.yatta.top/hsr/assets/UI/equipment/medium/{var1}.png`"
             :item-link="listShown ? `https://hsr.yatta.top/en/archive/avatar/{var1}/{var2}` : `https://hsr.yatta.top/en/archive/equipment/{var1}/{var2}`"
             :item-element="`https://api.yatta.top/hsr/assets/UI/attribute/IconAttribute{var1}.png`"
             :item-group="`https://api.yatta.top/hsr/assets/UI/profession/IconProfession{var1}Small.png`"
             @switch-list="listShown = !listShown"
  />
</template>

<style scoped>

</style>