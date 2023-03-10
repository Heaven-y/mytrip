<script setup lang="ts">
import type { TopModule } from '@/stores/types/detail'

defineProps<{
  topModule: TopModule
}>()
</script>

<template>
  <div class="detail-infos">
    <div class="name">{{ topModule.houseName }}</div>

    <div class="tags">
      <template v-for="item of topModule.houseTags" :key="item.tagCode">
        <span
          class="text"
          v-if="item.tagText"
          :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </span>
      </template>
    </div>

    <div class="comment section">
      <div class="left">
        <div class="score">{{ topModule.commentBrief.overall }}</div>
        <div class="title">{{ topModule.commentBrief.scoreTitle }}</div>
        <div class="brief">{{ topModule.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <span class="count">{{ topModule.commentBrief.totalCount }}条评论</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="position section">
      <div class="left">
        {{ topModule.nearByPosition.address }}
      </div>
      <div class="right">
        地图·周边
        <van-icon name="arrow" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.detail-infos {
  padding: 20px 16px;
}
.name {
  font-weight: 700;
  font-size: 20px;
  color: #333;
  text-align: justify;
  margin-bottom: 6px;
}
.tags {
  .text {
    font-size: 12px;
    margin: 0 3px;
    padding: 1px 2px;
  }
}
.comment {
  .left {
    display: flex;
    align-items: flex-end;
    .score {
      font-size: 18px;
      font-weight: 700;
    }
    .title {
      font-size: 14px;
      font-weight: 600;
      margin: 0 2px;
    }
    .brief {
      color: #666;
    }
  }
}
.position .left {
  font-size: 14px;
  font-weight: 700;
}
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6px 0;
  padding: 10px;
  border-radius: 4px;
  background-color: #f5f7fa;
  font-size: 12px;
  .right {
    font-size: 12px;
    color: var(--primary-color);
  }
}
</style>
