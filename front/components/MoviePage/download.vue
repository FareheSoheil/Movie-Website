<template>
  <!--<div class="container">-->
    <!--<rate></rate>-->
    <!--<div class="row">-->
        <!--<div class="col-lg-2 category">-->
          <!--<div class="row">-->
            <!--<div class="allLangBtn col-xs-5">همه زبان ها</div>-->
            <!--<i class="fa fa-caret-down col-xs-3 col-xs-offset-right-4"></i>-->
          <!--</div>-->
        <!--</div>-->

        <!--<div class="col-lg-2 category">-->
          <!--<div class="row">-->
            <!--<div class="col-xs-8 catText" style="border: 2px solid red">ریلیز</div>-->
            <!--<div class="allBtn col-xs-5">همه</div>-->
            <!--<i class="fa fa-caret-down col-xs-3 col-xs-offset-right-4"></i>-->
          <!--</div>-->
        <!--</div>-->

      <!--<div class="col-lg-2 category">-->
        <!--<div class="row">-->
          <!--<div class="col-xs-8 catText" style="border: 2px solid red">ریلیز</div>-->
          <!--<div class="allBtn col-xs-5">همه</div>-->
          <!--<i class="fa fa-caret-down col-xs-3 col-xs-offset-right-4"></i>-->
        <!--</div>-->
      <!--</div>-->
      <!---->
      <!---->

        <!--<div class="col-lg-2 category">-->
          <!--<div class="row">-->
            <!--<div class="allLangBtn col-xs-5">همه زبان ها</div>-->
            <!--<i class="fa fa-caret-down col-xs-3 col-xs-offset-right-4"></i>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="col-lg-2 category">-->
          <!--<div class="row">-->
            <!--<div class="allLangBtn col-xs-5">همه زبان ها</div>-->
            <!--<i class="fa fa-caret-down col-xs-3 col-xs-offset-right-4"></i>-->
          <!--</div>-->
        <!--</div>-->
    <!--</div>-->
  <!--</div>-->
  <div>
    <rate></rate>
  <div style="margin-top: 25px">
    <div class="container" id="categoryContainer">
      <div  class="category">
        <div class="allLangBtn">همه زبان ها</div>
        <i class="fa fa-caret-down"></i>
      </div>
      <div  class="category">
        <div class="catText">ریلیز</div>
        <div class="allBtn">همه</div>
        <i class="fa fa-caret-down"></i>
      </div>
      <div  class="category">
        <div class="catText">نوع</div>
        <div class="allBtn">همه</div>
        <i class="fa fa-caret-down"></i>
      </div>
      <div  class="category" id="resolution">
        <div class="catText">رزولوشن</div>
        <div class="allBtn">همه</div>
        <i class="fa fa-caret-down"></i>
      </div>
      <div  class="row calendar">
        <div class="row">
          <div class="col-3"><i class="fa fa-th fa-2x"></i></div>
          <div class="col-3"><i class="fa fa-calendar fa-2x"></i></div>
          <div class="col-5" style="font-size: 13px;color: darkorange"><i>
            ؟ راهنما
          </i></div>
        </div>
        <div class="row">
          <input type="radio" > <i id="radio1" style="font-size: 12px"> پیشنهادی</i>
          <input type="radio" > <i style="font-size: 12px"> حرفه ای</i>
        </div>
      </div>
    </div>
    <div class="container"><div style="color: blue;border-bottom: 4px solid blue;width: 60px">BluRay</div><div id="hr2"></div></div>
    <div class="container" id="blueRayContainer">
      <div class="row bluerayBar">
        <div class="volumn">
          <i class="fa fa-download"></i>
          1.4 GB
        </div>
        <div class="letter">ف</div>
        <div class="basket"><i class="fa fa-shopping-basket"></i></div>
        <div class="middleBar yellowBorder">
          <i class="fa fa-flag-o fa-lg"></i>
          <div class="yellowForground Lfloat">x256</div>
          <div class="center-align Lfloat">زبان اصلی</div>
          <div class="center-align Lfloat">Ganool</div>
        </div>
        <div class="tailBtn yellowBackground yellowBorder">
          <b>1080p</b>&nbsp;&nbsp;&nbsp;<i>Blueray</i>
        </div>
      </div>
      <div class="row bluerayBar">
        <div class="volumn">
          <i class="fa fa-download"></i>
          1.4 GB
        </div>
        <div class="letter">ف</div>
        <div class="basket"><i class="fa fa-shopping-basket"></i></div>
        <div class="middleBar greenBorder">
          <i class="fa fa-flag-o fa-lg"></i>
          <div class="greenForground Lfloat">x256</div>
          <div class="center-align Lfloat">زبان اصلی</div>
          <div class="center-align Lfloat">Ganool</div>
        </div>
        <div class="tailBtn greenBackground greenBorder">
          <b>1080p</b>&nbsp;&nbsp;&nbsp;<i>Blueray</i>
        </div>
      </div>

    </div>

    <div class="container"><div style="color: blue;border-bottom: 4px solid blue;width: 90px">موسیقی متن</div><div id="hr3"></div></div>
    <div class="container" id="soundTrackContainer">
      <div class="row bluerayBar">
        <div class="volumn">
          <i class="fa fa-download"></i>
          1.4 GB
        </div>
        <div class="letter"><i class="fa fa-play"></i></div>
        <div class="basket"><i class="fa fa-shopping-basket"></i></div>
        <div class="middleBar blueBorder">
          <i class="fa fa-flag-o fa-lg"></i>
          <div class="blueForground ">128kbps</div>
          <div class="center-align Lfloat"><i class="fa fa-signal blueForground"></i></div>

        </div>
        <div class="tailBtn blueBorder blueBackground">
          <i>1:38:56</i>
        </div>
      </div>
      <div class="row bluerayBar">
        <div class="volumn">
          <i class="fa fa-download"></i>
          1.4 GB
        </div>
        <div class="letter"><i class="fa fa-play"></i></div>
        <div class="basket"><i class="fa fa-shopping-basket"></i></div>
        <div class="middleBar blueBorder">
          <i class="fa fa-flag-o fa-lg"></i>
          <div class="blueForground ">128kbps</div>
          <div class="center-align Lfloat"><i class="fa fa-signal blueForground"></i></div>

        </div>
        <div class="tailBtn blueBorder blueBackground">
          <i>1:38:56</i>
        </div>
      </div>


    </div>
  </div>
  </div>

</template>
<style>
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
    margin: 0 0px 0 4px;
  }
  #categoryContainer{
    margin-bottom: 110px;
  }
  .category {
    width: 16%;
    height: 40px;
    margin: 0 3px 0 3px;
    border: 1px solid lightgray;
    border-radius: 4px;
    padding: 5px;
    padding-right: 25px;
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

  #categoryContainer div {
    display: inline-block;
  }
</style>
<script>
  import Rate from '~/components/MoviePage/Rate.vue'

  export default {
    components:{
      Rate
    }
  }
</script>
