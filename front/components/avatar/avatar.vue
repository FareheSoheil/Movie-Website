<template>
  <div class="avatar-container">
    <img :src="path"/>
  </div>
</template>

<style>
  .avatar-container {
    margin-top: 15px;
    margin-bottom: 15px;
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
  .avatar-container img {
    width: inherit;
    height: inherit;
    border-radius: 50%;
  }
</style>

<script>
  export default {
    props:['path']
  }
</script>
