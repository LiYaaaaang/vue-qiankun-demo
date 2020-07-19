<template>
    <div class="about">
        <h1>这里是二级菜单——后端开发界面</h1>
        <button
            class="request-btn"
            @click="requestPersonInfo"
            v-permission="{action:'edit',effect:'display'}"
        >点击获取人员信息</button>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        async requestPersonInfo() {
            try {
                const res = await this.$http.get("/person");
                console.log(res);
            } catch (err) {
                console.log(err);
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.about {
    .request-btn {
        position: relative;
        margin-top: 50px;
        line-height: 40px;
        cursor: pointer;
        color: #409eff;
        background: #ecf5ff;
        border-color: #b3d8ff;
    }
}
</style>
