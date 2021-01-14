<template>
  <div class="modify-h">
    <Return>个人中心</Return>
    <ul class="top-h">
      <li>
        <span>头像</span>
        <p>
          <van-uploader :after-read="afterRead">
            <img :src="$store.state.modifyHJ.img"
          /></van-uploader>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="nameHJ">
        <span>姓名</span>
        <p>
          <span class="top-txt-h gray-h">睡觉觉</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>手机号码</span>
        <p>
          <span class="top-txt-h gray-h">18738226397</span>
        </p>
      </li>
      <li>
        <span>性别</span>
        <p>
          <span class="top-txt-h gray-h">男</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>出生日期</span>
        <p>
          <span class="top-txt-h gray-h">请选择</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>所在城市</span>
        <p>
          <span class="top-txt-h gray-h">请选择</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>年级</span>
        <p>
          <span class="top-txt-h gray-h">请选择</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>学科</span>
        <p>
          <span class="top-txt-h gray-h">请选择</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
    </ul>
    <!-- <van-area title="标题" :area-list="areaList" /> -->
  </div>
</template>
<script>
import Return from "../../component/return";
export default {
  components: {
    Return,
  },
  data() {
    return {
    };
  },
  methods: {
    afterRead(file) {
      this.$store.commit('afterRead',file.content)
    },
    nameHJ() {
      this.$router.push({path:'/set-name'})
    },
  },
};
</script>
<style lang="scss" scoped>
.modify-h {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .top-h {
    background-color: white;
    padding: 0 0.3rem;
    li {
      height: 1.2rem;
      line-height: 1.2rem;
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
        img {
          width: 0.8rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
}
</style>