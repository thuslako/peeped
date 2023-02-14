<script setup  lang="ts">
import { ref, toRefs } from 'vue'

interface Tweet {
  text?: string
  user?: string,
  includes?: {
    media: [{
      "width": number,
      "height": number,
      "media_key": string,
      "type": string,
      "url": string
    }],
    users: [object]
  }
}

const props = defineProps<{
  tweet: Tweet
}>()
const { tweet } = toRefs(props)
const context = ref<HTMLElement | null>(null)
</script>
<template>
  <div class="flex justify-center content-center">
    <div id="peeped-tweet" ref="context" class="relative bg-green-700 text-emerald-300 z-100 left">
      <span v-html="tweet.user"></span>
      <section id="tweet"
        class="w-full h-[80%] bg-opacity-50 bg-black flex flex-col justify-center align-middle text-center text-[24pt] overflow-hidden">
        <img :src="tweet.includes?.media[0].url" class="block relative -z-1 w-[100%] h-auto object-cover" />
        <div class="absolute inset-0 z-50">
          <p v-html="tweet.text"></p>
        </div>
      </section>
    </div>
  </div>
</template>
<style lang="scss">
#peeped-tweet {
  @apply w-500px h-500px px-10 py-8 font-semibold shadow-md;
}
</style>