<template>
  <div class="top">
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      alert("空");
    },
  },
  watch: {
    $route: {
      handler(newval, newlog) {
        this.title = newval.title;
      },
    },
  },
};
</script>

<style lang="scss"></style>
