<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useClipboard } from '@vueuse/core'
export default defineComponent({
  name: 'Palette',
  props: {
    color: {
      type: Array as PropType<string[]>,
      required: true,
    },
    title: {
      type: String as PropType<string>,
      required: false,
    },
  },
  setup() {
    function copy(color: string) {
      const { copy } = useClipboard({
        source: color,
      })
      copy().then(() => {
        console.log('copied')
      })
    }
    return { copy }
  },
})
</script>

<template>
  <div
    class="
      m-8
      max-w-3/4
      <sm:(max-w-full
      m-4)
      bg-gray-50
      p-4
      rounded-lg
      shadow-lg
    "
  >
    <div class="ml-4 w-full text-xl text-gray-400">{{ title }}</div>
    <div
      class="inline-block m-4 w-16 h-16 rounded-md shadow-lg cursor-pointer"
      v-for="(item, index) in color"
      :key="index"
      :style="{ background: item }"
      @click="copy(item)"
    ></div>
  </div>
</template>
