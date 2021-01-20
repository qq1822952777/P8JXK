<template>
  <div class="myclass-h">
    <Return>我的学习</Return>
    <van-tabs v-model="active" @click="qieHJ(active)">
      <van-tab
        v-for="(item, index) in classname"
        :key="index"
        :title="item.name + '(' + item.num + ')'"
        :name="item.type"
      ></van-tab>
    </van-tabs>
    <van-card
      v-for="item in copy"
      :key="item.course_id"
      :desc="item.title"
      :title="item.title"
      thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
    />
  </div>
</template>
<script>
import Return from "@/components/return";
import { Getcharacteristic } from "@/utils/api";
export default {
  components: {
    Return,
  },
  data() {
    return {
      active: "",
      classname: [],
      classlist: [],
      copy: [],
    };
  },
  created() {
    Getcharacteristic().then((res) => {
      console.log(res);
      this.classname = res.typeNum;
      this.classlist = res.courseList;
      this.copy = res.courseList.filter((ele) => {
        console.log(ele);
        if (ele.course_type == 2) {
          return ele;
        }
      });
    });
  },
  methods: {
    qieHJ(val){
      console.log(1);
      this.copy=this.classlist.filter(res=>{
        if(res.course_type==val){
          return res
        }
      })
      console.log(this.copy);
    }
  },
};
</script>
<style lang="scss">
.myclass-h {
  width: 100%;
  height: 100%;

  background-color: #f0f2f5;
}
</style>