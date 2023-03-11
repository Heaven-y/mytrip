<script setup lang="ts">
import type { FavorItem } from '@/stores/types/favor'

defineProps<{ itemData: FavorItem }>()
</script>

<template>
  <div class="favor-item">
    <div class="album">
      <van-swipe class="swipe" :autoplay="3000">
        <template v-for="(item, index) in itemData.pictureList" :key="index">
          <van-swipe-item>
            <img :src="item" />
          </van-swipe-item>
        </template>
        <template #indicator="{ active, total }">
          <div class="custom-indicator">{{ active + 1 }}/{{ total }}</div>
        </template>
      </van-swipe>
      <div class="rightTop-tip">
        <div class="heart-img">
          <img src="@/assets/img/search/tj-mob-ui_unit-item_collected-new.png" />
        </div>
        <div class="message-img">
          <img src="@/assets/img/search/tj-mob-ui_unit-item_comment-new.png" />
          <div class="count">{{ itemData.commentBrief.totalCount }}</div>
        </div>
      </div>
      <div class="leftBottom-tip">
        <span class="score">{{ itemData.commentBrief.overall }}分</span>
        <span class="text">{{ itemData.commentBrief.scoreTitle }}</span>
      </div>
    </div>
    <div class="info">
      <div class="address">{{ itemData.address }}</div>
      <div class="summer">
        <template v-for="(item, index) in itemData.unitSummeries" :key="index">
          <template v-if="index < 2">
            <span class="item">{{ item.text }}</span>
          </template>
        </template>
      </div>
    </div>
    <h2 class="name">{{ itemData.unitName }}</h2>
    <div class="tags">
      <template v-for="(item, index) in itemData.houseTags" :key="index">
        <span :style="{ color: item.color, backgroundColor: item.background.color }" class="item">
          {{ item.text }}
        </span>
      </template>
    </div>
    <div class="price">
      <span class="new">¥{{ itemData.finalPrice }}</span>
      <span class="old">¥{{ itemData.productPrice }}</span>
      <span
        v-if="itemData.priceTipBadge"
        class="tip"
        :style="{
          color: itemData.priceTipBadge.color,
          backgroundImage: `linear-gradient(90deg,${itemData.priceTipBadge.gradient.startColor},${itemData.priceTipBadge.gradient.endColor})`
        }"
      >
        {{ itemData.priceTipBadge.text }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="less">
.favor-item {
  font-size: 12px;
}
.album {
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  .swipe img {
    width: 100%;
  }
  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    color: #fff;
    background: rgba(0, 0, 0, 0.1);
  }
  .rightTop-tip {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 30px;
    text-align: center;
    color: #fff;
    img {
      width: 30px;
      height: 30px;
    }
    .message-img {
      margin-top: 10px;
    }
  }
  .leftBottom-tip {
    position: absolute;
    left: 15px;
    bottom: 12px;
    padding: 4px 6px;
    border-radius: 10px;
    background-color: #ffffffe6;
    .score {
      font-weight: 600;
    }
    .text {
      border-left: 1px solid #666;
      padding-left: 3px;
      margin-left: 4px;
      color: #666;
      &:empty {
        border: 0;
        margin: 0;
        padding: 0;
      }
    }
  }
}
.info {
  display: flex;
  align-items: center;
  padding: 6px 0;
  .address {
    padding: 2px;
    border-radius: 4px;
    color: rgb(255, 255, 255);
    background: rgb(63, 73, 84);
  }
  .summer {
    color: #666;
    min-width: 92px;
    margin-left: 10px;
    .item {
      margin-right: 6px;
    }
  }
}
.name {
  margin-top: 2px;
  line-height: 22px;
  font-size: 18px;
  font-weight: 700;
}
.tags {
  padding: 4px 0;
  .item {
    display: inline-block;
    padding: 1px;
    margin-right: 6px;
  }
}
.price {
  display: flex;
  align-items: center;
  .new {
    color: var(--primary-color);
    font-size: 18px;
  }
  .old {
    margin: 6px;
    text-decoration: line-through;
    color: #999;
  }
  .tip {
    padding: 0 4px;
    border-radius: 10px;
  }
}
</style>
