<template>
  <div >
    <main-header></main-header>
    <div class="container shabnam profile-container" >
      <div class="row profile-menue">
        <div class="col-md-2 col-md-offset-right-1 active">تنظیمات</div>
        <div class="col-md-2">خرید اشتراک</div>
        <div class="col-md-2">سبد دانلود</div>
        <div class="col-md-3">فیلم های مورد علاقه</div>
        <div class="col-md-1">تیکت</div>
      </div>
      <div class="row side-container">
        <div class="col-md-3 side-bar ">
          <div class="row side-active">
            <div class="col-12">ویرایش اطلاعات کاربری</div>
          </div>
          <div class="row side-deactive">
            <div class="col-12 ">تغییر رمز عبور</div>
          </div>
          <div class="row side-deactive">
            <div class="col-12">انتقال اشتراک از سایت قدیم</div>
          </div>
          <div class="row side-deactive">
            <div class="col-12">دعوت دوستان</div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row phone-row">
            <div class="col-md-2"> شماره ی همراه</div>
          </div>
          <div class="row phone-input-row">
            <input/>
          </div>
          <div class="row save-number-row">
            <m-button color="seagreen" title="ذخیره ی شماره تماس"></m-button>
          </div>
        </div>
      </div>

      <div class="row edit-personal-profile">
            <div class="col-md-9 col-md-offset-right-3 ">
            <div class="row edit-personal-profile-row" >
            <div class="col-md-3 ">ویرایش اطلاعات کاربری</div>
          </div>
            <div class="row" style="margin-bottom: 5px">نام :‌ </div>
            <div class="row main-input-container"><input/></div>
            <div class="row" style="margin-bottom: 5px">نام خانوادگی :‌ </div>
            <div class="row main-input-container"><input/></div>
            <div class="row" style="margin-bottom: 5px">نام مستعار :‌ </div>
            <div class="row main-input-container"><input/></div>
            <div class="row" style="margin-bottom: 5px;"><span>ایمیل : </span></div>
            <div class="row main-input-container"><input/></div>
            <div class="row"><m-button color="seagreen" title="به روز رسانی"></m-button></div>
        </div>
      </div>

    </div>
    <main-footer></main-footer>
  </div>

</template>
<style>
  .main-input-container {
    margin: 2px 0 35px 0;
  }
  .edit-personal-profile {
    margin: 150px 20px 150px 0;
    /*margin-right: 20px;*/
  }
  .edit-personal-profile-row {
    border-bottom: 1px solid lightgray;
    margin-bottom: 40px;
  }
  .edit-personal-profile-row div {
    padding: 15px 0 15px 0;
    border-bottom: 2px solid lightgray;
    font-weight: bold;
    color: gray;
  }
  .save-number-row {
    margin-top: 20px;
    margin-right: 20px;
  }
  .profile-container input{
    border: 1px solid lightgray;
    border-radius: 3px;
    background-color: lightgray;
    width: 310px;
    height: 45px;
  }
  .phone-row {
    margin-right: 20px;
    border-bottom: 1px solid lightgray;
  }
  .phone-input-row {
    margin-right: 20px;
    margin-top: 20px;
  }
  .phone-row div {
    padding: 15px 0 15px 0;
    color: #7f828b;
    font-weight: bold;
  }
  .phone-row div {
    border-bottom: 2px solid lightgray;
  }
  .profile-menue{
    text-align: center;
    margin-top: 30px;
    color: gray;
    border-bottom: 1px solid lightgray;
  }
  .profile-menue div {
    text-align: center;
    padding: 15px 0 15px 0;
  }
  .side-container {
    padding-top: 20px;
  }
  .side-bar .row {
    padding:25px 0 25px 0;
  }
  .active{
    border-bottom: 2px solid black;
    color: black;
  }
  .side-active {
    border-left: 2px solid dodgerblue;
    color: dodgerblue;
  }
  .side-deactive {
    border-left: 2px solid lightgray;

  }
</style>
<script>
  import MButton from '~/components/SearchComponents/MButton.vue'
  import MainFooter from '~/components/FooterComponents/MainFooter.vue'
  import MainHeader from '~/components/main/MainHeader.vue'

  export default {
    components : {
      MButton,
      MainFooter,
      MainHeader
    }
  }
</script>
