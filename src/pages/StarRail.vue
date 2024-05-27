<script setup>
import {onUpdated} from "vue";

import GachaPage from "@/components/GachaPage.vue";
import {useGachaStore} from "@/data/fetchData.ts";
import charSR from "@/assets/charSR.webp"

const store = useGachaStore()
store.getItemInfo(`https://api.yatta.top/hsr/v2/en/avatar`, [8001, 8003, 8005, 8007, 8009, 8011, 8013])
store.getSheetDataStarRail()

function trailblazerFix() {
  return Object.values(store.items).map(item => {
    if (item.name === 'Trailblazer') {
      item.name = item.name + ' ' + item.types.combatType
    }
    return item
  })
}


</script>

<template>
<GachaPage v-if="trailblazerFix(store.items)"
  :game="'StarRail'"
  :items="trailblazerFix(store.items)"
  :dups="store.dups"
  :SwitchCharImg="`@/assets/charSR.webp`"
  :itemImg="`https://api.yatta.top/hsr/assets/UI/avatar/medium/{var1}.png`"
  :itemLink="`https://hsr.yatta.top/en/archive/avatar/{var1}/{var2}`"
  :itemElement="`https://api.yatta.top/hsr/assets/UI/attribute/IconAttribute{var1}.png`"
  :itemGroup="`https://api.yatta.top/hsr/assets/UI/profession/IconProfession{var1}Small.png`"
/>
</template>

<style scoped>

</style>