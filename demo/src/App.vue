<template>
  <div id="app">
    <topTitle :istitle ='istitle'></topTitle>

    <router-view/>

  </div>
</template>
<script>
import topTitle from '@/components/top'
export default {
  data() {
    return {
      istitle:{
        name:'',
        topShow:false
      }
    }
  },
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
