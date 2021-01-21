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
      <div class="bxo2">
        <div
          class="box-top"
          v-for="(item, index) in 4"
          :key="index"
          @click="fore"
        >
          <div><img src="@/assets/img/download.jpg" alt="" /></div>
          <div>
            <p>2019.05.05 10:30~11:30</p>
            <p>
              李想老师 （25分钟）<span style="color:#FA5104;">预约成功</span>
            </p>
            <p>开课前5分钟可进入教师</p>
            <div class="dw">进入课堂</div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="num == 2" class="bxo-ttp">
      <div class="bxo2">
        <div class="box-top" v-for="(item, index) in 4" :key="index">
          <div><img src="@/assets/img/download.jpg" alt="" /></div>
          <div>
            <p>2019.05.05 10:30~11:30</p>
            <p>李想老师</p>
            <p>已上课</p>
          </div>
          <div class="bon-w">
            <span>
              <van-icon color="#FE9F01" name="comment" /><br />
              点评老师</span
            >
            <span>
              <van-icon color="#308CEC" name="video" /><br />
              查看回放</span
            >
            <span @click="remark">
              <van-icon color="#FD6801" name="friends" /><br />
              课后点评</span
            >
            <span @click="remark1">
              <van-icon color="#239800" name="printer" /><br />
              课后作业</span
            >
          </div>
        </div>
      </div>
    </div>
    <van-popup v-model="show" class="showbom">
      <span class="www">老师对我的点评</span>
      <div class="show-w">
        <span style="color:#AFAFAF;">老师姓名:</span>
        <span>李某某</span>
        <p style="color:#AFAFAF;">点评内容:</p>
        <p style="font-size:0.3rem;">学习很好,加油努力。</p>
      </div>
    </van-popup>
    <van-popup v-model="show2" class="showbom2">
      <span class="www">点评老师 </span>
      <div class="show-w">
        <span style="color:#AFAFAF;">老师:</span>
        <span>李某某</span>
        <p style="color:#AFAFAF;">标签:</p>
        <div class="label">
          <div
            v-for="(item, index) in 6"
            :key="index"
            @click="effect(index)"
            :style="{
              background: index == i ? '#eb6001' : '',
              color: index == i ? '#ffffff' : '',
            }"
          >
            效果
          </div>
        </div>
        <p style="font-size:0.4rem;color:#AFB7CB;">内容:</p>
        <div class="textt">
          <textarea class="textt2" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div class="bom-bom">
          <span @click="cancel">取消</span>
          <span>提交</span>
        </div>
      </div>
    </van-popup>
    <div v-if="num == 3" class="bxo-ttp">
      <div class="bxo2">
        <div
          class="box-top"
          v-for="(item, index) in 4"
          :key="index"
          @click="fore"
        >
          <div><img src="@/assets/img/download.jpg" alt="" /></div>
          <div>
            <p>2019.05.05 10:30~11:30</p>
            <p>李想老师 （25分钟）</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      show: false,
      show2: false,
      i: "",
    };
  },
  methods: {
    cancel() {
      this.show2 = false;
    },
    effect(index) {
      this.i = index;
    },
    remark1() {
      this.show2 = true;
    },
    remark() {
      this.show = true;
    },
    fore() {
      this.$router.push({ path: "/fore" });
    },
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
  .showbom {
    width: 7rem;
    height: 5rem;
    border-radius: 0.2rem;
    font-size: 0.35rem;
    text-align: center;
    padding-top: 0.3rem;
    .www {
      font-weight: 800 !important;
    }
    .show-w {
      width: 90%;
      text-align: left;
      margin: 0.4rem auto;
      p {
        margin-top: 0.3rem;
      }
    }
  }
  .showbom2 {
    width: 7rem;
    height: 8rem;
    border-radius: 0.2rem;
    font-size: 0.35rem;
    text-align: center;
    padding-top: 0.3rem;
    .www {
      font-weight: 800 !important;
    }
    .show-w {
      width: 90%;
      text-align: left;
      margin: 0.4rem auto;
      .bom-bom {
        width: 100%;
        height: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;
        border-top: 0.02rem solid rgb(211, 208, 208);
        display: flex;
        span {
          text-align: center;
          width: 50%;
          height: 100%;
          line-height: 1rem;
        }
        span:nth-child(2) {
          color: #ff6823;
          border-left: 0.02rem solid rgb(211, 208, 208);
        }
      }
      .textt {
        width: 100%;
        height: 2rem;
        border: 0.01rem solid #d6d6d6;
      }
      .textt2 {
        width: 100%;
        height: 100%;
        border: 0;
      }
      .label {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        div {
          margin-left: 0.2rem;
          padding: 0.1rem 0.5rem;
          border-radius: 0.1rem;
          color: #eb6001;
          border: 0.02rem solid #eb6001;
          margin-top: 0.2rem;
        }
      }
      p {
        margin-top: 0.3rem;
      }
    }
  }
  .box1 {
    width: 100%;
    height: 87%;
    overflow-y: auto;
    margin-top: 0.2rem;
    .bxo2 {
      width: 100%;
      .box-top {
        width: 93%;
        height: 2.5rem;
        margin: auto;
        // background: chartreuse;
        border-radius: 0.3rem;
        border: 0.01rem solid rgb(186, 188, 189);
        display: flex;
        align-items: center;
        margin-top: 0.3rem;
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
  }
  .bxo-ttp {
    width: 100%;
    height: 11.1rem;
    overflow: scroll;
    .bxo2 {
      width: 100%;
      .box-top {
        width: 93%;
        margin: auto;
        // background: chartreuse;
        border-radius: 0.3rem;
        border: 0.01rem solid rgb(186, 188, 189);
        display: flex;
        margin-top: 0.3rem;
        flex-wrap: wrap;
        align-items: center;
        .bon-w {
          width: 100%;
          height: 1.2rem;
          border-radius: 0.3rem;
          font-size: 0.3rem;
          display: flex;
          align-items: center;
          span {
            width: 25%;
            text-align: center;
            .van-icon {
              font-size: 0.45rem;
            }
          }
        }
        div:nth-child(1) {
          width: 30%;
          text-align: center;
          img {
            width: 60%;
            height: 40%;
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
