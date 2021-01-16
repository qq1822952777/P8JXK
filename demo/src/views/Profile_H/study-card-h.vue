<template>
  <div class="study-card-h">
    <van-nav-bar
      title="我的学习卡"
      left-text=""
      :right-text="txt"
      left-arrow
      @click-left="onClickLeftHJ"
      @click-right="onClickRightHJ"
      style="margin-bottom: 0.1rem"
    />
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
      txt: "学习兑换卡",
    };
  },
  methods: {
    onClickLeftHJ() {
      this.$router.go(-1);
    },
    onClickRightHJ(){
      
    }
  },
};
</script>
<style lang="scss" scoped>
.study-card-h {
  width: 100%;
  height: 100%;
}
</style>