<template lang="pug">
  .hello
    h1 Welcome to Your Vue.js PWA Awesome
    h2 Essential Links
    
    form(@submit.prevent="handleCreateDoctor()")
      input(type="text" v-model="newDoctor.nombre" placeholder="nombre")
      input(type="text" v-model="newDoctor.ciudad" placeholder="ciudad")
      input(type="text" v-model="newDoctor.email" placeholder="email")
      input(type="submit" value="Nuevo")

    .doctors
      template(v-for="(doctor, index) in medics")
        doctor(:doctor="doctor" :key="index")
</template>

<script>
  import { mapState } from 'vuex';
  import Doctor from './Doctor';
  
  export default {
    name: 'hello',
    components: {
      Doctor,
    },
    data() {
      return {
        newDoctor: {
          nombre: '',
          ciudad: '',
          email: '',
        },
      };
    },
    computed: mapState(['medics']),
    methods: {
      handleCreateDoctor() {
        this.$store.commit('anadirDoctor', {
          nombre: this.newDoctor.nombre,
          ciudad: this.newDoctor.ciudad,
          email: this.newDoctor.email,
        });
  
        this.newDoctor.nombre = '';
        this.newDoctor.ciudad = '';
        this.newDoctor.email = '';
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">
  form
    margin 25px 0
  .doctors
    display flex
    justify-content space-around
    flex-wrap wrap
</style>
