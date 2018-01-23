<template>

  <div class="ctr">
    <div id="card-swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
      <div id="card-slide" class="swiper-slide"  @click="hello()" v-for="(ss,index) in swiperSlides" :key="index">
        <div id="swiper-img-container" :style="{'background-color':colors[index%(colors.length)].upper}">
          <img class="swiper-item card-item" :src="ss.Poster">
        </div>
        <div  id="bottomDiv" :style="{'background-color':colors[index%(colors.length)].bottom}" >
          <span class="genre" v-for="(g,i) in ss.Genre.split(',') " v-if="i<2" :key="i" >{{g}}</span>
          <div id="rate-qual">
            <i class="fa fa-star" aria-hidden="true" style="color: yellow;"><i style="border: none;color: black">{{ss.Metascore}}</i></i>
           <i>bluray</i>
          </div>
        </div>


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
    /*border: 4px solid mediumseagreen;*/
    /*padding : 10px;*/
    width:300px;
    height:340px;
  }
  #swiper-img-container {
    text-align: center;
    /*border: 4px solid red;*/
  }
  .card-item {
    /*width: inherit;*/
    /*height: inherit*/
    position: relative;
    top: 17px;
    width: 80%;
    height: 205px;
  }
  #bottomDiv {
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
</style>

<script>
  export default {
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
        gener:[
          ["درام" , "کمدی" , "جنایی" ],
          ["درام" , "کمدی" , "جنایی" ],
          ["درام" , "کمدی" , "ترسناک" ],
        ],
        swiperSlides: [
//          {titel:"",src:`https://images-na.ssl-images-amazon.com/images/M/MV5BMzVjNzI4NzYtMjE4NS00M2IzLWFkOWMtOTYwMWUzN2ZlNGVjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg`},
//          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
//          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
//          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
//          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
//          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
//          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},

        ],
        swiperOption: {
          pagination: {
//            el: '.swiper-pagination',
            clickable: true
          },
          loop:true,
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
      hello(){
        console.log("hiiiiiiiiiiiiiiiiiiiii");
      }
    }

  }
</script>

