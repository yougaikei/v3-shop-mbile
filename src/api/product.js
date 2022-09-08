// 引入封装的 request.js
import request from '@/utils/request'

// 获取商品列表的请求数据
export const getProductList = params => request({
    method: 'GET',
    url: '/products',
    params
})