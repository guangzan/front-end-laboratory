<script lang="ts" setup>
import { PropType, defineProps } from 'vue'

defineProps({
  title: {
    type: String as PropType<string>,
  },
})
</script>

<template>
  <div class="flex flex-col bg-white rounded-lg">
    <div class="text-base font-bold px-8 py-4 border-b-1">{{ title }}</div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>
