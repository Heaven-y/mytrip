<script setup lang="ts">
import useGoBack from '@/hooks/useGoback'

const backClick = useGoBack()
</script>

<template>
  <div class="message">
    <van-nav-bar title="消息中心" left-arrow @click-left="backClick">
      <template #right>
        <van-icon name="more-o" :size="18" />
      </template>
    </van-nav-bar>
    <div class="content">
      <img src="@/assets/img/message/icon_message.png" />
      <div class="text">暂无聊天消息</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.content {
  padding-top: 60px;
  text-align: center;
  img {
    width: 100%;
  }
}
</style>
