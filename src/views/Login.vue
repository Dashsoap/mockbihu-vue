<template>
  <div class='container'>
    <div class='card'>
      <div class='signHeader'>
        <div class='bihu'>逼 乎</div>
        <div class='slogan'>{{login}}知乎，发现更大的世界</div>
      </div>
      <div class="Login_content" v-if="!isLogin">
        <form 
          action=""
          @submit="LoginSubmit()"
        >
          <div class="login_accunt">
            <input type="text" class='Input' placeholder="请输入邮箱或者手机号"/>
          </div>
          <div class="login_password">
            <input type="password" class='Input' placeholder="请输入密码"/>
          </div>
        </form>
        <div class="Login_option">
          <button class="Primary_button">手机验证码登录</button> <button class="Forget_button">忘记密码？</button>
        </div>
        <button class="Login_button">登录</button>
        <div class="Login_footer">
          <button class="Forget_button">二维码登录</button><span class="My_point">·</span>
          <button class="Forget_button">海外手机登录</button><span class="My_point">·</span>
          <button class="Forget_button">社交账号登录</button>
        </div>
      </div>
      <register-form v-else></register-form>
      <div class="SignContainer-swich">没有账户？<span @click="changeToLogin()" v-if="!isLogin">注册</span> <span @click="changeToRegister()" v-else>登录</span></div>
    </div>
  </div>
</template>

<script>
import RegisterForm from '../components/RegisterForm.vue'
  export default {
    components: {
      RegisterForm,
    },
    data() {
      return {
        login: '登录',
        register:'注册',
        isLogin:false
      }    
    },
    methods: {
      changeToLogin() {
        this.isLogin=true;
        this.login="注册"
      },
      changeToRegister(){
        this.isLogin=false;
        this.login="登录"
      }
    },
    
  }
</script>

<style scoped lang="less">
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    width: 100%;
    background: rgb(249, 249, 249);  
    background-image: url(https://static.zhihu.com/heifetz/assets/sign_bg.db29b0fb.png);
    background-repeat: no-repeat;
    background-color: #b8e5f8;
    background-size: cover;
    width: 100%;
    height: 100vh;
    padding-right: 15px;
    }
  .card{
    margin-top: 15vh;
    background-color: white;
    width:432px;
    height: 505.63px;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
    box-sizing: border-box;
    .SignContainer-swich{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      background-color: #F6F6F6;
      height: 58px;
      border-top: 1px solid #EBEBEB;
      font-size: 16px;
        span{
          color: #175199;
          cursor: pointer;
        }
    }
    .Login_content{
      padding: 0 40px 38px;
      .My_point{
        display: inline-block;
        width: 6%;
        color: #8590A6;
        text-align: center;
        box-sizing: border-box;
      }
      .Login_footer{
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 25px;
        margin-top: 16px;
        text-align: center;
      }
      .Login_button{
        display: inline-block;
        padding: 0 16px;
        font-size: 14px;
        line-height: 32px;
        width: 100%;
        margin-top: 30px;
        height: 36px;
        color: #FFFFFF;
        background-color: #0084FF;
        border: #0084FF;
        cursor: pointer;
        border: 1px solid;
        border-radius: 3px ;
      }
      .Login_button:hover{
        background-color: #0048ff
      }


      .Login_option{
        display: flex;
        justify-content: space-between;
        margin-top: 12px;
      }
      .Forget_button{
        display: inline-block;
        padding: 0;
        font-size: 14px;
        line-height: 32px;
        color: #8590A6;
        text-align: center;
        cursor: pointer;
        background: none;
        border: 0px solid;
      }
      .Primary_button{
        display: inline-block;
        padding: 0;
        font-size: 14px;
        line-height: 32px;
        color: #175199;
        text-align: center;
        cursor: pointer;
        background: none;
        border: 0px solid;          
      }
      form{
        .login_accunt{
          margin-top: 16px;
          border-bottom: 1px solid #EBEBEB;
          border-radius: 0;
        }
        .login_password{
          margin-top: 16px;
          border-bottom: 1px solid #EBEBEB;
          border-radius: 0;
        }
        .Input{
          width: 100%;
          height: 48px;
          padding: 0;
          color: #8590A6;
          border: none;
          border-bottom: 1px solid #EBEBEB;
          border-radius: 0;

          flex: 1;
          padding: 0;
          overflow: hidden;
          font-family: inherit;
          font-size: 14px;
          font-weight: inherit;
          background: transparent;
          border: none;
          outline: none;
          resize: none;
        }
      }
    }

    .signHeader{
      text-align: center;
      .bihu{
        font-size: 70px;
        color: #0084FF;
      }
      .slogan{
        font-size: 22px;
        color: #0084FF;
      }
    }

  }
</style>