<template>
  <div class="box_J">
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
      <div @click="GotoClass()">
        <img src="/images_J/2.png">
        <span>课表</span>
      </div>
      <div @click="Abouttheclass()">
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
    <!-- 后台接受的老师的数据渲染 -->
    <div v-for="item in teachers" :key="item.channel_info.id">
      <div class="todyLesson">
        <div>
        <p></p>
        <span>{{ item.channel_info.name }}</span>
        </div>
        <div class="ccc" @click="item.channel_info.name == '热门资讯' ? rmzx() : mszr()">
          更多>>
        </div>
      </div>
      <div class="teacher">
        <div class="lis" v-for="itm in item.list" :key="itm.teacher_id" @click="item.channel_info.name == '热门资讯' ? '' : gotoTeacherDetile(itm.teacher_id)">
          <img :src="itm.teacher_avatar ? itm.teacher_avatar : itm.thumb_img">
          <div>
            <p><b>{{itm.teacher_name ? itm.teacher_name : itm.title}}</b><span class="ccc">{{itm.created_at ? itm.created_at :'北京大学'}}</span></p>
            <p class="ccc detail">{{itm.introduction ? itm.introduction :itm.description}}</p>
          </div>
        </div>       
      </div>
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
    // height: 6rem;
    // background-color: salmon;
    font-size: .3rem;
    padding: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .lis{
      width: 100%;
      height: 32%;
      margin: .2rem 0;
      // background-color: sandybrown;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      img{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-right: .2rem;
      }
      div{
        height: 1rem;
        padding: .1rem 0;
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
<script>
import { homeswipereq,homereq } from '@/utils/api'
export default {
  data() {
    return {
      swipeimgs:[],
      teachers:[]
    }
  },
  methods: {
    // nav名师页跳转
    topTeacher(){
      this.$router.push({path:'/TopTeacher'})
    },
    // 跳转至老师详情页
    gotoTeacherDetile(id){
      this.$router.push({name:'TeaccherDetail',params:{id}})
    },
    // 跳转至课程页
    GotoClass(){
      this.$router.push({path:'/Course'})
    },
    // 跳转至约课页
    Abouttheclass(){
      this.$router.push({path:'/AuoutCourse'})
    },
    // 更多热门资讯
    rmzx(){
      this.$router.push({path:'/HotInformation'})
    },
    // 更多名师阵容
    mszr(){
      this.$router.push({path:'/TopTeachers'})
    }
  },
  created() {
    // 轮播图请求
    homeswipereq().then((res)=>{
      this.swipeimgs = res
    })
    homereq().then((res)=>{
      this.teachers = res;
      console.log(res);
    })
  },
}
</script>

