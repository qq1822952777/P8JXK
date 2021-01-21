<template>
    <div class="TeaccherDetail_box">
        <header>
        </header>
        <div class="goBack" @click="goBack()">＜</div>
        <!-- 老师简介 -->
        <div class="teacher" v-for="item in teacherDetiles" :key="item.id">
            <div class="top">
                <div class="cotent">
                    <img :src="item.avatar">
                    <div>
                        <p><b>{{item.real_name ? item.real_name : 'xxx'}}老师</b></p>
                        <p class="ccc">
                            <span>男</span>
                            <span>28岁</span>
                            <span>10年教龄</span>
                            <span>关注数1012</span>
                        </p>
                    </div>
                </div>
                <div :class=" careClass ?'isguanzhu':'guanzhu'" @click="IsTeacherAttention()">
                    <div class="yuan"><van-icon name="like" /></div>
                    <div class="org">{{careClass?'已关注':'关注'}}</div>
                </div>
            </div>
            <div class="bottom">
                    <span>创造力丰富</span>
                    <span>为人和善</span>
                    <span>讲课方式新颖</span>
                    <span>创造力丰富</span>
            </div>
        </div>
        <!-- 评价信息 -->
        <van-sticky>
                <van-tabs v-model="active">
                    <van-tab title="老师信息"></van-tab>
                    <van-tab title="学员评价"></van-tab>
                    <van-tab title="主讲课程"></van-tab>
                </van-tabs>
        </van-sticky>        
        <!-- 老师信息 -->
        <div class="teacherinfo" v-show="active === 0">
            <div class="scrollbox">
                    <div class="li" v-for="item in teacherDetiles" :key="item.id">
                        <span class="ccc">代名词</span>
                        <span>{{item.introduction}}</span>
                    </div>
            </div>            
        </div>
        <!-- 学员评价 -->
        <div class="studentinfo" v-show="active === 1">
            <div class="scrollbox">
                    <div class="li" v-for="(item,index) in 10" :key="index">
                        <div class="top">
                            <img src="/images_J/19.png">
                            <div>
                                <b>AU辅助</b>
                                <p class="ico">
                                    <van-icon name="star" v-for="(item,index) in 4" :key="index">
                                    </van-icon>
                                </p>
                            </div>
                        </div>
                        <div class="text">
                            <p class="titlep">
                                <span>创造力丰富</span>
                                <span>为人和善</span>
                                <span>讲解方式细腻</span>
                            </p>
                            <p class="contp">
                                很棒的课程，对于入门来说好极了，非常棒的，爱了爱了
                            </p>
                            <p class="timep">2018-01-01 18:00</p>
                        </div>
                    </div>
            </div>            
            <!-- <div class="teacheryes" @click="make()">立即约课</div> -->
        </div>
        <!-- 主流课程 -->
        <div class="teacherhost" v-show="active === 2">
            <div class="scrollbox">
                    <div v-show="zjkc.length != 0" class="li" v-for="item in zjkc" :key="item.id" @click="gotoTeacherDetile(item.id)">
                        <img :src="item.cover_img">
                        <div>
                            <b>{{item.title}}</b>
                            <p class="ccc">讲师：{{item.teachers_list[0].teacher_name}}</p>
                            <p class="price">
                                <span class="red">{{item.sales_num}}人以购买</span>
                                <span class="pic">
                                    <span>{{ item.price == 0 ? '免费' : item.price + '元' }}</span>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div v-show="zjkc.length == 0" class="kong">该老师暂时没有哦~</div>
            </div>            
            <!-- <div class="teacheryes" @click="make()">立即约课</div> -->
        </div>
    </div>  
</template>

