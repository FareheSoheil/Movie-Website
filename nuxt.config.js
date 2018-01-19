module.exports = {
  /*
  ** Headers of the page
  *
  */
  mode: "spa",
  head: {

      script: [
        // { src: 'https://code.jquery.com/jquery-3.2.1.min.js' },
        // { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js' },
        // { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js' },
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
        // font awesome
        // { rel:'stylesheet' ,href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'},
        //bootstrap
        // { rel:'stylesheet',href:'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css'},
      ],
  },
	css:[
      '@/assets/css/global.css',
      '@/assets/css/fonts.css',
      'swiper/dist/css/swiper.css',
      'font-awesome/css/font-awesome.css',
      'bootstrap/dist/css/bootstrap.css',
	],
  module: [
    ['bootstrap-vue/nuxt', { css: false }],
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
