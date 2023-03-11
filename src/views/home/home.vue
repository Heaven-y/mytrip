<script setup lang="ts">
import { ref, watch, computed, onActivated } from 'vue'
import SearchBar from '@/components/search-bar/search-bar.vue'
import useHomeStore from '@/stores/modules/home'
import HomeSearchBox from './c-cpns/home-search-box.vue'
import HomeCategories from './c-cpns/home-categories.vue'
import HomeContent from './c-cpns/home-content.vue'
import useScroll from '@/hooks/useScroll'

const homeStore = useHomeStore()
homeStore.fetchHomeSuggest()
homeStore.fetchHomeCategories()
homeStore.fetchHomeHouseList()

const homeRef = ref<HTMLDivElement>()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHomeHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})

onActivated(() => {
  homeRef.value?.scrollTo({ top: scrollTop.value })
})
const isShowSearchBar = computed(() => {
  return scrollTop.value > 360
})
</script>

<template>
  <div class="home tab-bar-Scroll" ref="homeRef">
    <search-bar v-show="isShowSearchBar" />
    <van-nav-bar title="晴天旅途" class="nav-bar" />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" />
    </div>
    <home-search-box />
    <home-categories />
    <home-content />
  </div>
</template>

<style scoped lang="less">
.banner {
  img {
    width: 100%;
  }
}
</style>
