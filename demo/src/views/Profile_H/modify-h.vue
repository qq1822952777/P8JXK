<template>
  <div class="modify-h">
    <Return>个人中心</Return>
    <ul class="top-h">
      <li @click="showimg = true">
        <span>头像</span>
        <p>
          <img :src="userInfo.avatar" />
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="nameHJ(userInfo.nickname)">
        <span>姓名</span>
        <p>
          <span class="top-txt-h gray-h">{{ userInfo.nickname }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li>
        <span>手机号码</span>
        <p>
          <span class="top-txt-h gray-h">{{ userInfo.mobile }}</span>
        </p>
      </li>
      <li @click="sexHJ">
        <span>性别</span>
        <p>
          <span class="top-txt-h gray-h">{{
            userInfo.sex == 0 ? "男" : "女"
          }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="dateHJ">
        <span>出生日期</span>
        <p>
          <span class="top-txt-h gray-h">{{ userInfo.birthday }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="cityHJ">
        <span>所在城市</span>
        <p>
          <span class="top-txt-h gray-h"
            >{{ userInfo.province_name }}-{{ userInfo.city_name }}-{{
              userInfo.district_name
            }}</span
          >
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="gradeHJ">
        <span>年级</span>
        <p>
          <span class="top-txt-h gray-h">{{
            $store.state.modifyHJ.grade
          }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
      <li @click="showclass = true">
        <span>学科</span>
        <p>
          <span class="top-txt-h gray-h">{{
            $store.state.modifyHJ.class
          }}</span>
          <van-icon class="gray-h" name="arrow" />
        </p>
      </li>
    </ul>
    <!-- 学科 -->
    <van-popup class="class" v-model:show="showclass">
      <p class="class-top">学科选择</p>
      <ul class="class-uu">
        <li
          v-for="(item, index) in classlist"
          ref="ass"
          :class="item.falg ? 'orange-class' : ''"
          :key="index"
          @click="classHJ(index, item)"
        >
          {{ item.name }}
        </li>
      </ul>
      <button class="class-btn orange-class" @click="classH">确认</button>
    </van-popup>
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
        @cancel="showcity = false"
        item-height="25px"
      />
    </van-popup>
    <!-- 年级 -->
    <van-popup
      v-model:show="showgrade"
      position="bottom"
      :style="{ height: '30%' }"
    >
      <van-area
        :area-list="gradelist"
        :columns-num="1"
        @confirm="grade"
        @cancel="showgrade = false"
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
import Return from "@/components/return";
import AeraInfo from "@/components/dizhi";
import Grade from "@/components/gradelist";
import { userInof, user } from "@/utils/api";
export default {
  components: {
    Return,
  },
  data() {
    return {
      userInfo: [],
      showdate: false,
      showimg: false,
      showcity: false,
      showgrade: false,
      showclass: false,
      currentDate: new Date(),
      minDate: new Date(1970, 1, 1),
      maxDate: new Date(2021, 12, 31),
      timeValue: "",
      areaList: AeraInfo,
      valueArea: "",
      arrArea: [],
      gradelist: Grade,
      gradeclass: "",
      classlist: [
        {
          name: "语文",
          falg: false,
        },
        {
          name: "数学",
          falg: false,
        },
        {
          name: "英语",
          falg: false,
        },
        {
          name: "物理",
          falg: false,
        },
        {
          name: "化学",
          falg: false,
        },
        {
          name: "生物",
          falg: false,
        },
        {
          name: "政治",
          falg: false,
        },
        {
          name: "历史",
          falg: false,
        },
        {
          name: "地理",
          falg: false,
        },
      ],
      img: "",
    };
  },
  created() {
    userInof().then((res) => {
      this.userInfo = res.data;
    });
  },
  methods: {
    // 头像
    afterRead(file) {
      this.img = file.content;
      user({ avatar: this.img }).then((res) => {
        this.showimg = false;
      });
    },
    // 姓名
    nameHJ(name) {
      this.$router.push({ path: "/set-name-h", query: { name } });
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
      console.log(this.timeValue);
      user({ birthday: this.timeValue }).then((res) => {
        this.showdate = false;
      });
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
    onAreaConfirm(val) {
      this.showcity = false;
      this.arrArea = val;
      var addrInfo = val[0].name + "-" + val[1].name + "-" + val[2].name;
      this.valueArea = addrInfo;
      this.$store.commit("cityHJ", this.valueArea);
    },
    // 年级
    gradeHJ() {
      this.showgrade = true;
    },
    grade(val) {
      this.showgrade = false;
      this.gradeclass = val[0].name;
      this.$store.commit("gradeHJ", this.gradeclass);
    },
    classHJ(i, a) {
      this.classlist.forEach((res, index) => {
        if (index == i) {
          res.falg = !res.falg;
        }
      });
      // this.classapp.forEach((res, index) => {
      //   if (res != a.name) {
      //     this.classapp.push(a.name);
      //   } else {
      //     this.classapp.splice(index, 1);
      //   }
      // });
      // console.log(this.classapp);
    },
    classH() {
      this.showclass = false;
    },
  },
};
</script>
<style lang="scss">
.modify-h {
  width: 100%;
  height: 100%;
  background-color: #f0f2f5;
  .top-h {
    background-color: white;
    padding: 0 0.3rem;
    li {
      height: 1.1rem;
      line-height: 1.1rem;
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
  .class {
    width: 90%;
    height: 5.8rem;
    border-radius: 0.2rem;
    .class-top {
      width: 100%;
      text-align: center;
      font-weight: 600 !important;
      font-size: 0.3rem;
      height: 1rem;
      line-height: 1rem;
    }
    .orange-class {
      background-color: #eb6100 !important;
      color: white !important;
    }
    .class-uu {
      width: 100%;
      padding: 0.2rem 0.5rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        font-size: 0.2rem;
        width: 1.8rem;
        height: 0.65rem;
        line-height: 0.65rem;
        border-radius: 0.1rem;
        text-align: center;
        color: rgb(104, 104, 104);
        margin-top: 0.15rem;
        background-color: rgba(235, 235, 235, 0.647);
      }
    }
    .class-btn {
      font-size: 0.28rem;
      width: 30%;
      height: 0.7rem;
      line-height: 0.7rem;
      border-radius: 0.1rem;
      border: none;
      text-align: center;
      margin-left: 35%;
    }
  }
}
</style>
