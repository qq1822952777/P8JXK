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
            <van-radio name="0" />
          </template>
        </van-cell>
        <van-cell title="女" clickable @click="nvHJ">
          <template #right-icon>
            <van-radio name="1" />
          </template>
        </van-cell>
      </van-cell-group>
    </van-radio-group>
  </div>
</template>
<script>
import { user } from "@/utils/api";
export default {
  data() {
    return {
      checked: this.$store.state.modifyHJ.sex == 0 ? "1" : "2",
      righttxt: "保存",
      sex: "",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log(this.sex);
      user({ sex: this.sex }).then((res) => {
        this.$router.go(-1);
      });
    },
    nanHJ() {
      this.checked = "0";
      this.sex = 0;
      // this.$store.commit("nanHJ", this.nan);
    },
    nvHJ() {
      this.checked = "1";
      this.sex = 1;
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