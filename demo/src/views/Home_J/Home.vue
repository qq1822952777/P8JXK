<template>
  <div class="box_J" @scroll="gotuTop($event)">
    <header>
      <img src="/images_J/logo.png" >
      <van-icon name="bulb-o" />
    </header>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item
      v-for="(item,index) in swipeimgs"
      :key="index"
      ><img :src="item.banner_img"></van-swipe-item>
    </van-swipe>
    <!-- 名师导航 -->
    <nav>
      <div @click="topTeacher()">
        <img src="/images_J/1.png">
        <span>名师</span>
      </div>
      <div>
        <img src="/images_J/2.png">
        <span>课表</span>
      </div>
      <div>
        <img src="/images_J/3.png">
        <span>约课</span>
      </div>
    </nav>
    <!-- 专题 -->
    <div class="subject">
      <p></p>
      <span>专题</span>
    </div>
    <div class="subjectCtn">
      <div class="lef">
        <span>雅思语法专题</span>
        <img src="/images_J/5.png">
      </div>
      <div class="rei">
        <div>
          <img src="/images_J/6.png">
          <span>雅思语法专题</span>
        </div>
        <div>
          <img src="/images_J/7.png">
          <span>雅思写作专题</span>
        </div>
      </div>
    </div>
    <!-- 今日直播 -->
    <div class="subject">
      <p></p>
      <span>今日直播</span>
    </div>
    <div class="todyLive">
      <ul>
        <li>
          <img src="/images_J/8.png">
          <span>雅思英语……</span>
        </li>
        <li>
          <img src="/images_J/9.png">
          <span>雅思英语……</span>
        </li>
        <li>
          <img src="/images_J/8.png">
          <span>雅思英语……</span>
        </li>
        <li>
          <img src="/images_J/9.png">
          <span>雅思英语……</span>
        </li>
      </ul>
    </div>
    <!-- 今日好课 -->
    <div class="todyLesson">
      <div>
      <p></p>
      <span>今日好课</span>
      </div>
      <div class="ccc">
        更多>>
      </div>
    </div>
    <div class="Lesson">
      <div class="lis">
        <img src="/images_J/10.png">
        <div class="Text">
          <b>时间管理四大法宝</b>
          <p>
            <span class="ccc">
              <van-icon name="eye-o" />
              520
              <van-icon name="shopping-cart-o" />
              520
              </span>
            <span class="red">￥1998.0</span>
          </p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/11.png">
        <div class="Text">
          <b>不止是一份毕业设</b>
          <p>
            <span class="ccc">
              <van-icon name="eye-o" />
              520
              <van-icon name="shopping-cart-o" />
              520
              </span>
            <span class="green">免费</span>
          </p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/12.png">
        <div class="Text">
          <b>独角巡山图</b>
          <p>
            <span class="ccc">
              <van-icon name="eye-o" />
              520
              <van-icon name="shopping-cart-o" />
              520
              </span>
            <span class="red">￥1998.0</span>
          </p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/13.png">
        <div class="Text">
          <b>佳作不是一蹴而就</b>
          <p>
            <span class="ccc">
              <van-icon name="eye-o" />
              520
              <van-icon name="shopping-cart-o" />
              520
              </span>
            <span class="red">￥1998.0</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 知名老师 -->
    <div class="todyLesson">
      <div>
      <p></p>
      <span>知名老师</span>
      </div>
      <div class="ccc">
        更多>>
      </div>
    </div>
    <div class="teacher">
      <div class="lis">
        <img src="/images_J/14.png">
        <div>
          <p><b>李湘老师</b><span class="ccc">北京大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/15.png">
        <div>
          <p><b>顾未易老师</b><span class="ccc">南京大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/16.png">
        <div>
          <p><b>陈一丹老师</b><span class="ccc">上海大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
    </div>
    <!-- 明星老师 -->
    <div class="todyLesson">
      <div>
      <p></p>
      <span>明星老师</span>
      </div>
      <div class="ccc">
        更多>>
      </div>
    </div>
    <div class="teacher">
      <div class="lis">
        <img src="/images_J/17.png">
        <div>
          <p><b>司徒末老师</b><span class="ccc">清华大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/18.png">
        <div>
          <p><b>五一老师</b><span class="ccc">北京大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/19.png">
        <div>
          <p><b>赵乔一老师</b><span class="ccc">南京大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
    </div>
    <!-- 推荐老师 -->
    <div class="todyLesson">
      <div>
      <p></p>
      <span>推荐老师</span>
      </div>
      <div class="ccc">
        更多>>
      </div>
    </div>
    <div class="teacher">
      <div class="lis">
        <img src="/images_J/17.png">
        <div>
          <p><b>司徒末老师</b><span class="ccc">清华大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/18.png">
        <div>
          <p><b>五一老师</b><span class="ccc">北京大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
      <div class="lis">
        <img src="/images_J/19.png">
        <div>
          <p><b>赵乔一老师</b><span class="ccc">南京大学</span></p>
          <p class="ccc detail">随时随地在线上课，更好的服务还在在线学习的同学学到好知识</p>
        </div>
      </div>
    </div>
    <!-- 回顶 -->
    <div v-show="topShopw" class="gotoTop" @click="goTop($event)">
      <van-icon name="audio" />
    </div>
  </div>
