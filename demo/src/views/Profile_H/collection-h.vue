<template>
  <div class="collection-h">
    <Return>我的收藏</Return>
    <ul class="collection-uu-h">
      <li>
        <img src="" alt="" />
        <div class="collection-dv-h">
          <div>
            <h4>
              <van-tag class="orange-h" plain type="primary">券</van-tag
              >如何成为旅游体验师
            </h4>
            <span class="collection-gray-h">845人已报名</span>
          </div>
          <span class="collection-red-h">￥<b>1998.0</b></span>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <div class="collection-dv-h">
          <div>
            <h4>跟我学做口部操</h4>
            <span class="collection-gray-h">845人已报名</span>
          </div>
          <span class="collection-green-h">免费</span>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <div class="collection-dv-h">
          <div>
            <h4>
              <van-tag class="orange-h" plain type="primary">券</van-tag
              >给你好声音的密码
            </h4>
            <span class="collection-gray-h">845人已报名</span>
          </div>
          <span class="collection-red-h">￥<b>1998.0</b></span>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <div class="collection-dv-h">
          <div>
            <h4>气息训练让声音更具穿透力</h4>
            <span class="collection-gray-h">845人已报名</span>
          </div>
          <span class="collection-green-h">免费</span>
        </div>
      </li>
      <li>
        <img src="" alt="" />
        <div class="collection-dv-h">
          <div>
            <h4>
              轻松学说普通话
            </h4>
            <span class="collection-gray-h">845人已报名</span>
          </div>
          <span class="collection-green-h">免费</span>
        </div>
      </li>
    </ul>
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
<style lang="scss" scoped>
.collection-h {
  width: 100%;
  height: 100%;
  .collection-uu-h {
    width: 100%;
    padding: 0 0.3rem;
    background-color: white;
    li {
      width: 100%;
      height: 2rem;
      padding: 1.1rem 0.01rem;
      border-bottom: 1px solid rgb(228, 228, 228);
      display: flex;
      align-items: center;
      justify-content: space-between;
      img {
        width: 30%;
      }
      .collection-dv-h {
        width: 60%;
        div {
          padding-top: 0.1rem;
          display: flex;
          flex-direction: column;
          h4 {
            font-size: 0.3rem;
            .orange-h {
              color: orangered;
              margin-right: 0.1rem;
            }
          }
          .collection-gray-h {
            color: #ccc;
            font-size: 0.2rem;
            margin-top: 0.2rem;
          }
        }
      }
      .collection-red-h {
        color: rgb(225, 0, 0);
        font-size: 0.3rem;
      }
      .collection-green-h {
        color: rgb(0, 143, 0);
        font-size: 0.3rem;
      }
    }
  }
}
</style>