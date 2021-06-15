<script lang="ts" setup>
import { defineComponent } from 'vue'
import { NMessageProvider, NConfigProvider } from 'naive-ui'
import Header from './components/Header.vue'

const themeOverrides = {
  common: {
    primaryColor: '#ff4757',
  },
}
</script>

<template>
  <n-message-provider>
    <n-config-provider :theme-overrides="themeOverrides">
      <Header></Header>
      <router-view></router-view>
    </n-config-provider>
  </n-message-provider>
</template>
