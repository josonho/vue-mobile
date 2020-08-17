import Vue from 'vue'
import App from './App.vue';
import { Button, Card } from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible';

Vue.use(Button);
Vue.use(Card);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
