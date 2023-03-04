<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/modules/home'
import { formatMonthDay, getDiffDay } from '@/utils/format-date'

function getPosition() {
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log(res)
    },
    (err) => {
      console.log(err)
    },
    {
      timeout: 5000
    }
  )
}
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)

const newDate = new Date()
const oldDate = new Date().setDate(newDate.getDate() + 1)
const startDate = ref(formatMonthDay(newDate))
const endDate = ref(formatMonthDay(oldDate))
const stay = ref(1)
const calendarShow = ref(false)
function calendarConfirm(value: Date[]) {
  const selectSDate = value[0]
  const selectEDate = value[1]
  startDate.value = formatMonthDay(selectSDate)
  endDate.value = formatMonthDay(selectEDate)
  stay.value = getDiffDay(selectSDate, selectEDate)

  calendarShow.value = false
}
</script>

<template>
  <div class="search-box">
    <div class="section location bottom-gray-line">
      <div class="city">广州</div>
      <div class="position" @click="getPosition">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" />
      </div>
    </div>

    <div class="section date-range bottom-gray-line" @click="calendarShow = true">
      <div class="start">
        <div class="tip">入住</div>
        <div class="time">{{ startDate }}</div>
      </div>
      <div class="stay">共{{ stay }}晚</div>
      <div class="end">
        <div class="tip">离店</div>
        <div class="time">{{ endDate }}</div>
      </div>
    </div>
    <van-calendar
      type="range"
      v-model:show="calendarShow"
      :show-confirm="false"
      color="#ff9854"
      :round="false"
      @confirm="calendarConfirm"
    />

    <div class="section price-counter bottom-gray-line">
      <div class="left">价格不限</div>
      <div class="right">人数不限</div>
    </div>

    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <div class="section hot-suggests bottom-gray-line">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
    <div class="section search-btn">
      <button class="btn">开始搜索</button>
    </div>
  </div>
</template>

<style scoped lang="less">
.search-box {
  --van-calendar-popup-height: 100%;
}
.section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 35px 0 20px;
  color: #999;
}

.location {
  height: 44px;
  .city {
    font-size: 16px;
    color: #333;
  }
  .position {
    .text {
      color: #666;
      font-size: 12px;
    }
    img {
      margin-left: 3px;
      width: 18px;
      height: 18px;
    }
  }
}

.date-range {
  margin-top: 5px;
  padding-bottom: 4px;
  .stay {
    font-size: 15px;
  }
  .tip {
    font-size: 12px;
  }
  .time {
    margin-top: 2px;
    color: #333;
    font-size: 16px;
    font-weight: 500;
  }
}
.price-counter,
.keyword {
  padding-top: 12px;
  padding-bottom: 12px;
}
.price-counter {
  .left {
    flex: 1;
    border-right: 1px solid var(--line-color);
  }
  .right {
    min-width: 30%;
    text-align: right;
    padding-left: 20px;
  }
}
.hot-suggests {
  padding-top: 8px;
  padding-bottom: 8px;
  .item {
    margin: 6px 4px;
    padding: 4px 8px;
    border-radius: 14px;
    font-size: 12px;
  }
}
.search-btn {
  padding: 0 30px;
  margin-top: 4px;
  .btn {
    flex: 1;
    border: 0;
    height: 38px;
    line-height: 38px;
    border-radius: 20px;
    font-size: 18px;
    color: #fff;
    background-image: var(--theme-linear-gradient);
  }
}
</style>
