<script setup>
import StarRail from "@/pages/StarRail.vue";
import {ref} from "vue";
import ChooseGacha from "@/pages/ChooseGacha.vue";
import Genshin from "@/pages/Genshin.vue";
import WutheringWaves from "@/pages/WutheringWaves.vue";

const currentPage = ref('Choose')
</script>

<template>
  <ChooseGacha v-if="currentPage === 'Choose'"
               :choosen-gacha="currentPage"
               @choose-genshin="currentPage = 'Genshin'"
               @choose-starrail="currentPage = 'StarRail'"
               @choose-wuwa="currentPage = 'WutheringWaves'"
  />
  <Genshin v-if="currentPage === 'Genshin'" />
  <StarRail v-if="currentPage === 'StarRail'" />
  <WutheringWaves v-if="currentPage === 'WutheringWaves'" />
</template>

<style scoped>

</style>
