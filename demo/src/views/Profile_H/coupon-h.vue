<template>
  <div class="coupon-h">
    <Return>我的优惠券</Return>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in couponlist" :key="index" :title="item.name"></van-tab>
    </van-tabs>
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
      active:'',
      couponlist:[
        {
          name:'全部',
          num:0
        },
        {
          name:'已使用',
          num:0
        },
        {
          name:'未使用',
          num:0
        },
        {
          name:'已过期',
          num:0
        }
      ]
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.coupon-h{
  width: 100%;
  height: 100%;

  background-color: #F0F2F5;
}
</style>