<template>
  <div id="wholeContainer">
    <div class="container" id="progressContainer">
      <div class="row">
        <div class="col-5">
          <div style="color: mediumspringgreen">ارزش دانلود از ۱۰ </div>
          <div class="progress" >
            <div class="progress-bar bg-success"  role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:70%;"></div>
          </div>
          <div style="color: darkgray;font-size: 12px;">
            نتایج آرای کاربران بر اساس کارگردانی+فیلمنامه+بازیگران
          </div>
        </div>
        <div class="col-4">
          <div id="middleDiv">
            ۵۵ نفر از ۶۲ نفر تماشای این انیمیشن را پیشنهاد کرده اند
          </div>
        </div>
        <div class="col-3" id="rateContainer">
          <div>شما هم بر اساس ارزش دانلود به انیمیشن رای دهید</div>
          <button>
            امتیاز دهید
          </button>

        </div>
      </div>
      <hr id="hr1">
    </div>
  </div>
</template>
<style>
  .progress {
    height: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: slategray;
  }
  #progressContainer{
    margin-top: 60px;
    margin-bottom: 40px;
  }
  .bg-success{
    background-color: mediumspringgreen !important;
  }
  #middleDiv{
    color: dodgerblue;
    /*width: 25%;*/
  }
  #rateContainer {
    text-align: center;
    color: darkgray;
  }

  #rateContainer button {
    margin-top: 20px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid blue;
    color: white;
    background-color: blue;
  }
</style>
<script>

</script>
