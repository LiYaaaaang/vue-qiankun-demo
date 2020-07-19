<template>
    <div id="subapp-job">
        <div id="nav">
            <router-link to="/front">前端开发</router-link>|
            <router-link to="/back">后端开发</router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
#subapp-job {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
