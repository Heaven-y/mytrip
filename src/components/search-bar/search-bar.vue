<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import useMainStore from '@/stores/modules/main'
import { formatMonthDay } from '@/utils/format-date'

const mainStore = useMainStore()
const { nowDate, newDate } = storeToRefs(mainStore)
const startDate = computed(() => formatMonthDay(nowDate.value, 'MM.DD'))
const endDate = computed(() => formatMonthDay(newDate.value, 'MM.DD'))
</script>

<template>
  <div class="search-bar">
    <div class="search">
      <div class="select-date">
        <div class="start item">
          <div class="text">住</div>
          <div class="date">{{ startDate }}</div>
        </div>
        <div class="end item">
          <div class="text">离</div>
          <div class="date">{{ endDate }}</div>
        </div>
      </div>

      <div class="content">
        <div class="keyword">关键字/位置/民宿</div>
      </div>

      <div class="search-icon">
        <i class="icon" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 999;
}
.search {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  border-radius: 6px;
  color: #999;
  background-color: #f2f4f6;
  .select-date {
    position: relative;
    .item {
      display: flex;
      font-size: 10px;
      margin: 2px 0;
      .date {
        color: #333;
        font-weight: 500;
        margin: 0 12px 0 3px;
      }
    }
    &::after {
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border: 3px solid #666;
      border-color: transparent transparent transparent #666;
      transform: rotate(45deg);
      bottom: 1px;
      right: 4px;
    }
  }
  .content {
    flex: 1;
    font-size: 12px;
    border-left: 1px solid #eee;
    .keyword {
      padding-left: 12px;
      max-width: 155px;
    }
  }
  .search-icon {
    display: flex;
    align-items: center;
    .icon {
      display: inline-block;
      width: 24px;
      height: 24px;

      background: url(../../assets/img/home/home-sprite.png) -29px -151px;
      background-size: 207px 192px;
    }
  }
}
</style>
