<template>
    <div class="CoupleBack_box">
        <van-field
        v-model="message"
        rows="2"
        autosize
        label="反馈留言"
        type="textarea"
        maxlength="100"
        placeholder="请输入您的反馈留言"
        show-word-limit
        />
        <van-button type="primary" size="large" @click="wanwan()">提交反馈</van-button>
    </div>  
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            message:'',
        }
    },
    methods: {
        wanwan(){
            this.message = ''
            Toast.success('谢谢您的反馈，我们会尽快核实并修复');
            this.$router.go(-1);
        }
    },
}
</script>
<style lang="scss" scoped>
    .CoupleBack_box::-webkit-scrollbar{
        display: none;
    }
    .CoupleBack_box{
        width: 100%;
        height:100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
</style>