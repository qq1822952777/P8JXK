<template>
  <div class="Coursr">
    <div class="top-w">
      <van-nav-bar title="课程列表" right-text="按钮">
        <template #right>
          <van-icon name="search" color="#123" size="27" />
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
    <div class="list-w" @click="list">
      <div class="list-top-w">
        <van-popup v-model="show1" position="top" :style="{ height: '30%' }">
          <div class="classify-w">
            <ul>
              <li v-for="(item, index) in 10" :key="index" @click="sone(index)">
                高一
              </li>
            </ul>
            <ul>
              <li v-for="(item, index) in 10" :key="index">物理</li>
            </ul>
          </div>
        </van-popup>
        <van-popup v-model="show2" position="top" :style="{ height: '30%' }">
          <ul class="sort-w">
            <li>综合排序</li>
            <li v-for="(item, index) in 8" :key="index">最新</li>
          </ul>
        </van-popup>
        <van-popup
          v-model="show3"
          position="top"
          :style="{ height: '30%' }"
          class="list-vant"
        >
          <div class="screen">
            <div class="screen-w">
              <div>
                <p>类别</p>
                <ul>
                  <li v-for="(item, index) in 5" :key="index">全部</li>
                </ul>
              </div>
              <div>
                <p>讲师</p>
                <ul>
                  <li v-for="(item, index) in 7" :key="index">全部</li>
                </ul>
              </div>
              <div>
                <p>价格</p>
                <ul>
                  <li v-for="(item, index) in 4" :key="index">全部</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="list-vant-bom">
            <div>重置</div>
            <div>确认</div>
          </div>
        </van-popup>
        <van-card
          v-for="(item, index) in 10"
          :key="index"
          price="1998.0"
          desc="800人已报名"
          title="给你好声音的密码"
          thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
        />
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
      sst: "",
    };
  },
  methods: {
    list() {
      this.ico2 = true;
      this.ico3 = true;
      this.ico1 = true;
    },
    sone() {
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
        this.show1 = true;
      } else {
        this.show1 = false;
      }
    },
    ico2(val) {
      if (val == false) {
        this.show2 = true;
      } else {
        this.show2 = false;
      }
    },
    ico3(val) {
      if (val == false) {
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
    overflow: scroll;
    .list-top-w {
      position: relative;
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
