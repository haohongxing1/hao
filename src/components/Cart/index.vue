<template>
	<div class="cart">
		<my-header title="购物车">
			<a href="javascript:;" slot="right">编辑</a>
		</my-header>
		<my-footer></my-footer>
		<my-content>
			<div class="cart-content">
	          	<div class="cart-login">
	                <span class="cart-btn"><router-link to="/Mine">登录</router-link></span>登录账户，同步电脑和手机上的购物车
	          	</div>

      		</div>
      		
      		<my-cart-list :cart-data="cartData"></my-cart-list>
   			
		      <div class="cart-list1">
		           	<p>今日热销</p>
		           	<ul class="cart-prolist11">
						<li v-for="(ele,index) in cartData" :key="index"><dl>
		                    <dt><img :src="ele.image"/></dt>
		                    <dd><p>{{ele.title}}</p><em>￥{{ele.retailPrice}}</em><i class="icon iconfont">&#xe63f;</i></dd>
		                </dl></li>
            		</ul>
		      </div>
		</my-content>
		<section class="middle_total global_footer has_bottom">
        <div class="total_left f_left">
          <label class="input_wrap">

              <input type="checkbox" can-value="selected.normal.all" role="selectedAll" class="select_all">
            <span>全选</span>
          </label>
        </div>
          <div class="price_wrap f_left">
            <p>
              <span class="price_text">共计:</span>
              <span class="price">￥<b class="currency">17.80</b></span>
              <span class="tips">不含运费<i></i></span>
            </p>
            <p>已为您节省:￥<b class="currency">0.00</b></p>
          </div>
                <div class="btn_wrap">
          <a href="javascript:void(0)" class="btn account_btn">去结算<label class="all_product_num">(1)</label></a>
         
        </div>
    </section>
	</div>
</template>

<script>
import CartList from './cartlist'
var qs = require('qs');

export default {
  name: 'cart',
  data () {
    return {
      cartData:[]

    }
  },
  components:{
		"my-cart-list":CartList
	},
	methods:{
		changeData(type,index){
			var num=this.cartData[index].number*1
			if(type){
				this.cartData[index].number=num+type;
				console.log(this.cartData[index].number)
			}else{
				this.cartData.splice(index,1,{})
			}
		}
	},
  mounted(){
      
    var requ = JSON.stringify({"page":1,"rows":18,"sortParam":"SALE_DESC"})

    var params = qs.stringify({ _mt:"search.searchItem",request:requ,_idfa:"cd374caeeab1eb584bbd7479bd4d1283",_aid:"1006",_sm:"md5",_sig:"7aafb2ca2bdd4eae82072556d64d3976" });

    this.$http.post("/api",params,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(res=>{
      var str = [];
      for(var i=0;i<18;i++){
      	str.push(res.body.content[0].result[i])
      }
      this.cartData = str;
      console.log( str); 
    })
  }
}
</script>

<style>
	.sub-header ~ .content { padding-top:155px; }
	a { color:#333;text-decoration:none; }
	.cart-list1{
		background:white;
		margin-top:10px;  
	}
	.cart-prolist11 {
		padding:20px 0px;
		height:200px; width: 100%; 
		white-space: nowrap; overflow-x: auto; overflow-y:hidden;
		font-size: 0; background-color: #fff;margin-top:10px
	}
	.cart-prolist11 li { 
		display: inline-block; height:200px; width:170px;
		font-size: 12px;border:1px solid #ccc;padding:5px;margin-left:10px;
	}
	.cart-prolist11 li dl{
		display:inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width:145px;height:180px;
	}
	.cart-prolist11 li dl dt{
		display:flex;
		align-items: center;
		justify-content: center;	
		width:100px;height:120px;
	}
	.cart-prolist11 li dl dt img{
		display:flex;
		align-items: center;
		justify-content: center;	
		width:100px;height:100px;
	}
	.cart-prolist11 li dl dd{
		white-space:pre-wrap;
		width:120px;height:90px;line-height:15px;
		font-size:12px;color:#333;
	}
	.cart-prolist11 li dl dd p{
		height:42px;color:#333;line-height:20px;
		text-overflow: ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;
	}
	.cart-prolist11 li dl dd em {
		font-size:20px;color:#e71f63;
	}
	.cart-prolist11 li dl dd i {
		width:32px;height:32px;background:#ffc26b;
		border-radius: 15px; font-size:26px;color:#fff;
		float:right;
	}
	
.cart-login {
    background: #f90;
    height: .46rem;
    line-height: .46rem;
    padding:20px 10px 20px 10px;
    color: #fff;
    overflow: hidden;
    font-size: .16rem;
   	margin-top:13px;
}
.cart-login a{
	color:white;
}
.cart-login .cart-btn{
		color:red;
		border:1px solid white;
		width:30px;
		height:40px;
		padding:6px;
		margin-right:3px;
	}
 .buy_platform {
    border-top: 2px solid #ff7012;
    background: #fff;
    margin-top:10px;
}
.global_footer {
    width: 100%;
    min-width: 300px;
    max-width: 640px;
    margin: 0 auto;
    position: fixed;
    bottom: 50px;
    left: 0;
    right: 0;
    height: 54px;
    background: #eee;
    z-index: 10;
}
 .middle_total .total_left {
    width: 62px;
    height: 100%;
}
.f_left {
    float: left!important;
}
 .input_wrap {
    display: block;
    position: absolute;
    width: 40px;
    height: 100%;
    top: 0;
    left: 0;
}
 .total_left span {
    position: absolute;
    width: .24rem;
    height: 100%;
    line-height: 54px;
    left: .4rem;
    font-size: .1rem;
}
.middle_total .total_left input {
    left: 10px;
    margin-left: auto;
}
 .input_wrap input {  
    position: absolute;
    width: 18px;
    height: 18px;
    top: 50%;
    left: 10px;
    margin-top: -9px;
    margin-left: -9px;
   
}
.middle_total .price_wrap {
    display: inline-block;
    position: relative;
    margin-left:10px;
}
.f_left {
    float: left!important;
}
 .middle_total .total_left span {
    position: absolute;
    width: 24px;
    height: 100%;
    line-height: 54px;
    left: 40px;
    font-size: 10px;
}
.middle_total .price_wrap p {
    font-size: 10px;
    padding-top: 8px;
    margin-left: 6px;
}
 .middle_total .price_wrap p .price_text {
    color: #222;
    font-size: .12rem;
}
 .middle_total .price_wrap p .price {
    color: red;
}
.middle_total .price_wrap p .price .currency {
    font-size: 15px;
}
 .middle_total .price_wrap p .tips {
    margin-left: 2px;
    font-size: 9px;
}
.middle_total .price_wrap p:last-of-type {
    font-size: 9px;
    color: #a0a0a0;
}
.middle_total .btn {
    position: absolute;
    width: 90px;
    height: 100%;
    font-size: 14px;
    line-height: 54px;
    text-align: center;
    right: 0;
    top: 0;
    background: #ff7012;
    color: #fff;
}
.middle_total .btn .all_product_num {
    font-size: .12rem;
}
</style>