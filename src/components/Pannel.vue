<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
    },
  },
  setup() {
    return {}
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
