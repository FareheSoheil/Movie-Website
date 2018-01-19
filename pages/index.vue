<template class="container-fluid" xmlns:v-dropdown="http://www.w3.org/1999/xhtml">

  <div>
    <b-navbar type="dark" variant="primary" toggleable>
      <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_dropdown_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Home</b-nav-item>
          <b-nav-item href="#">Link</b-nav-item>
          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown text="User" right>
            <b-dropdown-item href="#">Account</b-dropdown-item>
            <b-dropdown-item href="#">Settings</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <header class="container-fluid">
      <div class=" row header shabnam">
        <div id="login" class="col-md-7 col-sm-6" style="border: 2px solid salmon" >
          <login></login>
        </div>
        <div id="search" class="col-md-5 col-sm-6" style="border: 2px solid crimson">
          <top-search placeholder="جستجوی فیلم . سریال ....."></top-search>
        </div>
      </div>
    </header>
    <button v-dropdown:foo>Toggle dropdown</button>

    <dropdown name="foo">
      Hello 🎉
    </dropdown>
    <nav-bar></nav-bar>
    <!--<carousel></carousel>-->

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
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import NavBar from '~/components/main/NavBar.vue'
import TopSearch from '~/components/main/TopSearch.vue'
import Login from '~/components/main/Login.vue'
//import Carousel from '~/components/Carousel.vue'

export default {

  components: {
    AppLogo,
    NavBar,
    TopSearch,
    Login
//    Carousel
  }
}
</script>

<style>

  .header div{
    display: inline-block;
  }
  #search{
    text-align: center;
  }
  @media(max-width: 574px) {
    #login {
      text-align: center;
      border: 2px solid navajowhite;
    }
  }


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
