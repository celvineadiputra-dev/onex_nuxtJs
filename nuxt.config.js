export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'onex',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/css/all.css' },
    ],
    script: [
      { src: '/js/bootstrap.min.js' },
      { src: 'https://scripts.sirv.com/sirv.js' },
    ],
  },
  env:{
    baseUrl : (process.env.NODE_ENV === 'production' ? 'https://onexfood.vercel.app' : 'http://localhost:3000')
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/style.css'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{
    src: '~/plugins/aos', mode: 'client'
  }],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/pwa'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},

  pwa: {
    manifest: {
      name: 'onexFoods',
      lang: 'en',
      useWebmanifestExtension: false,
    },
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://scripts.sirv.com/sirv.js',
      },
      {
        urlPattern: 'https://ouscerea.sirv.com/onexFoods/.*',
      },
    ],
  },
}
