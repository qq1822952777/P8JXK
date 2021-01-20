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
    <ul>
      <li>
        <img src="/images_J/student.png" alt="">
      </li>
      <li>
        <img src="/images_J/student.png" alt="">
      </li>
      <li>
        <img src="/images_J/student.png" alt="">
      </li>
    </ul>
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
      this.$router.push({path:'/card-h'})
    }
  },
};
</script>
<style lang="scss" scoped>
.study-card-h {
  width: 100%;
  height: 100%;
  background-color: rgba(223, 223, 223, 0.523);
  ul{
    width: 100%;
    padding: .1rem .2rem;
    li{
      width: 100%;
      border-radius: .2rem;
      overflow: hidden;
      margin-top: .2rem;
      img{
        width: 100%;
      }
    }
  }
}
</style>