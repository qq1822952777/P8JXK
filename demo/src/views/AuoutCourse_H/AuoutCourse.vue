<template>
  <div class="about">
    <van-nav-bar
      title="约课记录"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="about-top">
      <div :style="{ color: 1 == num ? 'red' : '' }" @click="numone(1)">
        待上课
      </div>
      <div :style="{ color: 2 == num ? 'red' : '' }" @click="numone(2)">
        已上课
      </div>
      <div :style="{ color: 3 == num ? 'red' : '' }" @click="numone(3)">
        已取消
      </div>
    </div>
    <div v-if="num == 1" class="box1">
      <div class="box-top" v-for="(item, index) in 4" :key="index">
        <div><img src="/images_J/download.jpg" alt="" /></div>
        <div>
          <p>2019.05.05 10:30~11:30</p>
          <p>李想老师 （25分钟）预约成功</p>
          <p>开课前5分钟可进入教师</p>
          <div class="dw">进入课堂</div>
        </div>
      </div>
    </div>
    <div v-if="num == 2">2</div>
    <div v-if="num == 3">3</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    numone(index) {
      // console.log(index);
      this.num = index;
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss">
.about {
  width: 100%;
  height: 100%;
  .box1 {
    width: 100%;
    height: 10rem;
    margin-top: 0.2rem;
    .box-top {
      width: 93%;
      height: 3rem;
      margin: auto;
      // background: chartreuse;
      border-radius: 0.3rem;
      border: 0.01rem solid rgb(186, 188, 189);
      display: flex;
      align-items: center;
      position: relative;
      margin-top: 0.3rem;
      overflow-y: auto;
      .dw {
        width: 1.5rem;
        height: 0.6rem;
        top: 0;
        right: 0;
        background: red;
        position: absolute;
        font-size: 0.25rem;
        color: #fff;
        line-height: 0.6rem;
        text-align: center;
        border-radius: 0 0.3rem 0 0.3rem;
      }
      div:nth-child(1) {
        width: 30%;
        text-align: center;
        img {
          width: 80%;
          height: 50%;
          margin-top: 0.2rem;
        }
      }
      div:nth-child(2) {
        width: 70%;
        p:nth-child(1) {
          font-size: 0.4rem;
        }
        p:nth-child(2) {
          font-size: 0.3rem;
          margin-top: 0.3rem;
          color: rgb(167, 168, 167);
        }
        p:nth-child(3) {
          font-size: 0.3rem;
          margin-top: 0.1rem;
          color: rgb(167, 168, 167);
        }
      }
    }
  }
  .about-top {
    width: 100%;
    height: 1rem;
    // background: aqua;
    font-size: 0.4rem;
    display: flex;
    border-top: 0.03rem solid rgb(211, 208, 208);
    border-bottom: 0.03rem solid rgb(211, 208, 208);
    div {
      width: 33%;
      text-align: center;
      line-height: 1rem;
    }
  }
}
</style>
