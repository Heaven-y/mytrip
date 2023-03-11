<script setup lang="ts">
import { ref } from 'vue'
import { formatMonthDay } from '@/utils/format-date'
import type { Order } from '@/stores/types/order'

const props = defineProps<{ itemData: Order }>()
const InDate = new Date(props.itemData.checkInDate)
const OutDate = new Date(props.itemData.checkOutDate)
const sday = formatMonthDay(InDate, 'M月DD日')
const stime = formatMonthDay(InDate, '', true)
const eday = formatMonthDay(OutDate, 'M月DD日')
const etime = formatMonthDay(OutDate, '', true)

const status = ref(props.itemData.orderStatus)
const lbtnText = status.value === 1 ? '联系房东' : '删除'
const rbtnText = status.value === 1 ? '去支付' : '再次预定'

const remainTime = ref(0)
let second = 1
let timer: number | undefined = undefined
function getRemainTime() {
  timer = setInterval(() => {
    remainTime.value = parseInt((props.itemData.countdown - second) / 60 + '')
    second++
    if (remainTime.value <= 0) clearInterval(timer)
  }, 1000)
}
getRemainTime()
</script>

<template>
  <div class="order-item">
    <div class="info">
      <div class="name">{{ itemData.unitName }}</div>
      <div class="state" :style="{ color: itemData.orderStatusDescColor }">
        {{ itemData.orderStatusDesc }}
        <span class="reason">{{ itemData.cancelReasonDesc }}</span>
      </div>
    </div>
    <div class="album">
      <img class="img" :src="itemData.unitPicture" />
      <div class="date-price">
        <div class="date">
          <div class="start">
            <div class="day">{{ sday }}</div>
            <div class="time">{{ stime + itemData.checkInLatestTime }}</div>
          </div>
          <img class="icon" src="@/assets/img/order/icon_right_orderlist.png" />
          <div class="end">
            <div class="day">{{ eday }}</div>
            <div class="time">{{ etime + itemData.checkOutLatestTime }}</div>
          </div>
        </div>
        <div class="price">
          <div>支付总价</div>
          <div class="num">¥{{ itemData.prepayAmount }}</div>
        </div>
      </div>
    </div>
    <div class="tip">
      <div class="left">
        <template v-if="itemData.summary">
          <img class="icon" src="@/assets/img/order/icon-time.png" />
          <span class="text">{{ remainTime }}分钟</span>
          <span>{{ itemData.summary }}</span>
        </template>
      </div>
      <div class="right">
        <button class="connect lbtn btn">{{ lbtnText }}</button>
        <button class="rbtn btn" :class="itemData.orderStatus === 1 ? 'pay' : ''">
          {{ rbtnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.order-item {
  font-size: 12px;
  padding: 0 10px 6px;
  border-bottom: 4px solid #e9e9e945;
}
.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  .name {
    max-width: 204px;
    font-size: 12px;
    color: #333;
    overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .state {
    font-size: 18px;
    font-weight: 500;
    .reason {
      font-size: 12px;
    }
  }
}
.album {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  .img {
    width: 100%;
  }
  .date-price {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 8px 4px 8px 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(9, 10, 14, 0.7);
    color: #fff;
    .date {
      padding: 0 8px;
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-right: 1px solid #fff;
      .icon {
        width: 16px;
        height: 12px;
      }
      .day {
        font-size: 15px;
      }
      .time {
        font-weight: 100;
      }
    }
    .price {
      width: 120px;
      text-align: center;
      font-weight: 100;
      font-size: 14px;
      .num {
        color: var(--primary-color);
        font-weight: normal;
      }
    }
  }
}
.tip {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  .left {
    display: flex;
    align-items: center;
    .icon {
      width: 11px;
      height: 11px;
      margin-right: 3px;
    }
    .text {
      color: var(--primary-color);
    }
  }
  .right {
    .btn {
      padding: 8px 4px;
      margin-left: 4px;
      border-radius: 6px;
      min-width: 75px;
      font-size: 14px;
      background-color: #fff;
      border: 1px solid #e9e9e9;
    }
    .rbtn {
      color: var(--primary-color);
    }
    .pay {
      color: #fff;
      background-color: var(--primary-color);
    }
  }
}
</style>
