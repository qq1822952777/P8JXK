<template>
    <div class="Register_box">
        <!-- 输入区 -->
        <div class="Login_main">
            <div class="number">
                <input  type="text" placeholder="请输入手机号" v-model="number">
                <button v-show="!isdTime" class="huoqu" @click="huoqu()">获取验证码</button>
                <button v-show="isdTime" class="huoqu">{{dTime}}</button>
            </div>  
            <div class="verification">
                <input  type="text" placeholder="请输入验证码" v-model="verification">
            </div>
        </div>
        <!-- 绑定手机号确定按钮 -->
        <div class="Loginbtn">
            <button @click="LoginNext()">确定</button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            number:'',
            verification:'',
            dTime:59,
            isdTime:false
        }
    },
    methods: {
        // 获取验证码倒计时
        huoqu(){
            this.isdTime = true;
                let yzmdj =  setInterval(() => {
                    if(this.dTime <= 0){
                        this.dTime = 59
                        this.isdTime = false
                        clearInterval(yzmdj)
                    }else{
                        this.dTime--
                    }               
                },1000);            
        },
        // 注册验证的下一步
        LoginNext(){ 
            if(this.number == '' || this.verification == ''){
                Toast('不可为空哦');
                return
            }
            Toast('绑定成功，设置您的密码');
            this.$router.push({path:'/SetPass'})
        }
    },
}
</script>
<style lang="scss" scoped>

    // 登录内容
    .Login_main{
        width: 100%;
        padding: .2rem;
        display: flex;
        flex-direction: column;
        font-size: .25rem;
        div{
            width: 100%;
            height: 1rem;
            // background-color: chartreuse;
            margin: .2rem 0;
            display: flex;
            align-items: center;
            padding:  0 0 0 .2rem;
            border-bottom: 1px solid rgb(231, 231, 231);
            input{
                width: 4.5rem;
                height: 1rem;
                border: none;
            }
            button{
                padding: .1rem;
                font-size: .2rem;
                color: #ffffff;
                background-color:#EB6100 ;
                border: none;
                border-radius: 5px;
                margin:0 0 .4rem .6rem;
            }
        }
        .number{
            display: flex;
            
        }
    }
    // 登录按钮
    .Loginbtn{
        width: 100%;
        padding: .2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: .34rem;
        button{
            width: 80%;
            height: 1rem;
            font-weight: 500;
            color: #ffffff;
            background-color: #EB6100;
            border: none;
            border-radius: 10px;
        }
    }
</style>