import {defineStore} from "pinia";
import {convertToObject, filterObject, toPascalCase} from "./manipulation";

function convertStarRail(object, remove) {
  const newObj = Object.keys(object).map(item => {
    return {
      [item]: {
        id: object[item].id,
        name: object[item].name,
        rarity: object[item].rank,
        element: object[item].types.combatType,
        group: toPascalCase(object[item].types.pathType)
      }
    }
  })
  return filterObject(convertToObject(newObj), remove)
}

function convertGenshin(object, remove) {
  console.log(object)
  const newObj = Object.keys(object).map(item => {
    const group = toPascalCase(object[item].weaponType.split('_')[1])
    console.log(group)
    return {
      [item]: {
        id: object[item].icon,
        name: object[item].name,
        rarity: object[item].rank,
        element: object[item].element,
        group: group
      }
    }
  })
  return filterObject(convertToObject(newObj), remove)
}


export const useGachaStore = defineStore('gacha', {
  state: () => ({
    dups: null,
    characters: {},
    weapons: {}
  }),
  actions: {
    async getSheetDataStarRail() {
      const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];
      const res = await fetch(`https://script.google.com/macros/s/AKfycbxUWFF0-Ntn5aDlDJ9WXyeRJbjocQFEaTcA6klDPBKMcC_taWtrAyaD4XhQ7ypazAG_PQ/exec?cookie=${key}`)
      const data = await res.json()
      this.dups = await data.StarRail
    },
    async getSheetDataGenshin() {
      const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];
      const res = await fetch(`https://script.google.com/macros/s/AKfycbxUWFF0-Ntn5aDlDJ9WXyeRJbjocQFEaTcA6klDPBKMcC_taWtrAyaD4XhQ7ypazAG_PQ/exec?cookie=${key}`)
      const data = await res.json()
      this.dups = await data.Genshin
    },
    async getCharacterInfo(url, game, remove) {
      const res = await fetch(url)
      const data = await res.json()
      switch (game) {
        case 'StarRail':
          return this.characters = convertStarRail(data.data.items, remove)
        case 'Genshin':
          return this.characters = convertGenshin(data.data.items, remove)
      }


    },
    async getWeaponInfo(url, game, remove) {
      const res = await fetch(url)
      const data = await res.json()
      switch (game) {
        case 'StarRail':
          return this.weapons = convertStarRail(data.data.items, remove)
        case 'Genshin':
          return this.weapons = convertGenshin(data.data.items, remove)
      }
    }
  },
  getters: {

  }
})