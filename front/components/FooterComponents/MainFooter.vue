<template>
  <footer class="container-fluid shabnam">
    <footer-top-menu></footer-top-menu>
    <footer-text></footer-text>
    <footer-note></footer-note>
  </footer>

</template>
<style>
  footer{
    background-color:#F2F3F4;
    height: auto;
  }
</style>
<script>
  import FooterTopMenu from '~/components/FooterComponents/FooterTopMenu.vue'
  import FooterText from '~/components/FooterComponents/FooterText.vue'
  import FooterNote from '~/components/FooterComponents/FootNote.vue'

  export default {
    components:{
      FooterTopMenu,
      FooterText,
      FooterNote
    }
  }
</script>
