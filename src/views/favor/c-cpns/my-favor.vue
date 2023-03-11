<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useFavorStroe from '@/stores/modules/favor'
import useGoBack from '@/hooks/useGoback'

defineProps<{ subTitles: string[] }>()
const favorStore = useFavorStroe()
const { favorList } = storeToRefs(favorStore)

const backClick = useGoBack(true)
</script>

<template>
  <div class="my-favor">
    <van-tabs>
      <van-tab class="tab" :title="subTitles[0]">
        <template v-for="(item, index) in favorList.data.items" :key="index">
          <favor-item :item-data="item" />
        </template>
      </van-tab>
      <van-tab :title="subTitles[1]">
        <div class="no-data">
          <img class="img item" src="@/assets/img/favor/empty_favorite.44731802.png" />
          <div class="text item">暂无收藏</div>
          <div class="tip item">
            点击
            <img src="@/assets/img/favor/favor.png" />
            即可收藏对应的房东
          </div>
          <button class="btn item" @click="backClick">随便去逛逛</button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style scoped lang="less">
.my-favor .tab {
  padding-top: 10px;
}
.no-data {
  padding: 10px 40px;
  text-align: center;
  .item {
    margin: 10px 0;
  }
  .img {
    width: 100%;
  }
  .text {
    color: #333;
    font-size: 18px;
    font-weight: 500;
    line-height: 27px;
  }
  .tip {
    img {
      height: 12px;
      width: 12px;
    }
  }
  .btn {
    padding: 10px 40px;
    font-size: 16px;
    color: #fff;
    background: var(--primary-color);
    border-radius: 20px;
    border: none;
    outline: none;
  }
}
</style>
