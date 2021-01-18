<template>
  <div class="myset-h">
    <Return>设置</Return>
    <ul class="myset-uu-h">
      <li>
        <span>清除缓存</span>
        <p>
          <span class="top-txt-h gray-h">50M</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
       <li @click="setpassHJ">
        <span>设置密码</span>
        <p>
          <span class="top-txt-h gray-h">您尚未设置密码</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
       <li>
        <span>当前版本</span>
        <p>
          <span class="top-txt-h gray-h">V1.2</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
    </ul>
    <button class="btn-h" @click="mysetMoverHJ">退出登录</button>
  </div>
</template>
<script>
import Return from "@/components/return";
export default {
  components: {
    Return,
  },
  data() {
    return {};
  },
  methods: {
    mysetMoverHJ() {
      this.$store.commit("mysetMoverHJ");
      this.$router.push({ path: "/Login" });
    },
    setpassHJ(){
      this.$router.push({ path: "/setpass-h" });
    }
  },
};
</script>
<style lang="scss" scoped>
.myset-h {
  width: 100%;
  height: 100%;
  .myset-uu-h {
    background-color: white;
    padding: 0 0.3rem;
    li {
      height: 1.1rem;
      line-height: 1.1rem;
      font-size: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(240, 240, 240);
      p {
        display: flex;
        align-items: center;
        .top-txt-h {
          margin-right: 0.2rem;
          font-size: 0.3rem;
        }
        .gray-h {
          color: #ccc;
        }
        .van-uploader {
          height: 0.8rem !important;
        }
      }
    }
  }
  .btn-h {
    background-color: #EB6100;
    color: white;
    font-size: 0.3rem;
    width: 90%;
    height: 0.8rem;
    border: none;
    border-radius: 0.1rem;
    margin-top: 2.5rem;
    margin-left: 5%;
  }
}
</style>