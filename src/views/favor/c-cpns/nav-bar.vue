<script setup lang="ts">
import useGoBack from '@/hooks/useGoback'
import { ref } from 'vue'
defineProps<{ titles: string[]; modelValue: number }>()
const emits = defineEmits(['update:modelValue'])

const active = ref(0)
function tabsChange(index: number) {
  emits('update:modelValue', index)
}

const backClick = useGoBack(true)
</script>

<template>
  <div class="nav-bar">
    <van-nav-bar left-text="旅途" left-arrow @click-left="backClick">
      <template #title>
        <van-tabs v-model:active="active" type="card" @change="tabsChange">
          <template v-for="item of titles" :key="item">
            <van-tab :title="item"></van-tab>
          </template>
        </van-tabs>
      </template>
      <template #right>
        <van-icon name="more-o" :size="18" />
      </template>
    </van-nav-bar>
  </div>
</template>

<style scoped lang="less">
.nav-bar {
  --van-padding-base: 8px !important;
}
</style>
