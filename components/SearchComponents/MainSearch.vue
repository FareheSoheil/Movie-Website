<template  class="container-fluid" >
  <div class="container-fluid con">
    <div class="row">
      <div class="col-md-6 col-md-offset-right-4">
        <search-title class="col-12" :title="titleF(1356)"></search-title>
      </div>
    </div>
    <div class="row" style="text-align: center">

      <div class="col-md-6 order-md-12 right-align ">
        <search-input  hint="عنوان مورد نظر را وارد کنید"></search-input>
      </div>

      <div id="circleCont" class="col-md-2  order-md-1 col-md-offset-right-2 left-align" style="border: 4px solid salmon; padding: 0px">
        <circle-button color="green" icon="fa fa-search"></circle-button>
        <circle-button color="violet" icon="fa fa-search-plus"></circle-button>
      </div>

    </div>
    <div class="row">
      <div class="col-md-1 col-md-offset-right-7">
        <m-button color="goldenrod" title="جستجو"></m-button>
      </div>
    </div>

  </div>
</template>
<style>
.con {
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  background: url("/bg.jpg");
  /*background: no-repeat;*/
  /*background-size: cover;*/
  /*color: goldenrod;*/
}
  @media (max-width:600px ) {
    #circleCont{
      text-align: center;
    }
  }
</style>
<script>
  import SearchTitle from  '~/components/SearchComponents/SearchTitle.vue'
  import SearchInput from  '~/components/SearchComponents/SearchInput.vue'
  import CircleButton from  '~/components/SearchComponents/CircleButton.vue'
  import MButton from  '~/components/SearchComponents/MButton.vue'

  export default {
    props:['src'],
    components: {
      SearchTitle,
      SearchInput,
      CircleButton,
      MButton
    },
    methods: {
      titleF(num) {
        return "دانلود فیلم سریال انیمیشن مستند و دوبله با بیش از "+num+"عنوان";
      }
    }
  }
</script>
