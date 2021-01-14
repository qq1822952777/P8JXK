<template>
  <div class="modify-h">
    <van-nav-bar
      title="个人信息"
      left-text=""
      left-arrow
      @click-left="onClickLeftHJ"
      style="margin-bottom: 0.1rem"
    />
    <ul class="top-h">
      <li>
        <span>头像</span>
        <p>
          <img :src="img" alt="" />
          <!-- <van-uploader class="img-set-h" :after-read="afterRead" /> -->
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>姓名</span>
        <p>
          <span class="top-txt-h gray-h">李木木</span>
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
export default {
  data() {
    return {
      img: "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg",
      
    };
  },
  methods: {
    onClickLeftHJ() {
      this.$router.go(-1);
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      this.img = file.content;
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
        img {
          width: 0.8rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
}
</style>