<template>
  <div class="card-h">
    <Return>学习卡兑换</Return>
    <div class="card-body-h">
      <van-field
        v-model="number"
        type="number"
        label="卡号:"
        placeholder="请输入学习卡号"
      />
      <van-field
        v-model="password"
        type="password"
        label="密码:"
        placeholder="请输入学习卡密码"
      />
      <button class="card-btn-h" @click="cardHJ">立即兑换</button>
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
      number: "",
      password: "",
    };
  },
  methods: {
    cardHJ() {
      Dialog.alert({
        title: "标题",
        message: "兑换成功！",
      }).then(() => {
      });
    },
  },
};
</script>
<style lang="scss">
.card-h {
  width: 100%;
  height: 100%;
  background-color: rgba(230, 227, 227, 0.646);
  .card-body-h {
    width: 100%;
    height: 91.7%;
    margin-top: 0.1rem;
    padding: 0 0.1rem;
    background-color: white;
  }
  .card-btn-h {
    width: 90%;
    margin-left: 5%;
    background-color: #eb6100;
    color: white;
    font-size: 0.3rem;
    border-radius: 0.1rem;
    border: none;
    height: 0.8rem;
    margin-top: 1.7rem;
  }
}
.van-cell__title {
  width: 0.7rem;
}
</style>