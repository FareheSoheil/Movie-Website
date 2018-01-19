<template >
  <b-navbar class="shabnam" id="myNavbar" type="light" variant="light" toggleable>
    <b-navbar-toggle target="nav_dropdown_collapse" ></b-navbar-toggle>

    <b-collapse is-nav id="nav_dropdown_collapse">
      <b-navbar-nav>
        <b-nav-item v-for="(item,index) in navItems" v-if="!item.isdropdown" :key="index"  href="#">{{item.title}}</b-nav-item>
        <!-- Navbar dropdowns -->
        <b-nav-item-dropdown v-else  :text="item.title" >
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse >
  </b-navbar>
</template>

<script>
  export default {
    data(){
      return {
        navItems :[
          {title:"آخرین ها",isdropdown:true},
          {title:"فیلم",isdropdown:true},
          {title:"سریال",isdropdown:true},
          {title:"انیمیشن",isdropdown:true},
          {title:"مستند",isdropdown:true},
          {title:"مجموعه ها",isdropdown:true},
          {title:"انیمه",isdropdown:false},
          {title:"دوبله",isdropdown:true},
          {title:"زیگ زاگ",isdropdown:false},
          {title:"باکس آفیس",isdropdown:false},
          {title:"برترین ها",isdropdown:true},
        ]

      }
    }
  }
</script>
<style>

  #myNavbar {
    font-size: .82rem;
    margin-bottom: 0;
    margin-top: 20px;
  }
  .dropdown-menu {
    left: -80%;
    margin-top: 7px;
    border-radius: 2px;
  }
  .dropdown-item {
    text-align: right;
  }
  .dropdown-menu.show {
    background-color:#F8F9F9;
  }
  .dropdown-toggle::after {
    margin-right: 5px;
  }
  b-navbar {
    margin-top: 100px;
  }
  #nav_dropdown_collapse , b-navbar-nav , b-nav-item-dropdown{
    direction:rtl;
    text-align: right;
  }
  /*@media (min-width: 666px) {*/
    /*.navbar-expand-sm {*/
      /*-ms-flex-flow: row nowrap;*/
      /*flex-flow: row nowrap;*/
      /*-ms-flex-pack: start;*/
      /*justify-content: flex-start;*/
    /*}*/
  /*}*/
  @media screen and (min-width: 600px) {
    .navbar-brand {
      display: none;
    }
  }
  @media screen and (max-width: 992px) {
    .navbar-brand {
      display: flex;
    }

    .dropdown-menu.show {
      /*width: 95%;*/
    }
  }
</style>
