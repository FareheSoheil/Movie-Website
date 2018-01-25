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
                            <i v-if="empty(Ratings)">{{Ratings[0].Value.split('/')[0]}}  از 10 </i>
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
                <div class="row"><i>نویسندگان :‌ </i>{{Writer[0]}}</div>
                <div class="row"><i>بازیگران : </i>{{Actors[0]}}</div>
              </div>
            </div>
          <!--</div>-->
        </div>
        <div class="col-md-3 col-lg-4"  id="wallpaper" >
          <img :src="Poster" >
        </div>
      </div>

    </div>
    <!--<under-lined-menu></under-lined-menu>-->

    <div class="container" id="sliderContainer">
      <div class="row" id="slider">
        <!--active: isActive, 'text-danger': hasError-->
        <div class="col-md-1"><div @click="clicked(0)" :class="{ active:isActive[0]}" ><a> دانلود</a></div></div>
        <div class="col-md-2"><div @click="clicked(1)" :class="{ active:isActive[1]}"><a>زیرنویس</a> </div></div>
        <div class="col-md-2"><div @click="clicked(2)" :class="{active:isActive[2]}"><a>نظر کاربران</a> </div></div>
        <div class="col-md-2"><div @click="clicked(3)" :class="{active:isActive[3]}"><a>نقد و بررسی</a></div></div>
        <div class="col-md-2"><div @click="clicked(4)" :class="{active:isActive[4]}"><a>عوامل فیلم</a></div></div>
        <div class="col-md-1"><div @click="clicked(5)" :class="{active:isActive[5]}"><a>جوایز</a></div></div>
        <div class="col-md-1"><div @click="clicked(6)" :class="{active:isActive[6]}"><a>گالری</a></div></div>
      </div>
    </div>
    <!--<div class="container">-->
     <!--<div class="row">-->
       <!--<div class="col-md-12">-->
         <!--<b-tabs>-->
           <!--<b-tab title="دانلود" active>-->
             <!--<br>I'm the first fading tab-->
           <!--</b-tab>-->
           <!--<b-tab title="زیر نویس" >-->
             <!--<br>I'm the second tab content-->
           <!--</b-tab>-->
           <!--<b-tab title="نظر کاربران" >-->
             <!--<br>I'm the second tab content-->
           <!--</b-tab>-->
           <!--<b-tab title="نقد و بررسی " >-->
             <!--<br>I'm the second tab content-->
           <!--</b-tab>-->
           <!--<b-tab title="عوامل فیلم" >-->
             <!--<br>I'm the second tab content-->
           <!--</b-tab>-->
           <!--<b-tab title="جوایز" >-->
             <!--<br>I'm the second tab content-->
           <!--</b-tab>-->
           <!--<b-tab title="گالری" >-->
             <!--<br>I'm the second tab content-->
           <!--</b-tab>-->

         <!--</b-tabs>-->
       <!--</div>-->
     <!--</div>-->
    <!--</div>-->

    <div v-if="downloadTab">
      <download></download>
    </div>
    <div v-if="subtitleTab">
      <h5 class="pm">This is Subtitle</h5>
    </div>
    <div v-if="commentTab">
      <new-comment :movieId="movie"></new-comment>
      <rate></rate>
      <div class="container" id="addMovie">
        <div class="row">
          <div class="col-md-6 col-md-offset-right-2" id="addMovietxt">
              <span>برای اضافه کردن فیلم جدید روی  دکمه روبرو کلیک کنید</span>
          </div>
          <div class="col-md-4">
            <button @click="addMovie" id="addMovieBtn">add movie</button>
          </div>
        </div>
      </div>
      <old-comment :movieId="movie"></old-comment>
    </div>
    <div v-if="critisism">
      <h5 class="pm" >This is Critisism</h5>
    </div>

    <div v-if="castTab">
      <h5 class="pm" >This is Casts</h5>
    </div>

    <div v-if="awarrdTab">
      <h5 class="pm" >This is Award</h5>
    </div>

    <div v-if="galleryTab">
      <h5 class="pm" >This is Gallery</h5>
    </div>

    <main-footer></main-footer>

  </div>
