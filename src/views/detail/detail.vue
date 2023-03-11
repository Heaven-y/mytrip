<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import useDetailStore from '@/stores/modules/detail'
import useScroll from '@/hooks/useScroll'

import TabControl from '@/components/tab-control/tab-control.vue'
import DetailSwipe from './c-cpns/detail-01-swipe.vue'
import DetailInfos from './c-cpns/detail-02-infos.vue'
import DetailFacility from './c-cpns/detail-03-facility.vue'
import DetailLandlord from './c-cpns/detail-04-landlord.vue'
import DetailComment from './c-cpns/detail-05-comment.vue'
import DetailNotice from './c-cpns/detail-06-notice.vue'
import DetailMap from './c-cpns/detail-07-map.vue'
import DetailIntro from './c-cpns/detail-08-intro.vue'

import type { ComponentPublicInstance, VNodeRef } from 'vue'
import useGoBack from '@/hooks/useGoback'

const route = useRoute()
const backClick = useGoBack(false, () => {
  setTimeout(() => {
    detailStore.$reset()
  }, 0)
})
const houseId = route.params.houseId as string
const detailStore = useDetailStore()
detailStore.fetchDetailInfo(houseId)
const { detailInfo } = storeToRefs(detailStore)
const mainPart = computed(() => detailInfo.value.mainPart)

const els = ref<any[]>([])
const titles = ref<string[]>([])
function getRef(el: Element | ComponentPublicInstance | null) {
  if (!el) return

  const instance = el as ComponentPublicInstance
  els.value.push(instance.$el)
  titles.value.push(instance.$el.title)
}

const detailRef = ref<VNodeRef | undefined>()
const controlRef = ref<InstanceType<typeof TabControl>>()
const { scrollTop } = useScroll(detailRef)
let isClick = false
let currentDistance = 0
const isControlShow = computed(() => {
  if (currentDistance === scrollTop.value) isClick = false
  if (!isClick) scrollMatch(scrollTop.value)
  return scrollTop.value > 250
})
function scrollMatch(height: number) {
  const heights: number[] = els.value.map((el) => el.offsetTop)
  let index = heights.length - 1
  for (let i = 0; i < heights.length; i++) {
    if (height + 60 < heights[i]) {
      index = i - 1
      break
    }
  }
  controlRef.value?.setIndex(index)
}
function tabClick(index: number) {
  const cpn = els.value[index]
  const distance = cpn.offsetTop - 30

  isClick = true
  currentDistance = distance

  const el: HTMLDivElement = detailRef.value as any
  el.scrollTo({
    top: distance,
    behavior: 'smooth'
  })
}
</script>

<template>
  <div class="detail top-page" ref="detailRef">
    <tab-control
      class="control"
      :titles="titles"
      v-show="isControlShow"
      ref="controlRef"
      @tab-item-click="tabClick"
    />
    <van-nav-bar title="房屋详情" left-text="旅途" left-arrow @click-left="backClick" />
    <div class="main" v-if="mainPart" v-memo="[mainPart]">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos title="描述" :ref="getRef" :top-module="mainPart.topModule" />
      <detail-facility
        title="设施"
        :ref="getRef"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord
        title="房东"
        :ref="getRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      />
      <detail-comment title="评论" :ref="getRef" :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice
        title="须知"
        :ref="getRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-map title="周边" :ref="getRef" :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>

    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" />
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<style scoped lang="less">
.control {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
}
.detail {
  --van-nav-bar-title-font-size: 14px;
}
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  img {
    width: 123px;
  }
  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
