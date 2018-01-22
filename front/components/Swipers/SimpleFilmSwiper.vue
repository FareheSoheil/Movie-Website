<template>

  <div class="simple-ctr shabnam">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-4" id="simple-swiper-menu">
          <span>همه</span>
          <span>سینمایی</span>
          <span>دوبله</span>
          <span>انیمیشن</span>
          <span>مستند</span>
          <!--<span class="col-md-offset-right-11">abbas</span>-->
        </div>
        <div id="bests" class="col-md-3 col-sm-offset-right-5">
        <span>برترین عناوین</span>
        </div>
      </div>
    </div>
    <div id="simple-swiper" v-swiper:mySwiper="swiperOption" style="border: 2px solid navy" >
      <div class="swiper-wrapper">
        <div id="simple-slide" style="border: solid 2px greenyellow" class="swiper-slide"  @click="hello()" v-for="(ss,index) in swiperSlides" :key="index">
            <img @click="nextPage(ss.title)" class="swiper-item simple-item" :src="ss.src">
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
  .simple-ctr {
    padding-top: 30px;
    background-color: black;
    padding-bottom: 30px;
    /*border: 4px solid seagreen;*/
  }
  #simple-swiper-menu {
    padding-right: 15px;
    /*background-color: fuchsia;*/
    /**/
  }
  #simple-swiper-menu span {
    font-size: small;
    border-radius: 6px;
    width:200px;padding: 10px;
    color: white;
    cursor: pointer;
  }
  #simple-swiper {
    padding:40px 15px 30px 15px;
  }
  #simple-slide {

    width:300px;
    height:400px;
  }
  .simple-item {
    border: 2px solid crimson;
    width: inherit;
    height: inherit
  }
  #simple-swiper-menu span:hover {
    background-color: darkgray;
  }
  #bests{
    color: white;text-align: left;padding-left: 4em;
  }
  @media(max-width: 400px) {
    #bests{
      margin-top: 20px;
      text-align: center;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        search_text: "salam",
        swiperSlides: [
//          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `http://lorempixel.com/200/300/cats/${i}`)
          {title:"memoirs+of+a+geisha",src:`https://images-na.ssl-images-amazon.com/images/M/MV5BMTYxMzM4NTEzOV5BMl5BanBnXkFtZTcwNDMwNjQzMw@@._V1_SX300.jpg`},
          {titel:"",src:``},
          {titel:"",src:``},
          {titel:"",src:``},
          {titel:"",src:``},

        ],
        swiperOption: {
          pagination: {
            clickable: true
          },
          loop:true,
          slidesPerView: 5,
          spaceBetween: 50,
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
    methods: {
      async nextPage(title){
//          this.$router.push('/Movie/'+title);
          this.$router.push('/Movie/'+title);
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
  //<!--//  export default {-->
  //<!--//    data() {-->
  //<!--//      return {-->
  //<!--//        swiperOption: {-->
  //<!--//          slidesPerView: 5,-->
  //<!--//          spaceBetween: 50,-->
  //<!--//          // init: false,-->
  //<!--//          pagination: {-->
  //<!--//            el: '.swiper-pagination',-->
  //<!--//            clickable: true-->
  //<!--//          },-->
  //<!--//          breakpoints: {-->
  //<!--//            1024: {-->
  //<!--//              slidesPerView: 4,-->
  //<!--//              spaceBetween: 40-->
  //<!--//            },-->
  //<!--//            768: {-->
  //<!--//              slidesPerView: 3,-->
  //<!--//              spaceBetween: 30-->
  //<!--//            },-->
  //<!--//            640: {-->
  //<!--//              slidesPerView: 2,-->
  //<!--//              spaceBetween: 20-->
  //<!--//            },-->
  //<!--//            320: {-->
  //<!--//              slidesPerView: 1,-->
  //<!--//              spaceBetween: 10-->
  //<!--//            }-->
  //<!--//          }-->
  //<!--//        }-->
  //<!--//      }-->
  //<!--//    }-->
  //<!--//  }-->
</script>
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

<!--<script>-->
<!--export default {-->


<!--</script>-->
