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
