
<template>
	<div class="footer">
		<ul>
			<li v-for="(data,index) in footerData">
				<a :href="data.path">
					<div><span class="icon iconfont">{{data.icon}}</span></div>
					<div><span class="text">{{data.text}}</span></div>
				</a>	
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name:'my-footer',
	data () {
		return {

		}
	},
	props:{
		footerData:{
			type:Array,
			default(){
				return [
					{text:"首页",icon:"\ue64f",path:"#/"},
					{text:"分类",icon:"\ue655",path:"#/list"},
					{text:"购物车",icon:"\ue63f",path:"#/cart"},
					{text:"我的",icon:"\ue643",path:"#/mine"}
				]
			}
		}
	}

}
</script>

<style scoped>
.footer { 
	background:#fff;
 	position: fixed; bottom: 0; left: 0; 
    width: 100%; border-top: 1px solid #bbb
}
.footer ul {
	height: 50px;
}
.footer li {  
	width: 25%; float: left; 
	text-align: center; 
}
.footer li:hover { 
	background:green; 
	
}
.footer li:hover a { 
	font-weight:bold;color:#fff;
}
.footer a {
	display: block; width: 100%; height: 100%; 
	text-decoration:none;
}
.footer .icon {  
	line-height: 30px; font-size: 20px;
}
.footer .text { 
	line-height: 18px; font-size: 12px;  
}
</style>