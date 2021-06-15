<script lang="ts" setup>
import { PropType, defineProps } from 'vue'

interface Card {
  title: string
  desc: string
}

defineProps({
  data: {
    type: Object as PropType<Card>,
    requied: true,
  },
})
</script>

<template>
  <div class="w-1/4 <md:w-1/3 <sm:w-full p-4">
    <div
      class="flex flex-col gap-2 p-4 w-full border border-gray-300 bg-white rounded-md cursor-pointer"
    >
      <div class="text-sm font-bold w-full line-clamp-1">{{ data?.title }}</div>
      <div class="text-xs text-gray-400 w-full line-clamp-1">{{ data?.desc }}</div>
    </div>
  </div>
</template>
