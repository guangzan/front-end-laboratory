<script lang="ts" setup>
import { ref } from 'vue'
import { HomeIcon } from '@heroicons/vue/solid'

interface NavList {
  title: string
  path: string
  iconColor: string
}

const navlist = ref<NavList[]>([
  {
    title: '首页',
    path: '/',
    iconColor: 'text-green-500',
  },
  {
    title: '工具',
    path: '/tools',

    iconColor: 'text-blue-500',
  },
  {
    title: '关于',
    path: '/about',

    iconColor: 'text-blue-500',
  },
])
</script>

<template>
  <div
    class="
      flex flex-row
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
          <span class="leading-1">{{ item.title }}</span>
        </li>
      </router-link>
    </ul>
  </div>
</template>
