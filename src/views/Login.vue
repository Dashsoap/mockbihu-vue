<template>
  <div class="container">
    <div class="card">
      <div class="signHeader">
        <div class="bihu">逼 乎</div>
        <div class="slogan">{{login}}知乎，发现更大的世界</div>
      </div>
      <div class="Login_content" v-if="!isLogin">
        <form action @submit="LoginSubmit()">
          <div class="login_accunt">
            <input type="text" class="Input" placeholder="请输入邮箱或者手机号">
          </div>
          <div class="login_password">
            <input type="password" class="Input" placeholder="请输入密码">
            <button type="button" class="Input_button">
              <i class="iconfont">&#xe615;</i>
            </button>
          </div>
        </form>
        <div class="Login_option">
          <q-button qtype="primary">手机验证码登录</q-button>
          <q-button>忘记密码？</q-button>
        </div>
        <q-button class="login">登录</q-button>
        <div class="Login_footer">
          <q-button>二维码登录</q-button>
          <span class="My_point">·</span>
          <q-button>海外手机登录</q-button>
          <span class="My_point">·</span>
          <q-button>社交账号登录</q-button>
        </div>
      </div>
      <register-form v-else></register-form>
      <div class="SignContainer-swich">没有账户？
        <span @click="changeToLogin()" v-if="!isLogin">注册</span>
        <span @click="changeToRegister()" v-else>登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue";
import QButton from "../components/QButton.vue";
export default {
  components: {
    RegisterForm,
    QButton
  },
  data() {
    return {
      login: "登录",
      register: "注册",
      isLogin: false
    };
  },
  methods: {
    changeToLogin() {
      this.isLogin = true;
      this.login = "注册";
    },
    changeToRegister() {
      this.isLogin = false;
      this.login = "登录";
    }
  }
};
</script>

<style scoped lang="less">
.container {
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
.card {
  margin-top: 15vh;
  background-color: white;
  width: 432px;
  height: 505.63px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  box-sizing: border-box;
  .SignContainer-swich {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #f6f6f6;
    height: 58px;
    border-top: 1px solid #ebebeb;
    font-size: 16px;
    span {
      color: #175199;
      cursor: pointer;
    }
  }
  .Login_content {
    padding: 0 40px 38px;
    .My_point {
      display: inline-block;
      width: 6%;
      color: #8590a6;
      text-align: center;
      box-sizing: border-box;
    }
    .Login_footer {
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 25px;
      margin-top: 16px;
      text-align: center;
    }
    .Login_option {
      display: flex;
      justify-content: space-between;
      margin-top: 12px;
    }

    form {
      .login_accunt {
        margin-top: 16px;
        border-bottom: 1px solid #ebebeb;
        border-radius: 0;
      }
      .login_password {
        position: relative;
        margin-top: 16px;
        border-bottom: 1px solid #ebebeb;
        border-radius: 0;
        .Input_button {
          position: absolute;
          font-size: 14px;
          top: 24px;
          right: 0;
          padding: 4px 0;
          color: #8590a6;
          transform: translateY(-50%);
          height: auto;
          padding: 0;
          line-height: inherit;
          background-color: transparent;
          border: none;
          border-radius: 0;
        }
      }
      .Input {
        height: 48px;
        padding: 0;
        color: #8590a6;
        border: none;
        border-bottom: 1px solid #ebebeb;
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

  .signHeader {
    text-align: center;
    .bihu {
      font-size: 70px;
      color: #0084ff;
    }
    .slogan {
      font-size: 22px;
      color: #0084ff;
    }
  }
}
</style>
