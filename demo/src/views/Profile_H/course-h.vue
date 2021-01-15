<template>
  <div class="course-h">
    <Return>{{$route.query.val}}</Return>
    <van-tabs v-model="active">
      <van-tab v-for="(item,index) in courselist" :key="index" :title="item.name"></van-tab>
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
      courselist:[
        {
          name:'全部订单',
          num:0
        },
        {
          name:'待支付',
          num:0
        },
        {
          name:'已支付',
          num:0
        },
        {
          name:'已取消',
          num:0
        },
      ]
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.course-h{
  width: 100%;
  height: 100%;
  background-color: #F0F2F5;
}
</style>