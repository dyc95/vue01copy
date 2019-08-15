import Vue from 'vue'
import Router from 'vue-router'
import EmpList from '@/components/EmpList'
import EmpAdd from '@/components/EmpAdd'
import EmpUpdate from '@/components/EmpUpdate'
import EmpUpload from '@/components/EmpUpload'

Vue.use(Router)

export default new Router({
	mode:'history',   /*去除路径中的"#"*/
  routes: [
    {
      path: '/',
      name: 'EmpList',
      component: EmpList
    },
    {
      path: '/EmpAdd',
      name: 'EmpAdd',
      component: EmpAdd
    },
    {
      path: '/EmpUpdate',
      name: 'EmpUpdate',
      component: EmpUpdate
    },
    {
      path: '/EmpUpload',
      name: '/EmpUpload',
      component: EmpUpload
    }
  ]
})
