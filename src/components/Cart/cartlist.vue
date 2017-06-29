<template>
	<div class="cart-list">
		<ul>
			<li class="cart-item" v-for="(ele,index) in cartData" :key="index" v-if="ele.number">
				<a><img :src="ele.image" /></a>
				<div class="item-info">
					<p class="ovfl-e">{{ele.title}}</p>
					<p>价格：{{ele.magicPrice}}</p>
					<div class="flex">
						<span>数量：</span>
						<div class="num-wrap flex">
							<a class="num-btn" @click="changeData(-1,index)">-</a>
							<input v-model="ele.number" class="num-text" />
							<a class="num-btn" @click="changeData(1,index)">+</a>
						</div>
					</div>
				</div>
				<a class="iconfont del" @click="changeData(0,index)"></a>

			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:'cart-list',
		props:{
			cartData:{
				type:Array,
				default(){
					return []
				}
			}
		},
		methods:{
			changeData(type,index){
				this.$emit("change-data",type,index)
			}
		}
	}
	
</script>

<style scoped>
	.cart-item { padding: 10px 0; height:120px; box-sizing:border-box; display: flex}
	.cart-item  img { width: 100px; height: 100px;}
	.cart-item .item-info { flex: 1};
	.cart-item .del { width: 50px;text-align: center; }
	.flex {display: flex;}
	.cart-item .num-wrap { height: 30px;text-align: center;  border: 1px solid #ccc}
	.cart-item .num-btn { width: 30px; }
	.cart-item .num-text { border: 1px solid #ccc; margin: -1px 0;width: 30px; line-height: 30px; height: 30px; text-align: center }
</style>