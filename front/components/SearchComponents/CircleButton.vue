<template>
    <button id="circlebtn" @click="clicked" :style="{'background-color':this.color,'border-color':this.color}">
      <i :class="this.icon"></i>
    </button>
</template>
<script>
  export default {
    props:['icon','color'],
    methods: {
      clicked(e){
        this.$emit('click',e);
      }
    }
  }
</script>
<style>
  #circlebtn {
    border-radius: 90px;
    border: 1px solid;
    height: 60px;
    width: 60px;
    color: gray;
    margin: 5px;
    margin-top: 15px;
    font-size: 18px;
  }

</style>
