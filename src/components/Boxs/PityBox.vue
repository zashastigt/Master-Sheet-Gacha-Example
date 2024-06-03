<script setup>

</script>

<template>
<div class="box">
  <div class="container">
    <div>
      <div>Who</div>
    <div>Normal</div>
    <div>Weapon</div>
    <div>Event</div>
    <div>50/50</div>
    </div>
    <div class="pityInfo">
      <div>Name</div>
    </div>
  </div>
  <div class="boxName">Pity</div>
</div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
}

.container {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  height: 100px;
  width: fit-content;
  background-color: #252525;
  border-radius: 20px 20px 20px 0;
  border: #333333 solid 3px;
  padding: 0 10px;
  margin-right: 26px;
}

.boxName {
  position: relative;
  bottom: 0;
  height: 1.3em;
  padding: 0 10px;
  width: fit-content;
  min-width: 55px;
  border-radius: 0 0 15px 15px;
  text-align: center;
  font-size: 1.1em;
  font-weight: 400;
  color: #ddd;
  background-color: #333333;
}

.pityInfo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
}

.color4 {
  background-color: rgba(148, 112, 187);
}

.color5 {
  background-color: rgba(200, 124, 36);
}

.noColor {
  background-color: #252525;
}

.aColor {
  background-color: #333333;
}


</style>