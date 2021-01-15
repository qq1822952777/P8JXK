<template>
  <div class="particulars">
    <van-nav-bar
      title="课程详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    >
      <template #right>
        <van-icon @click="onClickRight" name="cluster-o" />
      </template>
    </van-nav-bar>
    <div class="qb">
      <div class="qb1">
        <van-swipe class="imsg-w" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <div class="course">
          <p class="ys">雅思七日冲刺</p>
          <p class="ys2">
            <span>￥1998.0</span><span>￥589.0</span><span>vip专享</span>
          </p>
          <p class="ys3">8763人已报名 | 8763次浏览</p>
          <div class="ys4">
            <div>领券</div>
            <div>
              <van-button type="default">立减100</van-button
              ><van-button type="default">立减200</van-button
              ><van-button type="default">立减300</van-button>
            </div>
            <div>
              <van-icon name="arrow" @click="tier" />
            </div>
          </div>
          <!-- v-model:active="active" -->
          <van-tabs
            style="width: 90%;
            margin: auto;"
          >
            <van-tab title="课程详情" style="font-size:0.35rem;"
              >按时发放回收的好地方感觉回到法国</van-tab
            >
            <van-tab title="关联课程">
              <van-card
                v-for="(item, index) in 7"
                :key="index"
                num="2"
                tag="标签"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
                origin-price="10.00"
              />
            </van-tab>
            <van-tab title="课程评价">
              <div class="evaluate" v-for="(item, index) in 3" :key="index">
                <div class="evaluate-top">
                  <div><img src="/images_J/download.jpg" alt="" /></div>
                  <div>
                    <p>AU辅助</p>
                    <p>
                      <van-icon name="star" color="#FED201" />
                      <van-icon name="star" color="#FED201" />
                      <van-icon name="star" color="#FED201" />
                      <van-icon name="star" color="#FED201" />
                      <van-icon name="star-o" color="#DFDDE3" />
                    </p>
                  </div>
                </div>
                <p class="ke1" style="font-size:0.3rem;">很棒的课程</p>
                <p class="ke2" style="font-size:0.3rem;color:#ADADAD;">
                  2018-01-01 -- 18:19:123
                </p>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <div class="course-bom" @click="gm">
      立即购买
    </div>
    <van-popup
      class="popup-ttp"
      v-model="show"
      position="bottom"
      :style="{ height: '50%' }"
    >
      <p style="font-size:0.4rem;padding-top:0.2rem;padding-left:0.3rem;">
        优惠券
      </p>
      <ul class="popup">
        <li v-for="(item, index) in 4" :key="index">
          <div class="popup1">
            <div>￥ <span>50</span></div>
            <div>
              <p>现金券</p>
              <p>限品类:初三英语</p>
              <p>2018.02.14 - 2018.02.20</p>
            </div>
          </div>
          <div class="popup2">立即领取</div>
        </li>
      </ul>
    </van-popup>
    <van-popup
      class="popup-bom"
      v-model="show2"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <div>
        <ul>
          <li @click="wx">
            <img
              src="/images_J/wx.png
            "
              alt=""
            />
            <p>微信好友</p>
          </li>
          <li>
            <img
              src="/images_J/fx.png
            "
              alt=""
            />
            <p>朋友圈</p>
          </li>
          <li>
            <img
              src="/images_J/qq.png
            "
              alt=""
            />
            <p>QQ好友</p>
          </li>
          <li>
            <img
              src="/images_J/kj.png
            "
              alt=""
            />
            <p>QQ空间</p>
          </li>
        </ul>
      </div>
      <div @click="show2 = false">取消</div>
    </van-popup>
  </div>
</template>

<script>
import Vue from "vue";
import { Lazyload } from "vant";
export default {
  data() {
    return {
      show: false,
      show2: false,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ],
    };
  },
  mounted() {},
  methods: {
    wx() {
      this.$router.push({ path: "/WeChat" });
    },
    gm() {
      //   console.log("123");
      this.$router.push({ path: "/verify" });
    },
    tier() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.show2 = true;
    },
  },
};
</script>

