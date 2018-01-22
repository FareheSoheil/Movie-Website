<template>
  <div>
  <input class="noSelect" type="range" min="1" :max="max" step="1" :value="value" v-on:input="onChg($event)"/>
  {{value}}

  </div>
</template>
<style>
  input[type="range"]{
    direction: ltr;
    text-align: left;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 6px;
    height: 6px;
    background-image: -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0.15, royalblue),
      color-stop(0.15, #C5C5C5)
    );
  }

  input[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none !important;
    background-color: royalblue;
    border-radius: 3px;
    border: 1px solid royalblue;
    height: 15px;
    width: 25px;
  }
  /*input[type=range] {*/
    /*-webkit-appearance: none;*/
    /*margin: 18px 0;*/
    /*width: 220px;*/
  /*}*/
  input[type=range]:focus {
    outline: none;
  }
  /*input[type=range]::-webkit-slider-runnable-track {*/
    /*width: 100%;*/
    /*height: 5px;*/
    /*cursor: pointer;*/
    /*animate: 0.2s;*/
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    /*background: royalblue;*/
    /*border-radius: 1.3px;*/
    /*border: 0.2px solid #010101;*/


  /*}*/
  /*input[type=range]::-webkit-slider-thumb {*/
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    /*border: 1px solid #000000;*/
    /*height: 12px;*/
    /*width: 30px;*/
    /*border-radius: 3px;*/
    /*background: royalblue;*/
    /*cursor: pointer;*/
    /*-webkit-appearance: none;*/
    /*margin-top: -3px;*/
  /*}*/
  /*input[type=range]:focus::-webkit-slider-runnable-track {*/
    /*background: #367ebd;*/
  /*}*/
  /*input[type=range]::-moz-range-track {*/
    /*width: 100%;*/
    /*height: 8.4px;*/
    /*cursor: pointer;*/
    /*animate: 0.2s;*/
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    /*background: #3071a9;*/
    /*border-radius: 1.3px;*/
    /*border: 0.2px solid #010101;*/
  /*}*/
  /*input[type=range]::-moz-range-thumb {*/
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    /*border: 1px solid #000000;*/
    /*height: 36px;*/
    /*width: 16px;*/
    /*border-radius: 3px;*/
    /*background: #ffffff;*/
    /*cursor: pointer;*/
  /*}*/
  /*input[type=range]::-ms-track {*/
    /*width: 100%;*/
    /*height: 8.4px;*/
    /*cursor: pointer;*/
    /*animate: 0.2s;*/
    /*background: transparent;*/
    /*border-color: transparent;*/
    /*border-width: 16px 0;*/
    /*color: transparent;*/
  /*}*/
  /*input[type=range]::-ms-fill-lower {*/
    /*background: #2a6495;*/
    /*border: 0.2px solid #010101;*/
    /*border-radius: 2.6px;*/
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
  /*}*/
  /*input[type=range]::-ms-fill-upper {*/
    /*background: #3071a9;*/
    /*border: 0.2px solid #010101;*/
    /*border-radius: 2.6px;*/
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
  /*}*/
  /*input[type=range]::-ms-thumb {*/
    /*box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;*/
    /*border: 1px solid #000000;*/
    /*height: 36px;*/
    /*width: 16px;*/
    /*border-radius: 3px;*/
    /*background: #ffffff;*/
    /*cursor: pointer;*/
  /*}*/
  /*input[type=range]:focus::-ms-fill-lower {*/
    /*background: #3071a9;*/
  /*}*/
  /*input[type=range]:focus::-ms-fill-upper {*/
    /*background: #367ebd;*/
  /*}*/
</style>
<script>
  export default {
    props:['max'],
    data(){
      return {
        value : 5 ,
      }
    },
    methods: {
      onChg(e){
        this.value = e.target.value;
      }
    }
  }
</script>
