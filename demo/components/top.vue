<template>
  <div class="top">
    <van-nav-bar
      :title="this.$router.meta.title"
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

  // watch: {
  //   $route: {
  //     handler(newval, newlog) {
  //       if (newval.path == "/login") {
  //       } else {
  //         console.log("13");
  //       }
  //       // this.title = newval.meta.title;
  //     },
  //   },
  // },
};
</script>

<style lang="scss"></style>
