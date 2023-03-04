<script setup lang="ts">
import { ref } from 'vue'
import type { Data } from '@/stores/types/home'

const props = defineProps<{
  itemData: Data
}>()
const rateScore = ref(Number(props.itemData.commentScore))
</script>

<template>
  <div class="house-item-v9">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" />
      </div>
      <div class="info">
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="rate-price">
          <van-rate :model-value="rateScore" :size="14" color="#fff" allow-half readonly />
          <div class="new">¥ {{ itemData.finalPrice }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.item-inner {
  position: relative;
  margin: 5px;
  border-radius: 6px;
  overflow: hidden;
  color: #fff;
  .cover img {
    width: 100%;
  }
  .info {
    position: absolute;
    bottom: 0;
    padding: 8px;
    .summary {
      font-size: 12px;
    }
    .name {
      margin: 4px 0;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .rate-price {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
