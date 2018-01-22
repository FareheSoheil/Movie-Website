<template>
  <button @click="clicked" class="shabnam" id="mbtn" :style="{backgroundColor: this.color,borderColor:this.bcolor}">{{this.title}}</button>
</template>
<style>
 #mbtn {
   width: 210px;
   height: 50px;
   border: 1px solid;
   border-radius: 6px;
   padding: 6px;
   margin-top: 15px;
   color: white;

 }
</style>
<script>
  export default {
    props:['color','title','bcolor'],
    methods: {
      clicked(e){
        this.$emit('click',e);
      }
    }
  }
</script>
