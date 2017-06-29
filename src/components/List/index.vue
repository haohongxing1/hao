<template>
	<div class="list">
		<my-header title="分类"></my-header>
		<my-footer></my-footer>
		<my-content>
			<div class="pro-list">
				<ul>
					<li v-for="(ele,index) in listData" :key="index">
						<img :src="ele.img" />
					</li>
				</ul>
			</div>
		</my-content>
	</div>
</template>

<script>

var qs = require('qs');

export default {
	name: 'list',
	data () {
		return {
			listData:[]	
		}
	},
	mounted(){
		var params = qs.stringify({ _mt:"product.category",_idfa:"1618caa147a45d2bc7b53578930038ff",_aid:"1006",_sm:"md5",_sig:"344d5b77c9efb7106127dc18ce9bc130" });
		this.$http.post("/api",params,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(res=>{
			var str = [];
			for(var i=0;i<8;i++){
				str.push((res.body.content[0].categorys)[i])
			}
			this.listData = str;
			console.log( str);
		})
	}
}
</script>

<style>
	a { color:#333 }
	.pro-list {
		
		margin-top: 20px;
		background:#fff;
	}
	.pro-list ul {
		width:100%;
		padding:20px 0px;
		display:flex;
		flex-wrap:wrap;
		align-content: space-around;

	}
	.pro-list ul li {
		display:flex;
		align-items: center;
		justify-content: center;
		width:49%;height:170px;
	}
	.pro-list ul li img{
		width:160px;height:160px;
		
	}
</style>