<template>
  <!-- component -->
  <!-- This is an example component -->
  <div class="relative flex flex-col mx-auto max-w-7xl">

    <nav class="max-w-7xl px-5 md:fixed top-0 z-[98] w-screen backdrop-blur-md bg-[#121212] bg-opacity-80">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <button @click="redirectToHome" class="flex">
          <span class="self-center text-lg text-[#ffdb70] font-semibold whitespace-nowrap fadein-bot hover:text-amber-100">Alham Manazil</span>
        </button>
        <div class="flex md:order-2 fadein-bot">
          <a href="https://github.com/Alhammanazil"><img class="rounded-full w-9" src="https://img.icons8.com/glyph-neue/512/FFFFFF/github.png" alt="github"></a>
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-3">
          <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <router-link to="/"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 fadein-bot hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0"
                aria-current="page">Home</router-link>
            </li>
            <li>
              <router-link to="/about"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 fadein-bot fadein-1 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0">About</router-link>
            </li>
            <li>
              <router-link to="/portfolio"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 fadein-bot fadein-2 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0">Portfolio</router-link>
            </li>
            <li>
              <router-link to="/contact"
                class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 fadein-bot fadein-3 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-500 md:p-0 blog">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="md:mt-[100px]">
      <router-view />
    </div>
  </div>
  <footer class="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
  <nav class="flex justify-around py-4 text-xs">
    <router-link to="/" class="text-gray-300 hover:text-white">Home</router-link>
    <router-link to="/about" class="text-gray-300 hover:text-white">About</router-link>
    <router-link to="/portfolio" class="text-gray-300 hover:text-white">Portfolio</router-link>
    <router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link>
  </nav>
</footer>
</template>

<script>
export default {
  methods: {
    redirectToHome() {
      this.$router.push('/')
    }
  },
}
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

::-webkit-scrollbar {
  width: 5px; /* for vertical scrollbar */
  height: 5px; /* for horizontal scrollbar */
}

::-webkit-scrollbar-track {
  background: hsl(240, 1%, 17%);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #ffdb70;
  border-radius: 5px;
}

::-webkit-scrollbar-button { width: 20px; }

body {
  font-family: 'Poppins', sans-serif;
  background: hsl(0, 0%, 7%);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a.router-link-exact-active {
  display: inline-flex;
  flex-direction: column;
  color: white;
  transition: color 0.3s;
}

nav a.router-link-exact-active::after {
  display: inline-block;
  content: "";
  margin-top: 0.08em;
  width: 100%;
  height: 4px;
  border-radius: 2px;
  background-color: #ffdb70;
}

nav a.router-link-exact-active:hover {
  color: white;
}


@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

</style>
