<template>
  <div class="slider-container shabnam container-fluid" >
    <div class="row" >
      <div class="col-md-3 col-xs-3">
        <span class="label"> {{label}}</span>
      </div>
      <div class="col-xs-3 col-md-3 ">
        <span class="value"> {{value}}&nbsp; از &nbsp;{{max}}</span>
      </div>
      <div class="col-md-5 col-xs-6">
        <input  v-bind:disabled="disabled" class="noSelect" type="range" min="1" :max="max" step="1" :value="value" v-on:input="onChg($event)"/>
      </div>
    </div>
  </div>
</template>
<style>
  .slider-container span {

    color: royalblue;
    font-size: 17px;
    font-weight: bold;
  }
  input[type="range"]{
    direction: ltr;
    text-align: left;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 6px;
    height: 4px;
    background-image:
      -webkit-gradient(
      linear,
      left top,
      right top,
      color-stop(0.15, royalblue),
      color-stop(0.15, royalblue)
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

  input[type=range]:focus {
    outline: none;
  }

</style>
<script>
  export default {
    props: ['max', 'value' , 'label','disabled'],
    data(){
      return {
//        pass : true
      }
    },
    methods: {
      onChg(e) {
        this.$emit('input', e.target.value)
      },
//      pass(){
//        return true;
//      }
    }
  }
</script>
