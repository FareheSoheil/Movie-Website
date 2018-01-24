<template>

  <div class="ctr">
    <div id="card-swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div id="card-slide" class="swiper-slide" v-for="(ss,index) in swiperSlides" :key="index">
          <div class="swiper-img-container" :style="{'background-color':colors[index%(colors.length)].upper}">
            <div class="swiper-item card" >
              <img class="card-item" :src="srcGen(ss._id)">
            </div>
          </div>
          <div  class="bottomDiv" :style="{'background-color':colors[index%(colors.length)].bottom}" >
            <span class="genre" v-for="(g,i) in ss.Genre.split(',') " v-if="i<2" :key="i" >{{g}}</span>
            <div id="rate-qual">
              <i class="fa fa-star" aria-hidden="true" style="color: yellow;"><i style="border: none;color: black">{{ss.Metascore}}</i></i>
             <i>bluray</i>
            </div>
          </div>
          <over-lay @click="nextPage(ss._id)" :name="ss.Title" :year="ss.Year"></over-lay>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>



</template>
<style>
  .ctr {
    padding-top: 5px;
    background-color: white;
    padding-bottom: 5px;
  }
  #card-swiper{
    padding:20px 15px 20px 15px;
  }
  #card-slide {
    background-color: black;
    width:300px;
    height:340px;
  }
  .swiper-img-container {
    text-align: center;
  }
  .card-item {
    position: relative;
    /*border: 2px solid maroon;*/
    top: 17px;
    right: 10%;
    width: 80%;
    height: 205px;
  }
  .bottomDiv {
    width: auto;height: 124px;
    text-align: center;
    padding-top: 30px;
  }
  .genre {
    background-color: darkgray;
    border: 1px solid black;
    border-radius: 6px;
    padding: 8px;
    margin: 0px 2px 0px 2px;
    font-size: 14px;
  }
  #rate-qual {
    text-align: center;
    margin-top: 25px;
  }
  #rate-qual i {
    border-radius: 6px;
    border: 1px solid black;
    padding: 6px;
    margin: 0 2px 0 2px;
  }
  .swiper-item.card{
    text-align: center;
  }
  #card-slide:hover .swiper-img-container {
    opacity: .7;
  }
   #card-slide:hover .bottomDiv {
    opacity: .6;
  }
  #card-slide:hover .overlay{opacity: 10}
</style>

<script>
  import OverLay from '~/components/Swipers/OverLay'

  export default {
    components:{
      OverLay
    },
    props:['upperColor','bottomColor'],
    data() {
      return {
        search_text: "salam",
        colors:[
          {upper:"lightgray",bottom:"darkred"},
          {upper:"lightgray",bottom:"dodgerblue"},
          {upper:"lightgray",bottom:"goldenrod"},
          {upper:"lightgray",bottom:"mediumseagreen"},
        ],
        swiperSlides: [],
        swiperOption: {
          pagination: {
            clickable: true
          },
          slidesPerView: 6,
          spaceBetween: 30,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 120
            },
            800: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 30
            }
          }
        }
      }
    },
    mounted(){
        this.allMovies();
    },
    methods: {
      async allMovies() {
          console.log("this is from film card");
          try {
            let data = await this.$axios.$get('http://localhost:8050/movies/all');
            console.log(data);
            this.swiperSlides = data;
              let id = data[0]._id;
          }catch (e) {
          }

      },
      async nextPage(id){
        this.$router.push('/Movie/'+id);
      },
      appendSlide() {
        this.swiperSlides.push(this.swiperSlides.length + 1)
      },
      prependSlide() {
        this.swiperSlides.unshift(this.swiperSlides[0] - 1)
      },
      popSlide() {
        this.swiperSlides.pop()
      },
      shiftSlide() {
        this.swiperSlides.shift()
      },
      srcGen(txt){
        return '/'+txt+'.jpg';
      }
    }

  }
</script>

