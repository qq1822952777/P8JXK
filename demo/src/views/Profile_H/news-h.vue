<template>
  <div class="news-h">
    <Return>消息通知</Return>
    <ul class="news-uu-h">
      <li>
        <img src="" alt="" />
        <div>
          <h4>课程通知</h4>
          <p>您的直播课程“业绩是怎样炼成的”还有半个小时就开了，记得去学习哦~</p>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <div>
          <h4>平台通知</h4>
          <p>我们将在国庆期间对系统经行维护升级，给您带来不便，深感抱歉~</p>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <div>
          <h4>订单通知</h4>
          <p>您的订单《xxxx》还有5分钟就要过期了，快去支付吧~</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Return from "../../component/return";
export default {
  components: {
    Return,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.news-h {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .news-uu-h {
    width: 100%;
    padding: 0 0.2rem;

    background-color: white;
    li {
      width: 100%;
      height: 2rem;
      border-bottom: 1px solid rgb(228, 228, 228);
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 10%;
      }
      div {
        width: 80%;
        height: 1.7rem;
        h4{
          font-size: .3rem;
          height: .75rem;
          line-height: .75rem;
        }
        p {
          font-size: 0.2rem;
          line-height: .4rem;
          color: #d0d0d0;
        }
      }
    }
  }
}
</style>