<script setup>
import {onUpdated, ref} from "vue";

const props = defineProps({
  pity: Array
})

const testPity = ref({
  'Star Rail': {
    Zasha: {
      character: {
        'star4': 6,
        'star5': 2,
        guarantee: "Yes"
      },
      weapon: {
        'star4': 2,
        'star5': 65
      },
      regular: {
        'star4': 3,
        'star5': 34
      },
    },
    Wilco: {
      character: {
        'star4': 9,
        'star5': 24,
        guarantee: "No"
      },
      weapon: {
        'star4': 4,
        'star5': 60
      },
      regular: {
        'star4': 7,
        'star5': 14
      },
    },
    Wilfred: {
      character: {
        'star4': 0,
        'star5': 89,
        guarantee: "No"
      },
      weapon: {
        'star4': 1,
        'star5': 0
      },
      regular: {
        'star4': 7,
        'star5': 33
      },
    },
    Rick: {
      character: {
        'star4': 3,
        'star5': 78,
        guarantee: "No"
      },
      weapon: {
        'star4': 2,
        'star5': 42
      },
      regular: {
        'star4': 6,
        'star5': 72
      },
    },
  },
  Genshin: {
    Zasha: {
      character: {
        'star4': 6,
        'star5': 2,
        guarantee: "Yes"
      },
      weapon: {
        'star4': 2,
        'star5': 65
      },
      regular: {
        'star4': 3,
        'star5': 34
      },
    },
    Wilco: {
      character: {
        'star4': 9,
        'star5': 24,
        guarantee: "No"
      },
      weapon: {
        'star4': 4,
        'star5': 60
      },
      regular: {
        'star4': 7,
        'star5': 14
      },
    },
    Wilfred: {
      character: {
        'star4': 0,
        'star5': 89,
        guarantee: "No"
      },
      weapon: {
        'star4': 1,
        'star5': 0
      },
      regular: {
        'star4': 7,
        'star5': 33
      },
    },
    Rick: {
      character: {
        'star4': 3,
        'star5': 78,
        guarantee: "No"
      },
      weapon: {
        'star4': 2,
        'star5': 42
      },
      regular: {
        'star4': 6,
        'star5': 72
      },
    },
  }
})
</script>

<template>
<div class="container">
  <div class="gameBox" v-for="(game, gameKey) in testPity">
    <span>{{ gameKey }}</span>
    <div class="testBox2">
      <div class="personBox" v-for="(person, personKey) in game">
        <span>{{ personKey }}</span>
        <div class="testBox">
          <div class="typeBox" v-for="(type, typeKey) in person">
            <span>{{ typeKey }}</span>
            <div class="pityBox">
              <span class="color4">{{ type.star4 }}</span>
              <span class="color5">{{ type.star5 }}</span>
            </div>
            <button class="plusButton" @click="testPity[gameKey][personKey][typeKey].star4 += 1; testPity[gameKey][personKey][typeKey].star5 += 1">+1</button>
            <div class="buttonBox">
              <button class="color4" @click="testPity[gameKey][personKey][typeKey].star4 = 0"><img class="resetButton" :src="`./reset.png`" alt="reset"></button>
              <button class="color5" @click="testPity[gameKey][personKey][typeKey].star4 = 0; testPity[gameKey][personKey][typeKey].star5 = 0" ><img class="resetButton" :src="`./reset.png`" alt="reset"></button>
            </div>
            <span>{{ type.guarantee }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <span class="scrollText"> Scroll --></span>
</div>
</template>

<style scoped>
.container {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 150px;
  overflow: scroll;
}

.gameBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  border: #333333 2px solid;
  border-radius: 20px;
  background-color: #333333;
}

.testBox2 {
  display: flex;
}

.personBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
}

.testBox {
  display: flex;
}

.typeBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 2px;
}

.pityBox {
  display: flex;
  width: 100%;
}

.pityBox > span {
  width: 50%;
  text-align: center;
}

.plusButton {
  width: 100%;
  border: 0;
  border-radius: 50px;
  background-color: #bbb;
}

.buttonBox {
  display: flex;
  width: 100%;
  border-radius: 50px;
}

.buttonBox > button {
  width: 50%;
  border: 0;
  border-radius: 50px;
}

button:hover {
  transform: scale(1.1);
}

.resetButton {
  height: 10px;
}

.color4 {
  background-color: rgba(148, 112, 187);
  color: black;
}

.color5 {
  background-color: rgba(200, 124, 36);
  color: black;
}

.scrollText {
  position: absolute;
  top: 50%;
  right: 0;
  transform: rotate(90deg);
}

</style>