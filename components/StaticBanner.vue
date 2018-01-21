<template>
  <div  class="container-fluid"  :style="{ 'background-color':this.color }">
    <!--,'background-image': 'url(' + this.src + ')'}">-->
    <div class="row shabnam" id="static-container">
      <img class=" col-md-3 order-md-5 col-md-offset-right-3 col-sm-4 col-sm-offset-right-3" :src="this.src">
      <div  id="explanation1" class="col-md-5 col-sm-5">
        <div class="container">
          <div class="row">
            <div>{{this.explanation1}}</div>
          </div>
          <div class="row">
            <div id="explanation2">{{this.explanation2}}</div>
          </div>
          <div class="row">
              <m-button :color="this.color" bcolor="white " :title="bTitle" style="font-size: 14px;margin-top: 20px"></m-button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<style>
#static-container {
  background-repeat: no-repeat;
  background-image: none;
  padding:10px 40px 15px  10px;
  margin: 20px 0 20px 0;
}
#static-container img {
  height: 300px;
}
#explanation2{
    color: white;
    font-size: 20px;
    margin: 5px;
  }
#explanation1{
    color: white;
    font-size: 28px;
    margin: 5px;
  }
@media(max-width: 300px) {
  #static-container{
    background-image: none;
    padding: 2px;
  }
}
</style>

<script>
  import MButton from '~/components/SearchComponents/MButton.vue'
  export default {
    components: {
      MButton
    },
    props:['src','color','explanation1','explanation2','bTitle'],
  }

</script>
