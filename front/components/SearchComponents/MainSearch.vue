<template  class="container-fluid" >
  <div class="container-fluid con">
    <div class="row">
      <div class="col-lg-6 col-lg-offset-right-4">
        <search-title class="col-12" :title="titleF(1356)"></search-title>
      </div>
    </div>
    <div class="row" style="text-align: center">

      <div id="input-container" class="col-lg-6 order-lg-12 right-align ">
        <search-input  @input="tell" hint="عنوان مورد نظر را وارد کنید" v-model="search"></search-input>
        <!--<search-input  @input="tell" hint="عنوان مورد نظر را وارد کنید" v-model="search"></search-input>-->
      </div>

      <div id="circleCont" class="col-lg-2  order-lg-1 col-lg-offset-right-2 left-align" >
        <circle-button color="mediumseagreen" icon="fa fa-search"></circle-button>
        <circle-button color="darkviolet" icon="fa fa-search-plus"></circle-button>
      </div>

    </div>
    <div class="row " id="searchRes"></div>
    <div class="row">
      <div class="col-lg-1 col-lg-offset-right-7">
        <m-button @click="findMovie()" color="goldenrod" bcolor="goldenrod"  title="جستجو"></m-button>
      </div>
    </div>

  </div>
</template>
<style>

.con {
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  /*border: 2px solid darkviolet;*/
  background: url("/ncbg.v2.jpg");
  background-size:auto;
  opacity: .9;

}
  @media (max-width:800px ) {
    #circleCont{
      text-align: center;
    }
    #input-container{
      text-align: center  ;
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
    data() {
      return {
        search:'',
        selected:'',
        val:{type:String}
      }
    },
    methods: {
      titleF(num) {
        return "دانلود فیلم سریال انیمیشن مستند و دوبله با بیش از "+num+"عنوان";
      },
      async findMovie() {
        if(this.search !== ''){
          try {
          let Title = this.search;
          let data = await this.$axios.$get('http://localhost:8050/search/'+Title);
          if(data.length>0){
            let id = data[0]._id;
            window.open('/Movie/'+id,'_blank');
            this.search = '';
          }else {
            this.search = "هیچ فیلمی با این نام یافت نشد"
          }
        }catch (e) {
            alert('مشکل جستجو از سرور')
        }
        }


      },
      tell(e){
//        console.log(this.search);
      }
    }
  }
</script>
