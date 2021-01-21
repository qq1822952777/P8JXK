<template>
  <div class="teacher-h">
    <Return>我的关注</Return>
    <div class="teacher-body">
      <div class="teacher" v-for="item in obj" :key="item.teacher_id">
        <div class="teacher-top">
          <img :src="item.avatar" alt="" />
          <div >
            <p class="p">
             {{ item.introduction }}
            </p>
            <p>
              <span>{{ item.teacher_name }}老师</span
              ><span class="p2">已关注</span>
            </p>
          </div>
        </div>
        <button @click="xiang(item.teacher_id)">查看详情</button>
      </div>
    </div>
  </div>
</template>
<script>
import Return from "@/components/return";
import { collect } from "@/utils/api";
export default {
  components: { 
    Return,
  },
  data() {
    return {
      obj: [],
    };
  },
  created() {
    collect({type:2}).then((res) => {
      console.log(res.data);
      this.obj = res.data.list;
    });
  },
  methods: {
    xiang(id){
      this.$router.push({name:'TeaccherDetail',params:{id}})
    }
  },
};
</script>
<style lang="scss">
.teacher-h {
  width: 100%;
  height: 100%;
  // background-color: #F0F2F5;
  .teacher-body {
    width: 100%;
    padding: 0.2rem;
    .teacher {
      width: 100%;
      padding: 0.15rem .2rem;
      font-size: 0.3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: .2rem;
      box-shadow: 0 0 3.2vw 0 rgba(0, 0, 0, 0.05);
      .teacher-top {
        width: 60%;
        display: flex;
        img {
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
        }
        div{
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          align-items: initial;
          padding: .05rem .2rem;
          .p{
            width: 50%;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .p2{
            margin-left: .1rem;
            color: orange;
          }
        }
      }
      button{
        border: none;
        background-color: orangered;
        color: white;
        height: 0.4rem; 
        font-size: .25rem;
        border-radius: .1rem;
      }
    }
  }
}
</style>