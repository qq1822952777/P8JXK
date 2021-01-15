<template>
  <div class="top">
    <van-nav-bar
      :title ="topObj.name"
      left-text=""
      right-text=""
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
      v-show="topObj.topShow"
    />
    <!-- 在路由的 meta 中加入 name 和 topShow 控制组件的显示内容 以及是否显示-->
  </div>
</template>

<script>
export default {
  props:['istitle'],
  data() {
    return {
      topObj:{
        name:'',
        topShow:Boolean
      }
    };
  },
  mounted() {
    // 触发内容替换
    this.topObj = this.istitle
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      alert("空");
    },
  },
};
</script>

<style lang="scss" >
</style>
