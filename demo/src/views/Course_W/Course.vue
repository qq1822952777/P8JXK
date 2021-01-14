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
    <div class="list-w" :style="{ overflow: scr }" @click="list">
      <div class="list-top-w">
        <van-popup v-model="show1" position="top" :style="{ height: '60%' }">
          <div class="classify-w">
            <ul>
              <li
                v-for="(item, index) in 10"
                :key="index"
                @click="sone(index)"
                :style="{ color: sst == index ? 'red' : '' }"
              >
                高一
              </li>
            </ul>
            <ul>
              <li
                v-for="(item, index) in 10"
                :key="index"
                @click="sone2(index)"
                :style="{ color: sst2 == index ? 'red' : '' }"
              >
                物理
              </li>
            </ul>
          </div>
        </van-popup>
        <van-popup v-model="show2" position="top" :style="{ height: '60%' }">
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
        >
          <div class="screen">
            <div class="screen-w">
              <div>
                <p>类别</p>
                <ul>
                  <li
                    v-for="(item, index) in 5"
                    :key="index"
                    @click="sone4(index)"
                    :style="[
                      { color: sst4 == index ? '#fff' : '' },
                      { background: sst4 == index ? 'red' : '' },
                    ]"
                  >
                    全部
                  </li>
                </ul>
              </div>
              <div>
                <p>讲师</p>
                <ul>
                  <li
                    v-for="(item, index) in 7"
                    :key="index"
                    @click="sone5(index)"
                    :style="[
                      { color: sst5 == index ? '#fff' : '' },
                      { background: sst5 == index ? 'red' : '' },
                    ]"
                  >
                    全部
                  </li>
                </ul>
              </div>
              <div>
                <p>价格</p>
                <ul>
                  <li
                    v-for="(item, index) in 4"
                    :key="index"
                    @click="sone6(index)"
                    :style="[
                      { color: sst6 == index ? '#fff' : '' },
                      { background: sst6 == index ? 'red' : '' },
                    ]"
                  >
                    全部
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
        <div class="list-bom" v-for="(item, index) in 6" :key="index">
          <p>李老师16号到22号地理他课堂开课了</p>
          <p>时间</p>
          <img src="/download.jpg" alt="" />李青
          <div>
            <span>115人报名</span>
            <span style="color:#44A426;">免费</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ico1: true,
      ico2: true,
      ico3: true,
      show1: false,
      show2: false,
      show3: false,
      sst: 0,
      sst2: 0,
      sst3: 0,
      sst4: 0,
      sst5: 0,
      sst6: 0,
      scr: "scroll",
    };
  },
  methods: {
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
    sone2(index) {
      this.sst2 = index;
    },
    list() {
      // this.ico2 = true;
      // this.ico3 = true;
      // this.ico1 = true;
    },
    sone(index) {
      console.log(index);
      this.sst = index;
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
    height: 10.3rem;
    // background: chartreuse;
    // overflow-x: hidden;
    // overflow-y: scroll;
    .list-top-w {
      height: 100%;
      position: relative;
      border: 1px solid #fff;
      background: rgb(218, 217, 217);
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
        div {
          width: 100%;
          height: 1rem;
          line-height: 1rem;
          display: flex;
          justify-content: space-between;
        }
        img {
          height: 0.8rem;
          width: 0.8rem;
        }
      }
      width: 100%;
      .classify-w {
        width: 100%;
        height: 100%;
        display: flex;
        font-size: 0.4rem;
        ul {
          width: 50%;
          li {
            width: 100%;
            height: 1rem;
            text-align: center;
          }
        }
      }
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
