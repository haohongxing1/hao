
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import "./iconfont/iconfont.css"
import "./assets/animate.css"

import Header from './components/public/Header' 
import Footer from './components/public/Footer'
import Content from './components/public/Content'

import { Search } from 'mint-ui'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Header.name,Header)
Vue.component(Footer.name,Footer)
Vue.component(Content.name,Content)

Vue.component(Search.name, Search)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.config.productionTip = false
Vue.use(VueResource)


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
