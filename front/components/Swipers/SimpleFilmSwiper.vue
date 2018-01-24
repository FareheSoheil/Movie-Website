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
        </div>
        <div id="bests" class="col-md-3 col-sm-offset-right-5">
        <span>برترین عناوین</span>
        </div>
      </div>
    </div>
    <div id="simple-swiper" v-swiper:mySwiper="swiperOption"  >
      <div class="swiper-wrapper">
        <div id="simple-slide" class="swiper-slide"  v-for="(ss,index) in swiperSlides" :key="index">

            <div class="swiper-item simple-item">
              <img :src="srcGen(ss._id)">
              <over-lay @click="nextPage(ss._id)" :name="ss.Title" :year="ss.Year"></over-lay>
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

  .swiper-item.simple-item:hover img{
    opacity: .3;
  }
  .swiper-item.simple-item img {
    width: inherit;
    height: inherit;
  }
  .swiper-item.simple-item:hover .overlay{opacity: 5}
  .simple-ctr {
    padding-top: 30px;
    background-color: black;
    padding-bottom: 30px;
  }
  #simple-swiper-menu {
    padding-right: 15px;
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
    width: inherit;
    height: inherit;

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
  import OverLay from '~/components/Swipers/OverLay'

  export default {
    components:{
      OverLay
    },
    data() {
      return {
        search_text: "salam",
        s:{
          type:String
        },
        swiperNum: 10 ,

        swiperSlides: [
        ],
        swiperOption: {
          pagination: {
            clickable: true
          },
//          loop:true,
          slidesPerView: 6,
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
    beforeMount(){
      this.getRecent();
    },
    methods: {
      async getRecent(){
          this.swiperSlides = await  this.$axios.$get('http://localhost:8050/movies/recent/'+this.swiperNum);
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

