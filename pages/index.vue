<!--<template class="container-fluid">-->

  <!--<div>-->
    <!--<header class="container-fluid">-->
      <!--<div class=" row header shabnam">-->
        <!--<div id="login" class="col-md-7 col-sm-6" style="border: 2px solid salmon" >-->
          <!--<login></login>-->
        <!--</div>-->
        <!--<div id="search" class="col-md-5 col-sm-6" style="border: 2px solid crimson">-->
          <!--<top-search placeholder="جستجوی فیلم . سریال ....."></top-search>-->
        <!--</div>-->
      <!--</div>-->
    <!--</header>-->

    <!--<nav-bar></nav-bar>-->
    <!--&lt;!&ndash;<carousel></carousel>&ndash;&gt;-->

    <!--&lt;!&ndash;<div>&ndash;&gt;-->
      <!--&lt;!&ndash;<app-logo></app-logo>&ndash;&gt;-->

      <!--&lt;!&ndash;<h1 class="title">&ndash;&gt;-->
        <!--&lt;!&ndash;nuxt-client For farehe&ndash;&gt;-->
      <!--&lt;!&ndash;</h1>&ndash;&gt;-->
      <!--&lt;!&ndash;<h2 class="subtitle">&ndash;&gt;-->
        <!--&lt;!&ndash;Nuxt.js project&ndash;&gt;-->
      <!--&lt;!&ndash;</h2>&ndash;&gt;-->
      <!--&lt;!&ndash;<div class="links">&ndash;&gt;-->
        <!--&lt;!&ndash;<a&ndash;&gt;-->
          <!--&lt;!&ndash;href="https://nuxtjs.org/"&ndash;&gt;-->
          <!--&lt;!&ndash;target="_blank"&ndash;&gt;-->
          <!--&lt;!&ndash;class="button&#45;&#45;green">Documentation</a>&ndash;&gt;-->
        <!--&lt;!&ndash;<a&ndash;&gt;-->
          <!--&lt;!&ndash;href="https://github.com/nuxt/nuxt.js"&ndash;&gt;-->
          <!--&lt;!&ndash;target="_blank"&ndash;&gt;-->
          <!--&lt;!&ndash;class="button&#45;&#45;grey">GitHub</a>&ndash;&gt;-->
      <!--&lt;!&ndash;</div>&ndash;&gt;-->
    <!--&lt;!&ndash;</div>&ndash;&gt;-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
<!--import AppLogo from '~/components/AppLogo.vue'-->
<!--import NavBar from '~/components/main/NavBar.vue'-->
<!--import TopSearch from '~/components/main/TopSearch.vue'-->
<!--import Login from '~/components/main/Login.vue'-->
<!--import Carousel from '~/components/Carousel.vue'-->

<!--export default {-->

  <!--components: {-->
    <!--AppLogo,-->
    <!--NavBar,-->
    <!--TopSearch,-->
    <!--Login,-->
<!--//    Carousel-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->

  <!--.header div{-->
    <!--display: inline-block;-->
  <!--}-->
  <!--#search{-->
    <!--text-align: center;-->
  <!--}-->
  <!--@media(max-width: 574px) {-->
    <!--#login {-->
      <!--text-align: center;-->
      <!--border: 2px solid navajowhite;-->
    <!--}-->
  <!--}-->


<!--.title {-->
  <!--font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */-->
  <!--display: block;-->
  <!--font-weight: 300;-->
  <!--font-size: 100px;-->
  <!--color: #35495e;-->
  <!--letter-spacing: 1px;-->
<!--}-->

<!--.subtitle {-->
  <!--font-weight: 300;-->
  <!--font-size: 42px;-->
  <!--color: #526488;-->
  <!--word-spacing: 5px;-->
  <!--padding-bottom: 15px;-->
<!--}-->

<!--.links {-->
  <!--padding-top: 15px;-->
<!--}-->
<!--</style>-->
<template>
  <div class="ctr">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">

        <div class="swiper-slide" v-for="(banner,index) in banners" :key="index">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<style scoped>
  .ctr {
    background: grey;
    max-width: 70vw;
    margin: auto;
  }
</style>

<script>
  export default {
    data () {
      return {
        banners: [1,2,3,4,5,6,7,8,9,10].map(i => `http://lorempixel.com/200/300/cats/${i}`),
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          slidesPerView: 4,
          spaceBetween: 0,
        }
      }
    }
  }
</script>
