<script setup>
import {onUpdated, ref} from "vue";

import GachaPage from "@/components/GachaPage.vue";
import {useGachaStore} from "@/data/fetchData.ts";


const store = useGachaStore()
store.getItemInfo(`https://api.yatta.top/hsr/v2/en/avatar`)
store.getSheetDataStarRail()
console.log(store.dups)

onUpdated(() => {
  console.log(store.dups)
})



</script>

<template>
<GachaPage v-if="store.items"
  :game="'StarRail'"
  :items="store.items"
/>
</template>

<style scoped>

</style>