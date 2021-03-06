import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import './routes/guard'
import store from './store/index'
import './styles/common.less'

import { 
  Button,
  Form,
  FormItem,
  Input,
  Popover,
  Popconfirm,
  Radio,
  Divider,
} from 'element-ui'

Vue.use(Button)
  .use(Form)
  .use(FormItem)
  .use(Input)
  .use(Popover)
  .use(Popconfirm)
  .use(Radio)
  .use(Divider)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
