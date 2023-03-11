import { getOderListByType } from '@/services/modules/order'
import { defineStore } from 'pinia'
import type { IOderStore, OrderList } from '../types/order'

const useOrderStore = defineStore('order', {
  state: (): IOderStore => ({
    orderList: {} as OrderList
  }),
  actions: {
    async fetchOrderList(type: string) {
      const res = await getOderListByType(type)
      this.orderList = res.data
    }
  }
})

export default useOrderStore
