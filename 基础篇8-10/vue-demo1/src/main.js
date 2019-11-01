import Vue from 'vue'
import App from './App.vue'
import TodoList from './components/TodoList.vue'

Vue.component('todo-list', TodoList)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
