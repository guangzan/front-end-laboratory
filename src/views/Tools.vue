<script lang="ts" setup>
import Pannel from '../components/Pannel.vue'
import Card from '../components/Card.vue'
import { useRouter } from 'vue-router'
import { NGrid, NGi, NCard, NIcon } from 'naive-ui'
import { ColorPaletteOutline, Code, ImageOutline } from '@vicons/ionicons5'

interface CardItem {
  title: string
  desc: string
  path: string
  icon: any
}

const router = useRouter()
const tools: Array<CardItem> = [
  {
    title: '调色板',
    desc: '中性色板',
    path: '/colorPicker',
    icon: ColorPaletteOutline,
  },
  {
    title: '代码格式化',
    desc: 'CSS、JavaScript 代码格式化',
    path: '/formater',
    icon: Code,
  },
  {
    title: 'base64 ⇌ 图片',
    desc: '在图片与 base64 之间转换',
    path: '/convertBase64Image',
    icon: ImageOutline,
  },
]

const tools2: Array<CardItem> = []

function handleCardClick(path: string) {
  router.push({ path })
}
</script>

<template>
  <div class="mt-24 mx-auto w-2/3 <sm:(w-11/12 mt-2)">
    <n-grid
      x-gap="12"
      y-gap="12"
      cols="1 s:1 m:2 l:3 xl:4 2xl:4"
      responsive="screen"
    >
      <n-gi v-for="item in tools" :key="item.title">
        <n-card
          class="cursor-pointer"
          hoverable
          @click="handleCardClick(item.path)"
        >
          <template #header>
            <span class="flex items-center hover:text-blue-500">
              <n-icon size="20" class="mr-2">
                <component :is="item.icon"></component>
              </n-icon>
              {{ item.title }}
            </span>
          </template>
          {{ item.desc }}
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>
