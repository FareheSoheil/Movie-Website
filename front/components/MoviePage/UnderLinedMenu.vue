<template>
  <div class="container" id="sliderContainer">
    <div class="row" id="slider">
      <!--active: isActive, 'text-danger': hasError-->
    <div class="col-md-1"><div @click="clicked(0)" :class="{active:isActive[0] , deactive:!isActive[0]}" ><a> دانلود</a></div></div>
    <div class="col-md-2"><div @click="clicked(1)" :class="{active:isActive[1]}"><a>زیرنویس</a> </div></div>
    <div class="col-md-2"><div @click="clicked(2)" :class="{active:isActive[2]}"><a>نظر کاربران</a> </div></div>
    <div class="col-md-2"><div @click="clicked(3)" :class="{active:isActive[3]}"><a>نقد و بررسی</a></div></div>
    <div class="col-md-2"><div @click="clicked(4)" :class="{active:isActive[4]}"><a>عوامل فیلم</a></div></div>
    <div class="col-md-1"><div @click="clicked(5)" :class="{active:isActive[5]}"><a>جوایز</a></div></div>
    <div class="col-md-1"><div @click="clicked(6)" :class="{active:isActive[6]}"><a>گالری</a></div></div>
    </div>
  </div>
</template>
<style>
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
</style>
<script>
  export default {
    data(){
      return{
        isActive:[false,false,true,false,false,false,false]
      }
    },
    methods:{
      clicked(num) {
        let i=0;
        for (i = 0; i < this.isActive.length; i++) {
          this.isActive[i] = false;
        }
        console.log("active array : "+this.isActive);
        this.isActive[num]=true;
        console.log("new active array : "+this.isActive);
      }
    }
  }
</script>
