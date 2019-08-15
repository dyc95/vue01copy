// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'   /*导入当前目录下面的一个组件*/
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource)   /*全局注册*/
Vue.config.productionTip = false
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
