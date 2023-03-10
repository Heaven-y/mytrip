<script setup lang="ts">
import DetailSection from '@/components/detail-section/detail-section.vue'
import type { HouseFacility } from '@/stores/types/detail'

defineProps<{
  houseFacility: HouseFacility
}>()
</script>

<template>
  <div class="detail-facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="inner">
        <template v-for="(item, index) of houseFacility.houseFacilitys" :key="index">
          <div class="facility-item" v-if="houseFacility.facilitySort.includes(index)">
            <div class="left">
              <img :src="item.icon" />
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="right">
              <template v-for="(e, i) of item.facilitys.slice(0, 4)" :key="i">
                <div class="item">
                  <i class="icon_check icon" />
                  <span class="text">{{ e.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style scoped lang="less">
.inner {
  padding: 14px 0;
  font-size: 12px;
  background-color: #f7f9fb;
}
.facility-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
  .left {
    width: 90px;
    text-align: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
  .right {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    .item {
      width: 50%;
      padding: 5px 10px;
      box-sizing: border-box;
    }
  }
}
</style>
