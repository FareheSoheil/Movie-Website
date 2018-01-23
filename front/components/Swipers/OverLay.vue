<template>
  <div @click="clicked" class="overlay shabnam" >
    <div class="downloadAnim">دانلود فیلم</div>
    <div class="animNameEn">{{name}}</div>
    <div class="year">{{year}}</div>
    <div class="animIcons">
      <i class="fa fa-download"></i>
      <i class="fa fa-heart"></i>
      <i class="fa fa-video-camera"></i>

    </div>


  </div>
</template>
<style>
  .overlay {
    text-align: center;
    padding: 45px 10px 10px 10px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: inherit;
    width: 100%;
    opacity:0;
    transition: .5s ease;
  }
  .downloadAnim {
    color: darkorange;
    font-weight: bold;
    opacity: 10;
    z-index: 10;
  }
  .animIcons i.fa {
    display: inline-block;
    border-radius: 60px;
    box-shadow: 0px 0px 2px #888;
    padding: 0.5em 0.6em;
    border: 1px solid white;
    margin: 4px;
    color: white;
  }
  .animNameEn{
    font-size: 15px;
    font-weight: bold;
    color: white;
  }
  .year {
    color: orange;
  }
</style>
<script>
  export default {
    props:['year','name'],
    methods: {
      clicked(e){
        console.log("clicked on me");
        this.$emit('click',e);
      }
    }
  }
</script>
