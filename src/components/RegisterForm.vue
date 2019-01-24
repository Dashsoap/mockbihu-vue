<template>
  <div class="Login_content">
    <form action @submit="LoginSubmit()">
      <div class="login_accunt">
        <div class="Country_select">
          <div class="Pop_over">
            <button type="button">
              中国 +86
              <i class="iconfont">&#xe630;</i>
            </button>
          </div>
        </div>
        <span class="seperate">&nbsp;</span>
        <input type="text" class="Input" placeholder="手机号">
      </div>
      <div class="login_password">
        <input type="password" class="Input" placeholder="输入六位短信验证码">
        <q-button qtype="primary" class="Input_button">获取短信验证码</q-button>
      </div>
    </form>
    <div class="Login_option">
      <q-button>接收语音消息</q-button>
    </div>
    <q-button qtype="login">注册</q-button>
    <div class="Login_footer">
      <span class="protocol">注册即代表同意《逼乎协议》《保护隐私协议》</span>
      <a class="Primary_button">注册机构号</a>
    </div>
  </div>
</template>

<script>
import QButton from "./QButton.vue";
export default {
  components: {
    QButton
  }
};
</script>

<style lang="less" scoped>
.Login_content {
  padding: 0 40px 38px;
  .seperate {
    float: left;
    width: 1px;
    height: 22px;
    margin: 24px 12px 0;
    background: #ebebeb;
    -webkit-transform: translateY(-11px);
    transform: translateY(-11px);
  }
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
    .protocol {
      display: inline-block;
      padding: 0;
      font-size: 13px;
      line-height: 32px;
      color: #8590a6;
      text-align: center;
      cursor: pointer;
      background: none;
      border: 0px solid;
    }
  }
  .Login_option {
    text-align: right;
    margin-top: 12px;
  }

  .Primary_button {
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
  form {
    .login_accunt {
      margin-top: 16px;
      border-bottom: 1px solid #ebebeb;
      border-radius: 0;
      .Country_select {
        float: left;
        min-width: 72px;
        -webkit-transform: translateY(4px);
        transform: translateY(4px);
        .Pop_over {
          position: relative;
          display: inline-block;
          button {
            color: #8590a6;
            height: 40px;
            line-height: 38px;
            text-align: left;
            box-sizing: border-box;
            background: none;
            outline: none;
            padding: 0;
            font-size: 14px;
            border: 1px solid transparent;
          }
        }
      }
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
        transform: translateY(-50%);
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
</style>
