<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import useMainStore from '@/stores/modules/main'
import type { CityGroup, CityGroupOverSea } from '@/stores/types/city'

const props = defineProps<{
  groupData: CityGroup | CityGroupOverSea
}>()
const indexList = computed(() => {
  const list = props.groupData.cities.map((item) => item.group)
  list.unshift('#')
  return list
})

const mainStore = useMainStore()
const router = useRouter()
function cityClick(city: any) {
  mainStore.currentCity = city
  router.back()
}
</script>

<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="city in groupData.hotCities" :key="city.cityId">
          <div class="city" @click="cityClick(city)">{{ city.cityName }}</div>
        </template>
      </div>

      <template v-for="group in groupData.cities" :key="group.group">
        <van-index-anchor :index="group.group" />
        <template v-for="city in group.cities" :key="city.cityId">
          <van-cell :title="city.cityName" @click="cityClick(city)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style scoped lang="less">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;
  padding-right: 24px;
  .city {
    width: 70px;
    height: 28px;
    line-height: 28px;
    text-align: center;
    border-radius: 14px;
    font-size: 12px;
    background-color: #fff4ec;
    margin: 6px 0;
  }
}
</style>
