<template>
  <div class="coupon-h">
    <Return>我的优惠券</Return>
    <van-tabs v-model="active">
      <van-tab
        v-for="(item, index) in couponlist"
        :key="index"
        :title="item.name"
      ></van-tab>
    </van-tabs>
    <div class="coupon-body">
      <div
        v-for="item in 3"
        :key="item"
        class="coupon-top"
        :class="item > 1 ? 'gray' : ''"
      >
        <p class="coupon-first" :class="item>1?'gray':'orange'">
          <span class="font-do">￥</span>
          <span class="font">50</span>
        </p>
        <p class="coupon-second">
          <span class="first-h">现金券</span>
          <span class="gray-h">限品类：初三英语</span>
          <span class="gray-h">2018.02.14 — 2018.02.20</span>
        </p>
        <p class="coupon-third" :class="item>1?'graybg':'orangebg'">立即使用</p>
      </div>
    </div>
  </div>
</template>
<script>
import Return from "@/components/return";
export default {
  components: {
    Return,
  },
  data() {
    return {
      active: "",
      couponlist: [
        {
          name: "全部",
          num: 0,
        },
        {
          name: "已使用",
          num: 0,
        },
        {
          name: "未使用",
          num: 0,
        },
        {
          name: "已过期",
          num: 0,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.coupon-h {
  width: 100%;
  height: 100%;
  .orange {
    color: #eb6100;
  }
  .orangebg {
    background-color: #eb6100;
  }
  .gray {
    color: #acacac;
  }
  .graybg {
    background-color: #bfbfbf;
  }
  .coupon-body {
    width: 100%;
    height: 90%;
    background-color: rgb(236, 236, 236);
    padding: 0.2rem;

    .coupon-top {
      width: 100%;
      display: flex;
      font-size: 0.2rem;
      margin-bottom: 0.2rem;
      .coupon-first {
        background-color: white;
        display: flex;
        width: 20%;
        border-top-left-radius: 0.1rem;
        border-bottom-left-radius: 0.1rem;
        padding: 0.36rem 0.2rem;
        .font-do {
          height: 0.5rem;
          line-height: 1rem;
        }
        .font {
          font-size: 0.7rem;
        }
      }
      .coupon-second {
        background-color: white;
        width: 55%;
        display: flex;
        padding: 0.2rem;
        flex-direction: column;
        border-right: dotted #eb6100 2px;
        border-top-right-radius: 0.2rem;
        border-bottom-right-radius: 0.2rem;
        span {
          margin-top: 0.07rem;
        }
        .first-h {
          font-size: 0.3rem;
        }
        .gray-h {
          font-size: 0.1rem;
          color: #ccc;
        }
      }
      .coupon-third {
        width: 25%;
        height: 1.408rem;
        line-height: 1.408rem;
        text-align: center;
        color: white;
        font-size: 0.3rem;
        border-top-left-radius: 0.2rem;
        border-bottom-left-radius: 0.2rem;
        border-top-right-radius: 0.1rem;
        border-bottom-right-radius: 0.1rem;
      }
    }
  }
}
</style>