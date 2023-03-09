import { defineStore } from 'pinia'
import { getCityAll } from '@/services/modules/city'
import type { ICityStore, AllCities } from '../types/city'

const useCityStore = defineStore('city', {
  state: (): ICityStore => ({
    allCities: {} as AllCities
  }),
  actions: {
    async fetchAllCities() {
      const res = await getCityAll()
      this.allCities = res
    }
  }
})

export default useCityStore
