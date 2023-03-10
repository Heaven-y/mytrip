<script setup lang="ts">
import { ref } from 'vue'
import DetailSection from '@/components/detail-section/detail-section.vue'
import type { CommentModule } from '@/stores/types/detail'

const props = defineProps<{ comment: CommentModule }>()
const score = ref(props.comment.overall)
</script>

<template>
  <div class="detail-comment">
    <detail-section title="热门评论" :more-text="`查看全部${comment.totalCount}条评论`">
      <div class="inner">
        <div class="header">
          <div class="left">
            <div class="score">{{ comment.overall }}</div>
            <div class="info">
              <div class="title">{{ comment.scoreTitle }}</div>
              <div class="count">{{ comment.totalCount }}条评论</div>
              <div class="star">
                <van-rate v-model="score" color="#ff9854" :size="12" readonly allow-half />
              </div>
            </div>
          </div>
          <div class="right">
            <template v-for="(item, index) in comment.subScores" :key="index">
              <div class="item">{{ item }}</div>
            </template>
          </div>
        </div>

        <div class="tags">
          <template v-for="(item, index) in comment.commentTagVo" :key="index">
            <span
              class="item"
              :style="{ color: item.color, backgroundColor: item.backgroundColor }"
            >
              {{ item.text }}
            </span>
          </template>
        </div>

        <div class="comment">
          <div class="info">
            <div class="avatar">
              <img :src="comment.comment.userAvatars" />
            </div>
            <div class="profile">
              <div class="name">{{ comment.comment.userName }}</div>
              <div class="time">{{ comment.comment.checkInDate }}</div>
            </div>
          </div>
          <div class="detail">{{ comment.comment.commentDetail }}</div>
        </div>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.detail-comment {
  font-size: 12px;
}
.header {
  display: flex;
  .left {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    .score {
      position: relative;
      width: 75px;
      font-size: 48px;
      font-weight: 700;
      &::after {
        position: absolute;
        bottom: 3px;
        left: 0;
        content: '';
        height: 6px;
        width: 100%;
        background-image: var(--theme-linear-gradient);
        border-radius: 3px;
      }
    }
    .info {
      flex-shrink: 0;
      margin-left: 12px;
      color: #333;
      .count {
        margin: 3px 0;
        color: #999;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 34px;
    color: #999;
    .item {
      flex-grow: 1;
    }
  }
}
.tags {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
  .item {
    padding: 3px 5px;
    margin: 5px 8px 0 0;
    border-radius: 8px;
  }
}
.comment {
  padding: 10px;
  border-radius: 6px;
  background-color: #f7f9fb;
  .info {
    display: flex;
    .avatar img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .profile {
      margin-left: 8px;
      .date {
        margin-top: 3px;
        font-size: 12px;
        color: #999;
      }
    }
  }
  .detail {
    margin-top: 16px;
    padding: 0 2px;
    font-size: 12px;
    line-height: 16px;
    color: #333;
  }
}
</style>