<script>
import { Toast } from 'vant';
import { teacherDetile,teacherDiscussDetile,isTeacherAttention,MainCourse } from '@/utils/api'
export default {
    data() {
        return {
            careClass:Boolean,
            active:0,
            teacherDetiles:[],
            zjkc:[]
        }
    },
    methods: {
        // 返回上一步
        goBack() {
            this.$router.go(-1);
        },
        // 关注/取关
        IsTeacherAttention(){
            isTeacherAttention({id:Number(this.$route.params.id)}).then((res)=>{
                console.log(res);
                if(res.flag == 2){
                    this.careClass = true
                    Toast({
                    message: '收藏',
                    icon: 'like-o',
                    });
                }else{
                    this.careClass = false
                    Toast({
                    message: '撤销'
                    });
                }
            })
        },
        // 点击主讲课程跳至课程详情页
        gotoTeacherDetile(id){
            this.$router.push({path:'/particulars',query:{id}})
        },
    },
    mounted() {
        // 获取老师
        teacherDetile(this.$route.params.id).then((res)=>{
            this.teacherDetiles = []
            this.teacherDetiles.push(res.teacher)
            if(res.flag == 2){
                this.careClass = true
            }else{
                this.careClass = false
            }
            // console.log(res);
        })
        // 获取老师主讲课程
        MainCourse({limit:1,page:1,teacher_id:this.$route.params.id}).then((res)=>{
            this.zjkc = res.list
            // console.log(res.list);
        }),
        // 获取评论信息  #### 数据为空
        teacherDiscussDetile({limit:5,page:1,teacher_id:Number(this.$route.params.id)}).then((res)=>{
            // console.log(res);
        })
        
    },
}
</script>
<style lang="scss" scoped>
    .TeaccherDetail_box::-webkit-scrollbar{
        display: none;
    }
    .TeaccherDetail_box{
        width: 100%;
        height:100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    header{
        width: 100%;
        height: 4rem;
        background-color: brown;
        background-image: url('/images_J/20.png');
        background-size: 100%;
        background-repeat: no-repeat;
    }
    .goBack{
        width: 1rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: .6rem;
        color:#fff;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 10;
    }
    // 老师简介
    .teacher{
        width: 100%;
        height: 3.2rem;
        font-size: .3rem;
        // background-color: burlywood;
        padding: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .top{
            width: 100%;
            height: 60%;
            display: flex;
            justify-content: space-between;
            .cotent{
                width: 90%;
                // background-color: chartreuse;
                display: flex;
                img{
                    width: 1.2rem;
                    height: 1.2rem;
                    border-radius: 50%;
                    margin-top: .2rem;
                }
                div{
                    width: 80%;
                    height: 100%;
                    margin-left: .2rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    b{
                        font-size: .34rem;
                        font-weight: 600;
                    }
                    .ccc{
                        width: 100%;
                        padding: 0 .2rem 0 0;
                        display: flex;
                        display: flex;
                        justify-content: space-between;
                        font-size: .27rem;
                        color: #9A9A9A;
                    }
                }
                
            }
            .guanzhu{
                width: 1rem;
                height: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;               
                .yuan{
                    width: .7rem;
                    height: .7rem;
                    background-color:#ff9543;
                    border-radius: 50%;
                    text-align: center;
                    line-height: .8rem;
                    font-size: .4rem;
                    color: rgb(236, 67, 67);
                }
                .org{
                    color: #ff9543;
                    font-size: .28rem;
                    font-weight: 600;
                }
            }
            .isguanzhu{
                width: 1rem;
                height: 1rem;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;               
                .yuan{
                    width: .7rem;
                    height: .7rem;
                    background-color:#b9b9b9;
                    border-radius: 50%;
                    text-align: center;
                    line-height: .8rem;
                    font-size: .4rem;
                    color: rgb(150, 150, 150);
                }
                .org{
                    color: #7e7e7e;
                    font-size: .28rem;
                    font-weight: 600;
                }
            }
        }
        .bottom{
            width: 100%;
            height: 30%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
                font-size: .2rem;
                padding: .1rem;
                border-radius: 3px;
                color: #9A9A9A;
                background-color:#F5F5F5;
            }
        }
    }
    // 老师信息
    .teacherinfo{
        width: 100%;
        display: flex;
        font-size: .26rem;
        flex-direction: column;
        justify-content: space-between;
        .scrollbox{
            width: 100%;
            padding: .2rem;
            overflow: auto;
            // background-color: #ff9543;
            display: flex;
            flex-direction: column;
            .li{
                width: 100%;
                margin: .2rem;
                color: #383838;
                .ccc{
                    margin-right: .3rem;
                    color:#B1B1B1 ;
                }
            }
        }
        .teacherbtn{
            width: 100%;
            height: 1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #BFBFBF;
            text-align: center;
            line-height: 1rem;
            font-size: .34rem;
            color: #F1F1F1;
        }
    }
    // 学员评价
    .studentinfo{
        width: 100%;
        display: flex;
        font-size: .26rem;
        flex-direction: column;
        justify-content: space-between;
        .scrollbox{
            width: 100%;
            padding: .2rem;
            overflow: auto;
            // background-color: #ff9543;
            display: flex;
            flex-direction: column;
            .li{
                width: 100%;
                margin: .2rem;
                color: #383838;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .top{
                    width: 100%;
                    height: 1rem;
                    display: flex;
                    align-items: center;
                    img{
                        width: 1rem;
                        height: 1rem;
                        margin-right: .2rem;
                    }
                    div{
                        height: 80%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        b{
                            font-weight: 600;
                            font-size: .35rem;
                        }
                        .ico{
                            color: yellow;
                        }
                    }
                }
                .text{
                    width: 100%;
                    padding-left: 1rem;
                    .titlep{
                        display: flex;
                        font-size: .2rem;
                        span{
                            margin:0 .2rem 0 0;
                            padding: .1rem;
                            border-radius: 3px;
                            color: #9A9A9A;
                            background-color:#F5F5F5;
                        }
                        
                    }
                    .contp{
                        color: #9A9A9A;
                        margin: .2rem 0;
                    }
                    .timep{
                        color: #9A9A9A;
                    }
                }
            }




        }
        .teacheryes{
            width: 100%;
            height: 1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #FB5500;
            text-align: center;
            line-height: 1rem;
            font-size: .34rem;
            color: #ffffff;
        }
    }
    // 主流课程
    .teacherhost{
        width: 100%;
        display: flex;
        font-size: .26rem;
        flex-direction: column;
        justify-content: space-between;
        .scrollbox{
            width: 100%;
            padding: .2rem;
            overflow: auto;
            .kong{
                width: 100%;
                height: 3rem;
                text-align: center;
                line-height: 3rem;
                font-size: .4rem;
                color: #383838;
            }
            .li{
                width: 100%;
                height: 2.2rem;
                margin: .2rem;
                display: flex;
                align-items: center;
                color: #383838;
                img{
                    width: 3rem;
                    height: 2rem;
                    border-radius: 10px;
                }
                div{
                    width: 50%;
                    height: 100%;
                    display: flex;
                    justify-content: space-between;
                    flex-direction: column;
                    padding:.2rem;
                    b{
                        font-size: .35rem;
                        font-weight: 600;
                    }
                    .ccc{
                        color: #9A9A9A;
                    }
                    .price{
                        width: 100%;
                        display: block;
                        display: flex;
                        justify-content: space-between;
                        .red{
                            color: red;
                            font-weight: 600;
                        }
                        
                    }
                }
            }
        }
        .teacheryes{
            width: 100%;
            height: 1rem;
            position: absolute;
            bottom: 0;
            left: 0;
            background-color: #FB5500;
            text-align: center;
            line-height: 1rem;
            font-size: .34rem;
            color: #ffffff;
        }
    }

</style>