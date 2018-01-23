<template>
  <div class="shabnam">
    <main-header></main-header>
    <div class="container-fluid" id="ajaxContainer">
      <div class="row" id="top-bar">
        <span>دانلود فیلم
          {{Year}}
          {{Title}}
        </span>
      </div>
      <div class="row" id="genre-bar">
        <span v-for="(g,i) in Genre.split(',')" :key="i">{{g}}</span>
      </div>
      <div class="row" style="padding: 6px" >
        <div class="col-md-4  col-lg-3" id="imgContainer">
          <img :src="Poster"/>
        </div>
        <div class="col-md-5  col-lg-5" >
          <!--<div class="container-fluid">-->
            <div class="row" id="firstRow" >
                        <span id="voteStat" ><i class="fa fa-star" aria-hidden="true" style="color: yellow;"></i>&nbsp;
                            <i>    {{Ratings[0].Value.split('/')[0]}}  از 10 </i>
                            <i >با {{imdbVotes}} </i>
                            <i>رای</i>
                        </span>
                <span id="subscence">Subscence</span>
                <span id="imdb">IMDB</span>
                <!--</div>-->
              </div>
            <div class="row" id="secRow"  >
              <div class="col-12">
                <!--<span> {{Year}}</span>-->
                <span>  {{Runtime.split(' ')[0]}} <i>دقیقه</i>
                </span>
                <span><i>زبان‌ :‌</i>{{Language}}</span>
                <span><i>محصول کشور :‌</i>{{Country}}</span>
              </div>
            </div>
            <div class="row" id="thirdRow"  >
              <div class="col-12">
                <div id="plot">{{Plot}}</div>
              </div>
            </div>
            <div class="row" id="movieContainer"  >
              <div class="col-10" id="detailContainer">
                <div class="row"><i>کارگردان : </i>{{Director}}</div>
                <div class="row"><i>نویسندگان :‌ </i>{{Writer}}</div>
                <div class="row"><i>بازیگران : </i>{{Actors}}</div>
              </div>
            </div>
          <!--</div>-->
        </div>
        <div class="col-md-3 col-lg-4"  id="wallpaper" >
          <img :src="Poster">
        </div>
      </div>
    </div>
    <under-lined-menu></under-lined-menu>
    <vue-slider></vue-slider>
    <main-footer></main-footer>
    <button>hhhhhhhhhh</button>
    {{Title}}
  </div>
