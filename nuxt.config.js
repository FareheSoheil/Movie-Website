module.exports = {
  /*
  ** Headers of the page
  *
  */
  mode: "spa",
  head: {

      script: [
        { src: '/changePageContent.js' },
      ],
      title: 'nuxt-client',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'CEIT Database' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'text', type: 'stylesheet', href: '/favicon.ico' },
      ],
  },
	css:[
      '@/assets/css/fonts.css',
      'swiper/dist/css/swiper.css',
      'font-awesome/css/font-awesome.css',
      'bootstrap/dist/css/bootstrap.css',
      '@/assets/css/global.css',
      '@/assets/css/offsetRTL.css',
      // '@/assets/css/bootstrap-vuxe.css',
	],
  modules: [
    ['bootstrap-vue/nuxt', { css: false }],
    ['@nuxtjs/axios']

  ],
  plugins: [
    { src: '~/plugins/swiper.js', ssr: false },
    { src: '~/plugins/dropDown.js', ssr: false },
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
};
