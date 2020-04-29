import Vue from 'vue'
import App from './App.vue'

import './styles/common.less'

Vue.config.productionTip = false

import KyanButton from '@/kyan-components/button'

Vue.component('kyan-button', KyanButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
