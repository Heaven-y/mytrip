<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import HouseItemV3 from '@/components/house-item/house-item-v3.vue'
import HouseItemV9 from '@/components/house-item/house-item-v9.vue'
import useHomeStore from '@/stores/modules/home'
import type { Data } from '@/stores/types/home'

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)

const router = useRouter()
function itemClick(item: Data) {
  router.push(`/detail/${item.houseId}`)
}
</script>

<template>
  <div class="home-content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <house-item-v9
          v-if="item.discoveryContentType === 9"
          class="item"
          :item-data="item.data"
          @click="itemClick(item.data)"
        />
        <house-item-v3
          v-else-if="item.discoveryContentType === 3"
          class="item"
          :item-data="item.data"
          @click="itemClick(item.data)"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.home-content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
    }
  }
}
</style>
