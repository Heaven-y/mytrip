<script setup lang="ts">
import TabBar from './components/tab-bar/tab-bar.vue'
import Loading from './components/loading/loading.vue'
</script>

<template>
  <div class="App">
    <router-view v-slot="props">
      <keep-alive include="home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <tab-bar />
    <loading />
  </div>
</template>

<style scoped lang="less"></style>
