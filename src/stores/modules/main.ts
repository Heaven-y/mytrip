import { defineStore } from 'pinia'
import type { IMainStore } from '../types/main'

const useMainStore = defineStore('main', {
  state: (): IMainStore => ({
    nowDate: new Date(),
    newDate: new Date().setDate(new Date().getDate() + 1),

    currentCity: {
      cityName: '广州'
    },

    isLoading: false
  })
})

export default useMainStore
