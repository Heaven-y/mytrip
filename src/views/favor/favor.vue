<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'
import useFavorStroe from '@/stores/modules/favor'

import NavBar from './c-cpns/nav-bar.vue'
import MyFavor from './c-cpns/my-favor.vue'
import FavorItem from '@/components/favor-item/favor-item.vue'

const favorStore = useFavorStroe()
favorStore.fetchFavorList()
favorStore.fetchHistoryList()
const { favorList, historyList } = storeToRefs(favorStore)

const titles = ['我的收藏', '浏览历史']
const subTitles = ['房屋', '房东']
const navActive = ref(0)
onUnmounted(() => {
  favorStore.$reset()
})
</script>

<template>
  <div class="favor tab-bar-Scroll">
    <nav-bar :titles="titles" v-model="navActive" />
    <div class="list" v-if="favorList.data">
      <template v-if="navActive === 0">
        <my-favor :sub-titles="subTitles" />
      </template>

      <template v-else-if="navActive === 1">
        <template v-for="(item, index) in historyList.data.items" :key="index">
          <favor-item :item-data="item" />
        </template>
      </template>
    </div>
  </div>
</template>

<style scoped lang="less">
.list {
  padding: 10px 10px 0;
  --van-font-bold: nomarl !important;
}
</style>
