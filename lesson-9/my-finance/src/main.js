import Vue from 'vue'
import App from './App.vue'
import store from "@/store";
// import BootstrapVue from 'bootstrap-vue';
// import Bootstrap from 'bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

Vue.config.productionTip = false

// Vue.use(Bootstrap);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
