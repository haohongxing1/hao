<template>
	<div class="header">
		<ul>
			<li class="header-btn">
				<slot name="left">
					<a href="javascript:history.go(-1);"><</a>
				</slot>
			</li>
			<li class="header-tit">
				{{title}}
			</li>
			<li class="header-btn">
				<slot name="right"></slot>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'my-header',
	data (){
		return {
			type:String,
			default:"头部标题"
		}
	},
	props:{
		title:{
			type:String,
			default:"首页"
		}
	}
}
</script>


<style scoped>
.header { 
	width: 100%; height: 48px; line-height: 48px; 
	background:#fff;
	position: fixed; border-bottom: 1px solid #ccc 
}
.header ul { display: flex;
			text-align: center
}
.header ul li{
	list-style: none;
}
.header-tit { 
	font-size:18px;
	flex: 1
}
.header-btn {
	width: 60px; 
}
</style>
