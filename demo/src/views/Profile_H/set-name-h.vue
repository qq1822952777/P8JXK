<template>
  <div class="set-name-h">
    <Return>修改个人信息</Return>
    <input class="input-h" type="text" value="睡觉觉" />
  </div>
</template>
<script>
import Return from "@/components/return";
export default {
  components: {
    Return,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss">
.set-name-h {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .input-h {
    width: 100%;
    height: 1rem;
    background-color: white;
    border: none;
  }
}
</style>