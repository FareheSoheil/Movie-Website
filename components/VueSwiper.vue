<template>

  <div class="ctr">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
      <div class="swiper-slide" @click="hello()" v-for="(ss,index) in swiperSlides" :key="index">
      <img class="swiper-item" :src="ss.src">
    </div>
    </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>

  <!--<div v-swiper:mySwiper="swiperOption">-->
  <!--<div class="swiper-wrapper">-->
  <!--<div class="swiper-slide" v-for="(banner,index) in banners" :key="index">-->
  <!--<img :src="banner">-->
  <!--</div>-->
  <!--</div>-->
  <!--<div class="swiper-pagination"></div>-->
  <!--</div>-->


  <!--<div class="ctr">-->
      <!--&lt;!&ndash; swiper &ndash;&gt;-->
      <!--<swiper v-swiper:mySwiper="swiperOption">-->
        <!--<div class="swiper-wrapper">-->
          <!--<swiper-slide>Slide 1</swiper-slide>-->
          <!--<swiper-slide>Slide 2</swiper-slide>-->
          <!--<swiper-slide>Slide 3</swiper-slide>-->
          <!--<swiper-slide>Slide 4</swiper-slide>-->
          <!--<swiper-slide>Slide 5</swiper-slide>-->
          <!--<swiper-slide>Slide 6</swiper-slide>-->
          <!--<swiper-slide>Slide 7</swiper-slide>-->
          <!--<swiper-slide>Slide 8</swiper-slide>-->
          <!--<swiper-slide>Slide 9</swiper-slide>-->
          <!--<swiper-slide>Slide 10</swiper-slide>-->
          <!--<div class="swiper-pagination" slot="pagination"></div>-->
          <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
          <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <!--</div>-->
      <!--</swiper>-->
  <!--</div>-->


</template>
<style>
  .ctr {
    padding-top: 40px;
    background-color: black;
    padding-bottom: 40px;
  }
  .swiper-slide {
    border: 4px solid seagreen;
    padding: 0px;
    width:300px;
    height:300px;
  }
  .swiper-item {
    width: inherit;
    height: inherit
  }
</style>

<script>
  export default {
    data() {
      return {
        search_text: "salam",
        swiperSlides: [
//          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `http://lorempixel.com/200/300/cats/${i}`)
          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},
          {titel:"",src:`http://lorempixel.com/200/300/cats/5`},

        ],
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          loop:true,
          slidesPerView: 5,
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
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 0
            }
          }
        }
      }
    },
    methods: {
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
