<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
  <header class='bg-gray-700 px-8 text-left text-green-400 py-4'>
    <h1>Peeped</h1>
  </header>
  <div class="w-10/12 md:w-[45%] mt-10 mx-auto">
    <div class="w-full flex justify-between h-12">
      <input type="search" class="w-full rounded-l-xl bg-green-50 border-green-900 focus:ring-4 focus:ring-green-100 focus:ing-opacity-50" name="URI" id="">
      <button class="rounded-r-xl" type="submit">Generate</button>
    </div>
  </div>
  <section>
    <canvas>

    </canvas>
  </section>
</template>

<style lang="scss">
  body {
    @apply m-0 p-0 bg-gray-600;
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  button {
    @apply border-transparent h-12 bg-green-400 text-green-900 uppercase  font-semibold p-2;
  }
</style>
