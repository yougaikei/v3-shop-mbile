// 引入封装的 request.js
import request from '@/utils/request'

// 获取首页的请求数据
export const getHomeData = () => request({
    method: 'GET',
    url: '/v2/diy/get_diy/moren'
})