</template>
<style>
  .nav-link{
    color:black;
  }
  .nav-tabs .nav-item {

    border: 2px solid red;
    width: 14%;
  }
  /*underlined menue*/
  #addMovietxt{
    padding: 15px 10px 15px 0;
    color: darkgoldenrod;
    font-size: 17px;
  }
  .pm {
    font-size: 50px;
    padding: 45px;
    text-align: center;
    margin: 55px 15px 55px 15px;

  }
  #addMovieBtn {
    border-radius: 6px;
    border: 1px solid darkorange;
    background-color: darkorange;
    width: 210px;
    height: 50px;
    color: white;
    font-size: 18px;
    font-weight: bold;
  }
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

  #slider {
    /*border: 2px solid salmon;*/
    padding-top: 10px;
    border-bottom: 1px solid gray;
    text-align: center;
  }
  #slider div {
    padding-top: 10px;

  }
  #slider a {
    text-decoration: none;
    color: black;
    cursor: pointer;
  }
  .active {
    border-bottom: 3px solid black;
  }
  .deactive{
    border-bottom: none;
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
  import Rate from '~/components/MoviePage/Rate.vue'
  import download from '~/components/MoviePage/download.vue'
  import NewComment from '~/components/Comment/NewComment.vue'
  import OldComment from '~/components/Comment/OldComment.vue'
  import axios from 'axios'

  export default {
    components: {
      MainHeader,
      MainFooter,
      UnderLinedMenu,
      NewComment,
      OldComment,
      Rate,
      download
    },
    data(){
      return {
        movie:{
          type:{
            String
          }
        },
        img:{
          type:{
            String
          }
        },
        downloadTab:false,
        galleryTab:false,
        awarrdTab:false,
        castTab:false,
        subtitleTab:false,
        critisism:false,
        commentTab:true,
        isActive:[false,false,true,false,false,false,false]


      }
    },
    mounted() {
      this.movieInfo();
    },

    async asyncData({ params, error }) {
      try {
        let id = params.movieInf;
        let data = await axios.get('http://localhost:8050/movies/'+id+'/details');
        console.log(data.data[0]);
        return data.data[0];
      }catch (e) {
        console.log(e);
        error({ message: 'Movie not found', statusCode: 404 })
      }
    },
    methods:{
      movieInfo(){
        let url = window.location.toString().split('/');
        this.movie=url[url.length-1];
      },
      addMovie(){
//        window.open('/Movie/addMovie', '_blank');
        window.open('/Movie/addMovie', '_blank');
//        this.$router.push('/Movie/addMovie');
      },
      empty(mv){
        if(mv.length===0)
          return false;
        return true;
      },
      makePoster(ps){
        this.movie = ps;
        console.log("this is poster url");
        console.log(ps);
        return ps;
      },
      clicked(num,e) {
        if(num===0) {
          this.downloadTab = true;
          this.subtitleTab=false;
          this.commentTab=false;
          this.critisism=false;
          this.castTab=false;
          this.awarrdTab=false;
          this.galleryTab=false;
        }
        if(num===1) {
          this.downloadTab = false;
          this.subtitleTab=true;
          this.commentTab=false;
          this.critisism=false;
          this.castTab=false;
          this.awarrdTab=false;
          this.galleryTab=false;
        }
        if(num===2) {
          this.downloadTab = false;
          this.subtitleTab=false;
          this.commentTab=true;
          this.critisism=false;
          this.castTab=false;
          this.awarrdTab=false;
          this.galleryTab=false;
        }
        if(num===3) {
          this.downloadTab = false;
          this.subtitleTab=false;
          this.commentTab=false;
          this.critisism=true;
          this.castTab=false;
          this.awarrdTab=false;
          this.galleryTab=false;
        }
        if(num===4) {
          this.downloadTab = false;
          this.subtitleTab=false;
          this.commentTab=false;
          this.critisism=false;
          this.castTab=true;
          this.awarrdTab=false;
          this.galleryTab=false;
        }
        if(num===5) {
          this.downloadTab = false;
          this.subtitleTab=false;
          this.commentTab=false;
          this.critisism=false;
          this.castTab=false;
          this.awarrdTab=true;
          this.galleryTab=false;
        }
        if(num===6) {
          this.downloadTab = false;
          this.subtitleTab=false;
          this.commentTab=false;
          this.critisism=false;
          this.castTab=false;
          this.awarrdTab=false;
          this.galleryTab=true;
        }

        console.log("clicked on : "+num);
        let i=0;
        for (i = 0; i < this.isActive.length; i++) {
          this.isActive[i] = false;
        }
        console.log("active array : "+this.isActive);
        this.isActive[num]=true;
        this.$emit('click',e);
        console.log("new active array : "+this.isActive);
      },
    }

  }

</script>
