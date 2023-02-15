<script setup  lang="ts">
import { ref, toRefs } from 'vue'

interface Tweet {
  text?: string
  media?: [{
    "width"?: number,
    "height"?: number,
    "media_key"?: string,
    "type"?: string,
    "url"?: string,
    "preview_image_url"?: string
  }],
  users?: [{
    "id": string,
    "name": string,
    "username": string
  }]
}

const props = defineProps<{
  tweet: Tweet
}>()
const { tweet } = toRefs(props)
const context = ref<HTMLElement | null>(null)
</script>
<template>
  <div class="flex justify-center content-center">
    <div id="peeped-tweet" ref="context" class="relative bg-white text-emerald-300 z-100">
      <span v-if="tweet?.users?.length">@{{ tweet.users[0].username }} </span>
      <span v-else>@peeped</span>
      <section id="tweet"
        class="relative w-full h-[80%] mt-1 bg-opacity-40 bg-black flex flex-col justify-center align-middle text-center text-[18pt] overflow-hidden">
        <img v-if="tweet?.media?.length && tweet?.media[0].type === 'photo'" :src="tweet?.media[0].url"
          class="block relative -z-1 w-[100%] h-auto object-cover" />
        <img v-if="tweet?.media?.length && tweet?.media[0].type === 'video'" :src="tweet?.media[0].preview_image_url"
          class="block relative -z-1 w-[100%] h-auto object-cover" />
        <div class="absolute inset-auto z-50">
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

span {
  @apply text-black;
}
</style>