<style lang="scss">
.particulars {
  width: 100%;
  height: 100%;
  .popup-bom {
    // position: relative;
    div:nth-child(1) {
      width: 100%;
      height: 80%;
      ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        font-size: 0.35rem;
        align-items: center;
        li {
          width: 33%;
          text-align: center;
          img {
            width: 1.3rem;
            height: 1.3rem;
          }
        }
      }
    }
    div:nth-child(2) {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1.1rem;
      font-size: 0.38rem;
      text-align: center;
      line-height: 1.1rem;
      color: #9a9a9a;
    }
  }
  .popup-ttp {
    background: rgb(207, 207, 207);
  }
  .popup {
    width: 100%;
    height: 89%;
    // background: chartreuse;
    li {
      width: 90%;
      height: 2rem;
      margin: 0.4rem auto;
      display: flex;
      .popup1 {
        width: 67%;
        height: 100%;
        background: #ffffff;
        border-radius: 0.1rem 0.3rem 0.3rem 0.1rem;

        display: flex;
        div:nth-child(1) {
          width: 40%;
          height: 100%;
          color: red;
          font-size: 0.3rem;
          padding-top: 0.5rem;
          span {
            font-size: 1rem;
          }
        }
        div:nth-child(2) {
          width: 60%;
          height: 100%;
          p:nth-child(1) {
            font-size: 0.4rem;
            margin-top: 0.2rem;
          }
          p:nth-child(2) {
            margin-top: 0.3rem;
            font-size: 0.25rem;
            color: #a0a0a0;
          }
          p:nth-child(3) {
            margin-top: 0.3rem;
            color: #a0a0a0;
            font-size: 0.2rem;
          }
        }
      }
      .popup2 {
        width: 33%;
        height: 100%;
        background: red;
        border-radius: 0.3rem 0.1rem 0.1rem 0.3rem;
        color: #fff;
        text-align: center;
        line-height: 2rem;
        font-size: 0.3rem;
      }
    }
  }
  .van-swipe {
    width: 100%;
    height: 4rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .qb {
    width: 100%;
    height: 11.45rem;
    overflow: hidden;
    .qb1 {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      .course {
        width: 100%;
        height: 7.45rem;
        .ys {
          width: 100%;
          height: 0.8rem;
          font-size: 0.4rem;
          padding-left: 0.3rem;
          padding-top: 0.3rem;
        }
        .ys2 {
          height: 0.7rem;
          display: flex;
          align-items: center;
          padding-left: 0.2rem;
          span {
            height: 100%;
            line-height: 0.6rem;
          }
          span:nth-child(1) {
            width: 33%;
            font-size: 0.4rem;
            color: #f40320;
          }
          span:nth-child(2) {
            font-size: 0.38rem;
            width: 23%;

            color: #f40320;
          }
          span:nth-child(3) {
            width: 20%;
            height: 70%;
            text-align: center;
            background: -webkit-linear-gradient(
              right,
              #ce9c74,
              rgb(207, 189, 166)
            );
            border-radius: 0.1rem;
            color: #123;
            font-size: 0.28rem;
            margin-bottom: 0.1rem;
          }
        }
        .ys3 {
          font-size: 0.3rem;
          color: #b3b3b3;
          padding-left: 0.2rem;
        }
        .ys4 {
          width: 100%;
          height: 1.3rem;
          line-height: 1.3rem;
          font-size: 0.3rem;
          color: #696969;
          padding-left: 0.3rem;
          margin-bottom: 0.2rem;
          display: flex;
          align-items: center;
          div:nth-child(1) {
            height: 100%;
          }
          div:nth-child(2) {
            width: 80%;
            height: 100%;
            .van-button {
              width: 27%;
              height: 60%;
            }
          }
          div:nth-child(3) {
            text-align: center;
            width: 10%;
            height: 100%;
            font-size: 0.5rem;
            margin-top: 0.5rem;
          }

          .van-button {
            color: red;
            border: 0.01rem solid red;
            margin-left: 0.3rem;
            border-radius: 0.1rem;
          }
          //   .van-tabs {
          //   }
          //   .van-tabs--line {

          //   }
          //   .van-tabs__content {
          //     width: 90%;
          //     text-align: center;
          //   }
        }
        .evaluate {
          width: 100%;
          height: 2.5rem;
          //   background: skyblue;
          margin-top: 0.3rem;
          position: relative;
          .evaluate-top {
            width: 100%;
            height: 1rem;
            background: snow;
            display: flex;
            align-items: center;
            div:nth-child(1) {
              width: 15%;
              height: 100%;
              background: springgreen;
              img {
                width: 100%;
                height: 100%;
              }
            }
            div:nth-child(2) {
              height: 100%;
              width: 85%;
              font-size: 0.4rem;
            }
          }
          .ke1 {
            padding-left: 1.1rem;
          }
          .ke2 {
            position: absolute;
            padding-left: 1.1rem;
            bottom: 0.1rem;
          }
        }
      }
    }
  }

  .course-bom {
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fb5500;
    font-size: 0.4rem;
    color: #fff;
  }
}
</style>
