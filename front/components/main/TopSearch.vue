<template>
  <div id="searchBox">
    <input autocomplete="off" class="topSearchBox shabnam" type="text" name="search" :placeholder="this.placeholder">
  </div>
</template>
<script>
  export default {
    props:['placeholder'],
  }
</script>
<style>
  #searchBox input{
    border: 1px solid #F2F3F4;
    background-color: #F2F3F4;
    border-radius: 4px;
  }
  #searchBox {
    margin-top: 15px;
  }
  .topSearchBox {

    border-radius: 4px;
    background-color: #F7F7F7;
    font-family: 'shabnam' , sans-serif;
    font-size: 11px;
    border: none;
    width:250px;
    box-sizing: border-box;
    height: 40px;
    background-image: url('../../assets/images/search.png');
    background-position: 10px 6px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    transition: width 0.4s ease-in-out;
    direction: rtl;
  }
</style>
