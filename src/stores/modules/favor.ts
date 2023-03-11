import { getFavorList, getHistoryList } from '@/services/modules/favor'
import { defineStore } from 'pinia'
import type { FavorList, IFavorStore } from '../types/favor'

const useFavorStroe = defineStore('favor', {
  state: (): IFavorStore => ({
    favorList: {} as FavorList,
    historyList: {} as FavorList
  }),
  actions: {
    async fetchFavorList() {
      const res = await getFavorList()
      this.favorList = res
    },
    async fetchHistoryList() {
      const res = await getHistoryList()
      this.historyList = res
    }
  }
})
export default useFavorStroe
