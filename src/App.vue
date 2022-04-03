<template>
  <main>
    <div class="w-full min-h-screen font-sans text-gray-900">
      <div class="px-6 mx-auto max-w-6xl">
        <div class="flex justify-between items-center py-10">
          <Logo />
          <nav>
            <a v-for="item in menu" href="#">{{ item }}</a>
            <a href="#">try now</a>
          </nav>
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
