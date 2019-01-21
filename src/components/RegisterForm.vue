<template>
<div class="Login_content">
  <form 
    action=""
    @submit="LoginSubmit()"
  >
    <div class="login_accunt">
			<div class="Country_select">
				<div class="Pop_over">
					<button>中国 +86</button>
				</div>
			</div>
			<span class="seperate">&nbsp;</span>
      <input type="text" class='Input' placeholder="手机号"/>
    </div>
    <div class="login_password">
      <input type="password" class='Input' placeholder="输入六位短信验证码"/>
			<button class="Input_button">获取短信验证码</button>
    </div>
  </form>
  <div class="Login_option">
     <button class="Forget_button">接收语音消息</button>
  </div>
  <button class="Login_button">登录</button>
  <div class="Login_footer">
		<span class="wodetianna">注册即代表同意《知乎协议》《保护隐私协议》</span><a class="Primary_button">注册机构号</a>
  </div>
</div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.Login_content{
	padding: 0 40px 38px;
	.seperate{    
		float: left;
    width: 1px;
    height: 22px;
    margin: 24px 12px 0;
    background: #EBEBEB;
    -webkit-transform: translateY(-11px);
    transform: translateY(-11px);
}
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
		.wodetianna{
			display: inline-block;
    	padding: 0;
    	font-size: 13px;
    	line-height: 32px;
    	color: #8590A6;
    	text-align: center;
    	cursor: pointer;
    	background: none;
    	border: 0px solid;
		}
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
		text-align: right;
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
			.Country_select{
				display: inline-block;
    		float: left;
    		min-width: 72px;
    		-webkit-transform: translateY(4px);
   		  transform: translateY(4px);
				.Pop_over{
					position: relative;
					display: inline-block;
					button{
						color: #8590A6;
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
    .login_password{
			position: relative;
      margin-top: 16px;
      border-bottom: 1px solid #EBEBEB;
			border-radius: 0;
			.Input_button{
				position: absolute;
				font-size: 14px;
    		top: 24px;
    		right: 0;
   		  padding: 4px 0;
  		  color: #175199;
				transform: translateY(-50%);
				height: auto;
   			padding: 0;
    		line-height: inherit;
    		background-color: transparent;
    		border: none;
    		border-radius: 0;
			}
    }
    .Input{
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

</style>
