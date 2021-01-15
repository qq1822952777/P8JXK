<template>
  <div class="set-sex-h">
    <van-nav-bar
      title="修改性别"
      right-text="保存"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-radio-group v-model="checked">
      <van-cell-group>
        <van-cell title="男" clickable @click="nanHJ">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
        <van-cell title="女" clickable @click="nvHJ">
          <template #right-icon>
            <van-radio name="2" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: this.$store.state.modifyHJ.sex=='男'?'1':'2',
      righttxt: "保存",
      sex: "",
      // nan: "男",
      // nv: "女",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight(){
      this.$store.commit("nanHJ", this.sex);
      this.$router.go(-1)
    },
    nanHJ() {
      this.checked = "1";
      if (this.checked == "1") {
        this.sex = "男";
      }
      // this.$store.commit("nanHJ", this.nan);
    },
    nvHJ() {
      this.checked = "2";
      if (this.checked == "2") {
        this.sex = "女";
      }
      // this.$store.commit("nvHJ", this.nv);
    },
    
  },
};
</script>
<style lang="scss">
.set-sex-h {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
}
</style>