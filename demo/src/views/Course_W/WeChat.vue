<template>
  <div class="WeChat">
    <div class="WeChat-top">
      <span @click="fh"><van-icon name="arrow-left" /> 微信（21）</span>
      <span>邓凯元</span>
      <span><van-icon name="weapp-nav" /> </span>
    </div>
    <div class="WeChat-bom">
      <div><van-icon name="volume-o" /></div>
      <div></div>
      <div><van-icon name="smile-o" /></div>
      <div><van-icon name="add-o" /></div>
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
    fh() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.WeChat {
  width: 100%;
  height: 100%;
  position: relative;
  .WeChat-top {
    background: #303030;
    width: 100%;
    height: 1.2rem;
    font-size: 0.35rem;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      width: 33%;
      text-align: center;
    }
  }
  .WeChat-bom {
    width: 100%;
    height: 1rem;
    position: absolute;
    bottom: 0;
    display: flex;
    background: rgb(222, 223, 220);
    div:nth-child(1) {
      width: 15%;
      text-align: center;
    }
    div:nth-child(2) {
      width: 51%;
      border-bottom: 0.04rem solid rgb(185, 183, 183);
      margin-bottom: 0.1rem;
    }
    div:nth-child(3) {
      width: 17%;
      text-align: center;
    }
    div:nth-child(4) {
      text-align: center;
      width: 17%;
    }
  }
}
</style>
