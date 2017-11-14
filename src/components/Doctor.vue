<template lang="pug">
  .doctor
    h3 {{ doctor.nombre }}
    .doctor-details
      p {{ doctor.email }}
      p {{ doctor.ciudad }}

    .addCarro
      button(@click="anadirCarro(doctor)") Add to cart
</template>

<script>
  // import { mapMutations } from 'vuex';

  export default {
    name: 'Doctor',
    props: ['doctor'],
    methods: {
      anadirCarro(doctor) {
        this.$store.commit('anadirCarro', { nombre: doctor.nombre, ciudad: doctor.ciudad, email: doctor.email });
      },
    },
  };
</script>

<style lang="stylus">
  .doctor
    border 2px solid #35495e
    width 200px
    margin 5px 0

    h3
      margin 0
      padding 10px
      background-color orange

    .doctor-details
      padding 10px
      text-align left

      p
        margin 0
        padding 0

        &:before
          content '• '
    .addCarro
      button
        width 100%
        padding 5px
        font-weight 600
        border none
        cursor pointer
</style>