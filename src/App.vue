<template>
  <main>
    <div class="w-full min-h-screen font-sans text-gray-900">
      <div>
        <Logo />
        <nav>
          <a v-for="item in menu" href="#">{{ item }}</a>
          <a href="#">try now</a>
        </nav>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from './components/Logo.vue';

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
