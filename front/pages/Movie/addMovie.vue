<template>
  <div class="container shabnam" id="main-container">
    <!--<div ">-->
        <form id="addMovie-container" class="container">
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">نام فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="title" required  type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">سال تولید فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="year" required  type="number" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">امتیاز IMDB از ۱۰ :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="rating" required  type="number" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">تعداد آرای IMDB :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="imdbVotes" required  type="number" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">  زمان فیلم (دقیقه) : </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="runtime" required  type="number" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">  تصویر : </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input type="file" @change="onFileChange" id="myFile">
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">کشور :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="country" required  type="text" >
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">زبان :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="language" required  type="text" >
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">داستان فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <textarea v-model="plot"  ></textarea>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">ژانر فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="genre" required  type="text" >
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">کارگردان فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <input  v-model="director" required  type="text" >
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">نویسندگان فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10" >
              <textarea v-model="writers"  ></textarea>
            </div>
          </div>

          <div class="row">
            <div class="col-md-2">
              <label style="padding-top: 10px;">بازیگران فیلم :‌  </label> &nbsp;
            </div>
            <div class="col-md-10">
              <textarea v-model="actors" ></textarea>
            </div>
          </div>

        </form>
    <div class="row">
      <button class="done" @click="sendMovie">click</button>
    </div>
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

  #main-container input[type=file] {
    border:none ;
    /*border-radius: 3px;*/
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
        genre:'',
        language:'',
        runtime:'',
        rating:'',
        imdbVotes:'',
        actors:[],
        director:'',
        writers:[],
        cover:'',
      }
    },
    methods:{
      async sendMovie(){
        if( this.title===''   || this.year===''      || this.director===''||
            this.runtime==='' || this.imdbVotes==='' || this.language===''||
            this.country==='' || this.genre===''     || this.rating===''  ||
            this.plot===''    || this.actors===''    || this.writers==='' ||
            this.cover===''
        ) alert('لطفا ّهمه ی فیلد ها را پر کنید ');
        else {
          try {
            alert("done");
            fd = new FormData();

            const res = await this.$axios.$post('http://localhost:8050/submit', {
              Title : this.title,
              Year : this.year,
              Director : this.director,
              Runtime : this.runtime,
              imdbVotes : this.imdbVotes,
              Language : this.language,
              Country : this.country,
              Genre: this.genre,
              Rating :[{"Value": this.rating}],
              Plot : this.plot,
              Actors : this.actors,
              Writer : this.writers,
              Cover: this.cover
            });
            console.log("generator called");
            console.log(res);
            if (res === "success")
              alert("فیلم شما ثبت شد");
            else
              alert("خطا هنگام ثبت فیلم");
          }catch (err) {
            console.log(err);
            alert('خطا هنگام ثبت فیلم');
          }
        }

        },

      onFileChange(e) {
        let files = e.target.files || e.dataTransfer.files;
        if (!files.length)
          return;
        this.createImage(files[0]);
      },
      createImage(file) {
        let image = new Image();
        var reader = new FileReader();
        let vm = this;
        reader.onload = (e) => {
          console.log( vm.cover);
          vm.cover = e.target.result;
        };
        reader.readAsDataURL(file);
      },

    }
  }
</script>
