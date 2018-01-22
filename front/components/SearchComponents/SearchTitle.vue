<template>
  <div class="shabnam" id="title">{{this.title}}</div>
</template>

<style>
 #title {
   text-align: right;
   /*border: 4px solid gold;*/
   /*width: 340px;*/
   background-color: transparent;
   margin-bottom: 10px;
   margin-top: 10px;
   /*width: 99px;*/
 }

</style>

<script>
  export default {
    props:['title']
  }
</script>
