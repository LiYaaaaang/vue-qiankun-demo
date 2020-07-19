<template>
	<div id="root">
		<template v-if="hasToken">
			<el-container class="root-container">
				<!-- 头部区域 -->
				<el-header>
					<div class="header-title">
						<img src="./assets/images/topLogo.png" alt />
						<span>运营后台管理系统</span>
					</div>
					<div class="pager-msg">广播：{{ subappMsg }}</div>
					<el-button type="info" @click="logout">{{ username }}退出</el-button>
				</el-header>
				<!-- 页面主体区域 -->
				<el-container class="main-container">
					<!-- 侧边栏 -->
					<menu-aside></menu-aside>
					<!-- 右侧内容主体 -->
					<el-main>
						<!-- 子应用容器 -->
						<div id="subapp-viewport" class="app-view-box"></div>
					</el-main>
				</el-container>
			</el-container>
		</template>
		<!-- 非登录视图 -->
		<div v-else class="login-view-box">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import MenuAside from './components/MenuAside';
export default {
	name: 'root',
	computed: {
		hasToken() {
			return !!sessionStorage.getItem('token');
		},
		username() {
			return this.$store.getters.userInfo.username;
		},
		subappMsg() {
			return this.$store.getters.appCurrentMsg;
		},
	},
	methods: {
		logout() {
			// 删除storage的数据
			sessionStorage.clear();
			this.$router.push('/login');
			// 删除vuex中的数据,让当前的界面刷新,因为刷新界面vuex就会重新初始化
			window.location.reload();
		},
	},
	components: {
		MenuAside,
	},
};
</script>
<style lang="scss">
.root-container {
	height: 100%;
	.el-header {
		background-color: #373d41;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #fff;
		font-size: 20px;
		.header-title {
			display: flex;
			align-items: center;
			span {
				margin-left: 15px;
			}
		}
		.pager-msg {
			margin-right: 100px;
		}
	}
	.main-container {
		.el-main {
			background-color: #eaedf1;
			.app-view-box {
				width: 100%;
				padding: 12px;
				box-sizing: border-box;
			}
		}
	}
}

.login-view-box {
	width: 100%;
	height: 100%;
}
</style>
