<script lang="ts" set>
import { Component, defineComponent, ref } from 'vue'
import { HomeIcon, PuzzleIcon } from '@heroicons/vue/solid'

interface NavList {
  title: string
  path: string
  icon: Component
  iconColor: string
}

export default defineComponent({
  components: {
    HomeIcon,
    PuzzleIcon,
  },
  setup() {
    const navlist = ref<NavList[]>([
      {
        title: '首页',
        path: '/',
        icon: HomeIcon,
        iconColor: 'text-green-500',
      },
      {
        title: '工具',
        path: '/tools',
        icon: PuzzleIcon,
        iconColor: 'text-blue-500',
      },
      {
        title: '关于',
        path: '/about',
        icon: PuzzleIcon,
        iconColor: 'text-blue-500',
      },
    ])

    return { navlist }
  },
})
</script>
<template>
  <nav
    class="
      flex
      items-stretch
      sticky
      top-0
      h-14
      z-30
      bg-white
      border-gray-200 border-b-1
      shadow
      bg-opacity-90
    "
  >
    <details class="select-none">
      <summary class="p-4 cursor-pointer">☰</summary>
      <menu
        class="
          flex flex-col
          absolute
          p-4
          m-2
          shadow
          bg-white bg-opacity-90
          rounded-lg
          gap-4
        "
      >
        <a href="">About</a>
        <a href="">Work</a>
        <a href="">Projects</a>
        <a href="">etc</a>
      </menu>
    </details>
    <ul class="flex items-center gap-2 pl-7">
      <router-link :to="item.path" v-for="item in navlist" :key="item.title">
        <li
          class="
            flex
            items-center
            px-2
            py-1
            cursor-pointer
            hover:(bg-gray-100
            rounded)
            select-none
          "
        >
          <component
            :is="item.icon"
            :class="['w-5', 'h-5', 'mr-1', item.iconColor]"
          ></component>
          <span class="leading-1">{{ item.title }}</span>
        </li>
      </router-link>
    </ul>

    <details class="ml-auto select-none">
      <summary class="act p-4">@</summary>
      <menu
        class="
          absolute
          flex flex-col
          m-2
          p-4
          shadow
          bg-white bg-opacity-90
          rounded-lg
          gap-4
          right-0
        "
      >
        <a href="">Twitter</a>
        <a href="">Email</a>
        <a href="">Phone</a>
        <a href="">Twitch</a>
      </menu>
    </details>
  </nav>
</template>
