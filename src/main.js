// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Jot from './Jot'
import router from './router'
import bulma from './assets/css/bulma.css'
import helper from './assets/css/helper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#jot',
  router,
  template: '<Jot/>',
  components: { Jot }
})


