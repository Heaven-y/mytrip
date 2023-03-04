<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { throttle } from 'lodash'
import HomeSearchBox from './c-cpns/home-search-box.vue'
import HomeCategories from './c-cpns/home-categories.vue'
import HomeContent from './c-cpns/home-content.vue'
import useHomeStore from '@/stores/modules/home'

const homeStore = useHomeStore()
homeStore.fetchHomeSuggest()
homeStore.fetchHomeCategories()
homeStore.fetchHomeHouseList()

const homeRef = ref<HTMLDivElement>()
const isReachBottom = ref(false)
const clientHeight = ref(0)
const scrollHeight = ref(0)
const scrollTop = ref(0)
let el = homeRef.value!
const handleScroll = throttle(
  () => {
    clientHeight.value = el.clientHeight
    scrollHeight.value = el.scrollHeight
    scrollTop.value = el.scrollTop
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true
    }
  },
  400,
  { trailing: true }
)
onMounted(() => {
  el = homeRef.value!
  el.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  el.removeEventListener('scroll', handleScroll)
})
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHomeHouseList().then(() => {
      isReachBottom.value = false
    })
  }
})
</script>

<template>
  <div class="home" ref="homeRef">
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
.home {
  --van-nav-bar-title-text-color: var(--primary-color);
  padding-bottom: 60px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
}
.banner {
  img {
    width: 100%;
  }
}
</style>
