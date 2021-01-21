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
            <img v-lazy="image.cover_img" />
          </van-swipe-item>
        </van-swipe>
        <div class="course">
          <p class="ys">
            {{ list.title }}
            <van-icon
              name="star"
              @click="sc(list)"
              :color="list.is_buy == 1 ? 'red' : ''"
            />
          </p>
          <p class="ys3">
            共{{ list.total_periods }}课时 | {{ list.is_free }}人已报名
          </p>
          <div class="bm-top">
            <p>教学团队</p>
            <img :src="list2.avatar" alt="" />
            <p>{{ list2.teacher_name }}</p>
          </div>
          <!-- v-model:active="active" -->
          <van-tabs
            style="width: 90%;
            margin: auto;"
          >
            <van-tab title="课程介绍" style="font-size:0.35rem;">
              <p style="font-size:0.4rem;">课程介绍</p>
              <p
                style="font-size:0.3rem;padding-top:0.2rem;"
                v-html="list.course_details"
              ></p>
            </van-tab>
            <van-tab style="font-size:0.3rem;" title="关联大纲">
              <p style="font-size:0.4rem;">课程大纲</p>
              <ul>
                <li
                  v-for="(item, index) in list3"
                  :key="index"
                  style="margin-top:0.3rem;color:red;"
                >
                  {{ item.periods_title }}
                </li>
              </ul>
            </van-tab>
            <van-tab title="课程评价">
              <div class="evaluate" v-for="(item, index) in list4" :key="index">
                <div class="evaluate-top">
                  <div><img :src="item.avatar" alt="" /></div>
                  <div>
                    <p>{{ item.created_at }}</p>
                    <p>
                      <van-icon
                        name="star"
                        color="#FED201"
                        v-for="(item, index) in item.grade"
                        :key="index"
                      />
                    </p>
                  </div>
                </div>
                <p class="ke1" style="font-size:0.3rem;">{{ item.nickname }}</p>
                <p class="ke2" style="font-size:0.3rem;color:#ADADAD;">
                  2018-01-01 -- 18:19:123
                </p>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
    <div class="course-bom" @click="gm">{{ title }}</div>
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
import {
  GetCourseDetile,
  ClassRegistration,
  Chapter,
  collect,
  Getevaluation,
  onCourseCollection,
} from "@/utils/api";

export default {
  data() {
    return {
      show2: false,
      images: [],
      list: [],
      list2: [],
      // show: false,
      id: "",
      list3: [],
      //评论
      list4: [],
      title: "",
    };
  },
  mounted() {
    // FeatureClassListData({ page: 10 }).then((res) => {
    // console.log(res);
    if (this.$store.state.id == 1) {
      this.title = "立即学习";
    } else {
      this.title = "立即报名";
    }
    // });
    GetCourseDetile(this.$route.query.id).then((res) => {
      console.log(res);

      this.images = res.recommendCourse;
      this.list = res.info;
      this.id = res.info.id;
      this.list2 = res.teachers[0];
      console.log(this.list);
      /////评论
      Getevaluation({ id: res.info.id, limit: 10, page: 1 }).then((res) => {
        console.log(res);
        this.list4 = res.list;
      });
      Chapter(res.info.id).then((res) => {
        //关联大纲
        console.log(res);
        this.list3 = res.data;
      });
    });
    console.log(this.$route.query.id);
    // this.sc();
    //  collect(id.id).then((res) => {
    //       console.log(res, this.show);
    //     });
  },
  methods: {
    sc(id) {
      console.log(id);
      if (this.show == true) {
        collect(id.id).then((res) => {
          // console.log(res, this.show);
        });
      } else {
        console.log("不能取消收藏");
        // onCourseCollection({ id: id.collect_id, type: id.sale_type }).then(
        //   (res) => {
        //     console.log(res);
        //   }
        // );
        // console.log("123");
      }

      console.log(id);
    },
    wx() {
      this.$router.push({ path: "/WeChat" });
    },
    gm() {
      if (this.$store.state.token) {
        console.log(this.list.id);
        ClassRegistration({ id: this.list.id, type: 5 }).then((res) => {
          console.log(res);
        });
        this.$router.push({ path: "/verify" });
      } else {
        this.$router.push({ path: "/Login" });
      }
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
    height: 88%;
    overflow: hidden;
    .qb1 {
      width: 100%;
      height: 100%;
      overflow-y: scroll;
      .course {
        width: 100%;
        height: 7.45rem;
        .bm-top {
          width: 90%;
          height: 2rem;
          // background: chartreuse;
          margin: 0.4rem 0;
          font-size: 0.4rem;
          margin-left: 0.3rem;
          p:nth-child(3) {
            margin-left: 0.4rem;
            font-size: 0.3rem;
          }
          img {
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            margin-left: 0.3rem;
            margin-top: 0.2rem;
          }
        }
        .ys {
          width: 100%;
          height: 0.8rem;
          font-size: 0.4rem;
          padding-left: 0.3rem;
          padding-top: 0.3rem;
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
    position: fixed;
    text-align: center;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #fb5500;
    font-size: 0.4rem;
    color: #fff;
    bottom: 0;
  }
}
</style>
