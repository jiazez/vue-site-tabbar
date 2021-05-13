import Vue from 'vue'
import App from './App.vue'
import router from './router'


import { Dropdown, DropdownMenu, DropdownItem, Tabs, TabPane } from 'element-ui';
Vue.config.productionTip = false
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tabs)
Vue.use(TabPane)


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
