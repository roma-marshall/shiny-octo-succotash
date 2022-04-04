<template>
  <main>
    <div class="w-full min-h-screen font-sans text-gray-900">
      <div class="bg-gradient-to-b from-[#fee6f7] to-white">
<!--        <img src="./assets/img/blob.svg" alt="blob" class="absolute top-0 right-0 pointer-events-none">-->
        <img src="https://raw.githubusercontent.com/roma-marshall/shiny-octo-succotash/main/src/assets/img/blob.svg" alt="blob" class="absolute top-0 right-0 pointer-events-none">
        <div class="px-6 mx-auto max-w-6xl">
          <div class="flex justify-between items-center py-10">
            <Logo/>
            <nav class="hidden md:flex md:items-center md:space-x-10">
              <a v-for="item in menu" href="#" class="text-gray-700 hover:text-gray-900">
                {{ item }}
              </a>
              <a href="#" class="font-bold text-indigo-600 hover:text-indigo-800">
                try now
              </a>
            </nav>
            <button class="p-4 md:hidden">
              <MenuIcon class="w-6 h-6 text-gray-800"/>
            </button>
          </div>
        </div>
      </div>
      <div class="px-6 mx-auto max-w-6xl">
        <div class="flex flex-col-reverse items-center md:flex-row lg:items-end">
          <div class="pt-24 pr-8 pb-24 text-center md:pb-12 md:w-1/2 md:text-left">
            <h1 class="relative z-10 text-5xl md:text-6xl font-bold font-display">
              Learn the <span
                class="relative after:content-[url(./src/assets/img/scratch.svg)] after:absolute after:-top-2 after:-right-6 after:-z-1"> best </span>
              ways to secure your <span
                class="relative after:content-[url(./src/assets/img/decoration.svg)] after:absolute after:-bottom-2 after:-right-8 after:-z-1"> crypto </span>
            </h1>
            <p class="pt-8 text-lg leading-relaxed text-gray-500 md:max-w-md md:text-xl">
              The smartest way to secure, buy, exchange
              and grow your crypto assets.
            </p>
            <div class="flex justify-center items-center pt-12 space-x-6 md:justify-start">
              <button
                  class="flex justify-center items-center py-4 px-8 font-bold tracking-wide leading-7 text-white bg-blue-600 rounded-xl hover:shadow-xl">
                get tips
              </button>
              <button class="flex items-center">
                <PlayButton class="drop-shadow-lg hover:drop-shadow-xl"/>
                <span class="pl-4 font-bold tracking-wide">learn more</span>
              </button>
            </div>
          </div>
          <div class="w-1/2 flex items-end border-b border-gray-200">
<!--            <img src="./assets/img/illustration.svg" alt="">-->
            <img src="https://raw.githubusercontent.com/roma-marshall/shiny-octo-succotash/main/src/assets/img/illustration.svg" alt="">
          </div>
        </div>
      </div>
      <div class="bg-gray-50">
        <div class="py-12 px-6 mx-auto max-w-6xl">
          <div class="flex flex-col md:flex-row">
            <div v-for="feature in features"
                 class="flex flex-col mx-2 p-8 space-y-4 bg-white rounded-lg border border-gray-200 transition-shadow duration-500 ease-out cursor-pointer hover:shadow-xl">
              <div class="flex items-center space-x-3">
                <div class="relative">
                  <span
                      :class="feature.color"
                      class="absolute top-0 left-4 w-3 h-3 rounded-full opacity-50"/>
                  <Component :is="feature.icon" class="relavite"/>
                </div>
                <div class="relative">
                  <span
                      :class="feature.color"
                      class="absolute right-0 bottom-1 w-12 h-1.5 opacity-60"
                  />
                  <h2 class="relative text-xl font-display">{{ feature.title }}</h2>
                </div>
              </div>
              <p class="text-sm leading-relaxed text-gray-500">{{ feature.description }}</p>
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
import MenuIcon from './assets/img/menu.svg'

export default {
  name: 'App',
  components: {
    Logo,
    PlayButton,
    BriefcaseIcon,
    LocationIcon,
    ProfileIcon,
    MenuIcon
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
