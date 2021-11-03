import i18n from './config/i18n'
export default {
  // ssr: true,
  target: 'static',
  router: {
    base: '/wolfwarr1or.github.io/'
  },
  // server: {
  //   port: 8800,
  //   host: '192.168.88.12',
  // },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WolFWarrioR',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'WolFWarrioR' },
      { property: 'og:site_name', content: "WolFWarrioR's Website" },
      { property: 'og:description', content: 'In progress' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image', content: 'https://webstatic-sea.mihoyo.com/upload/static-resource/2021/06/01/8743eaf08e0095844515d53bcab9f651_8689028404366268787.jpg' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:title', content: 'WolFWarrioR' },
      { property: 'twitter:description', content: 'In progress' },
      { property: 'twitter:image', content: 'https://webstatic-sea.mihoyo.com/upload/static-resource/2021/06/01/8743eaf08e0095844515d53bcab9f651_8689028404366268787.jpg' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'icon', type: 'image/gif', href: '/favicon.gif' }
    ],
    // script: [
    //   { src: '/snow.js' }
    // ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/app.css',
    '@assets/css/vendor.css',
    '@assets/css/blizzard-nav.css',
    '@assets/css/home.css',
    '@assets/css/main.css',
    '@assets/css/media.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/script.js', ssr: false, mode: 'client' },
    { src: '~/plugins/fa.js', ssr: false, mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    [
      'nuxt-i18n',
      {
        lazy: true,
        langDir: 'locales/',
        vueI18nLoader: true,
        // defaultLocale: 'en-gb',
        locales: [
          {
            code: 'en-gb',
            name: 'English',
            file: 'en-gb.js',
          },
          {
            code: 'ru-ru',
            name: 'Русский',
            file: 'ru-ru.js',
          },
          {
            code: 'ua-ua',
            name: 'Украї́нська',
            file: 'ua-ua.js',
          },
          {
            code: 'uz-uz',
            name: 'Oʻzbekcha',
            file: 'uz-uz.js',
          },
          {
            code: 'uz-cyr',
            name: 'Ўзбекча',
            file: 'uz-cyr.js',
          },
        ],
        vueI18n: i18n
      }
    ],
    // [
    //   '~modules/chars',
    //   {}
    // ],
    '@nuxtjs/pwa',
  ],
  pwa:{
    icon:false,
    manifest:{
      name: "WolFWarrioR",
      useWebmanifestExtension: false,
      description: '',
      short_name: '',
      display: 'standalone',
    },
    workbox:{
      dev:true,
      offline:true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxt/content',
  ],
  content:{},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
