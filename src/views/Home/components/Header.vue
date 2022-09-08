<template>
    <div class="home-nav">
        <!-- Logo 区域 -->
        <img :src='Logo' alt="Logo" height="20">
        <!-- 搜索区域 -->
        <div class="home-search">
            <van-icon name="search" size="0.5rem" />
        </div>
        <!-- 分类跳转 -->
        <van-icon name="wap-nav" />
    </div>
</template>

<script setup>
    import Logo from '@/assets/vue.svg';
</script>

<style lang="scss" scoped>
// 主体部分
.home-nav {
    position: fixed !important;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #fff;
    padding-right: 10px;
    box-sizing: border-box;

    // Logo
    img {
        margin: 0 10px;
    }

    // 搜索区域
    .home-search{
        width: 100%;
        background-color: #f7f7f7;
        border-radius: 10px;
        padding-left: 12px;
        margin-right: 10px;
    }
}
</style>
