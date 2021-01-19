<template>
  <div class="setpass-h">
    <Return>设置密码</Return>
    <ul class="myset-uu-h">
      <li>
        <input type="text" placeholder="请输入手机号" />
        <button @click="btn">获取验证码</button>
      </li>
      <li>
        <input type="text" placeholder="请输入验证码" />
      </li>
      <li>
        <input :type="input" placeholder="请输入新密码" v-model="pass" />
        <span v-if="falg == 2" style="color: green">正确</span>
        <span v-if="falg == 1" style="color: red">错误</span>
        <van-icon @click="fass=!fass" v-if="fass==false" name="eye-o" />
        <van-icon @click="fass=!fass" v-else name="closed-eye" />
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
    return {
      pass: "",
      falg: 0,
      fass:true,
      input:'password'
    };
  },
  methods: {
    setpassSubHJ() {},
    btn(){
      alert('点我干嘛 ， 获取不了')
    }
  },
  watch: {
    pass(val, newval) {
      let reg = /^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}$/;
      if (newval == "") {
        this.falg = 0;
      } else {
        if (!reg.test(newval)) {
          this.falg = 1;
        } else {
          this.falg = 2;
        }
      }
    },
    fass(val,newval){
      if(newval==true){
        this.input='text'
      }else{
        this.input='password'
      }
    }
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