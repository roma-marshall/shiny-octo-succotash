<template>
  <main>
    <div class="w-full min-h-screen font-sans text-gray-900">
      <div class="px-6 mx-auto max-w-6xl">
        <div class="flex justify-between items-center py-10">
          <Logo/>
          <nav class="flex items-center space-x-10">
            <a v-for="item in menu" href="#" class="text-gray-700 hover:text-gray-900">
              {{ item }}
            </a>
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-800">
              try now
            </a>
          </nav>
        </div>
      </div>
      <div class="px-6 mx-auto max-w-6xl">
        <div class="flex">
          <div class="pt-24 pr-8 w-1/2">
            <h1 class="text-6xl font-bold font-display">
              Learn the best ways to secure your crypto
            </h1>
            <p class="pt-8 max-w-md text-xl leading-relaxed text-gray-500">
              The smartest way to secure, buy, exchange
              and grow your crypto assets.
            </p>
            <div class="flex items-center pt-12 space-x-6">
              <button>get tips</button>
              <button>learn more</button>
            </div>
          </div>
          <div class="w-1/2">
            <img src="./assets/img/illustration.svg" alt="illustration">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from './assets/img/logo.svg'

export default {
  name: 'App',
  components: {
    Logo
  },
  setup() {
    const menu = ['home', 'about us', 'blogs', 'contact']
    return {
      menu
    }
  }
}
</script>

<style scoped>

</style>
