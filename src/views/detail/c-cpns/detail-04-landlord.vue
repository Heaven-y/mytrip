<script setup lang="ts">
import DetailSection from '@/components/detail-section/detail-section.vue'
import type { LandlordModule } from '@/stores/types/detail'

defineProps<{ landlord: LandlordModule }>()
</script>

<template>
  <div class="detail-landlord">
    <detail-section title="房东介绍" more-text="查看房东主页">
      <div class="inner">
        <div class="top">
          <img :src="landlord.topScroll" />
        </div>
        <div class="header">
          <div class="left">
            <div class="avatar">
              <img :src="landlord.hotelLogo" />
            </div>
            <div class="info">
              <div class="name">{{ landlord.hotelName }}</div>
              <div class="tags">
                <template v-for="(item, index) in landlord.hotelTags" :key="index">
                  <div class="item" :style="{ color: item.tagText.color }">
                    {{ item.tagText.text }}
                  </div>
                </template>
              </div>
            </div>
          </div>
          <div class="right">联系房东</div>
        </div>
        <div class="summary">
          <template v-for="(item, index) in landlord.hotelSummary" :key="index">
            <div class="item">
              <div class="title">{{ item.title }}</div>
              <div class="introduction">{{ item.introduction }}</div>
              <div class="tip">{{ item.tip }}</div>
            </div>
          </template>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.top img {
  width: 100%;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  .left {
    display: flex;
    align-items: center;
    .avatar img {
      width: 54px;
      height: 54px;
    }
    .info {
      .name {
        font-weight: 700;
        font-size: 16px;
      }
      .tags {
        display: flex;
        margin-top: 5px;
        font-size: 12px;
        .item {
          margin-right: 3px;
          padding-right: 3px;
          border-right: 1px solid;
          &:last-child {
            border: 0;
          }
        }
      }
    }
  }
  .right {
    height: 24px;
    line-height: 24px;
    border-radius: 5px;
    padding: 0 12px;
    font-size: 12px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}

.summary {
  display: flex;
  justify-content: space-between;
  margin: 45px 10px 20px;
  font-size: 12px;
  .title {
    color: #999;
  }
  .introduction {
    margin: 5px 0;
    font-size: 18px;
    font-weight: 700;
    color: #333;
  }
  .tip {
    color: #777;
  }
}
</style>
