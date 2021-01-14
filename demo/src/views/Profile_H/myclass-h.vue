<template>
  <div class="myclass-h">
    <Return>我的学习</Return>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in classlist" :key="index" :title="item.name+'('+item.num+')'"></van-tab>
    </van-tabs>
  </div>
</template>
<script>
import Return from "../../component/return";
export default {
  components: {
    Return,
  },
  data() {
    return {
      active:'',
      classlist:[
        {
          name:'直播课',
          num:0
        },
        {
          name:'点播课',
          num:0
        },
        {
          name:'音频课',
          num:0
        },
        {
          name:'图文课',
          num:0
        },
        {
          name:'面授课',
          num:0
        },
        {
          name:'会员课',
          num:0
        },
      ]
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.myclass-h{
  width: 100%;
  height: 100%;

  background-color: #F0F2F5;
}
</style>