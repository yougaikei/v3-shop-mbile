import { createRouter, createWebHashHistory } from 'vue-router'

// 配置路由规则
const routes = [
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
    },
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home/index.vue')
    },
    {
        path: '/category',
        name: 'Category',
        component: () => import('@/views/Category/index.vue')
    },
    {
        path: '/category-detaill/:categoryId',
        name: 'CategoryDetaill',
        component: () => import('@/views/CategoryDetaill/index.vue'),
        props: true
    },
    {
        path: '/order-confirm',
        name: 'OrderConfirm',
        component: () => import('@/views/OrderConfirm/index.vue'),
        props: true
    },
    {
        path: '/order',
        name: 'Order',
        component: () => import('@/views/Order/index.vue')
    },
    {
        path: '/order-detail/:orderId',
        name: 'OrderDetail',
        component: () => import('@/views/OrderDetail/index.vue')
    },
    {
        path: '/pay',
        name: 'Pay',
        component: () => import('@/views/Pay/index.vue')
    },
    {
        path: '/product/:productId',
        name: 'Product',
        component: () => import('@/views/Product/index.vue')
    },
    {
        path: '/recommend',
        name: 'Recommend',
        component: () => import('@/views/Recommend/index.vue')
    },
    {
        path: '/cart',
        name: 'Cart',
        component: () => import('@/views/Cart/index.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import('@/views/Search/index.vue')
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('@/views/User/index.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router