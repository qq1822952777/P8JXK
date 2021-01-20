<template>
  <div class="details-h">
    <Return>我的订单</Return>
    <div class="details">
      <div class="details-top-h" :class="doing == '待支付' ? 'red' : ''">
        <p>{{ doing }}</p>
        <p v-if="doing == '待支付'">
          您还有21时09分25秒时间来付款，订单超时将自动取消
        </p>
      </div>
      <div class="details-body-h">
        <div class="body1-h">
          <img src="" alt="" />
          <div>
            <p class="body1-font-h">
              钢铁是怎样炼成的钢铁是怎样炼成的钢铁是怎样炼成的
            </p>
            <p class="body1-gray-h">￥119.00</p>
          </div>
        </div>
        <div class="body2-h"></div>
      </div>
      <div class="details-body2-h">
        <ul>
          <li>订单编号：1101201805210000001</li>
          <li class="li">下单时间：2018-02-14 13:13:51</li>
          <li>支付方式：在线支付</li>
        </ul>
      </div>
      <ul class="details-body3-h">
        <li>
          <p>商品原价：</p>
          <b>￥119.00</b>
        </li>
        <li>
          <p>会员：</p>
          <b>￥20.00</b>
        </li>
        <li>
          <p>优惠券：</p>
          <b>￥20.00</b>
        </li>
        <li>
          <p>实付金额：</p>
          <b class="red">￥79.00</b>
        </li>
      </ul>
      <div class="details-down-h">
        <button v-if="doing == '待支付'" class="details-down-orange-h">
          立即支付
        </button>
        <button v-if="doing == '待支付'" @click="cancelHJ" class="details-down-gray-h">
          取消订单
        </button>
        <button
          v-if="doing == '已完成'"
          @click="evaluateHJ"
          class="details-down-orange-h"
        >
          去评价
        </button>
      </div>
      <!-- 去评价 -->
      <van-popup class="details-popup" v-model="showevaluateHJ">
        <div class="details-popup-top">
          <p class="a"> <span>星级:</span> <van-rate class="xing" v-model="value" /></p>
          <p class="b"><span>标签:</span>
            <ul class="xuan">
              <li :class="inde==index?'orange':''" v-for="(item,index) in evaluate" @click="orange(index)" :key="index">{{item.name}}</li>
            </ul>
          </p>
          <p class="c">
            <span>内容:</span>
            <textarea></textarea>
          </p>
        </div>
        <p class="details-popup-down">
          <button @click="showevaluateHJ = false" class="btn">取消</button>
          <button>提交</button>
        </p>
      </van-popup>
    </div>
  </div>
