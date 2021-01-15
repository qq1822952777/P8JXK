<template>
  <div class="course-h">
    <Return>{{ $route.query.val }}</Return>
    <van-tabs class="course-top-h" v-model="active">
      <van-tab
        v-for="(item, index) in courselist"
        :key="index"
        :title="item.name"
      ></van-tab>
    </van-tabs>
    <div class="course-dv-h">
      <p class="course-dv-top-h">
        <span class="course-dv-gray-h">订单编号：1101201805210000001</span>
        <span class="course-dv-red-h">待支付</span>
      </p>
      <div class="course-dv-body-h">
        <img src="" alt="" />
        <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
      </div>
      <div class="course-dv-bodyer-h">
        <span class="course-time-h">2018-02-14 13:13:51</span>
        <p class="course-shoping-h">
          <span class="gray">共1件商品，实际付款：</span>
          <span class="font">￥521.00</span>
        </p>
      </div>
      <div class="course-dv-down-h">
        <div class="nei">
          <p class="course-red">您还有21时09分25秒时间来付款订单超时将自动取消</p>
          <button class="course-btn">立即支付</button>
        </div>
      </div>
    </div>
    <div class="course-dv-h">
      <p class="course-dv-top-h">
        <span class="course-dv-gray-h">订单编号：1101201805210000001</span>
        <span class="course-dv-red-h">待支付</span>
      </p>
      <div class="course-dv-body-h">
        <img src="" alt="" />
        <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
      </div>
      <div class="course-dv-bodyer-h">
        <span class="course-time-h">2018-02-14 13:13:51</span>
        <p class="course-shoping-h">
          <span class="gray">共1件商品，实际付款：</span>
          <span class="font">￥521.00</span>
        </p>
      </div>
      <div class="course-dv-down-h">
        <div class="nei">
          <p class="course-red"></p>
          <button class="course-btn">立即支付</button>
        </div>
      </div>
    </div>
    <div class="course-dv-h">
      <p class="course-dv-top-h">
        <span class="course-dv-gray-h">订单编号：1101201805210000001</span>
        <span class="course-dv-red-h">待支付</span>
      </p>
      <div class="course-dv-body-h">
        <img src="" alt="" />
        <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
      </div>
      <div class="course-dv-bodyer-h">
        <span class="course-time-h">2018-02-14 13:13:51</span>
        <p class="course-shoping-h">
          <span class="gray">共1件商品，实际付款：</span>
          <span class="font">￥521.00</span>
        </p>
      </div>
      <div class="course-dv-down-h">
        <div class="nei">
          <p class="course-red"></p>
          <button class="course-btn">去评价</button>
        </div>
      </div>
    </div>
    <div class="course-dv-h">
      <p class="course-dv-top-h">
        <span class="course-dv-gray-h">订单编号：1101201805210000001</span>
        <span class="course-dv-red-h">待支付</span>
      </p>
      <div class="course-dv-body-h">
        <img src="" alt="" />
        <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
      </div>
      <div class="course-dv-bodyer-h">
        <span class="course-time-h">2018-02-14 13:13:51</span>
        <p class="course-shoping-h">
          <span class="gray">共1件商品，实际付款：</span>
          <span class="font">￥521.00</span>
        </p>
      </div>
      <div class="course-dv-down-h">
        <div class="nei">
          <p class="course-red"></p>
          <button class="course-btn">立即支付</button>
        </div>
      </div>
    </div>
    <div class="course-dv-h">
      <p class="course-dv-top-h">
        <span class="course-dv-gray-h">订单编号：1101201805210000001</span>
        <span class="course-dv-red-h">待支付</span>
      </p>
      <div class="course-dv-body-h">
        <img src="" alt="" />
        <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
      </div>
      <div class="course-dv-bodyer-h">
        <span class="course-time-h">2018-02-14 13:13:51</span>
        <p class="course-shoping-h">
          <span class="gray">共1件商品，实际付款：</span>
          <span class="font">￥521.00</span>
        </p>
      </div>
      <div class="course-dv-down-h">
        <div class="nei">
          <p class="course-red"></p>
          <button class="course-btn">去评价</button>
        </div>
      </div>
    </div>
    <div class="course-dv-h">
      <p class="course-dv-top-h">
        <span class="course-dv-gray-h">订单编号：1101201805210000001</span>
        <span class="course-dv-red-h">待支付</span>
      </p>
      <div class="course-dv-body-h">
        <img src="" alt="" />
        <p>钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的</p>
      </div>
      <div class="course-dv-bodyer-h">
        <span class="course-time-h">2018-02-14 13:13:51</span>
        <p class="course-shoping-h">
          <span class="gray">共1件商品，实际付款：</span>
          <span class="font">￥521.00</span>
        </p>
      </div>
      <div class="course-dv-down-h">
        <div class="nei">
          <p class="course-red"></p>
          <button class="course-btn">立即支付</button>
        </div>
      </div>
    </div>
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
      active: "",
      courselist: [
        {
          name: "全部订单",
          num: 0,
        },
        {
          name: "待支付",
          num: 0,
        },
        {
          name: "已支付",
          num: 0,
        },
        {
          name: "已取消",
          num: 0,
        },
      ],
    };
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.course-h {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(247, 247, 247);
  .course-top-h {
    margin-bottom: 0.1rem;
  }
  .course-dv-h {
    width: 100%;
    background-color: white;
    margin-bottom: .2rem;
    .course-dv-top-h {
      width: 100%;
      padding: 0 0.2rem;
      height: 0.7rem;
      line-height: 0.7rem;
      display: flex;
      justify-content: space-between;
      .course-dv-gray-h {
        font-size: 0.2rem;
        color: rgb(216, 216, 216);
      }
      .course-dv-red-h {
        font-size: 0.2rem;
        color: red;
      }
    }
    .course-dv-body-h {
      display: flex;
      width: 100%;
      height: 1.5rem;
      padding: .1rem 0.2rem;
      background-color: #fafafa;
      display: flex;
      justify-content: space-between;
      img{
        width: 20%;
      }
      p{
        width: 75%;
        line-height: .4rem;
        font-size: .3rem;
      }
    }
    .course-dv-bodyer-h{
      padding: 0 .2rem;
      width: 100%;
      height: 0.7rem;
      line-height: .7rem;
      display: flex;
      font-size: .2rem;
      justify-content: space-between;
      .course-time-h{
        color: rgb(146, 146, 146);
      }
      .gray{
        color: #ccc;
      }
      .font{
        font-size: .3rem;
      }
    }
  .course-dv-down-h{
    width: 100%;
    padding: 0 .2rem;
    .nei{
      border-top: 1px solid rgb(240, 240, 240);
      padding: .1rem 0;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .course-red{
        width: 55%;
        color: red;
        line-height: .3rem;
        font-size: .2rem;
      }
      .course-btn{
        font-size: .25rem;
        border: none;
        background-color: white;
        border: 1px solid orange;
        color: orange;
        height: .5rem;
        border-radius: .1rem;
        width: 2rem;
      }
    }
  }
  }
}
</style>