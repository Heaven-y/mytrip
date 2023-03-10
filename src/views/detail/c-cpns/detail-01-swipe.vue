<script setup lang="ts">
import type { HousePic } from '@/stores/types/detail'

const props = defineProps<{ swipeData: HousePic[] }>()

const swipeGroup: Record<number, HousePic[]> = {}
for (const item of props.swipeData) {
  let group = swipeGroup[item.enumPictureCategory]
  if (!group) {
    group = []
    swipeGroup[item.enumPictureCategory] = group
  }
  group.push(item)
}
const nameReg = /【(.*)】/i
function getName(title: string) {
  const res = title.match(nameReg)!
  return res[1]
}
function getIndex(item: HousePic) {
  const group = swipeGroup[item.enumPictureCategory]
  return group.findIndex((e) => e === item) + 1
}
</script>

<template>
  <div class="detail-swipe">
    <van-swipe class="swipe" :autoplay="3000">
      <template v-for="(item, index) of swipeData" :key="index">
        <van-swipe-item>
          <img :src="item.url" />
        </van-swipe-item>
      </template>

      <template #indicator="{ active }">
        <div class="custom-indicator">
          <template v-for="(value, key) of swipeGroup" :key="key">
            <div class="item" :class="{ active: swipeData[active]?.enumPictureCategory == key }">
              <span class="text">{{ getName(value[0].title) }}</span>
              <span class="count" v-if="key == swipeData[active]?.enumPictureCategory">
                {{ getIndex(swipeData[active]) }}/
                {{ value.length }}
              </span>
            </div>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style scoped lang="less">
.swipe {
  img {
    width: 100%;
  }
  .custom-indicator {
    display: flex;
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    color: #fff;
    background: rgba(0, 0, 0, 0.8);
    .item {
      margin: 0 3px;
      &.active {
        padding: 0 3px;
        border-radius: 5px;
        background-color: #fff;
        color: #333;
      }
    }
  }
}
</style>
