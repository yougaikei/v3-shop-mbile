<template>
		<!-- 公共顶部 -->
		<HeaderVue />

		<!-- 主体部分 -->
		<MainVue class="main-vue" />

		<!-- 公共底部 -->
		<FooterVue />
</template>

<script setup>
	// 引入固定头部
	import HeaderVue from './components/Header.vue';
	// 引入主体
	import MainVue from './components/Main.vue';
	// 引入固定底部
	import FooterVue from '@/components/footer.vue';
</script>

<style lang="scss" scoped>
	.main-vue{
		background-color: #f7f7f7;
		padding: 50px 0;
	}
</style>
