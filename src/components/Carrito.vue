<template lang="pug">
  .carrito
    span Tu carrito
    .cantidad
      span {{ total }}
    .productos
      template(v-for="(doc, index) in carro")
        p {{ doc.nombre }}
</template>
<script>
  import { mapState, mapGetters } from 'vuex';

  export default {
    // computed: {
    //   cantidad() {
    //     return this.$store.getters.total;
    //   },
    // },
    computed: {
      ...mapGetters(['total']),
      ...mapState(['carro']),
    },
  };
</script>

<style lang="stylus">
  .carrito
    background-color orange
    display flex
    justify-content center
    align-items center

    & span
        margin-right 10px
        font-weight 600

    .cantidad
      background-color #fff
      padding 15px
      font-weight 600

    .productos
      margin-left 10px

      p
        border 1px solid #ffffff
        border-radius 3px
        padding 3px
        display inline-block
        margin 0 5px
</style>
