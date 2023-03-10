<script setup lang="ts">
import DetailSection from '@/components/detail-section/detail-section.vue'
import type { OrderRules } from '@/stores/types/detail'

defineProps<{ orderRules: OrderRules[] }>()
</script>

<template>
  <div class="detail-06-notice">
    <detail-section title="预定须知">
      <div class="notice-inner">
        <template v-for="(item, index) of orderRules" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro">{{ item.introduction }}</span>
            <span class="tip" v-if="item.tips">查看说明</span>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.notice-inner .item {
  display: flex;
  font-size: 12px;
  margin: 10px 0 15px;
  .title {
    width: 64px;
    color: #666;
  }
  .intro {
    flex: 1;
    color: #333;
  }
}
</style>
