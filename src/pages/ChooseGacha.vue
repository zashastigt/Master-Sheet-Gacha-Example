<script setup>


</script>

<template>
  <div id="container">
    <RouterLink to="/Genshin"><img alt="Genshin" :src="`./Arlecchino_Splash_Art.png`"></RouterLink>
    <RouterLink to="/StarRail"><img alt="StarRail" :src="`./Kafka_Splash_Art.png`"></RouterLink>
    <RouterLink to="/WutheringWaves"><img alt="WutheringWaves" :src="`./Yinlin_Splash_Art.png`"></RouterLink>
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

a {
  max-width: 33%;
  max-height: 100%;
}

img {
  max-width: 100%;
  max-height: 100%;
  transition: transform 1s;
}

img:hover {
  transform: scale(1.5);
}
</style>