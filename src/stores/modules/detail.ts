import { defineStore } from 'pinia'
import { getDetailInfo } from '@/services/modules/detail'
import type { IDetailStore, DetailInfos } from '../types/detail'

const useDetailStore = defineStore('detail', {
  state: (): IDetailStore => ({
    detailInfo: {} as DetailInfos
  }),
  actions: {
    async fetchDetailInfo(houseId: string) {
      const res = await getDetailInfo(houseId)
      this.detailInfo = res
    }
  }
})
export default useDetailStore
