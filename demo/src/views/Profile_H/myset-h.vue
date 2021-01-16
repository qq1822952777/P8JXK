<template>
  <div class="myset-h">
    <Return>设置</Return>
    <button class="btn-h" @click="mysetMoverHJ">退出登录</button>
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
    };
  },
  methods: {
    mysetMoverHJ(){
      this.$store.commit('mysetMoverHJ')
    }
  },
};
</script>
<style lang="scss" scoped>
.myset-h{
  width: 100%;
  height: 100%;
  background-color: #F0F2F5;
  .btn-h{
    background-color: rgb(255, 123, 0);
    color: white;
    font-size: .3rem;
    width: 90%;
    height: .8rem;
    border: none;
    border-radius: .1rem;
    
  }
}
</style>