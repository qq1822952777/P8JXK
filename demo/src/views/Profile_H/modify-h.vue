<template>
  <div class="modify-h">
    <Return>个人中心</Return>
    <ul class="top-h">
      <li @click="showimg = true">
        <span>头像</span>
        <p>
          <img :src="$store.state.modifyHJ.img" />
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="nameHJ">
        <span>姓名</span>
        <p>
          <span class="top-txt-h gray-h">睡觉觉</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>手机号码</span>
        <p>
          <span class="top-txt-h gray-h">18738226397</span>
        </p>
      </li>
      <li @click="sexHJ">
        <span>性别</span>
        <p>
          <span class="top-txt-h gray-h">{{ $store.state.modifyHJ.sex }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="dateHJ">
        <span>出生日期</span>
        <p>
          <span class="top-txt-h gray-h">{{ $store.state.modifyHJ.date }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="cityHJ">
        <span>所在城市</span>
        <p>
          <span class="top-txt-h gray-h">{{ $store.state.modifyHJ.city }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>年级</span>
        <p>
          <span class="top-txt-h gray-h">{{
            $store.state.modifyHJ.grade
          }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>学科</span>
        <p>
          <span class="top-txt-h gray-h">{{
            $store.state.modifyHJ.class
          }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
    </ul>
    <!-- 时间弹出框 -->
    <van-popup
      v-model:show="showdate"
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        :formatter="formatter"
        item-height="25px"
        @cancel="showdate = false"
        @confirm="confirmPicker"
      />
    </van-popup>
    <!-- 地址弹出框 -->
    <van-popup
      v-model:show="showcity"
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-area
        :area-list="areaList"
        @confirm="onAreaConfirm"
        @cancel="bindCancel"
        item-height="25px"
      />
    </van-popup>
    <!-- 头像 -->
    <van-action-sheet
      v-model:show="showimg"
      cancel-text="取消"
      close-on-click-action
      @cancel="showimg = false"
      @select="afterRead"
    >
      <van-uploader class="setimg-h" :after-read="afterRead">拍照</van-uploader>
      <van-uploader class="setimg-h" :after-read="afterRead"
        >从手机相册选择</van-uploader
      >
    </van-action-sheet>
  </div>
</template>
<script>
import Return from "../../component/return";
import AeraInfo from "../../component/dizhi";
export default {
  components: {
    Return,
  },
  data() {
    return {
      showdate: false,
      showimg: false,
      showcity: false,
      currentDate: new Date(),
      minDate: new Date(1970, 1, 1),
      maxDate: new Date(2021, 12, 31),
      timeValue: "",
      areaList: AeraInfo,
      valueArea: "",
      arrArea: [],
    };
  },
  methods: {
    // 头像
    afterRead(file) {
      this.showimg = false;
      this.$store.commit("afterRead", file.content);
    },
    // 姓名
    nameHJ() {
      this.$router.push({ path: "/set-name-h" });
    },
    // 性别
    sexHJ() {
      this.$router.push({ path: "/set-sex-h" });
    },
    // 出生日期
    dateHJ() {
      this.showdate = true;
    },
    // 确认选择的时间
    confirmPicker(val) {
      let year = val.getFullYear();
      let month = val.getMonth() + 1;
      let day = val.getDate();
      if (month >= 1 && month <= 9) {
        month = `0${month}`;
      }
      if (day >= 1 && day <= 9) {
        day = `0${day}`;
      }
      this.className = "timeClass";
      this.timeValue = `${year}-${month}-${day}`;
      this.showdate = false;
      this.$store.commit("dateHJ", this.timeValue);
    },
    // 时间后缀
    formatter(type, value) {
      if (type === "year") {
        return `${value}年`;
      } else if (type === "month") {
        return `${value}月`;
      } else if (type === "day") {
        return `${value}日`;
      }
      return value;
    },
    // 所在城市
    cityHJ() {
      this.showcity = true;
    },
    bindCancel() {
      this.showcity = false;
    },

    onAreaConfirm(val) {
      this.showcity = false;
      this.arrArea = val;
      var addrInfo = val[0].name + "-" + val[1].name + "-" + val[2].name;
      this.valueArea = addrInfo;
      // this.arrArea.forEach(ele=> {
      //   console.log(ele.name);
      // });
      this.$store.commit("cityHJ", this.valueArea);
    },
  },
};
</script>
<style lang="scss" scoped>
.modify-h {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .top-h {
    background-color: white;
    padding: 0 0.3rem;
    li {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.3rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid rgb(240, 240, 240);
      p {
        display: flex;
        align-items: center;
        .top-txt-h {
          margin-right: 0.2rem;
          font-size: 0.3rem;
        }
        .gray-h {
          color: #ccc;
        }
        .van-uploader {
          height: 0.8rem !important;
        }
        img {
          width: 0.8rem;
          margin-right: 0.2rem;
        }
      }
    }
  }
  .setimg-h {
    width: 100%;
    text-align: center;
    font-size: 0.3rem;
    .van-uploader__wrapper {
      width: 100%;
      .van-uploader__input-wrapper {
        width: 100% !important;
      }
    }
  }
}
</style>