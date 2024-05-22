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

export const useGachaStore = defineStore('gacha', {
  state: () => ({
    dups: {},
    items: {}
  }),
  actions: {
    async getSheetDataStarRail() {
      const key = (`; ${localStorage.getItem('Key')}`).split(`; `).pop().split(';')[0];
      const res = await fetch(`https://script.google.com/macros/s/AKfycbxUWFF0-Ntn5aDlDJ9WXyeRJbjocQFEaTcA6klDPBKMcC_taWtrAyaD4XhQ7ypazAG_PQ/exec?cookie=${key}`)
      const data = await res.json()
      console.log(data)
      this.dups = data
      ;
    },
    async getItemInfo(url) {
      const res = await fetch(url)
      const data = await res.json()
      this.items = data.data.items
    }
  },
  getters: {

  }
})