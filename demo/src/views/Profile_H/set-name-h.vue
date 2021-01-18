<template>
  <div class="set-name-h">
    <van-nav-bar
      title="修改个人信息"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <p>
      <input class="input-h" type="text" v-model="txt" />
    </p>
  </div>
</template>
<script>
import Return from "@/components/return";
import {user} from "@/utils/api";
export default {
  components: {
    Return,
  },
  data() {
    return {
      txt: this.$route.query.name,
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      user({ nickname: this.txt }).then((res) => {
        this.$router.go(-1);
      });
    },
  },
};
</script>
<style lang="scss">
.set-name-h {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  p {
    width: 100%;
    padding: 0.1rem 0;
    background-color: white;
    font-size: 0.3rem;
    .input-h {
      width: 96%;
      height: 0.6rem;
      // background-color: white;
      border: none;
      margin-left: 2%;
    }
  }
}
</style>