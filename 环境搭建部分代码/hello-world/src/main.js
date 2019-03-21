import Vue from 'vue'
import App from './App1.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
