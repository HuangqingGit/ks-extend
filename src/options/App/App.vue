<template>
    <div id="app">
        <el-container>
            <el-header class="el-icon-setting"> 扩展配置</el-header>
            <el-main>
                <el-card></el-card>
                <el-card></el-card>
                <el-card></el-card>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'app',
    // 页面启动时执行
    created() {

    },

    // 页面函数
    methods: {
        openbk() {
            alert('我是背景页')
        }
    }
}
</script>

<style>
* {
    padding: 0;
    margin: 0;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 14px;
}
#app {
    height: calc(100vh);
}
.el-container {
    height: calc(100vh);
}
.el-header {
    font-size: 25px;
    line-height: 60px;
    background: #ffa600;
    color: #fff;
}
.el-main {
    background: #f2f6fc;
    display: flex;
    justify-content: space-around;
}
.el-card {
    width: 25%;
}
</style>


