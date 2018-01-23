<template>
  <div>
    <main-header></main-header>
    <main-search></main-search>
    <simple-film-swiper></simple-film-swiper>
    <static-banner
      color="red" :src="setBg()"
      :explanation1="setExp('اسطوره ی کنگفو و رویای صعود به قله !')"
      :explanation2="setExp('از بهترین نبردهای بروسلی!')"
      :bTitle="setExp('طرفدارایه بروسلی دانلود کنن')"
    ></static-banner>

    <film-card-swiper></film-card-swiper>
    <main-footer></main-footer>
    <button @click="go()">ajax for god's sake</button>
    {{s}}
  </div>
</template>

<script>
import MainHeader from '~/components/main/MainHeader.vue'
import MainSearch from '~/components/SearchComponents/MainSearch.vue'
import FilmCardSwiper from '~/components/Swipers/FilmCardSwiper.vue'
import SimpleFilmSwiper from '~/components/Swipers/SimpleFilmSwiper.vue'
import StaticBanner from '~/components/StaticBanner.vue'
import MainFooter from '~/components/FooterComponents/MainFooter.vue'
import VueSlider from '~/components/MoviePage/VueSlider.vue'

export default {
  components: {
    MainHeader,
    MainSearch,
    FilmCardSwiper,
    SimpleFilmSwiper,
    StaticBanner,
    MainFooter

  },
  data(){
    return{
      s : {
        type:String
      },

    }
  },
  methods:{
      setBg(){
        return "/bruce.jpg"
      },
      setExp(str){
        return str;
      },
  }
}
</script>

<style>



</style>
