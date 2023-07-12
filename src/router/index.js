/*
 * @Author: Qing Li
 * @Date: 2022-10-30 12:55:30
 * @LastEditTime: 2023-03-10 15:14:53
 * @LastEditors: Qing Li
 * @Description: 
 * @FilePath: \auto-database-client\src\router\index.js
 * @ascription mhis6
 */
// 导入Vue和VueRouter包
import Vue from 'vue'
import VueRouter from 'vue-router'

// 把 VueRouter 安装为 Vue 项目的插件
// Vue.use() 函数的作用，就是来安装插件的
Vue.use(VueRouter)

import page from '../views/page'
import page1 from '../views/page1'
import page2 from '../views/page2'
import childpage1 from '../views/child-page1'
import childpage2 from '../views/child-page2'


const router = new VueRouter(
  {
    routes: [
      // 路由规则
      { path: '/home', component: page, name: '首页', icon: 'el-icon-s-home' },
      { path: '/page1', component: page1, name: '页面1', icon: 'el-icon-s-custom' },
      {
        path: '/page2', component: page2, name: '页面2', icon: 'el-icon-menu', children: [
          { path: '/child1', component: childpage1, name: '子页面1', icon: 'el-icon-s-promotion' },
          { path: '/child2', component: childpage2, name: '子页面2', icon: 'el-icon-share' },
        ]
      }
    ]
  })


export default router