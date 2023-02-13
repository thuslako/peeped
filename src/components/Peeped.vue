<script setup  lang="ts">
import { ref, toRefs } from 'vue'

interface Tweet {
  text?: string
  user?: string
}

const props = defineProps<{
  tweet: Tweet
}>()
const { tweet } = toRefs(props)
const context = ref<HTMLElement | null>(null)
</script>
<template>
  <div class="flex justify-center">
    <div id="peeped-tweet" ref="context" class="bg-green-700 text-emerald-300">
      <span v-html="tweet.user"></span>
      <section id="tweet" class="w-full h-[80%] flex flex-col justify-center align-middle text-center text-[24pt]">
        <p v-html="tweet.text"></p>
      </section>
    </div>
  </div>
</template>
<style lang="scss">
#peeped-tweet {
  @apply w-500px h-500px px-10 py-8 font-semibold shadow-md;
}
</style>