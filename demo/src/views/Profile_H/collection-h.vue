<template>
  <div class="collection-h">
    <Return>我的收藏</Return>
    <ul class="collection-uu-h">
      <li v-for="item in colllist" :key="item.collect_id">
        <div class="img">
          <img :src="item.teachersAvatar" alt="" />
        </div>
        <div class="collection-dv-h">
          <div>
            <h4>
              <van-tag v-if="item.underlined_price!=0" class="orange-h" plain type="primary">券</van-tag
              >{{item.title}}
            </h4>
            <span class="collection-gray-h">{{item.sales_nums}}人已报名</span>
          </div>
          <span v-if="item.price!=0" class="collection-red-h">￥<b>1998.0</b></span>
          <span v-else class="collection-green-h">{{item.price==0?'免费':item.price}}</span>
          
        </div>
      </li>
      <!-- <li>
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
            <h4>轻松学说普通话</h4>
            <span class="collection-gray-h">845人已报名</span>
          </div>
          <span class="collection-green-h">免费</span>
        </div>
      </li> -->
    </ul>
  </div>
</template>
<script>
import Return from "@/components/return";
import { collect } from "@/utils/api";
export default {
  components: {
    Return,
  },
  data() {
    return {
      colllist: [],
    };
  },
  created() {
    collect({ type: 1 }).then((res) => {
      console.log(res.data.list);
      this.colllist = res.data.list;
    });
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.collection-h {
  width: 100%;
  height: 100%;
  overflow: auto;
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
      .img {
        width: 2rem;
        height: 2rem;
        overflow: hidden;
        img {
          width: 100%;
        }
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