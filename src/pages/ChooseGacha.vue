<script setup>
defineProps({
  choosenGacha: String
})

defineEmits(['chooseGenshin', 'chooseStarrail', 'chooseWuwa'])

</script>

<template>
  <div id="container">
    <img alt="Genshin" :src="`./Arlecchino_Splash_Art.png`" @click="$emit('chooseGenshin')">
    <img alt="StarRail" :src="`./Kafka_Splash_Art.png`" @click="$emit('chooseStarrail')">
    <img alt="WutheringWaves" :src="`./Yinlin_Splash_Art.png`" @click="$emit('chooseWuwa')">
  </div>

</template>

<style scoped>
#container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

img {
  max-width: 33%;
  max-height: 100%;
  transition: transform 1s;
}

img:hover {
  transform: scale(1.5);
}
</style>