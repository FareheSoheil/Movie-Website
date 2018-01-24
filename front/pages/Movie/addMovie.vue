<template>
  <div class="container shabnam" id="main-container">
    <!--<div ">-->
        <form id="addMovie-container" class="container">
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">نام فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">سال تولید فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">امتیاز IMDB از ۱۰ :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">تعداد آرای IMDB :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">  زمان فیلم (دقیقه) : </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">  تصویر : </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input type="file" id="myFile">
            </div>
          </div>


          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">کشور :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">داستان فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <textarea v-model="comment" required name="comment" ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">ژانر فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">کارگردان فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input class="author" v-model="name" required name="author" type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">نویسندگان فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10" style="border: 2px solid springgreen;">
              <textarea v-model="comment" required name="comment" ></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">بازیگران فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <textarea v-model="comment" required name="comment" ></textarea>
            </div>
          </div>

        </form>
    <div class="row">
      <button class="done" @click="sendMovie">click</button>
    </div>
    <!--</div>-->

  </div>
</template>
<style>
  .done{
    margin: 15px;
    border-radius: 4px;
    background-color: mediumseagreen;
    border: 1px solid mediumseagreen;
    width: 150px;
    height: 50px;
    color: darkorange;

  }
  #main-container {
    padding: 100px 50px 10px 50px;
  }
  #main-container label {
    color: darkgoldenrod;
  }
  #main-container textarea {
    width: 90%;
    height: 130px;
    color: mediumseagreen;

  }
  #main-container textarea,input {
    border:1px solid mediumseagreen ;
    border-radius: 3px;
  }
  #addMovie-container {
    border: 1px solid mediumseagreen;
    padding: 10px;

  }
</style>
<script>
  export default {
    data(){
      return {
        title:'',
        year:'',
        plot:'',
        country:'',
        language:'',
        runtime:'',
        imdbVotes:'',
        actors:[],
        director:'',
        writers:[],
      }
    },
    methods:{
      async sendMovie(){
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
      }
    }
  }
</script>
