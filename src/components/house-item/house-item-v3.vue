<script setup lang="ts">
import type { Data } from '@/stores/types/home'

const props = defineProps<{
  itemData: Data
}>()
</script>

<template>
  <div class="house-item-v3">
    <div class="item-inner">
      <div class="cover">
        <img :src="itemData.image.url" />
      </div>
      <div class="info">
        <div class="location">
          <img src="@/assets/img/home/location.png" />
          <span class="text">{{ itemData.location }}</span>
        </div>
        <div class="name">{{ itemData.houseName }}</div>
        <div class="summary">{{ itemData.summaryText }}</div>
        <div class="price">
          <div class="new">¥ {{ itemData.finalPrice }}</div>
          <div class="old">¥ {{ itemData.productPrice }}</div>
          <div class="tip">{{ itemData.priceTipBadge?.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.item-inner {
  margin: 5px;
  .cover {
    border-radius: 6px;
    overflow: hidden;
    img {
      width: 100%;
    }
  }
  .info {
    padding: 8px;
    color: #666;
    font-size: 12px;
    .location {
      display: flex;
      align-items: center;
      img {
        width: 12px;
        height: 12px;
      }
      .text {
        margin-left: 2px;
      }
    }
    .name {
      margin: 5px 0;
      font-size: 14px;
      color: #333;

      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .price {
      display: flex;
      margin-top: 8px;
      .new {
        color: var(--primary-color);
        font-size: 16px;
      }
      .old {
        margin: 0 4px;
        color: #999;
        font-size: 12px;
        text-decoration: line-through;
      }
      .tip {
        color: #fff;
        padding: 2px 6px;
        border-radius: 8px;
        background-image: linear-gradient(270deg, #f66, #ff9f9f);
      }
    }
  }
}
</style>
