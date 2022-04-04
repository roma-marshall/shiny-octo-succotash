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
              <button class="flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 text-white bg-blue-600 rounded-xl hover:shadow-xl">get tips</button>
              <button class="flex items-center">
                <PlayButton class="drop-shadow-lg hover:drop-shadow-xl" />
                <span class="pl-4 font-bold tracking-wide">learn more</span>
              </button>
            </div>
          </div>
          <div class="w-1/2">
            <img src="./assets/img/illustration.svg" alt="illustration">
          </div>
        </div>
      </div>
      <div class="bg-gray-50">
        <div class="py-12 px-6 mx-auto max-w-6xl">
          <div class="flex">
            <div v-for="feature in features">
              <div>
                <Component :is="feature.icon" />
                <h2>{{ feature.title }}</h2>
              </div>
              <p>{{ feature.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Logo from './assets/img/logo.svg'
import PlayButton from './assets/img/play-button.svg'
import BriefcaseIcon from './assets/img/briefcase.svg'
import LocationIcon from './assets/img/location.svg'
import ProfileIcon from './assets/img/profile.svg'

export default {
  name: 'App',
  components: {
    Logo,
    PlayButton,
    BriefcaseIcon,
    LocationIcon,
    ProfileIcon
  },
  setup() {
    const menu = ['home', 'about us', 'blogs', 'contact']
    const features = [
      {
        icon: BriefcaseIcon,
        title: "BUY AND SELL CRYPTO",
        description:
            "You can buy Bitcoin, Ethereum, Bitcoin Cash, Dash, USDT and Stellar directly from your crypto wallet. It also allows you to sell Bitcoin for fiat currencies when you need it.",
        color: "bg-orange",
      },
      {
        icon: ProfileIcon,
        title: "GROW YOUR ASSETS",
        description:
            "Grow your assets the easy way by securely staking crypto like Algorand, Cosmos, Tezos, Tron or Polkadot and more. You can also lend digital assets to generate interest.",
        color: "bg-blue",
      },
      {
        icon: LocationIcon,
        title: "STAY IN CONTROL",
        description:
            "With a simple, clear interface, crypto wallet lets you check your current balance and manage all your transactions. So you’re in total control at all times.",
        color: "bg-pink",
      },
    ]
    return {
      menu,
      features
    }
  }
}
</script>

<style scoped>

</style>
