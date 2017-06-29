<template>
	<div class="m-user container">
	<img src="http://s1.ucaiyuan.com/h5/1.6.4/images/login/bg.jpg"/>
	<div class="header1">
        <span class="header-user1 icon iconfont" @click="back">&#xe660;</span>
        <span class="header-user2">登录</span>
    </div>

	<section class="main_login">
			<ul>
            <li class="user_name">
                <input placeholder="手机号/邮箱" can-value="username" value="">
                <span id="clearUserName"><i>X</i></span>
            </li>
            <li class="password">
                <input placeholder="密码" id="passWord" type="password" can-value="password" value="">
                <span id="showPassWord"><i class="current">0</i></span>
            </li>
        </ul>
        <div>
       		 <span class="user-btn">确定</span>
        </div>
        <div>
        	<span class="user-btn1"><router-link to="/Register">注册送好礼</router-link></span>

        	<p class="f-right"><router-link to="/Password">忘记密码</router-link></p>
         </div>
	</section>
	</div>
</template>

<script>
 let vm = {
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },
}
window.vm = vm
export default vm
</script>
<style scoped>

.header1{
	z-index:1;
	position:absolute;
	top:0;
	height:46px;	
	color:white;
	font-size:16px;
	line-height:46px;
}
.header1 .header-user1{  
	margin-left:20px;
}
.header1 .header-user2{
	margin-left:140px;
}
h1 {
  font-weight: normal;
}
.m-user {
    width: 100%;
    min-width: 300px;
    max-width: 640px;
    margin: 0 auto;
    min-height: 100%;
    background: #eee;
    position: relative;
}
.container img{
    height: 100%;
    width:100%;
 	z-index:-1;
}
.m-user .main_login{
	position:absolute;
	top:30vh;
	left:18%;
	width:65%;
	padding-top:50px;
}
.main_login li {
    border-bottom: 1px solid white;
    padding: 10px 12px;
    position: relative;
    color:white;
}
.main_login  li input {
    border: none;
    background: 0;
    color:white;
    font-size: .14rem;
    line-height: .24rem;
    width: 88%;
    font-size:15px;
    outline:medium;
}
.user-btn{
	font-size:15px;
	display:block;
	height:40px;
	line-height:40px;
	width:200px;
	border-radius:4px;
	text-align:center;
	background: #ff7012;
	color:white;
	margin-top:20px;
	margin-bottom:10px;
	margin-left:20px;

}
.user-btn1{
	font-size:15px;
	display:block;
	height:40px;
	line-height:40px;
	width:200px;
	border-radius:4px;
	text-align:center;  
	color:white;
	margin-top:20px;
	margin-bottom:10px;
	margin-left:20px;
	border:1px solid white;
}
.user-btn1 a{color:white;
	text-decoration:none;}
.f-right {
    float: right!important;
    color:white;
    font-size:15px;
    margin-right:20px;
}
.f-right a{
	color:white;
	text-decoration:none;
}
.main_login .user_name i{
    margin-top: -17px;
    margin-left: 203px;
    display: block;
    width: 15px;
    height: 15px;
    text-align: center;
    line-height: 16px;
    border: 1px solid #fffff3;
    border-radius: 50%;
    font-size: .1rem;
    color: white;}
    .current{color:white;margin-left:5px;list-style:normal;}
</style>
