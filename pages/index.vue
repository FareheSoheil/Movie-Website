<template xmlns:v-dropdown="http://www.w3.org/1999/xhtml">
  <!--<div class="ctr">-->
    <!--<div v-swiper:mySwiper="swiperOption">-->
      <!--<div class="swiper-wrapper">-->
        <!--<div class="swiper-slide" v-for="(banner,index) in banners" :key="index">-->
          <!--<img :src="banner">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="swiper-pagination"></div>-->
    <!--</div>-->
  <!--</div>-->
  <div>
    <main-header></main-header>
      <main-search src="~/component/bg.jpg"></main-search>
      <vue-swiper></vue-swiper>
  </div>
    <!--<div class="con">-->
      <!--<search-title title="titelF(1356)"></search-title>-->
      <!--<search-input hint="عنوان مورد نظر را وارد کنید"></search-input>-->
      <!--<circle-button color="greean" icon="fa fa-search"></circle-button>-->
      <!--<circle-button color="violet" icon="fa fa-search-plus"></circle-button>-->
    <!--</div>-->
    <!--<search-title title="abbas alishoon"></search-title>-->
    <!--<search-input v-model="search_text"  hint="abbas"></search-input>-->
    <!--<button @click="log">click me</button>-->
    <!--<span>{{search_text}}</span>-->
    <!--&lt;!&ndash;<carousel></carousel>&ndash;&gt;-->

    <!--<div>-->
      <!--<app-logo></app-logo>-->

      <!--<h1 class="title">-->
        <!--nuxt-client For farehe-->
      <!--</h1>-->
      <!--<h2 class="subtitle">-->
        <!--Nuxt.js project-->
      <!--</h2>-->
      <!--<div class="links">-->
        <!--<a-->
          <!--href="https://nuxtjs.org/"-->
          <!--target="_blank"-->
          <!--class="button--green">Documentation</a>-->
        <!--<a-->
          <!--href="https://github.com/nuxt/nuxt.js"-->
          <!--target="_blank"-->
          <!--class="button--grey">GitHub</a>-->
      <!--</div>-->
    <!--</div>-->
  <!--</div>-->
</template>

<script>


import MainHeader from '~/components/main/MainHeader.vue'
import MainSearch from '~/components/SearchComponents/MainSearch.vue'
import VueSwiper from '~/components/VueSwiper.vue'
//import SearchTitle from  '~/components/SearchComponents/SearchTitle.vue'
//import SearchInput from  '~/components/SearchComponents/SearchInput.vue'
//import CircleButton from  '~/components/SearchComponents/CircleButton.vue'
//import MButton from  '~/components/SearchComponents/MButton.vue'

export default {

  data(){
    return {
      search_text:"salam",
      banners: [1,2,3,4,5,6,7,8,9,10].map(i => `http://lorempixel.com/200/300/cats/${i}`),
    }
  },
  components: {
    MainHeader,
    MainSearch,
    VueSwiper
//    SearchTitle,
//    SearchInput,
//    CircleButton,
//    MButton
  },

}
</script>

<style>


.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

</style>
<!--<template>-->
  <!--<div class="ctr">-->
    <!--<div v-swiper:mySwiper="swiperOption">-->
      <!--<div class="swiper-wrapper">-->

        <!--<div class="swiper-slide" v-for="(banner,index) in banners" :key="index">-->
          <!--<img :src="banner">-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="swiper-pagination"></div>-->
    <!--</div>-->
  <!--</div>-->
<!--</template>-->

<!--<style scoped>-->
  <!--.ctr {-->
    <!--background: grey;-->
    <!--max-width: 70vw;-->
    <!--margin: auto;-->
  <!--}-->
<!--</style>-->

<!--<script>-->
  <!--export default {-->
    <!--data () {-->
      <!--return {-->
        <!--banners: [1,2,3,4,5,6,7,8,9,10].map(i => `http://lorempixel.com/200/300/cats/${i}`),-->
        <!--swiperOption: {-->
          <!--pagination: {-->
            <!--el: '.swiper-pagination'-->
          <!--},-->
          <!--slidesPerView: 4,-->
          <!--spaceBetween: 0,-->
        <!--}-->
      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
