<template>
  <div class="fore">
    <van-nav-bar
      title="课前资料"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="fore-top">
      <div class="name">
        <span>老师姓名:</span><span style="color:#123;">李想老师</span>
      </div>
      <div class="time">
        <span>上课时间:</span
        ><span style="color:#123;">2019.05.05 10:30~11.30</span>
      </div>
      <p>资料备注:</p>
      <div class="tex">
        <textarea
          class="text"
          name=""
          style="color:#123;"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <p>我的资料:</p>
      <div class="mi">
        <!-- <div><van-icon name="share-o" /></div> --><van-uploader
          v-model="fileList"
          multiple
        />
        <p style="">选取文件照片上传</p>
        <p>评论区:</p>
      </div>
    </div>
    <div class="sub" @click="sub">提交</div>
    <van-popup v-model="show" class="nr">
      <p>提示</p>
      <van-icon name="smile" />
      <p style="font-size:0.35rem;">这是个作业名称，上传成功</p>
      <div class="nr-bom">
        <span @click="fh">返回</span>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [{ url: "https://img.yzcdn.cn/vant/leaf.jpg" }],
      show: false,
    };
  },
  mounted() {},
  methods: {
    fh() {
      this.$router.push({ path: "/AuoutCourse" });
    },
    sub() {
      this.show = true;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.fore {
  width: 100%;
  height: 100%;
  position: relative;
  .nr {
    width: 80%;
    height: 40%;
    border-radius: 0.2rem;
    text-align: center;
    font-size: 0.48rem;
    p:nth-child(1) {
      font-weight: 700 !important;
      margin-top: 0.3rem;
    }
    p:nth-child(3) {
      margin-top: 0.2rem;
    }
    .van-icon {
      font-size: 1.2rem;
      color: #fea826;
      margin-top: 0.5rem;
    }
    .nr-bom {
      width: 100%;
      height: 1rem;
      //   background: cornflowerblue;
      position: fixed;
      bottom: 0.6rem;
      left: 0;
      text-align: center;
      line-height: 1rem;
      font-size: 0.38rem;
      color: #fa6a27;
    }
  }
  .fore-top {
    width: 90%;
    height: 95%;
    margin: auto;
    font-size: 0.35rem;
    color: #a1a1a1;
    p {
      margin-top: 0.4rem;
    }
    .name {
      margin-top: 0.2rem;
    }
    .time {
      margin-top: 0.4rem;
    }
    .tex {
      width: 100%;
      height: 2.4rem;
      border: 0.03rem solid rgb(209, 208, 208);
      margin-top: 0.4rem;
      .text {
        width: 100%;
        height: 100%;
        border: 0;
        resize: none;
      }
    }
    .mi {
      width: 100%;
      height: 7rem;
      margin-top: 0.3rem;
      /deed/.van-uploader__wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        .van-uploader {
          width: 33%;
          height: 2rem;
          /deed/.van-uploader__input {
            width: 33%;
            height: 2rem;
            /deed/.van-image {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
  .sub {
    width: 100%;
    height: 1.1rem;
    background: #fe5500;
    position: absolute;
    bottom: 0;
    font-size: 0.5rem;
    color: #fff;
    text-align: center;
    line-height: 1.1rem;
  }
}
</style>
