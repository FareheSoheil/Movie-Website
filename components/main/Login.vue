<template>
  <!--<div id="loginContainer">-->
    <div id="loginContainer">
      <div id="loginBtn">
        ورود / عضویت

      </div>
      <i v-if="!login"  class="fa fa-sign-in fa-2x"></i>

    </div>

  <!--</div>-->
</template>
<script>
  export default {
    data(){
      return {
        login:false
      }
    }
  }
</script>

<style>
  #loginBtn {
    border: 2px solid blue;
    border-radius: 4px;
    padding: 8px;
    width: 110px;
    color: blue;
    font-size: 14px;
    height: 45px;
    /*width: 200px;*/
  }

  #loginContainer i{
    vertical-align: bottom;
    margin-top: 15px;
    color:white;
    border: 1px solid blue;
    border-radius: 50px;
    background-color: blue;
    padding: 7px;
    margin-right: 10px;
  }
  #loginContainer{
    padding-right: 50px;
    padding-bottom: 9px;
  }

  @media(max-width: 574px) {
    #loginContainer{
      padding-right: 0px;
    }
  }
</style>
