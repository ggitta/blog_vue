import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
import home from '@/views/home'
import blogs from '@/views/blogs'

Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/',
            component: index,
            children: [
                {
                    path: '/home',
                    component: home
                },{
                    path: '/blogs',
                    component: blogs
                }
            ],
            redirect: '/home'
        }
    ]
})
