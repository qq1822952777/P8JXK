<template>
    <div class="TeaccherDetail_box">
        <header>
        </header>
        <div class="goBack" @click="goBack()">＜</div>
        <!-- 老师简介 -->
        <div class="teacher">
            <div class="top">
                <div class="cotent">
                    <img src="/images_J/17.png">
                    <div>
                        <p><b>司徒末老师</b></p>
                        <p class="ccc">
                            <span>女</span>
                            <span>32岁</span>
                            <span>10年教龄</span>
                            <span>关注数1012</span>
                        </p>
                    </div>
                </div>
                <div :class=" careClass ?'isguanzhu':'guanzhu'" @click="careClass = !careClass">
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
        <van-tabs v-model="active" @click="istitle(active)">
            <van-tab title="老师信息"></van-tab>
            <van-tab title="学员评价"></van-tab>
            <van-tab title="主讲课程"></van-tab>
        </van-tabs>
        <!-- 老师信息 -->
        <div class="teacherinfo" v-show="active === 0">
            <div class="scrollbox">
                    <div class="li" v-for="(item,index) in 10" :key="index">
                        <span class="ccc">毕业学校</span>
                        <span>北京大学</span>
                    </div>
            </div>            
            <div class="teacherbtn">暂不支持预约</div>
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
            <div class="teacheryes" @click="make()">立即约课</div>
        </div>
        <!-- 主流课程 -->
        <div class="teacherhost" v-show="active === 2">
            <div class="scrollbox">
                    <div class="li" v-for="(item,index) in 10" :key="index">
                        <img src="/images_J/21.png">
                        <div>
                            <b>给你好声音的密码</b>
                            <p class="ccc">讲师：小楼</p>
                            <p class="price">
                                <span class="red">￥1998.00</span>
                                <span>
                                    <van-icon name="shopping-cart-o" /> 520
                                </span>
                            </p>
                        </div>
                    </div>
            </div>            
            <div class="teacheryes" @click="make()">立即约课</div>
        </div>

    </div>  
</template>

<script>
export default {
    data() {
        return {
            careClass:false,
            active:0
        }
    },
    methods: {
        // 返回上一步
        goBack() {
            this.$router.go(-1);
        },
        // 评价title
        istitle(ind){
            console.log(ind);
        },
        // ￥￥￥￥￥￥￥￥ 这里未完善
        make(){
            this.$router.push({path:'/Home'})
        }
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