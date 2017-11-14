<template lang="pug">
  #app
    header
      span Vue.js PWA
    nav
      router-link(to='/') Home
      router-link(to='/about') About
    main
      carrito
      router-view
</template>

<script>
  import Carrito from './components/Carrito';

  export default {
    components: {
      Carrito,
    },
    name: 'app',
  };
</script>

<style lang="stylus">
  body
    margin 0
  
  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale

  main 
    text-align center
  
  header 
    margin 0
    height 56px
    padding 0 16px 0 24px
    background-color #35495E
    color #ffffff

  header span 
    display block
    position relative
    font-size 20px
    line-height 1
    letter-spacing .02em
    font-weight 600
    box-sizing border-box
    padding-top 16px

  nav 
    background-color #35495E
    text-align center
    display flex
    justify-content space-around

    a
      color #ffffff
      text-decoration none
      font-weight bold
      width 100%
      padding 20px 0
      transition background-color .4s ease

      &:hover
        background-color #415a74
</style>
