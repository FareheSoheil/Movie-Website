<template>
  <input id="input" :value="value"  @input="onInput" :placeholder="hint"/>
</template>
<style>
  #input {
    padding: 6px;
    border: 1px solid gray;
    border-radius: 6px;
    width: 80%;
    height: 60px;
    margin: 10px;
    margin-top: 15px;
  }
  @media(max-width:800px) {
    #input {
      width: 90%;
    }
  }

</style>
<script>
  export default {


    props:['value','hint'],
    data(){
      return {
      }
    },
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
      }
    }
  }
</script>
