<script lang="ts">
import CleanCSS from 'clean-css'
import { Output } from 'clean-css'
import { defineComponent, ref } from 'vue'
import useClipboard from 'vue-clipboard3'

type LanguagesType = 'CSS' | 'JavaScript'
type ActionsType = 'compress' | 'format'

interface CSSActions {
  compress: (strings: string) => Output
  format: (strings: string) => Output
}

interface JavaScriptActions {
  compress: (strings: string) => void
  format: (strings: string) => void
}

interface ActionsMap {
  CSS: CSSActions
  JavaScript: JavaScriptActions
}

export default defineComponent({
  name: 'Formater',
  setup() {
    const { toClipboard } = useClipboard()
    const actionsMap: ActionsMap = {
      CSS: {
        compress(strings: string): Output {
          return new CleanCSS().minify(strings)
        },
        format(strings: string): Output {
          return new CleanCSS({
            format: 'beautify',
          }).minify(strings)
        },
      },
      JavaScript: {
        compress(strings: string) {
          return strings
        },
        format(strings: string) {
          return strings
        },
      },
    }
    const action = ref<ActionsType>('compress')
    const language = ref<LanguagesType>('CSS')
    const prehandleStrings = ref<string>('')
    const handledStrings = ref<string>('')

    function toggleLanguage(lang: LanguagesType): void {
      language.value = lang
    }

    function toggleAction(act: ActionsType): void {
      action.value = act
    }

    function handleStart(): void {
      const strings = prehandleStrings.value
      const languageMap = actionsMap[language.value]
      const { styles } = languageMap[action.value](strings) as Output
      handledStrings.value = styles
      // $q.notify({
      //   message: "转换成功",
      //   color: "positive",
      //   icon: "tag_faces",
      //   position: "bottom-right",
      // });
    }

    async function copyCode() {
      try {
        await toClipboard(handledStrings.value)
        console.log('Copied to clipboard')
      } catch (e) {
        console.error(e)
      }
    }

    function ClearContent() {
      prehandleStrings.value = ''
    }

    return {
      toggleAction,
      toggleLanguage,
      prehandleStrings,
      handledStrings,
      handleStart,
      copyCode,
      ClearContent,
    }
  },
})
</script>

<template>
  <div class="mt-4 w-3/4 mx-auto">
    <div class="flex flex-wrap">
      <div class="flex <sm:(w-full mb-2)">
        <v-button class="mr-2" @click="toggleLanguage('CSS')">CSS</v-button>
        <v-button
          class="mr-2 cursor-not-allowed"
          @click="toggleLanguage('JavaScript')"
          disabled
          >JavaScript</v-button
        >
      </div>

      <div class="flex mx-4 <sm:(w-full mb-2 mx-0)">
        <v-button class="mr-2" @click="toggleAction('compress')">压缩</v-button>
        <v-button class="mr-2" @click="toggleAction('format')">格式化</v-button>
      </div>

      <div class="flex <sm:(w-full mb-2)">
        <v-button class="mr-2" @click="handleStart" type="success">
          开始处理
        </v-button>
      </div>
    </div>

    <div class="flex flex-row justify-between gap-2 mt-4 <sm:(flex-col)">
      <div class="relative flex-1 min-h-96">
        <textarea
          class="
            block
            p-2
            border
            w-full
            h-full
            border-gray-400
            rounded-md
            shadow-md
          "
          v-model="prehandleStrings"
        ></textarea>
        <v-button
          v-show="prehandleStrings !== ''"
          class="absolute right-2 top-2"
          size="sm"
          type="error"
          @click="ClearContent()"
          label="x"
        />
      </div>

      <div class="flex-1 relative">
        <div
          class="
            bg-gray-100
            p-2
            rounded-md
            border border-gray-200
            shadow-md
            whitespace-pre-wrap
            font-mono
            min-h-96
          "
          v-html="handledStrings"
        ></div>
        <v-button
          v-show="handledStrings !== ''"
          class="absolute right-2 top-2"
          size="sm"
          type="warn"
          @click="copyCode()"
          label="copy"
        />
      </div>
    </div>
  </div>
</template>
