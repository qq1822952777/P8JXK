<template>
    <div id="main">

        <router-view></router-view>

        <van-tabbar v-model="active" route>
            <van-tabbar-item icon="home-o" to="/Home">首页</van-tabbar-item>
            <van-tabbar-item icon="search" to="/Course">课程</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/AuoutCourse">约课记录</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to="/Profile">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            active:0
        }
    },
    mounted() {
        
    },
}
</script>
<style lang="scss">
    
</style>