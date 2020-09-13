import Vue from 'vue';
import App from './App.vue';
import store from "@/store";
import "bootstrap/dist/css/bootstrap.min.css";
import Toasted from 'vue-toasted';
import Vuelidate from 'vuelidate';

Vue.config.productionTip = false;

Vue.use(Toasted);
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  store,
  render: h => h(App),
});
