<script  lang="ts">
  import { ref, toRefs} from 'vue'
  
  export default {
      props:{
        tweet: {
          type: Object,
          required: true
        }
      },
      setup(props) {
        const { tweet } = toRefs(props)
        const context = ref<HTMLElement | null>(null)
        return {
          context,
          tweet,
          props
        }
      },
  }
</script>
<template>
<div class="flex justify-center">
  <div  id="peeped-tweet" ref="context" class="bg-green-700 text-emerald-300">
    <span v-html="tweet.user"></span>
    <section id="tweet" class="w-full h-[80%] flex flex-col justify-center align-middle text-center text-[24pt]">
      <p  v-html="tweet.text"></p>
    </section>
  </div>
</div>
</template>
<style lang="scss">
  #peeped-tweet {
    @apply w-500px h-500px px-10 py-8 font-semibold shadow-md;
  }
</style>