<script lang="ts">
import { defineComponent, ref } from 'vue'

type ButtonTypes = 'default' | 'success' | 'error' | 'warn'
type ButtonSize = 'sm' | 'md' | 'lg'

export default defineComponent({
  name: 'VButton',
  props: {
    type: {
      type: String as PropType<ButtonTypes>,
      required: false,
      default: 'default',
    },
    size: {
      type: String as PropType<ButtonSize>,
      required: false,
      default: 'md',
    },
    icon: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
    iconL: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
    iconR: {
      type: String as PropType<string>,
      required: false,
      default: null,
    },
    ring: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const typeStyle = ref<string>('')
    const sizeStyle = ref<string>('')

    switch (props.type) {
      case 'success':
        typeStyle.value =
          'bg-green-500 border-green-300  hover:bg-green-400  ring-green-100 text-white'
        break
      case 'warn':
        typeStyle.value =
          'bg-yellow-500 border-yellow-300  hover:bg-yellow-400  ring-yellow-200 text-white'
        break
      case 'error':
        typeStyle.value =
          'bg-red-500 border-red-300  hover:bg-red-400  ring-red-200 text-white'
        break
      default:
        typeStyle.value =
          'bg-gray-300 border border-gray-400  hover:bg-gray-200  ring-gray-200'
        break
    }

    switch (props.size) {
      case 'sm':
        sizeStyle.value = 'px-2 py-0 text-sm'
        break
      case 'lg':
        sizeStyle.value = 'px-6 py-2'
        break
      default:
        sizeStyle.value = 'px-4 py-1'
        break
    }
    return { typeStyle, sizeStyle }
  },
})
</script>

<template>
  <button
    :class="[sizeStyle, typeStyle]"
    class="
      shadow
      rounded
      hover:transition
      focus:ring focus:outline-none
      dark:bg-dark-800
    "
  >
    <slot></slot>
  </button>
</template>
