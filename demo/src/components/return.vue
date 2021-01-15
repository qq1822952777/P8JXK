<template>
  <div>
    <van-nav-bar
      title=""
      left-text=""
      left-arrow
      @click-left="onClickLeftHJ"
      style="margin-bottom: 0.1rem"
    >
      <template #title>
        <slot></slot>
      </template>
    </van-nav-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeftHJ() {
      this.$router.go(-1);
    },
  },
};
</script>