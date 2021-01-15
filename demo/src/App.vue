<template>
  <div id="app">
    <!-- 全局路由监听适配的头部组件 -->
    <topTitle :istitle ='istitle'></topTitle>

    <router-view/>

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
</style>
