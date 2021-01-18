<template>
  <div class="setpass-h">
    <Return>设置密码</Return>
    <ul class="myset-uu-h">
      <li>
        <input type="text" placeholder="请输入手机号" />
        <button>获取验证码</button>
      </li>
      <li>
        <input type="text" placeholder="请输入验证码" />
      </li>
      <li>
        <input type="text" placeholder="请输入新密码" />
      </li>
      <p class="setpass-p">6-20位英文、数字、符号、区分大小写</p>
    </ul>
    <button class="btn-h" @click="setpassSubHJ">提交</button>
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
    setpassSubHJ() {},
  },
};
</script>
<style lang="scss" scoped>
.setpass-h {
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
      input {
        width: 70%;
        height: 0.5rem;
        border: none;
      }
      button {
        width: 27%;
        height: 0.6rem;
        font-size: 0.25rem;
        line-height: 0.5rem;
        border: none;
        background-color: #eb6100;
        color: white;
      }
    }
    .setpass-p {
      color: #ccc;
      font-size: 0.2rem;
      height: 0.7rem;
      line-height: 0.7rem;
    }
  }
  .btn-h {
    background-color: #eb6100;
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