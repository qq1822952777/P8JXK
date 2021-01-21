<template>
  <div class="Coursr">
    <div class="top-w">
      <van-nav-bar title="特色课" right-text="按钮">
        <template #right>
          <van-icon @click="sear" name="search" color="#123" size="27" />
        </template>
      </van-nav-bar>
    </div>
    <div class="head-w">
      <div @click="icoch">
        分类
        <van-icon name="arrow-up" v-if="ico1 == false" />
        <van-icon name="arrow-down" v-if="ico1 == true" />
      </div>
      <div @click="icoch2">
        排序
        <van-icon name="arrow-up" v-if="ico2 == false" />
        <van-icon name="arrow-down" v-if="ico2 == true" />
      </div>
      <div @click="icoch3">
        筛选
        <van-icon name="arrow-up" v-if="ico3 == false" />
        <van-icon name="arrow-down" v-if="ico3 == true" />
      </div>
    </div>
    <div
      class="list-w"
      :style="{ overflow: scr }"
      @scroll.passive="getScroll($event)"
    >
      <div class="list-top-w">
        <van-popup
          v-model="show1"
          position="top"
          :style="{ height: '15%' }"
          @click-overlay="topw"
        >
          <div class="classify-w">
            <button>重置</button>
            <button>确定</button>
          </div>
        </van-popup>

        <van-popup
          v-model="show2"
          position="top"
          :style="{ height: '60%' }"
          @click-overlay="topw"
        >
          <ul class="sort-w">
            <li
              v-for="(item, index) in 8"
              :key="index"
              @click="sone3(index)"
              :style="{ color: sst3 == index ? 'red' : '' }"
            >
              综合排名
            </li>
          </ul>
        </van-popup>
        <van-popup
          v-model="show3"
          position="top"
          :style="{ height: '65%' }"
          class="list-vant"
          @click-overlay="topw"
        >
          <div class="screen">
            <div class="screen-w">
              <div>
                <ul>
                  <li
                    v-for="(item, index) in list2"
                    :key="index"
                    @click="sone4(index)"
                    :style="[
                      { color: sst4 == index ? '#fff' : '' },
                      { background: sst4 == index ? 'red' : '' },
                    ]"
                  >
                    {{ item.name }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="list-vant-bom">
            <div>重置</div>
            <div>确认</div>
          </div>
        </van-popup>
        <!-- <div
          class="list-bom"
          v-for="(item, index) in 6"
          :key="index"
          @click="xq"
        >
          <p>李老师16号到22号地理他课堂开课了</p>
          <p>时间</p>
          <p style="padding-top:0.2rem;">
            <img src="/images_J/download.jpg" alt="" />李青
          </p>
          <div>
            <span>115人报名</span>
            <span style="color:#44A426;">免费</span>
          </div>
        </div> -->
        <!-- <van-pull-refresh v-model="refreshing" @refresh="onRefresh"> -->
        <!-- <van-list
          v-model="loading"
          offset="1"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        > -->
        <van-card
          v-for="(item, index) in list"
          :key="index"
          :title="item.title"
          :thumb="item.cover_img"
          @click="xq(item)"
        >
          <template #tags>
            <van-tag plain type="danger" color="#123" style="border:0;"
              >已有{{ item.sales_num }}报名</van-tag
            >
            <van-tag plain type="danger" color="red" style="border:0;">{{
              item.has_buy == 1 ? "已报名" : ""
            }}</van-tag>
          </template>
          <template #footer>
            <van-button size="mini" style="color:green;font-size:0.4rem;"
              >免费</van-button
            >
          </template>
        </van-card>
        <div v-show="show" class="show-top">{{ title }}</div>
        <!-- </van-list> -->
        <!-- </van-pull-refresh> -->
      </div>
    </div>
  </div>
</template>
<script>
import { FeatureClassListData, GetcharacteristicPulldown } from "@/utils/api";
export default {
  data() {
    return {
      title: "正在加载",
      ico1: true,
      ico2: true,
      ico3: true,
      show1: false,
      show2: false,
      show3: false,
      sst3: 0,
      sst4: 0,
      sst5: 0,
      sst6: 0,
      scr: "scroll",
      list: [],
      list2: [],
      page: 10,
      show: false,
      // loading: false,
      // finished: false,
      // refreshing: true,
    };
  },
  created() {
    GetcharacteristicPulldown().then((res) => {
      this.list2 = res.appCourseType;
    });
    this.top();
  },
  methods: {
    getScroll(event) {
      let scrollBottom =
        event.target.scrollHeight -
        event.target.scrollTop -
        event.target.clientHeight;
      // console.log(scrollBottom);

      if (scrollBottom == 0) {
        if (this.page == 10) {
          this.show = true;
          let aa = setTimeout(() => {
            this.page = 15;
            this.top();
            this.show = false;
            clearInterval(aa);
          }, 2000);
        } else {
          let tt = setTimeout(() => {
            this.title = "已加载完成呢。。。";
            setTimeout(() => {
              this.show = false;
            });
            clearInterval(tt);
          }, 2000);
        }
      }
    },
    // onLoad() {
    //   // setTimeout(() => {
    //   console.log(this.list.length);
    //   // if (this.refreshing) {
    //   // this.list = [];

    //   // }

    //   // for (let i = 0; i < 10; i++) {
    //   // this.page = 15;
    //   // this.top();
    //   // }
    //   // this.loading = false;

    //   if (this.list.length >= 10) {
    //     this.finished = false;
    //   }
    //   this.page = 15;
    //   this.top();
    //   this.refreshing = false;
    //   // }, 1000);
    //   // clearInterval(tt);
    // },
    // onRefresh() {
    //   // 清空列表数据
    //   this.finished = false;

    //   // 重新加载数据
    //   // 将 loading 设置为 true，表示处于加载状态
    //   this.loading = true;
    //   this.onLoad();
    // },
    top() {
      FeatureClassListData({ page: this.page }).then((res) => {
        console.log(res);
        this.list = res.list;
      });
    },
    topw() {
      this.ico2 = true;
      this.ico3 = true;
      this.ico1 = true;
    },
    xq(id) {
      console.log(id);
      this.$router.push({ path: "/particulars", query: { id: id.id } });
      this.$store.commit("add", id.has_buy);
    },
    sear() {
      this.$router.push({ path: "/Search" });
    },
    sone6(index) {
      this.sst6 = index;
    },
    sone5(index) {
      this.sst5 = index;
    },
    sone4(index) {
      this.sst4 = index;
    },
    sone3(index) {
      this.sst3 = index;
    },
    icoch() {
      this.ico1 = !this.ico1;
      this.ico2 = true;
      this.ico3 = true;
    },
    icoch2() {
      this.ico2 = !this.ico2;
      this.ico1 = true;
      this.ico3 = true;
    },
    icoch3() {
      this.ico3 = !this.ico3;
      this.ico2 = true;
      this.ico1 = true;
    },
  },
  watch: {
    ico1(val) {
      if (val == false) {
        this.scr = "none";
        this.show1 = true;
      } else {
        this.show1 = false;
      }
    },
    ico2(val) {
      if (val == false) {
        this.scr = "none";

        this.show2 = true;
      } else {
        this.show2 = false;
      }
    },
    ico3(val) {
      if (val == false) {
        this.scr = "none";

        this.show3 = true;
      } else {
        this.show3 = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.Coursr {
  width: 100%;
  height: 100%;
  .head-w {
    width: 100%;
    height: 1rem;
    font-size: 0.37rem;
    display: flex;
    align-items: center;
    div {
      width: 33%;
      text-align: center;
    }
  }
  .list-w {
    width: 100%;
    height: 82%;
    // background: chartreuse;
    // overflow-x: hidden;
    // overflow-y: scroll;
    background: rgb(224, 224, 224);
    .list-top-w {
      height: 100%;
      position: relative;
      border: 1px solid #fff;
      .show-top {
        width: 100%;
        height: 1rem;
        background: rgb(221, 219, 219);
        font-size: 0.3rem;
        text-align: center;
        line-height: 1rem;
        transition: all 0.8s linear;
      }
      .classify-w {
        width: 100%;
        height: 0.7rem;
        display: flex;
        font-size: 0.3rem;
        justify-content: space-evenly;
        button {
          width: 45%;
          height: 100%;
          border: 0;
          border: 0.01rem solid rgb(189, 189, 189);
        }
        button:nth-child(1) {
          background: #fff;
        }
        button:nth-child(2) {
          background: red;
          color: #fff;
        }
      }
      .list-bom {
        font-size: 0.4rem;
        width: 7rem;
        height: 3rem;
        background: #ffffff;
        margin: auto;
        padding-left: 0.2rem;
        padding-top: 0.2rem;
        border-radius: 0.2rem;
        margin-top: 0.5rem;
        position: relative;
        div {
          width: 95%;
          position: absolute;
          bottom: 0;
          right: 0.2rem;
          height: 1rem;
          line-height: 1rem;
          display: flex;
          justify-content: space-between;
        }
        img {
          height: 0.7rem;
          width: 0.7rem;
          vertical-align: middle;
        }
      }
      width: 100%;
      .sort-w {
        width: 100%;
        height: 100%;
        font-size: 0.4rem;
        li {
          width: 100%;
          height: 1rem;
          text-align: center;
        }
      }
      /deep/.van-overlay {
        position: absolute !important;
      }
      .van-popup {
        position: absolute;
      }
    }
    .list-vant {
      position: relative;
      .screen {
        width: 100%;
        overflow: scroll;
        .screen-w {
          margin-top: 0.1rem;
          width: 100%;
          font-size: 0.33rem;
          div:nth-child(1) {
            ul {
              width: 7.4rem;
              height: 80%;
              display: flex;
              align-items: center;

              flex-wrap: wrap;
              li {
                width: 22%;
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                height: 0.8rem;
                text-align: center;
                line-height: 0.8rem;
                border-radius: 0.2rem;
                margin-left: 0.2rem;
                background: rgb(221, 220, 220);
                margin-top: 0.2rem;
              }
            }
          }
          div:nth-child(2) {
            ul {
              width: 7.4rem;
              height: 80%;
              display: flex;
              align-items: center;

              flex-wrap: wrap;
              li {
                width: 22%;
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                height: 0.8rem;
                text-align: center;
                line-height: 0.8rem;
                border-radius: 0.2rem;
                margin-left: 0.2rem;
              }
            }
          }
          div:nth-child(3) {
            ul {
              width: 7.4rem;
              height: 80%;
              display: flex;
              align-items: center;

              flex-wrap: wrap;
              li {
                width: 22%;
                padding-left: 0.2rem;
                padding-right: 0.2rem;
                height: 0.8rem;
                text-align: center;
                line-height: 0.8rem;
                border-radius: 0.2rem;
                margin-left: 0.2rem;
              }
            }
          }
        }
      }

      .list-vant-bom {
        width: 100%;
        height: 1.2rem;
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        div {
          font-size: 0.5rem;
          width: 50%;
          text-align: center;
        }
        div:nth-child(2) {
          height: 100%;
          color: #fff;
          line-height: 1.1rem;
          background: #fb5500;
        }
      }
    }
  }
}
</style>
