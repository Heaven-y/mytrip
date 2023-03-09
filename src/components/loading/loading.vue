<script setup lang="ts">
import useMainStore from '@/stores/modules/main'
const mainStore = useMainStore()
</script>

<template>
  <div class="loading" v-show="mainStore.isLoading">
    <div class="content">
      <img src="@/assets/img/home/full-screen-loading.gif" />
    </div>
  </div>
</template>

<style scoped lang="less">
.loading {
  position: fixed;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  .content {
    width: 104px;
    height: 104px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: url(@/assets/img/home/loading-bg.png) 0 0 / 100% 100%;
    img {
      width: 70px;
      height: 70px;
      margin-bottom: 12px;
    }
  }
}
</style>
