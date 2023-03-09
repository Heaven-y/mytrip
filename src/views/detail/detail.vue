<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const houseId = route.params.houseId as string
console.log(houseId)
</script>

<template>
  <div class="detail top-page">
    <div>detail</div>
  </div>
</template>

<style scoped lang="less">
.detail {
}
</style>
