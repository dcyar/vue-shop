import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    medics: [
      {
        nombre: 'Homero',
        ciudad: 'Springield',
        email: 'homero@mail.com',
      },
      {
        nombre: 'Marge',
        ciudad: 'Springield',
        email: 'marge@mail.com',
      },
      {
        nombre: 'Bart',
        ciudad: 'Springield',
        email: 'bart@mail.com',
      },
      {
        nombre: 'Lisa',
        ciudad: 'Springield',
        email: 'lisa@mail.com',
      },
    ],
    carro: [
    ],
  },
  getters: {
    total: state => state.carro.length,
  },
  mutations: {
    anadirDoctor: (state, doctor) => state.medics.unshift(doctor),
    anadirCarro: (state, doctor) => state.carro.unshift(doctor),
  },
});

export default store;