</template>
<style>
  #ajaxContainer {
    padding-bottom: 20px;
    background: linear-gradient(to bottom right,navy,black ) ;
  }
  #detailContainer {
    color: white;
  }
  #top-bar{
    background-color: darkorange;
    padding:20px 4em 8px 10px;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
  #genre-bar {
    background-color: darkorange;
    padding: 5px 4em 20px;
  }
  #genre-bar span {
    border: 1px solid black;
    background-color: lightgray;
    padding: 5px;
    font-size: 12px;
    border-radius: 6px;
    margin:3px;
  }
  #firstRow , #secRow {
    padding: 5px 0 5px 0;
    margin:6px 0 6px 0;
  }
  #firstRow span {
    margin-top: 5px;
  }
  #secRow span {
    font-size: 14px;
    margin: 5px 2px 5px 2px;
  }
  #wallpaper{
    text-align: left;
    /*border: 2px solid palegoldenrod;*/

  }
  #wallpaper img{
    position: relative;
    height: 400px;
    width: 75%;
    top: -6px;
  }
  #expContainer{
    font-size: 14px;
    background-color: darkorange;
    padding-right: 70px;
    padding-bottom: 15px;
    padding-top: 10px;
  }
  #nameTitle{
    padding-bottom: 10px;
  }
  #nameTitle , #genre div {
    display: inline-block;
    /*font-size: 12px;*/
    color: white;
  }

  #detailContainer .row{
    margin-bottom: 12px;
  }
  #secRow span {
    margin-right: 10px;
    /*font-size: 12px;*/
    color: white;
  }

  #movieContainer div {
    z-index: 10;
  }
  #imgContainer{
    text-align: center;
  }
  #imgContainer img {
    position: relative;
    border-radius: 2px;
    height: 270px;
    width: 250px;
    top: -20px;
    border: 6px solid darkorange;
    margin-bottom: 20px;
    /*margin-right: 2em;*/

  }
  #voteStat {
    border: 2px solid white;
    background-color: black;
    color: white;
    border-radius: 8px;
    font-size: 13px;
    padding: 6px;
  }
  #detailContainer {
    padding-top: 15px;
    padding-right: 30px;
    font-size: 14px;
  }

  #imdb {
    border-radius: 6px;
    color: black;
    background-color: orange;
    height: 33px;
    padding : 6px;
    font-size: 13px;
    text-align: center;
    margin-right: 5px;
  }
  #subscence {
    border-radius: 6px;
    height: 33px;
    background-color: #0c5460;
    color: white;
    font-size: 13px;
    padding: 6px;
    margin-right: 5px;
  }
  #thirdRow {
    border-top: 2px solid white;
    border-bottom: 2px solid white;
    /*width: 60%;*/
    direction: ltr;
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
  }

  .fa-caret-down {
    float: left;
    margin-top: 5px;
    /*margin-right: 40%;*/
    /*bottom: -15px;*/
  }
  .allLangBtn {
    border: 1px solid black;
    background-color: white;
    width: 85px;
    text-align: center;
    /*height: inherit;*/
    padding: 5px;
    color: black;
    font-size: 13px;
    border-radius: 6px;
  }
  .catText {
    font-size: 12px;
    color: lightslategray;
  }
  #categoryContainer{
    margin-bottom: 110px;
  }
  #categoryContainer div {
    display: inline-block;


  }
  .category {
    width: 16%;
    height: 40px;
    border: 1px solid lightgray;border-radius: 4px;
    padding: 5px;
    padding-right: 8px;
  }
  .calendar {
    width: 23%;
    text-align: center;
    float: left;
  }
  .allBtn {
    border: 1px solid blue;
    background-color: blue;
    width: 55px;
    text-align: center;
    /*height: inherit;*/
    padding: 5px;
    color: white;
    font-size: 13px;
    border-radius: 6px;
  }
  #middleDiv{
    color: dodgerblue;
    /*width: 25%;*/
  }
  #rateContainer {
    text-align: center;
    color: darkgray;
  }
  #rateContainer button {
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid blue;
    color: white;
    background-color: blue;
  }
  .progress {
    height: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: slategray;
  }
  #progressContainer{
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .bg-success{
    background-color: mediumspringgreen !important;
  }


  .calendar .fa {
    color: gray;
  }
  .calendar .row {
    margin-bottom: 40px;
  }
  #radio1 {
    margin-left: 20px;
  }
  #hr1 {
    margin-top: 40px;margin-bottom: 50px;
  }
  #hr2,#hr3{
    /*margin-top: 20px;*/
    border-bottom: 2px solid blue;
    margin-bottom: 20px;
  }
  .bluerayBar{
    margin-bottom: 10px;
  }
  .bluerayBar div {
    display: inline-block;
  }

  .volumn {
    background-color: black;
    color: white;
    text-align: center;
    padding: 8px;
    width: 12%;
    border-radius: 0px 6px 6px 0px;
  }
  .letter {
    background-color: #1b1e21;
    color: white;
    padding: 6px;
    text-align: center;
    width: 5%;
  }
  .basket {
    background-color: #2e3133;
    color: white;
    padding: 6px;
    width: 4%;
    text-align: center;
  }
  .middleBar {
    border: 2px solid;
    padding-top:7px;
    padding-left: 5px;
    width: 60%;
  }
  .middleBar div {
    margin-right: 20px;
    padding-left: 10px;
  }
  .yellowBorder {
    border-color: yellow;
  }
  .greenBorder {
    border-color: mediumspringgreen;
  }
  .yellowForground {
    color: yellow;
  }
  .greenForground {
    color:mediumspringgreen
  }
  .yellowBackground {
    background-color: yellow;
  }
  .greenBackground {
    background-color:mediumspringgreen
  }
  .fa-flag-o{
    margin-right: 5px;
  }
  .tailBtn {
    border-radius: 6px 0px 0px 6px;
    color: white;
    text-align: center;
    width: 13%;
    padding-top: 8px;
    padding-right: 10px;
  }
  #blueRayContainer {
    margin-bottom: 60px;
  }
  .blueBorder {
    border-color: deepskyblue;
  }
  .blueForground{
    color: deepskyblue;
  }
  .blueBackground {
    background-color: deepskyblue;
  }
  #soundTrackContainer {
    margin-bottom: 50px;
  }
  @media (max-width: 600px) {
    #wallpaper {
      text-align: center;
    }
  }
  @media screen and (max-width: 992px) {
    #resolution {
      width: 20%;
    }
  }

</style>
<script>
  import MainHeader from '~/components/main/MainHeader.vue'
  import MainSearch from '~/components/SearchComponents/MainSearch.vue'
  import MainFooter from '~/components/FooterComponents/MainFooter.vue'
  import UnderLinedMenu from '~/components/MoviePage/UnderLinedMenu.vue'
  import VueSlider from '~/components/MoviePage/VueSlider.vue'
  import axios from 'axios'

  export default {
    components: {
      MainHeader,
      MainFooter,
      UnderLinedMenu,
      VueSlider
    },
    data(){
      return {
        movie:{
          type:{}
        }
      }
    },
    mounted() {
      this.movieInfo();
    },

    async asyncData({ params, error }) {
      try {
        let id = params.movieInf;
        console.log("still waiting .....");
        let data = await axios.get('http://localhost:8050/movies/'+id+'/details');
        console.log("received");
        console.log(data.data);
//        this.movie = data.data;
        console.log("this is recieved fields : "+data.data[0].Title);
        return data.data[0];
      }catch (e) {
        error({ message: 'Movie not found', statusCode: 404 })
      }
    },
    methods:{
      movieInfo(){
        let url = window.location.toString();
        console.log("this is from me : " + url+" movie : "+this.movie);
      }
    }

  }

</script>
