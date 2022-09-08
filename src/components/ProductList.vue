<template>
    <!-- 商品列表 -->
    <!-- 
        @columnNum: 列数
        @gutter: 格子间距
        @center: 是否居中 off
        @border: 是否显示边框 off
     -->
    <van-grid
        class="product-list"
        :column-num="2"
        :gutter="10"
        :center="false"
        :border="false"
    >
        <van-grid-item
            v-for="item in productData"
            :key="item.id"
        >
            <!-- 商品图片 -->
            <van-image
                :src="item.image"
                height="165"
            />

            <!-- 商品标题 -->
            <p class="title" v-text="item.store_name"/>

            <!-- 商品价格 -->
            <p class="price" v-text="`￥ ${item.price}`" />

            <!-- 商品销量 -->
            <p class="sales" v-text="`已售 ${ item.sales } 件`" />
        </van-grid-item>
    </van-grid>

</template>

<script setup>
// 接收 productListData 参数
const { productData } = defineProps({
    productData: {
        type: Array,
        required: true
    }
})
</script>

<style lang="scss" scoped>
.product-list {
    margin: 10px 0;

    // 设置穿透样式
    :deep(.van-grid-item__content) {
        border-radius: 10px;
        overflow: hidden;
        padding: 0;
        margin-bottom: 10px;
    }

    // 设置标题样式
    .title {
        font-size: 14px;
        color: #333;
        padding: 5px 8px 0;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }

    // 设置价格样式
    .price {
        font-size: 22px;
        color: #ee3e3e;
        padding-left: 6px;
        font-weight: 700;
    }

    // 设置销量样式
    .sales {
        font-size: 14px;
        color: #ccc;
        padding-left: 6px;
    }
}
</style>