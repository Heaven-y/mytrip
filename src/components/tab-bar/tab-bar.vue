<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { getAssetUrl } from '@/utils/load-assets'
import tabbarData from '@/assets/data/tabbar'

const currentIndex = ref(0)

const route = useRoute()
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path)
  if (index === -1) return
  currentIndex.value = index
})
</script>

<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route>
      <template v-for="(item, index) of tabbarData" :key="item.id">
        <van-tabbar-item :to="item.path">
          <span>{{ item.text }}</span>
          <template #icon>
            <img
              :src="
                index !== currentIndex ? getAssetUrl(item.image) : getAssetUrl(item.imageActive)
              "
            />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<style scoped lang="less">
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
