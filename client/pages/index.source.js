import Vue from 'vue'


const VueResource = require('vue-resource').default;
Vue.use(VueResource);

var App = require('@components/index.vue');
new Vue({ el: '#app', $serveData: {}, render: h => h(App) });
