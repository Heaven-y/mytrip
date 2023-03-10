<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DetailSection from '@/components/detail-section/detail-section.vue'
import type { PositionModule } from '@/stores/types/detail'

const props = defineProps<{ position: PositionModule }>()

const baiduRef = ref<HTMLDivElement>()
onMounted(() => {
  const map = new BMap.Map(baiduRef.value) // 创建地图实例
  const point = new BMap.Point(props.position.longitude, props.position.latitude) // 创建点坐标
  map.centerAndZoom(point, 15) // 初始化地图，设置中心点坐标和地图级别
  const marker = new BMap.Marker(point)
  map.addOverlay(marker)
})
</script>

<template>
  <div class="detail-map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="baiduRef"></div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.baidu {
  height: 250px;
}
</style>
