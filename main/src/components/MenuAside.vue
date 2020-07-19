<template>
    <!-- 侧边栏 -->
    <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <!-- 侧边栏菜单区域 -->
        <!-- collapse-transition开启的是折叠时title文字的隐藏动画 -->
        <el-menu
            background-color="#333744"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
            :collapse-transition="false"
            :default-active="activePath"
            :default-openeds="openedMenu"
        >
            <!-- 一级菜单 -->
            <el-submenu v-for="item in menulist" :key="item.id" :index="item.id">
                <!-- 一级菜单的模板区域 -->
                <template slot="title">
                    <!-- 图标 -->
                    <i :class="['iconfont', item.icon]"></i>
                    <!-- 文本 -->
                    <span>{{ item.authName }}</span>
                </template>
                <!-- 二级菜单 -->
                <el-menu-item
                    v-for="subItem in item.children"
                    :key="subItem.id"
                    :index="subItem.id"
                    @click="
						saveNavState(subItem.url);
						goto(subItem.url, item.module);
					"
                >
                    <template slot="title">
                        <!-- 图标 -->
                        <i class="el-icon-menu"></i>
                        <!-- 文本 -->
                        <span>{{ subItem.authName }}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>

<script>
import { routerGo } from "../utils/utils"; // 引入跨应用路由跳转
export default {
    name: "Menu-Aside",
    data() {
        return {
            // 是否折叠
            isCollapse: false,
            // 被激活的链接地址
            activePath: ""
            // openedMenu: [],
        };
    },
    computed: {
        // 左侧菜单数据
        menulist() {
            return this.$store.getters.userApp;
        },
        openedMenu() {
            console.log(this.$store.getters.userApp);
            return [];
        }
    },
    created() {
        this.activePath = window.sessionStorage.getItem("activePath");
        // this.menulist = this.userApp;
        // console.log(this.menulist);
    },
    methods: {
        // 点击按钮，切换菜单的折叠与展开
        toggleCollapse() {
            this.isCollapse = !this.isCollapse;
        },
        // 保存链接的激活状态
        saveNavState(activePath) {
            window.sessionStorage.setItem("activePath", activePath);
            this.activePath = activePath;
        },
        // 跨应用路由跳转
        goto(href, title) {
            routerGo(href, title);
        }
    }
};
</script>
<style lang="scss" scoped>
.el-aside {
    height: 100%;
    background-color: #333744;
    .toggle-button {
        background-color: #4a5064;
        font-size: 10px;
        line-height: 24px;
        color: #fff;
        text-align: center;
        letter-spacing: 0.2em;
        cursor: pointer;
    }
    .el-menu {
        border-right: none;
        .iconfont {
            margin-right: 10px;
        }
    }
}
</style>
