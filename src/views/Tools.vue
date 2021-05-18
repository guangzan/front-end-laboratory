<script lang="ts">
import { defineComponent } from 'vue'
import Pannel from '../components/Pannel.vue'
import Card from '../components/Card.vue'
import { useRouter } from 'vue-router'

interface CardItem {
  title: string
  desc: string
  path: string
}

export default defineComponent({
  components: { Pannel, Card },
  setup() {
    const router = useRouter()

    const tools: Array<CardItem> = [
      {
        title: '调色板',
        desc: '中性色板',
        path: '/colorPicker',
      },
      {
        title: '代码格式化',
        desc: 'CSS、JavaScript 代码格式化',
        path: '/formater',
      },
      {
        title: 'base64 ⇌ 图片',
        desc: '在图片与 base64 之间转换',
        path: '/convertBase64Image',
      },
    ]

    const tools2: Array<CardItem> = []

    function handleCardClick(path: string) {
      router.push({ path })
    }
    return { tools, tools2, handleCardClick }
  },
})
</script>

<template>
  <div class="mt-24 mx-auto w-2/3 <sm:(w-11/12 mt-2)">
    <Pannel title="前端工具">
      <div class="flex flex-wrap mt-2">
        <Card
          v-for="item in tools"
          :key="item.title"
          :data="item"
          @click="handleCardClick(item.path)"
        ></Card>
      </div>
    </Pannel>
  </div>
</template>
