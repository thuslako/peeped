<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import {defineComponent} from 'vue'
import Peeped from './components/Peeped.vue'

export default defineComponent({
  components:{
    Peeped
  },
  setup(){
    return Peeped
  },
  data(){
    return {
      query: "",
      payload: {text:"Paste Tweet URL,then generating image!",user:"@thuslako"}
    }
  },
  methods:{
     async fetchTweet(){
      const result = await fetch(`/.netlify/functions/twitter/?id=${this.getTweetID(this.query)}`)
      const {data,message} = await result.json()
      if(data)this.payload = await {text: data.text, user: `@${this.getTweetUser(this.query)}`}
      else this.payload = {text:message, user:"@error"}
    }, 
    getTweetUser(query:string){
      const user = query.match(/([^/])\w+/g)
      if(user) return user[3]
    },   
    getTweetID(query:string){
     const id = query.match(/([^?s=\d]([^\/][\d]+))/g)
     if(id)return id?.toString()?.split('/')[1]
    }
  },
  watch:{
    query: 'fetchTweet'
  }
})
</script>

<template>
  <header class='bg-gray-700 px-8 text-left text-green-400 py-4 shadow-md'>
    <h1>Peeped</h1>
  </header>
  <div class="w-10/12 md:w-[45%] mt-10 mx-auto">
    <div class="w-full flex justify-between h-12">
      <input type="search" v-model="query" class="w-full rounded-l-xl bg-green-50 border-2 border-green-400  px-4 text-xl text-green-800 focus:ring-4 focus:ring-green-100 focus:ing-opacity-50" name="URI" id="">
      <button  class="rounded-r-xl border-2 bg-green-400 text-green-900" @click="fetchTweet" type="submit">Generate</button>
    </div>
  </div>
  <section class="py-4">
    <Peeped :tweet="payload"/>
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
