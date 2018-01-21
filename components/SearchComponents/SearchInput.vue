<template>
    <input id="input" :placeholder="this.hint"/>
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
    props:['hint'],
  }


</script>
