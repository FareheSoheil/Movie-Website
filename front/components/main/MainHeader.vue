<template class="container-fluid">
  <div>
    <header class="container-fluid">
      <div class=" row header shabnam">
        <div id="login" class="col-md-7 col-sm-6"  >
          <login></login>
        </div>
        <div id="search" class="col-md-5 col-sm-6">
          <top-search placeholder="جستجوی فیلم . سریال ....."></top-search>
        </div>
      </div>
    </header>
    <nav-bar></nav-bar>
  </div>
</template>
<style>
  .header div{
    display: inline-block;
    /*margin-bottom: 30px;*/
  }
  #search{
    text-align: center;
  }
  @media(max-width: 574px) {
    #login {
      text-align: center;
      border: 2px solid navajowhite;
    }
  }
</style>
<script>
  import NavBar from '~/components/main/NavBar.vue'
  import TopSearch from '~/components/main/TopSearch.vue'
  import Login from '~/components/main/Login.vue'

  export default {
    components: {
      NavBar,
      TopSearch,
      Login,
    },
  }
</script>
