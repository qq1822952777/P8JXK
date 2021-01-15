<template>
  <div class="verify">
    <van-nav-bar
      title="确认订单"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="verify-top">
      <div><img src="/images_J/8.png" alt="" /></div>
      <div>
        <p>如何成为旅游体验老师</p>
        <p>讲师:小楼</p>
        <p>￥ <span>1998.0</span></p>
      </div>
    </div>
    <ul class="verify-ui">
      <li><span>类型</span><span>直播课</span></li>
      <li><span>数量</span><span>x1</span></li>
      <li><span>商品价格</span><span>￥1998.0</span></li>
      <li><span class="ver-vip">vip</span><span>-￥20.00</span></li>
      <li>
        <span>优惠券</span
        ><span
          ><span style="color:#F86730;">（五张可用）</span>-￥20.00
          <span><van-icon name="weapp-nav" @click="ico"/></span>
        </span>
      </li>
    </ul>
    <div class="verify-bom">
      <div>实付金额: <span style="color:red;">￥159.12</span></div>
      <div @click="submit">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    submit() {
      this.$router.push({ path: "/payment" });
    },
    ico() {
      console.log("123");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.verify {
  width: 100%;
  height: 100%;
  position: relative;
  .verify-top {
    width: 97%;
    height: 1.8rem;
    margin: auto;
    display: flex;
    div:nth-child(1) {
      width: 40%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.1rem;
      }
    }
    div:nth-child(2) {
      width: 60%;
      height: 100%;
      padding-left: 0.2rem;
      position: relative;
      p:nth-child(1) {
        font-size: 0.35rem;
      }
      p:nth-child(2) {
        font-size: 0.25rem;
        margin-top: 0.2rem;
        color: rgb(168, 167, 167);
      }
      p:nth-child(3) {
        position: absolute;
        bottom: 0.2rem;
        color: red;
        font-size: 0.3rem;
        span {
          font-size: 0.4rem;
        }
      }
    }
  }
  .verify-ui {
    width: 94%;
    font-size: 0.35rem;
    margin: 0.3rem auto;
    li {
      width: 100%;
      height: 1rem;
      display: flex;
      justify-content: space-between;
      .ver-vip {
        width: 1rem;
        height: 0.6rem;
        background: -webkit-linear-gradient(right, #ca9662, rgb(226, 208, 150));
        line-height: 0.6rem;
        text-align: center;
        border-radius: 0.3rem;
      }
    }
  }
  .verify-bom {
    width: 100%;
    height: 1.3rem;
    position: absolute;
    bottom: 0;
    display: flex;
    div:nth-child(1) {
      width: 65%;
      height: 100%;
      line-height: 1.3rem;
      font-size: 0.35rem;
      padding-left: 0.2rem;
    }
    div:nth-child(2) {
      width: 35%;
      height: 100%;
      background: #fb5500;
      font-size: 0.3rem;
      text-align: center;
      line-height: 1.3rem;
      color: #fff;
    }
  }
}
</style>