</template>
<script>
import Return from "@/components/return";
import { Dialog } from "vant";
export default {
  components: {
    Return,
  },
  data() {
    return {
      doing: this.$route.query.val,
      showevaluateHJ: false,
      // showcancel: false,
      value: 0,
      evaluate: [
        {
          name: "效果好",
          num: "1990",
        },
        {
          name: "通俗易懂",
          num: "990",
        },
        {
          name: "效果好",
          num: "810",
        },
        {
          name: "效果好",
          num: "590",
        },
        {
          name: "效果好",
          num: "200",
        },
        {
          name: "效果好",
          num: "10",
        },
        {
          name: "效果好",
          num: "1",
        },
      ],
      inde: 0,
    };
  },
  methods: {
    evaluateHJ() {
      this.showevaluateHJ = true;
    },
    orange(i) {
      this.inde = i;
    },
    cancelHJ() {
      Dialog.confirm({
        title: "提示",
        message: "订单取消后不可恢复,确认取消吗？",
      })
        .then(() => {
        })
        .catch(() => {
        });
    },
  },
};
</script>
<style lang="scss" scoped>
.details-h {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(247, 247, 247);
  .details {
    width: 100%;
    height: 92.4%;
    background-color: white;
    .details-top-h {
      width: 100%;
      padding: 0.1rem 0.2rem;
      font-size: 0.2rem;
      border-bottom: 1px solid rgb(240, 240, 240);
      p {
        height: 0.35rem;
        line-height: 0.35rem;
      }
    }
    .red {
      color: red;
    }
    .details-body-h {
      width: 100%;
      padding: 0 0.2rem;
      .body1-h {
        width: 100%;
        display: flex;
        align-items: center;
        padding: 0.2rem 0;
        border-bottom: 1px solid rgb(240, 240, 240);
        img {
          width: 1.1rem;
          height: 1.1rem;
          margin-right: 0.2rem;
          border-radius: 0.1rem;
        }
        div {
          width: 60%;
          .body1-font-h {
            font-size: 0.26rem;
            height: 0.35rem;
            line-height: 0.35rem;
          }
          .body1-gray-h {
            font-size: 0.2rem;
            color: #ccc;
            margin-top: 0.4rem;
          }
        }
      }
    }
    .details-body2-h {
      width: 100%;
      padding: 0 0.2rem;
      ul {
        padding: 0.15rem 0;
        font-size: 0.2rem;
        color: rgb(175, 175, 175);
        border-bottom: 1px solid rgb(247, 247, 247);
        li {
          height: 0.3rem;
          line-height: 0.3rem;
        }
      }
    }
    .details-body3-h {
      width: 100%;
      padding: 0.25rem 0.2rem;
      li {
        display: flex;
        font-size: 0.1rem;
        height: 0.5rem;
        line-height: 0.5rem;
        justify-content: space-between;
        p {
          width: 79%;
          text-align: right;
          color: rgb(175, 175, 175);
        }
        b {
          width: 20%;
          font-size: 0.3rem;
          color: rgb(27, 27, 27);
        }
        .red {
          color: red;
        }
      }
    }
    .details-down-h {
      position: absolute;
      right: 0.2rem;
      bottom: 1rem;
      display: flex;
      flex-direction: column;
      button {
        background-color: white;
        border: none;
        width: 2.2rem;
        font-size: 0.3rem;
        border-radius: 0.1rem;
      }
      .details-down-orange-h {
        height: 0.8rem;
        color: orange;
        border: 1px solid orange;
      }
      .details-down-gray-h {
        margin-top: 0.2rem;
        height: 0.6rem;
        color: rgb(175, 175, 175);
        border: 1px solid rgb(175, 175, 175);
      }
    }
  }
  .details-popup {
    font-size: 0.2rem;
    width: 90%;
    height: 50%;
    border-radius: 0.2rem;
    .details-popup-top {
      padding: 0.5rem 0.2rem;
      p {
        width: 100%;
        padding: 0 0.2rem;
        display: flex;
        span {
          width: 13%;
        }
      }
      .a {
        width: 100%;
        height: 0.7rem;
        line-height: 0.7rem;
        align-items: center;
        .xing {
          margin-left: 0.2rem;
        }
      }
      .b {
        width: 100%;
        span {
          margin-top: 0.2rem;
        }
        .xuan {
          margin-left: 0.2rem;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          li {
            width: 31%;
            text-align: center;
            border-radius: 0.1rem;
            border: 1px solid orangered;
            height: 0.5rem;
            line-height: 0.5rem;
            color: orangered;
            margin-top: 0.15rem;
          }
          .orange {
            background-color: orangered;
            color: white;
          }
        }
      }
      .c {
        width: 100%;
        margin-top: 0.3rem;
        textarea {
          margin-left: 0.1rem;
          width: 86%;
          border: 1px solid rgb(230, 230, 230);
          resize: none;
          height: 1.8rem;
        }
      }
    }
    .details-popup-down {
      position: absolute;
      bottom: .1rem;
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      border-top: rgb(240, 240, 240) 2px solid;
      button {
        border: none;
        background-color: white;
        font-size: 0.3rem;
        width: 50%;
        color: orangered;
      }
      .btn {
        border-right: 2px solid rgb(240, 240, 240);
        color: gray;
      }
    }
  }
}
</style>