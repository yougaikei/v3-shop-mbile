<template>
    <div class="main-vue">
        <!-- Vant 的 Swipe 组件 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="sykblue">
            <van-swipe-item
                v-for="(item, index) in swipeData"
                :key="index">
                <img :src="item.img">
            </van-swipe-item>
        </van-swipe>

        <!-- Vant 的 Grid 宫格 组件 -->
        <van-grid :column-num="4">
            <van-grid-item
                v-for="(item, index) in gridData"
                :key="index"
                :icon="item.img"
                :text="item.info[0].value" />
        </van-grid>

        <!-- Vant 的 NoticeBar 通知栏 组件 -->
        <van-notice-bar left-icon="volume-o" :scrollable="false">
            <span>热点资讯公告:&ensp;</span>
            <van-swipe
                vertical
                class="notice-swipe"
                :autoplay="3000"
                :touchable="false"
                :show-indicators="false"
            >
                <van-swipe-item
                    v-for="(item, index) in noticeData"
                    :key="index"
                    v-text = "item.chiild[0].val"
                />  
            </van-swipe>
        </van-notice-bar>

       <!-- Vant 的 List 到底加载 组件 -->
       <van-list
            v-model:loading="state.loading"
            :finished="state.finished"
            finished-text="没有更多了"
            @load="initProductData"
        >

         <!-- 以下是 Vant 的 Grid 宫格 组件 -->
         <ProductListVue :productData="productData" />

       </van-list>
    </div>
</template>

<script setup>
// 引入并解构 ref, computed 组件
import { ref, computed, reactive } from 'vue'

// 引入 Home 的 getHomeData 头部组件数据获取方法
import { getHomeData } from "@/api/index";

// 引入 product 的 getProductData 商品列表数据获取方法
import { getProductList } from "@/api/product";

// 引入 ProductList 组件
import ProductListVue from "@/components/ProductList.vue";

// todo: ========== 首页配置数据 ==========
// 存储首页的所有数据 ( ref 响应式数据 )
const indexData = ref({})

// 封装首页的初始化数据方法
const initIndexData = async () => {
    // 解构 [ 数据中的 data ] 项
    const { data } = await getHomeData()

    // 判断是否获取到数据
    if(data.status !== 200) {
        // 未获取到数据则直接返回
        return;
    }

    // 将获取到的数据赋值给 indexData
    indexData.value = data.data
}

// 调用首页的初始化数据方法
initIndexData()

// 通过 computed 计算属性，将 indexData 中的数据，转换成组件需要的数据
// * A: 轮播图数据
// ? ※ 注: 此处使用 ? 可选链，防止数据为空时，程序报错
const swipeData = computed(() => indexData.value.swiperBg?.default.imgList.list)

// * B: 宫格数据
const gridData = computed(() => indexData.value.menus?.default.imgList.list)

// * C: 通知栏数据
const noticeData = computed(() => indexData.value.news?.default.newList.list)
// ! ========== 首页配置数据 结束 ==========

// todo: ========== 商品列表数据 ==========
const productData = ref([])

// 配置到底加载的数据
const state = reactive({
    loading: false,
    finished: false
})

// 设置 page 页码
let page = 1

// 设置 limit 条数
let limit = 4

// 封装商品列表数据获取方法
const initProductData = async () => {
    // 解构 [ 数据中的 data ] 项
    const { data } = await getProductList({ 
        limit,
        page
    })

    // 判断是否获取到数据
    if(data.status !== 200) {
        // 未获取到数据则直接返回
        return;
    }

    // 将获取到的数据添加到 productListData
    productData.value.push(...data.data)

    // 将本次加载状态更改为 false
    state.loading = false

    // 判断是否已经加载完毕
    if(data.data.length < limit) {
        state.finished = true;
        return;
    }

    // 页码自增
    page++
}

// 调用商品列表数据获取方法
// initProductData()


// ! ========== 商品列表数据 结束 ==========

</script>

<style lang="scss" scoped>
// 设置主体
.main-vue{

    // 设置轮播图
    .my-swipe{
        
        // 设置轮播图的高度
        img{
            width: 100%;
            height: 170px;
        }
    }

    // 设置通知栏
    :deep(.van-notice-bar__content) {
        display: flex;
        align-items: center;
    }
  .notice-swipe {
        height: 40px;
        line-height: 40px;
    }
}
</style>