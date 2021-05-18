<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: '',
  setup() {
    return {}
  },
})
</script>

<template>
  <div class="container flex flex-col">
    <div
      class="
        container
        mx-auto
        mt-36
        text-8xl text-gray-700 text-bold text-center
      "
    >
      404
    </div>
    <router-link to="/" class="mt-4 text-blue-500 text-center"
      >返回首页</router-link
    >
  </div>
</template>
