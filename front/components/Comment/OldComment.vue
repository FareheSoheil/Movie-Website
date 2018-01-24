<template>
  <div id="old-comments-container" class="container" contenteditable="false">
    <div class="row comments-container" :style="{'border-color':processRadio(oc.radioValue)}"  v-for="(oc,index) in oldComments " :key="index"  @click="getComments">
      <div class="col-md-5" >
        <vue-comp-slider :disabled="disable" class="sliderC" label="کارگردانی" v-model="oc.directingVote" max="10"></vue-comp-slider>
        <vue-comp-slider :disabled="disable" class="sliderC" label="بازیگری" v-model="oc.actingVote" max="10"></vue-comp-slider>
        <vue-comp-slider :disabled="disable" class="sliderC" label="فیلمنامه" v-model="oc.screenVote" max="10"></vue-comp-slider>
      </div>
      <div class="col-md-2">
        <avatar path="/ab.jpg"></avatar>
      </div>
      <div class="col-md-5 text-container">
        <div :style="{'color':processRadio(oc.radioValue)}">{{oc.radioValue}}</div>
        <div class="date">
          <span>{{oc.Created_At.split('T')[1].slice(0,-5)}}</span>
          &nbsp;
          <span>{{oc.Created_At.split('T')[0]}}</span>
        </div>
        <span>کاربر </span>
        {{oc.author}}
        <span>گفته که : </span>
        <div>{{oc.comment}}</div>
      </div>
      <hr>
    </div>

  </div>

</template>
<style>
  .date span{
    font-size: 10px;
    color: #7f828b;
  }
  #old-comments-container{
    /*overflow-y: scroll;*/
    /*height: 500px;*/
    /*border: 2px solid gray;*/
    /*margin: 20px 0 0 0;*/
    padding: 25px 0 25px 0;
    margin-bottom: 30px;
    /*border: 2px solid slateblue*/
    /*background-color: #0c5460;*/
  }

  .comments-container {
    padding:15px 10px 15px 20px ;
    border: 1px solid ;
    border-radius: 4px;
    margin: 30px 0 30px 0;
    /*background-color:#D6D6D6;*/
    /*text-align: center;*/
    /*height: 200px;*/
  }

  .text-container {
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 4px;
  }
 #old-comments-container::-webkit-scrollbar {
    width: .6em;
  }

  #old-comments-container::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }

  #old-comments-container::-webkit-scrollbar-thumb {
    background-color: royalblue;
    outline: 1px solid slategrey;
  }
</style>
<script>
   import VueCompSlider from '~/components/Slider/VueCompSlider.vue'
   import avatar from '~/components/avatar/avatar.vue'
  export  default {
    components:{
       VueCompSlider,
      avatar
     },
//    props:['movieId'],
    props:['movieId'],
    data(){
      return {
        oldComments:[],
        disable:true
      }
    },

    mounted(){
      this.getComments();
    },
    methods:{
      async getComments() {
        let url = window.location.toString().split('/');
        let id =url[url.length-1];
        console.log("this.movieId in get");
        console.log(id);
          try {
            this.oldComments = await this.$axios.$get('http://localhost:8050/movies/'+id+'/comments');
            console.log("this.oldComments : ");
            console.log(this.oldComments);
          }
          catch (err) {
            console.log(err);
            alert('خطا هنگام دریافت نظرات')
          }
      },
      processRadio(txt){
        if(txt === "فیلم را پیشنهاد می کنم"  ){
            return "seagreen";
        }else if (txt === "فیلم را پیشنهاد نمی کنم") {
          return "red";
        }
        return "lightgray";
      }
    }
  }
</script>
