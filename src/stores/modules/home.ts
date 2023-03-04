import { defineStore } from 'pinia'
import { getHomeCategories, getHomeHouseList, getHomeSuggest } from '@/services/modules/home'
import type { IHomeStore } from '../types/home'

const useHomeStore = defineStore('home', {
  state: (): IHomeStore => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1
  }),
  actions: {
    async fetchHomeSuggest() {
      const res = await getHomeSuggest()
      this.hotSuggests = res
    },
    async fetchHomeCategories() {
      const res = await getHomeCategories()
      this.categories = res
    },
    async fetchHomeHouseList() {
      const res = await getHomeHouseList(this.currentPage)
      this.houseList.push(...res)
      this.currentPage++
    }
  }
})
export default useHomeStore
