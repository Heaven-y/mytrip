<script setup lang="ts">
import { ref } from 'vue'
defineProps<{ titles: string[] }>()

const currentIndex = ref(0)
const emits = defineEmits(['tabItemClick'])
function changeIndex(index: number) {
  emits('tabItemClick', index)
  currentIndex.value = index
}
function setIndex(index: number) {
  currentIndex.value = index
}
defineExpose({ setIndex })
</script>

<template>
  <div class="tab-control">
    <template v-for="(item, index) of titles" :key="index">
      <div
        class="tab-control-item"
        @click="changeIndex(index)"
        :class="{ active: currentIndex === index }"
      >
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped lang="less">
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
  .tab-control-item {
    flex: 1;
  }
  .tab-control-item.active {
    color: var(--primary-color);
    font-weight: 700;
  }
  .tab-control-item.active span {
    border-bottom: 3px solid var(--primary-color);
    padding: 8px;
  }
}
</style>
