<script setup>
import CharacterBox from "@/components/Boxs/CharacterBox.vue";
import {ref} from "vue";

defineProps({
  game: String,
  items: Object,
})
</script>

<template>
  <CharacterBox v-for="item in items"
    :game="'StarRail'"
    :item="item"
    :itemImg="`https://api.yatta.top/hsr/assets/UI/avatar/medium/${item.id}.png`"
    :itemLink="`https://hsr.yatta.top/en/archive/avatar/${item.id}/${item.name}`"
    :itemElement="`https://api.yatta.top/hsr/assets/UI/attribute/IconAttribute${item.types.combatType}.png`"
    :itemGroup="`https://api.yatta.top/hsr/assets/UI/profession/IconProfession${item.types.pathType}Small.png`"
  />
</template>

<style scoped>

</style>


<!--`https://ambr.top/en/archive/avatar/${item.id}/${item.name}`-->