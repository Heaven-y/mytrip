<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<template>
  <div class="home-categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.home-categories {
  display: flex;
  overflow-x: auto;
  margin-top: 6px;
  padding: 0 10px;
  &::-webkit-scrollbar {
    display: none;
  }
  .item {
    flex-shrink: 0;
    width: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
