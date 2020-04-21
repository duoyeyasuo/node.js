import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import("../views/Index.vue"),
    children:[
      { path:"",redirect: "/home" },
      { path:"/home",component: ()=>import("../views/Home.vue"),name:"home" },
      { path:"/order",component: ()=>import("../views/Order.vue"),name:"order" },
      { path:"/me",component: ()=>import("../views/Me.vue"),name:"me" },
    ]
  },{
    path: '/login',
    name: 'index',
    component: ()=>import("../views/Login.vue")
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局路由守卫  下面判断不够严谨
router.beforeEach((to, from, next) => {
    let islogin = localStorage.ele_login ? true : true;
    if(to.path == "/login"){
      next()
    }else{
      // 看一下，你是否登录了
      islogin ? next() : next("/login")
    }
})

export default router
