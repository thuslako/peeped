<script  lang="ts">
  import { ref, toRefs, computed, watch, onMounted } from 'vue'
  
  export default {
      props:{
        tweet: {
          type: Object,
          default: ()=>({text:"Dude!",color:"tomato"})
        }
      },
      setup(props) {
        const { tweet } = toRefs(props)
        const context = ref<HTMLElement | null>(null)

        const generateText  = computed(()=>{
          const area =  context.value.getContext('2d')
          area.font = "30px Arial"
          area.fillStyle = tweet.color
          area.fillText(tweet.text,175, 175)
        })

        watch(props.tweet, ()=>{
          console.log(tweet)
        })

        onMounted(()=>{
          const area =  context.value.getContext('2d')
          area.beginPath();
          area.arc(150, 150, 40, 0, 2 * Math.PI);
          area.stroke();
        })

        return {
          context,
          props
        }
      }
  }
</script>
<template>
  <canvas  id="peeped-canvas" ref="context" width="350" height="350">
    <h1>Hello world</h1>
  </canvas>
</template>
<style lang="scss">
  #peeped-canvas {
    @apply bg-gray-300;
  }
</style>