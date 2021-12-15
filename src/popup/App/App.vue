<template>
    <div class="app">
        <div class="header">
            <div>
                <span class="timeico el-icon-time"></span>
                <span class="time">{{times}}</span>
            </div>
            <el-tooltip class="item" effect="dark" content="设置" placement="bottom-start">
                <div class="setting el-icon-setting" @click="open()"></div>
            </el-tooltip>
        </div>
        <div class="main">

        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            times: this.dateFormat()
        }
    },

    // 页面启动时执行
    created () {
        setInterval(() => {
            this.times = this.dateFormat();
        }, 500)
    },

    // 页面函数
    methods: {

        open () {
            this.$message('这是一条消息提示');

        },

        // 时间函数
        dateFormat () {
            let time = new Date();
            let y = time.getFullYear();
            let m =
                time.getMonth() + 1 < 10
                    ? "0" + time.getMonth() + 1
                    : time.getMonth() + 1;
            let d = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
            let h =
                time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
            let n =
                time.getMinutes() < 10
                    ? "0" + time.getMinutes()
                    : time.getMinutes();
            let s =
                time.getSeconds() < 10
                    ? "0" + time.getSeconds()
                    : time.getSeconds();
            return y + "-" + m + "-" + d + " " + h + ":" + n + ":" + s;
        },
    }
}
</script>

<style>
[v-cloak] {
    display: none;
}
* {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    font-size: 14px;
    padding: 0;
    margin: 0;
}
.app {
    width: 300px;
    min-height: 200px;
}
.header {
    padding: 5px;
    display: flex;
    justify-content: space-between;
    background: #ff5000;
}
.timeico {
    font-size: 16px;
    border-radius: 50%;
    padding: 3px;
    color: #fff;
    font-weight: 700;
    margin-right: 10px;
}
.time {
    line-height: 23px;
    font-weight: 700;
    color: #fff;
}

.setting {
    font-size: 17px;
    border-radius: 5px;
    padding: 3px;
    color: #fff;
}

.setting:hover {
    background: #c0c4cc;
}

.main {
    padding: 10px;
}
</style>
