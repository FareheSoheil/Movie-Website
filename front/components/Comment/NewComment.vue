<template>
  <div class="container comment-container">
    <div class="row">
      <div class="col-md-5">
        <vue-comp-slider class="sliderC" label="کارگردانی" v-model="directing" max="10" :disabled="false"></vue-comp-slider>
        <vue-comp-slider class="sliderC" label="بازیگری" v-model="acting" max="10" :disabled="false"></vue-comp-slider>
        <vue-comp-slider class="sliderC" label="فیلمنامه" v-model="screen" max="10" :disabled="false"></vue-comp-slider>
      </div>
      <div class="col-md-1" >
        <avatar path="/me.jpg"></avatar>
      </div>
      <div class="col-md-6">
        <form class="commnet-box container-fluid" id="comment-form">

          <div class="row">
            <div class="col-md-12">
              <textarea v-model="comment" class="comment" required name="comment" ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <label style="padding-top: 10px;">نام کاربر :‌  </label> &nbsp;
              <input class="author" v-model="name" required name="author" type="text" style="border-radius: 3px;border: 1px solid gray;margin: 10px 0 10px 0;">
            </div>
          </div>
          <div class="row">
          <div class="col-md-4" >
            <label for="suggest">پیشنهاد می کنم </label>&nbsp;
            <input type="radio"  v-model="radioValue" id="suggest" value="فیلم را پیشنهاد می کنم"><br>
          </div>
            <div class="col-md-4">
              <label for="nosuggest">پیشنهاد نمی کنم</label>&nbsp;
              <input type="radio" v-model="radioValue" id="nosuggest" value="فیلم را پیشنهاد نمی کنم"><br>
            </div>
            <div class="col-md-4">
              <label for="neutral">نظری ندارم</label>&nbsp;
              <input type="radio" v-model="radioValue" id="neutral" value="نظری ندارم "><br><br>
            </div>
          <!--<input type="submit" value="Submit">-->
          </div>
        </form>
          <div class="row" style="text-align: left">
            <div class="col-md-12">
              <m-button bcolor="seagreen" color="seagreen" title="ثبت دیدگاه" @click="postComment"></m-button>
            </div>
          </div>
          <!--<picker @click="addEmoji"></picker>-->
          <!--<picker title="Pick your emoji…" emoji="point_up"></picker>-->
          <!--<picker :i18n="{ search: 'Recherche', categories: { search: 'Résultats de recherche', recent: 'Récents' } }"></picker>-->

        <!--<button @click="set">emoji</button>-->
        <!--<picker class="emoji" :style="{display:show}" :native="false" :per-line="6" :auto-focus="false" set="emojione"></picker>-->
      </div>

    </div>
  </div>
</template>
<style>
  .comment-box :focus  input{
    outline: none;
  }
  .comment {
    width: 100%;
    border-radius: 3px;
    height: 150px;
    border: 1px solid gray;
    padding: 6px;
  }
  .sliderC {
    margin-bottom: 20px;
  }
  .comment-container {
  padding:15px 10px 15px 10px;
  border: 1px solid gray;
  margin-top: 10px;
}

</style>
<script>
  import VueCompSlider from '~/components/Slider/VueCompSlider.vue'
  import Picker from 'emoji-mart-vue/src/components/picker.vue'
  import VueEmoji from 'emoji-vue'
  import MButton from '~/components/SearchComponents/MButton.vue'
  import avatar from '~/components/avatar/avatar.vue'

  global.EMOJI_DATASOURCE_VERSION = '3.0.0';

  export default {

    components:{
      VueCompSlider,
      Picker,
      VueEmoji,
      MButton,
      avatar
    },
    props:['movieId'],
    data(){
      return {
        directing:2,
        acting:2,
        screen:2,
        show:"none",
        comment:'',
        name:'',
        radioValue:''
      }
    },
    methods:{
      async postComment() {
        console.log("this.movieId in post :");
        console.log(this.movieId);
        if(this.comment!=='' && this.name !== '' && this.radioValue!=='' ){
          try {
            const res = await this.$axios.$post('http://localhost:8050/movies/' + this.movieId + '/comments', {
              directingVote: this.directing,
              actingVote: this.acting,
              screenVote: this.screen,
              author: this.name,
              movieId: this.movieId,
              comment: this.comment,
              radioValue: this.radioValue
            });
            console.log("generator called");
            console.log(res);
            if (res === "Success")
              alert("نظر شما ثبت شد");
            else
              alert("خطا هنگام ثبت نظر");
          }catch (err) {
            console.log(err);
            alert('خطا هنگام ثبت نظر');
          }
        }else {
          alert("لطفا برای ثبت نظر همه ی فیلدها را پر کنید");
        }

      },
      set(){
        if(this.show==="none")
          this.show = "block";
        else
          this.show="none";
      },
      onInput(event) {
        this.$emit('input', event.data);
        //event.data contains the value of the textarea
      }
    }
  }
</script>
