<template>
  <div class="box_J">
    <header>
      <img src="/images_J/logo.png" >
      <van-icon name="bulb-o" />
    </header>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item><img src="/images_J/4.png"></van-swipe-item>
      <van-swipe-item><img src="/images_J/4.png"></van-swipe-item>
      <van-swipe-item><img src="/images_J/4.png"></van-swipe-item>
      <van-swipe-item><img src="/images_J/4.png"></van-swipe-item>
    </van-swipe>
    <!-- 名师导航 -->
    <nav>
      <div>
        <img src="/images_J/1.png">
        <span>名师</span>
      </div>
      <div>
        <img src="/images_J/2.png">
        <span>课表</span>
      </div>
      <div>
        <img src="/images_J/3.png">
        <span>约课</span>
      </div>
    </nav>
    <!-- 专题 -->
    <div class="subject">
      <p></p>
      <span>专题</span>
    </div>
    <div class="subjectCtn">
      <div class="lef">
        <span>雅思语法专题</span>
        <img src="/images_J/2.png">
      </div>
      <div class="rei">
        <div>
          <img src="/images_J/1.png">
          <span>雅思语法专题</span>
        </div>
        <div>
          <img src="/images_J/3.png">
          <span>雅思写作专题</span>
        </div>
      </div>
    </div>


  </div>
</template>
<style lang="scss">
  .box_J::-webkit-scrollbar{
    display: none;
  }
  .box_J{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
  }
  // 头部
  header{
    width: 100%;
    height: 1.2rem;
    display: flex;
    padding:.2rem;
    justify-content: space-between;
    align-items: center;
    font-size: .7rem;
    img{
      height: 100%;
    }
  }
  // 轮播图
  .my-swipe .van-swipe-item {
    color: #fff;
    text-align: center;
    background-color: #39a9ed;
    img{
      display:block;
      width: 100%;
      height: 100%;
    }
  }
  // 名师导航
  nav{
    width: 100%;
    height: 2.5rem;
    display: flex;
    padding:.4rem .2rem;
    justify-content: space-between;
    align-items: center;
    font-size: .3rem;
    // background-color: blueviolet;
    div{
      height: 100%;
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: space-between;
    }
  }
  // 专题
  .subject{
    width: 100%;
    height: 1.6rem;
    display: flex;
    padding:.4rem .2rem;
    align-items: center;
    font-size: .5rem;
    font-weight: 500;
    p{
      width: .15rem;
      height: 100%;
      margin-right: .15rem;
      background-color: #FB5601;
    }
  }
  // 专题内容
  .subjectCtn{
    width: 100%;
    height: 10rem;
    background-color: chocolate;
  }


</style>
<script>
export default {
  
}
</script>

