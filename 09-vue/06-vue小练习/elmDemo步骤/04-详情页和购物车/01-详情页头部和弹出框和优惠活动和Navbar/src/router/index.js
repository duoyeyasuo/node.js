import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ()=>import("../views/Index.vue"),
    children:[
      // { path:"",redirect: "/home" },
      // { path:"",redirect: "/search" },
      { path:"",redirect: "/shop" },
      { path:"/home",component: ()=>import("../views/Home.vue"),name:"home" },
      { path:"/order",component: ()=>import("../views/Order.vue"),name:"order" },
      { path:"/me",component: ()=>import("../views/Me.vue"),name:"me" },
      { path:"/address",component: ()=>import("../views/Address.vue"),name:"address" },
      { path:"/city",component: ()=>import("../views/City.vue"),name:"city" },
      { path:"/search",component: ()=>import("../views/Search.vue"),name:"search" },
      { 
        path:"/shop",
        component: ()=>import("../views/Shop/Shop.vue"),
        name:"shop" ,
        children:[
          { path:"/goods",component: ()=>import("../views/Shop/Goods"),name:"goods" },
          { path:"/comments",component: ()=>import("../views/Shop/Comments"),name:"comments" },
          { path:"/seller",component: ()=>import("../views/Shop/Seller"),name:"seller" },
        ]
      },
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
  linkActiveClass:"active",
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
