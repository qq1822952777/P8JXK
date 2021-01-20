<template>
    <div class="TopTeachers_box">
        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            >
            <div v-for="item in list2" :key="item.id" class="list" @click="goTeacterDetil(item.id)">
                <img :src="item.avatar">
                <div>
                    <p>{{item.real_name}}</p>
                    <span>{{item.introduction}}</span>
                </div>
                
            </div>
        </van-list>
    </div>
</template>

<script>
import { GetMoreTeacher } from '@/utils/api'
export default {
    data() {
        return {
            list: [],
            list2:[],
            loading: false,
            finished: false,
        }
    },
    methods: {
        // 加载事件
        onLoad() {
        // 异步更新数据
        // setTimeout 仅做示例，真实场景中一般为 ajax 请求
        setTimeout(() => {
            if(this.list2.length <= 10){
                for (let i = this.list2.length; i < this.list.length; i++) {
                    this.list2.push(this.list[i]);
                }
            }
            
            // 加载状态结束
            this.loading = false;
            // 数据全部加载完成
            if (this.list2.length >= this.list.length) {
                this.finished = true;
            }
        }, 1000);
        },
        // 去详情页
        goTeacterDetil(id){
            this.$router.push({name:'TeaccherDetail',params:{id}})
        }
    },
    mounted() {
        GetMoreTeacher({page:1,limit:14}).then((res)=>{
            this.list = res.list
            for (let i = 0; i < 10; i++) {
                    this.list2.push(this.list[i]);
            }
            // console.log(res.list[0]);
        })
    },
}
</script>
<style lang="scss" scoped>
    .TopTeachers_box::-webkit-scrollbar{
        display: none;
    }
    .TopTeachers_box{
        width: 100%;
        height:100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .list{
        width: 100%;
        height: 1.5rem;
        font-size: .3rem;
        padding: .2rem;
        margin: .2rem 0;
        // background-color: blueviolet;
        display: flex;
        align-items: center;
        img{
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin-right: .2rem;
        }
        div{
            width: 70%;
            height: 1rem;
            // background-color: chartreuse;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            color: rgb(78, 78, 78);
        }
    }
</style>