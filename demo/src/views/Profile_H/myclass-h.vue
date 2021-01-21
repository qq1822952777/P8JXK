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
    <div v-for="item in copy" :key="item.course_id" class="body">
      <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3618157997,346758330&fm=26&gp=0.jpg" alt="">
      <div>
        <p>
          <span>{{item.start_play_date | time}}</span>---
          <span>{{item.end_play_date|times}}</span>
        </p>
        <p class="pp">{{item.title}}</p>
      </div>
    </div>
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
      this.classname = res.data.typeNum;
      this.classlist = res.data.courseList;
      this.copy = res.data.courseList.filter((ele) => {
        // console.log(ele);
        if (ele.course_type == 2) {
          return ele;
        }
      });
    });
  },
  methods: {
    qieHJ(val){
      // console.log(1);
      this.copy=this.classlist.filter(res=>{
        if(res.course_type==val){
          return res
        }
      })
      // console.log(this.copy);
    }
  },
  filters:{
    time(val){
      let sj= new Date(val*1000)
      let y=sj.getFullYear()
      let m=sj.getMonth()+1
      let d=sj.getDate()
      let h= sj.getHours()
      let f=sj.getMinutes()
      let s=sj.getSeconds()
      h=h<9?'0'+h:h
      f=f<9?'0'+f:f
      s=s<9?'0'+s:s
      return `${y}-${m}-${d} ${h}:${f}:${s}`
    },
    times(val){
      let sj= new Date(val*1000)
      let y=sj.getFullYear()
      let m=sj.getMonth()+1
      let d=sj.getDate()
      let h= sj.getHours()
      let f=sj.getMinutes()
      let s=sj.getSeconds()
      h=h<9?'0'+h:h
      f=f<9?'0'+f:f
      s=s<9?'0'+s:s
      return `${y}-${m}-${d} ${h}:${f}:${s}`
    },
  }
};
</script>
<style lang="scss">
.myclass-h {
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #f0f2f5;
  .body{
    width: 100%;
    display: flex;
    background-color: white;
    padding: .2rem;
    font-size: .25rem;
    margin-top: .1rem;
    justify-content: space-between;
    img{
      width: 1rem;
    }
    div{
      width: 82%;
      display: flex;
      flex-wrap: wrap;
      height: 1rem;
      p{
        width: 100%;

      }
      .pp{
        color: orangered;
      }
    }
  }
}
</style>