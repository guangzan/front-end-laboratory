<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  PhotographIcon,
  UploadIcon,
  ClipboardCopyIcon,
  DownloadIcon,
} from '@heroicons/vue/solid'
import useClipboard from 'vue-clipboard3'

export default defineComponent({
  components: {
    PhotographIcon,
    UploadIcon,
    ClipboardCopyIcon,
    DownloadIcon,
  },
  name: '',
  setup() {
    const imageSrc = ref<string>('')
    const base64String = ref<string>('')
    const { toClipboard } = useClipboard()

    function base64ToBlob({
      b64data = '',
      contentType = '',
      sliceSize = 512,
    } = {}) {
      return new Promise((resolve) => {
        // 使用 atob() 方法将数据解码
        let byteCharacters = atob(b64data)
        let byteArrays = []
        for (
          let offset = 0;
          offset < byteCharacters.length;
          offset += sliceSize
        ) {
          let slice = byteCharacters.slice(offset, offset + sliceSize)
          let byteNumbers = []
          for (let i = 0; i < slice.length; i++) {
            byteNumbers.push(slice.charCodeAt(i))
          }
          // 8 位无符号整数值的类型化数组。内容将初始化为 0。
          // 如果无法分配请求数目的字节，则将引发异常。
          byteArrays.push(new Uint8Array(byteNumbers))
        }
        let result = new Blob(byteArrays, {
          type: contentType,
        })
        result = Object.assign(result, {
          // jartto: 这里一定要处理一下 URL.createObjectURL
          preview: URL.createObjectURL(result),
          name: `图片示例.png`,
        })
        resolve(result)
      })
    }

    function isBase64(str: string): boolean {
      return str.startsWith('data:image')
    }

    function saveBase64AsFile(base64: string): void {
      let base64String = base64.split(',')[1]
      base64ToBlob({ b64data: base64String, contentType: 'image/png' }).then(
        (res) => {
          var a = document.createElement('a')
          a.download = new Date().getTime().toString()
          a.href = URL.createObjectURL(res)
          a.click()
        }
      )
    }

    async function imageToBase64(file: File): Promise<string> {
      return new Promise((resolve, reject) => {
        const reader: FileReader = new FileReader()
        reader.addEventListener('load', () => resolve(reader.result as string))
        reader.addEventListener('error', () => reject(reader.error))
        reader.readAsDataURL(file)
      })
    }

    function fileSelected(e: Event) {
      const target = e.target as HTMLInputElement
      const file: File = (target.files as FileList)[0]

      imageToBase64(file).then((res) => {
        imageSrc.value = res
        base64String.value = res
      })
    }

    function handleBase64AreaBlur() {
      if (imageSrc.value === base64String.value) {
        return
      }
      if (base64String.value === '') {
        return
      }
      if (!isBase64(base64String.value)) {
        return
      }
      imageSrc.value = base64String.value
    }

    async function copyCode() {
      try {
        await toClipboard(base64String.value)
        console.log('Copied to clipboard')
      } catch (e) {
        console.error(e)
      }
    }

    function downloadImage() {
      saveBase64AsFile(imageSrc.value)
    }

    return {
      copyCode,
      base64String,
      imageToBase64,
      fileSelected,
      imageSrc,
      handleBase64AreaBlur,
      downloadImage,
    }
  },
})
</script>

<template>
  <div class="max-w-3/4 mx-auto mt-8">
    <h1
      class="
        flex
        items-center
        justify-center
        mb-8
        text-center text-3xl text-gray-700
      "
    >
      BASE64 ⇄ <PhotographIcon class="h-9 w-9 ml-2 text-blue-500" />
    </h1>

    <div class="flex justify-between gap-8 <sm:(flex-col)">
      <div
        class="
          relative
          flex-1
          min-h-96
          bg-gray-100
          border border-gray-200
          rounded-md
          p-4
        "
      >
        <v-button
          class="flex align-center absolute right-6 top-4 !px-2 !py-1"
          size="sm"
          type="success"
          v-show="imageSrc !== ''"
          @click="downloadImage()"
        >
          <DownloadIcon class="h-4 w-4 text-white"></DownloadIcon>
        </v-button>
        <label
          for="upload-image"
          class="
            flex
            items-center
            justify-center
            w-full
            h-full
            bg-no-repeat bg-contain bg-center
            cursor-pointer
          "
          :style="{ backgroundImage: `url(${imageSrc})` }"
        >
          <UploadIcon
            class="h-12 w-12 ml-2 text-blue-500"
            v-show="imageSrc === ''"
          >
          </UploadIcon>
        </label>
        <input
          class="opacity-0"
          id="upload-image"
          type="file"
          @change="fileSelected($event)"
        />
      </div>
      <div class="flex-1 relative" ref="input">
        <textarea
          v-model="base64String"
          @blur="handleBase64AreaBlur"
          class="
            w-full
            block
            bg-gray-100
            text-gray-700
            p-2
            rounded-md
            border border-gray-200
            shadow-md
            whitespace-pre-wrap
            font-mono
            min-h-96
          "
        ></textarea>
        <v-button
          class="flex align-center absolute right-6 top-4 !px-2 !py-1"
          size="sm"
          type="success"
          v-show="base64String !== ''"
          @click="copyCode()"
        >
          <ClipboardCopyIcon class="h-4 w-4 text-white"></ClipboardCopyIcon>
        </v-button>
      </div>
    </div>
  </div>
</template>
