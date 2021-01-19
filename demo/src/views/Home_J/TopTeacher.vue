<template>
    <div class="TopTeacher_box">
        <!-- 头部导航分类 -->
        <van-row>
            <van-col span="20">
                <van-tabs v-model="active">
                    <van-tab title="全部"></van-tab>
                    <van-tab title="英语"></van-tab>
                    <van-tab title="语文"></van-tab>
                    <van-tab title="数学"></van-tab>
                    <van-tab title="政治"></van-tab>
                </van-tabs>
            </van-col>
            <van-col span="4" @click="show=true">
                <van-icon name="more-o" />筛选
            </van-col>
        </van-row>
        <!-- 弹出层内容 -->
        <van-popup v-model="show" position="top" :style="{ height: '15%' }">
            <Return>名师</Return>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
                <van-dropdown-item v-model="value2" :options="option2" />
            </van-dropdown-menu>
        </van-popup>

        <!-- 老师列表 -->
        <div class="teacher">
            <div class="lis" v-for="(item,index) in 20" :key="index" @click="TeaccherDetail()">
                <img src="/images_J/17.png">
                <div>
                <p><b>司徒末老师</b><span class="ccc">清华大学</span></p>
                <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
                </div>
            </div>
        </div>

    </div>  
</template>

<script>
import Return from '@/components/return'
export default {
    data() {
        return {
            active:0,
            show:false,
            // 隐藏页导航数据
            value1: 0,
            value2: 'a',
            option1: [
                { text: '全分类部', value: 0 },
                { text: '全部', value: 1 },
                { text: '高一', value: 2 },
                { text: '高二', value: 3 },
                { text: '高三', value: 4 },
                { text: '初一', value: 5 },
                { text: '初二', value: 6 },
            ],
            option2: [
                { text: '筛选', value: 'a' },
                { text: '全部', value: 'b' },
                { text: '物理', value: 'c' },
                { text: '化学', value: 'd' },
                { text: '生物', value: 'e' },
                { text: '历史', value: 'f' },
                { text: '数学', value: 'g' },
            ],

        }
    },
    methods: {
        // 跳转详情页
        TeaccherDetail(){
            this.$router.push({name:'TeaccherDetail',params:196})
        }
    },
    components:{
        Return,
    }
}
</script>
<style lang="scss" scoped>
    .TopTeacher_box::-webkit-scrollbar{
        display: none;
    }
    .TopTeacher_box{
        width: 100%;
        height:calc(100% - 1rem);
        overflow-x: hidden;
        overflow-y: auto;
    }
    .van-col--4{
        display: flex;
        align-items: center;
        font-size: .3rem;
        line-height: .79rem;
    }
    // 老师详情
    .teacher{
        width: 100%;
        height: 6rem;
        // background-color: salmon;
        font-size: .3rem;
        padding: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .lis{
        width: 100%;
        height: 32%;
        // background-color: sandybrown;
        margin: .1rem 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 1.2rem;
            height: 1.2rem;
            margin-right: .2rem;
        }
        div{
            height: 1rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            b{
            font-weight: 600;
            margin-right: .2rem;
            }
            .ccc{
            font-size: .25rem;
            color: #aaaaaa;
            }
            .detail{
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 1;
                overflow: hidden;
            }
        }
        }
    }
</style>