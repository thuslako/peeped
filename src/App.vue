<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Peeped from './components/Peeped.vue'

export default {
  components: {Peeped},
  setup(){
    return Peeped
  },
  data(){
    return {
      query: "",
      payload: {text:"",user:""}
    }
  },
  methods:{
    async fetchTweet(){
      if(this.query !== "" ){
        const { data } = await fetch(`/.netlify/functions/twitter/?id=${this.getTweetId(this.query)}`)
        if(data.text) this.payload.text = data.text
        else {
          this.payload = {
            text:"Paste Tweet URL,then generating image",
            user: "@thuslako"
          } 
        }
      }
    }
  },
  computed:{
    getTweetId(){
        if(this.query) this.query.match('/([^?s=\d]([^\/][\d]+))/g').split('/')[0]
      
    }
  },
  watch:{
    query: 'fetchTweet'
  }
}
</script>

<template>
  <header class='bg-gray-700 px-8 text-left text-green-400 py-4 shadow-md'>
    <h1>Peeped</h1>
  </header>
  <div class="w-10/12 md:w-[45%] mt-10 mx-auto">
    <div class="w-full flex justify-between h-12">
      <input type="search" class="w-full rounded-l-xl bg-green-50 border-2 border-green-400  px-4 text-xl text-green-800 focus:ring-4 focus:ring-green-100 focus:ing-opacity-50" name="URI" id="">
      <button class="rounded-r-xl border-2 bg-green-400 text-green-900" type="submit">Generate</button>
    </div>
  </div>
  <section class="py-4">
    <Peeped :tweet="{text:'Paste Tweet URL,then generating image',user:'@thuslako'}"/>
  </section>
</template>

<style lang="scss">
  body {
    @apply m-0 p-0 bg-gray-600 subpixel-antialiased;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  button {
    @apply border-transparent h-12 uppercase  font-semibold p-2;
  }
</style>
