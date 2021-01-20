<template>
  <div id="app">
    <!-- 全局路由监听适配的头部组件 -->
    <topTitle :istitle ='istitle'></topTitle>

    <!-- 拖拽的邮件小球 -->
    <div class="to-home" v-drag @click="goTop()">
        <van-icon name="envelop-o"/>
    </div>
    <!-- 路由的转场动画 -->
    <transition
    enter-active-class = "animate__animated animate__jello"
    >
      <router-view></router-view>
    </transition>
    

  </div>
</template>
<script>
import topTitle from '@/components/top'
export default {
  data() {
    return {
      // 头部组件的数值
      istitle:{
        name:'',
        topShow:false
      }
    }
  },
  methods: {
    goTop(){
      this.$router.push({path:'/Home'})
    }
  },
  // 监听适配的头部组件的数值
  watch: {
        $route: {
            handler:function(val, oldVal){
                this.istitle.name = val.meta.title
                this.istitle.topShow = val.meta.topShow
            },
            // // 深度观察监听
            deep: true
        }
  },
  components :{
      topTitle
  }
}
</script>
<style lang="scss">
html,body,#app,#main{
  height: 100%;
}
// 拖动小组件
  .to-home{
      position: fixed;
      z-index: 99;
      right: 10px;
      bottom: 85px;
      width: 40px;
      height: 40px;
      box-shadow: 0 2px 4px #ddd;
      border-radius: 50%;
      color: #fff;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #1989fa;   
  }
</style>
