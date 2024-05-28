import {defineStore} from "pinia";

export async function getSheetDataJson() {
  const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];

  return await fetch(`https://script.google.com/macros/s/AKfycbxUWFF0-Ntn5aDlDJ9WXyeRJbjocQFEaTcA6klDPBKMcC_taWtrAyaD4XhQ7ypazAG_PQ/exec?cookie=${key}`)
    .then(response => (response.json()));
}

export async function getSRCharacterJson() {
  return await fetch(`https://api.yatta.top/hsr/v2/en/avatar`)
    .then(response => { return response.json() });
}

export async function getSRWeaponJson() {
  return await fetch(`https://api.yatta.top/hsr/v2/en/equipment`)
    .then(response => { return response.json() });
}

export async function getGICharacterJson() {
  return await fetch(`https://api.ambr.top/v2/en/avatar`)
    .then(response => { return response.json() });
}

export async function getGIWeaponJson() {
  return await fetch(`https://api.ambr.top/v2/en/weapon`)
    .then(response => { return response.json() });
}

function filterObject(item, remove) {
  return Object.keys(item).filter(key => !remove.includes(Number(key))).reduce((obj, key) => {
    return {
      ...obj, [key]: item[key]
    }
  }, {})
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
    async getCharacterInfo(url, remove) {
      const res = await fetch(url)
      const data = await res.json()
      this.characters = filterObject(data.data.items, remove)
    },
    async getWeaponInfo(url, remove) {
      const res = await fetch(url)
      const data = await res.json()
      this.weapons = filterObject(data.data.items, remove)
    }
  },
  getters: {

  }
})