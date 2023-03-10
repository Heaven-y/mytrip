<script setup lang="ts">
defineProps<{
  title: string
  moreText?: string
}>()
</script>

<template>
  <div class="detail-section">
    <div class="head">
      <h2 class="title">{{ title }}</h2>
    </div>
    <div class="content">
      <slot>默认内容</slot>
    </div>
    <div class="footer" v-if="moreText">
      <span class="more">{{ moreText }}</span>
      <van-icon name="arrow" />
    </div>
  </div>
</template>

<style scoped lang="less">
.detail-section {
  padding: 10px 15px 5px;
  border-top: 5px solid #f2f3f4;
  background-color: #fff;
  .head {
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 20px;
      color: #333;
    }
  }
  .content {
    padding: 8px 0;
  }
  .footer {
    text-align: right;
    color: var(--primary-color);
    font-size: 13px;
    font-weight: 600;
  }
}
</style>
