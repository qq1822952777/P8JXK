<template>
    <div class="Register_box">
        <!-- 输入区 -->
        <div class="Login_main">
            <div class="number">
                <input  type="text" placeholder="请设置登录密码" v-model="password">
            </div>  
            <div class="verification">
                <input  type="text" placeholder="请再次输入密码" v-model="ispassword">
            </div>
        </div>
        <!-- 提交密码按钮 -->
        <div class="Loginbtn">
            <button @click="password === ispassword ? LoginNext():tishi('两次密码不一致重新输入')">提交</button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
export default {
    data() {
        return {
            password:'',
            ispassword:'',
        }
    },
    methods: {
        // 获取验证码倒计时
        huoqu(){
            this.isdTime = true;
            // this.verification = Math.ceil(random()*100) 
            console.log(String(Math.ceil(Math.random()*10)));
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
            if(this.password == '' || this.ispassword == ''){
                this.tishi('不可为空哦')
            }else{
                Toast.success('起飞吧少年');
                this.$router.push({path:'/Login'})
            }
        },
        // 注册验证的下一步
        tishi(text){
            this.ispassword = ''
            Toast.fail(text)
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