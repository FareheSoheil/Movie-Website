<template>
  <div class="container" id="footerBoxes">
    <div class="row">
      <div class="col-md-4" id="footerRightBox">
        <div id="footerRightText">
          محتوای این سایت مطابق با فرهنگ خانواده های ایرانی می باشد
        </div>
      </div>
      <div class="col-md-8" id="footerLeftBox"><b>
        مجموعه ی دیتابیس فیلم امیرکبیر، با هدف ایجاد یک تجربه ی مشترک

        آموزشی و تفریحی برای دانشجویان دانشگاه صنعتی امیرکبیر ایجاد شده و

        هیچ گونه استفاده ی تجاری ندارد. در صورتیکه از این سایت و امکانات

        آن لذت می برید آن را به دوستان خود هم معرفی کنید

      </b>
      </div>
    </div>
      <div class="row" id="socialMedias">
        <i class="fa fa-twitter fa-2x"></i>
        <i class="fa fa-instagram fa-2x"></i>
        <i class="fa fa-google-plus fa-2x"></i>
        <i class="fa fa-telegram fa-2x"></i>
      </div>
  </div>

</template>
<style>
  #footerRightText{
    margin-right:15px ;
    border: 2px solid #7F8C8D;
    border-radius: 4px;
    color:#424949 ;
    line-height: 200%;
    padding: 15px;
  }
  #footerLeftBox {
    line-height: 200%;
    padding-right: 2em;
  }
  #footerBoxes {
    width: 70%;
  }
  #footerRightBox{
    text-align: center;
    font-size: 15px;
  }
  #footerMenu div {
    text-align:center;
    display: inline-block;
    margin-right:5px;
    font-size: 12px;
  }
  #socialMedias {
    padding-right: 2rem;
    margin: 25px 0 15px 0;
  }
  #socialMedias i {
    margin-left: 5%;
    display: inline-block;
  }
  @media(max-width: 600px){
    #footerLeftBox{
      text-align: center;
      margin-top: 20px;
    }
  }
</style>
<script>

</script>
