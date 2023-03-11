<script setup lang="ts">
import useGoBack from '@/hooks/useGoback'

const backClick = useGoBack()
</script>

<template>
  <div class="nav-bar">
    <van-nav-bar title="订单列表" left-arrow @click-left="backClick">
      <template #right>
        <van-icon name="more-o" :size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<style scoped lang="less"></style>
