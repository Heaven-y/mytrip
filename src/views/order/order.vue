<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useOrderStore from '@/stores/modules/order'

import NavBar from './c-cpns/nav-bar.vue'
import OrderItem from '@/components/order-item/order-item.vue'

const orderStore = useOrderStore()
const type = ref('all')
orderStore.fetchOrderList(type.value)
const { orderList } = storeToRefs(orderStore)
</script>

<template>
  <div class="order tab-bar-Scroll">
    <nav-bar />
    <template v-if="orderList.orders">
      <div class="list">
        <template v-for="(item, index) in orderList.orders" :key="index">
          <order-item :item-data="item" />
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.order {
  padding-bottom: 44px;
}
.list {
  padding: 10px 10px 0;
}
</style>
