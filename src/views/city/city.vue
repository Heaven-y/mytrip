<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city'
import CityGroup from './c-cpns/city-group.vue'

const cityStore = useCityStore()
cityStore.fetchAllCities()
const { allCities } = storeToRefs(cityStore)

const router = useRouter()
const searchValue = ref('')
function onCancelClick() {
  router.back()
}

const tabActive = ref('')
</script>

<template>
  <div class="city top-page">
    <van-search
      v-model="searchValue"
      placeholder="城市/区域/位置"
      show-action
      shape="round"
      @cancel="onCancelClick"
    />

    <van-tabs class="tabs" v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key) in allCities" :key="key">
        <!-- tabActive的值为标签的name -->
        <van-tab class="content" :title="value.title" :name="key">
          <city-group v-show="tabActive === key" :group-data="value" />
        </van-tab>
      </template>
    </van-tabs>
  </div>
</template>

<style scoped lang="less">
.tabs {
  :deep(.van-tabs__wrap) {
    position: relative;
    z-index: 9;
  }
  .content {
    height: calc(100vh - 103px);
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>
