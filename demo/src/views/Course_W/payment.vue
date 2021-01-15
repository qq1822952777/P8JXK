<template>
  <div class="">
    <van-nav-bar
      title="订单支付"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    订单支付
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss"></style>
