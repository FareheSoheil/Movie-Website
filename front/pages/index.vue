<template>
  <div>
    <main-header></main-header>
    <main-search src="~/component/bg.jpg"></main-search>
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
        return "https://images-na.ssl-images-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg";
      },
      setExp(str){
        return str;
      },

//     go(){
       async go(){
//         let data = await this.$axios.$get('http://localhost:8050/api');
//         console.log("data is :"+data);
//         this.s = data[0].Title;
//         for (let i=0;i<data.length;i++) {
//           console.log("datas are : "+data[i].Title);
//         }
//         console.log("this is value: ");
         console.log(this.s);
//         this.$router.push('/Movie/222');

       },

//      axios.get('http://www.omdbapi.com/?t=rain+man&apikey=51425d95')
//        .then(function (response) {
//          console.log(response);
//        })
//        .catch(function (error) {
//          console.log(error);
//        });
//    }
  }
}
</script>

<style>



</style>
