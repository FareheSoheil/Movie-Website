<template>
  <nav class="shabnam noSelect navbar navbar-expand-lg navbar-light bg-light" id="myNavbar" style="font-size: 15px">
    <a class="navbar-brand" href="#">منو</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <!--v-bind:class="{ active: isActive, 'text-danger': hasError }">-->
        <li v-for="(item, index) in navItems" :key="index" class="nav-item" v-bind:class="{dropdown:item.isdropdown}">

          <a v-if="item.isdropdown" class="nav-link dropdown-toggle" href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{item.title}}
          </a>
          <a v-else class="nav-link" href="#">
            {{item.title}}
            <span class="sr-only">(current)</span></a>
          <div v-if="item.isdropdown" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>

        </li>
      </ul>
    </div>
  </nav>
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
      width: 95%;
    }
  }
</style>