</template>
<style lang="scss">
  .box_J::-webkit-scrollbar{
    display: none;
  }
  .box_J{
    width: 100%;
    height:calc(100% - 1rem);
    overflow-x: hidden;
    overflow-y: auto;
  }
  // 头部
  header{
    width: 100%;
    height: 1.2rem;
    display: flex;
    padding:.2rem;
    justify-content: space-between;
    align-items: center;
    font-size: .7rem;
    img{
      height: 100%;
    }
  }
  // 轮播图
  .my-swipe .van-swipe-item {
    height: 3.2rem;
    color: #fff;
    text-align: center;
    background-color: #39a9ed;
    img{
      display:block;
      width: 100%;
      height: 100%;
    }
  }
  // 名师导航
  nav{
    width: 100%;
    height: 2.5rem;
    display: flex;
    padding:.4rem .2rem;
    justify-content: space-between;
    align-items: center;
    font-size: .3rem;
    // background-color: blueviolet;
    div{
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
    }
  }
  // 专题
  .subject{
    width: 100%;
    height: 1.4rem;
    display: flex;
    padding:.4rem .2rem;
    align-items: center;
    font-size: .4rem;
    font-weight: 500;
    p{
      width: .15rem;
      height: 100%;
      margin-right: .15rem;
      background-color: #FB5601;
    }
  }
  // 专题内容
  .subjectCtn{
    width: 100%;
    height: 3.5rem;
    // background-color: chocolate;
    font-size: .35rem;
    padding: .2rem;
    display: flex;
    justify-content: space-between;
    .lef{
      width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img{
        width: 70%;
      }
    }
    .rei{
      width: 48%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      div{
        width: 100%;
        display: flex;
        align-items: center;
        img{
          width: 30%;
          margin-right: .2rem;
        }
      }
    }
  }
  // 今日直播
  .todyLive::-webkit-scrollbar{
    display: none;
  }
  .todyLive{
    width: 100%;
    height: 3rem;
    // background-color: blueviolet;
    padding: .2rem;
    overflow-x: auto;
    overflow-y: hidden;
    ul{
      width: 250%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      li{
        width: 4rem;
        height: 100%;
        // background-color: chartreuse;
        display: flex;
        flex-direction: column;
        font-size: .35rem;
        justify-content: space-around;
        align-items: center;
        img{
          width: 90%;
          height: 75%;
          border-radius: 15px;
        }
      }
    }
  }
  // 今日好课
  .todyLesson{
    width: 100%;
    height: 1.4rem;
    display: flex;
    padding:.4rem .2rem;
    align-items: center;
    font-size: .4rem;
    font-weight: 500;
    justify-content: space-between;
    div{
      height: 100%;
      display: flex;
      align-items: center;
      p{
        width: .15rem;
        height: 100%;
        margin-right: .15rem;
        background-color: #FB5601;
      }
    }
    .ccc{
      font-size: .26rem;
      color: #C0C0C0;
    }
  }
  .Lesson{
    width: 100%;
    height: 8rem;
    display: flex;
    // background-color: crimson;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: .2rem;
    .lis{
      width: 48%;
      height: 50%;
      // background-color: darkblue;
      display: flex;
      flex-direction: column;
      font-size: .25rem;
      img{
        width: 100%;
        height: 60%;
        border-radius: 15px;
      }
      .Text{
        width: 100%;
        height: 100%;
        padding: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        b{
          font-size: .32rem;
          font-weight: 500;
        }
        p{
          width: 100%;
          display: flex;
          justify-content: space-between;
          .ccc{
            color: #C0C0C0;
          }
          .red{
            color: red;
            font-size: .3rem;
            font-weight:600;
          }
          .green{
            color: #139D11;
            font-size: .3rem;
            font-weight:600;
          }
        }
      }
    }
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: 1.2rem;
        height: 1.2rem;
        margin-right: .2rem;
      }
      div{
        height: 50%;
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
  // 回顶
  .gotoTop{
    width: 1.5rem;
    height: 1.5rem;
    background-image:linear-gradient(to bottom,rgb(243, 243, 243),rgb(253, 82, 15),rgb(253, 253, 59));
    color: #fff;
    position: absolute;
    border-radius: 50%;
    text-align: center;
    line-height: 1.8rem;
    bottom: 1.2rem;
    right: .2rem;
    z-index: 10;   
  }
</style>
<script>
import { homeswipereq,homereq } from '@/utils/api'
export default {
  data() {
    return {
      // 回顶的显示隐藏
      topShopw:false,
      swipeimgs:[]
    }
  },
  methods: {
    // 回顶的显示隐藏
    gotuTop(event){
      if(event.target.scrollTop >= 1000){
        this.topShopw = true
      }else{
        this.topShopw = false
      }
    },
    goTop(event){
      alert('别急内容改造中')
      // location.href = '/Home'
    },
    // 名师页跳转
    topTeacher(){
      this.$router.push({path:'/TopTeacher'})
    }
    
  },
  created() {
    // 轮播图请求
    homeswipereq().then((res)=>{
      this.swipeimgs = res
    })
    homereq().then((res)=>{
      console.log(res);
    })
  },
}
</script>

