<template>
  <div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词">
      <template #left>
        <div @click="fan">
          <van-icon style="font-size:0.7rem;" name="arrow-left" />
        </div>
      </template>
      <template #action>
        <div @click="add">搜索</div>
      </template>
    </van-search>
    历史搜索
    <ul style="width:100%;height:100%;">
      <li style="font-size:0.5rem;" v-for="(item, index) in 5" :key="index">
        要你管
        <nav></nav>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    add() {
      console.log("123");
    },
    fan() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang="scss"></style>
