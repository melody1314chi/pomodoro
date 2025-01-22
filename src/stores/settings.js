import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    alarms: [
      { id: 1, name: '鬧鐘', file: new URL('@/assets/alarm.mp3', import.meta.url).herf },
      { id: 2, name: 'yay', file: new URL('@/assets/yay.mp3', import.meta.url).herf },
    ],
    selected: 1,
  }),
  getters: {
    selectedFile() {
      const i = this.alarms.findIndex((alarm) => alarm.id === this.selected)
      return this.alarms[i].file
    },
  },
  persist: {
  key: 'pomorodo-settings',
  pick: ['selected'],
},
})


