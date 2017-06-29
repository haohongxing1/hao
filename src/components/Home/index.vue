<template>
	<div class="home">
		<mt-search 
			v-model="value"
			cancel-text="取消"
  			placeholder="车厘子">	
		</mt-search>
		<mt-swipe :auto="4000" >
			<mt-swipe-item><img :src="swipeData[0].image" /></mt-swipe-item>
			<mt-swipe-item><img :src="swipeData[1].image" /></mt-swipe-item>
			<mt-swipe-item><img :src="swipeData[2].image" /></mt-swipe-item>
			<mt-swipe-item><img :src="swipeData[3].image" /></mt-swipe-item>
		</mt-swipe>
		<img src="../image/welfare.jpg" />
		<div class="h-prolist">
			<ul>
				<li class="item" v-for="(ele,index) in jiuData" :key="index">
					<dl>
						<dt><img :src="ele.image" /></dt>
						<dd>{{ele.iconName}}</dd>	
					</dl>
				</li>
			</ul>
		</div>
		
		<div class="h-prolist1">
			<p>限时抢购</p>
			<ul class="h-prolist11">
				<li v-for="(ele,index) in jiuData0" :key="index"><dl>
                    <dt><img :src="ele.image"/></dt>
                    <dd><p>{{ele.title}}</p><em>￥{{ele.price}}</em><i class="icon iconfont">&#xe63f;</i></dd>
                </dl></li>
            </ul>
            <p>夏季清凉</p>
            <img class="h-img1" :src="jiuData1.image" />
			<ul class="h-prolist11">
				<li v-for="(ele,index) in jiuData2" :key="index"><dl>
                    <dt><img :src="ele.image"/></dt>
                    <dd><p>{{ele.title}}</p><em>￥{{ele.price}}</em><i class="icon iconfont">&#xe63f;</i></dd>
                </dl></li>
            </ul>
		</div>

		<div class="h-prolist1">
			<p>品质肉类</p>
			<img class="h-img1" :src="jiuData3.image" />
			<ul class="h-prolist12">
				<li v-for="(ele,index) in jiuData4" :key="index"><dl>
                    <dt><img :src="ele.image"/></dt>
                    <dd><p>{{ele.title}}</p><em>￥{{ele.price}}</em><i class="icon iconfont">&#xe63f;</i></dd>
                </dl></li>
            </ul>
            <p>海鲜水产</p>
            <img class="h-img1" :src="jiuData5.image" />
			<ul class="h-prolist12">
				<li v-for="(ele,index) in jiuData6" :key="index"><dl>
                    <dt><img :src="ele.image"/></dt>
                    <dd><p>{{ele.title}}</p><em>￥{{ele.price}}</em><i class="icon iconfont">&#xe63f;</i></dd>
                </dl></li>
            </ul>
            <p>营养果蔬</p>
            <img class="h-img1" :src="jiuData7.image" />
			<ul class="h-prolist12">
				<li v-for="(ele,index) in jiuData8" :key="index"><dl>
                    <dt><img :src="ele.image"/></dt>
                    <dd><p>{{ele.title}}</p><em>￥{{ele.price}}</em><i class="icon iconfont">&#xe63f;</i></dd>
                </dl></li>
            </ul>
            <p>安心禽蛋</p>
            <img class="h-img1" :src="jiuData9.image" />
			
            <p>酒水饮料<em></em></p>
            <img class="h-img1" :src="jiuData11.image" />
			<ul class="h-prolist12">
				<li v-for="(ele,index) in jiuData12" :key="index"><dl>
                    <dt><img :src="ele.image"/></dt>
                    <dd><p>{{ele.title}}</p><em>￥{{ele.price}}</em><i class="icon iconfont">&#xe63f;</i></dd>
                </dl></li>
            </ul>
            <p>料理之味</p>
            <img class="h-img1" :src="jiuData13.image" />
			<ul class="h-prolist12">
				<li v-for="(ele,index) in jiuData14" :key="index"><dl>
                    <dt><img :src="ele.image"/></dt>
                    <dd><p>{{ele.title}}</p><em>￥{{ele.price}}</em><i class="icon iconfont">&#xe63f;</i></dd>
                </dl></li>
            </ul> 
		</div>
		
		<my-footer></my-footer>
	</div>
</template>

<script>

var qs = require('qs');

export default {
	name: 'home',
	data () {
		return{
			swipeData:[],
			jiuData0:[],
			jiuData:[],
			jiuData1:[],
			jiuData2:[],
			jiuData3:[],
			jiuData4:[],
			jiuData5:[],
			jiuData6:[],
			jiuData7:[],
			jiuData8:[],
			jiuData9:[],
			jiuData10:[],
			jiuData11:[],
			jiuData12:[],
			jiuData13:[],
			jiuData14:[]
		
		}
	},
	mounted(){
		
		var params = qs.stringify({ _mt:"page.get",type:"2",id:"0",_idfa:"1618caa147a45d2bc7b53578930038ff",_aid:"1006",_sm:"md5",_sig:"fb1a41c94ef9fd58002e11dc5cc8f46c" });
		this.$http.post("/api",params,{
			headers:{
				'Content-Type': 'application/x-www-form-urlencoded'
			}
		}).then(res=>{
			var str = res.body.content[0].items[1].data;
			this.swipeData = JSON.parse(str);
			console.log(JSON.parse(str));

			var str1 = res.body.content[0].items[3].data;
			this.jiuData = JSON.parse(str1);
			console.log(JSON.parse(str1));

			var str11 = res.body.content[0].items[5].data;
			this.jiuData0 = JSON.parse(str11);
			console.log(JSON.parse(str11));
			
			var str2 = res.body.content[0].items[6].attributes;
			this.jiuData1 = JSON.parse(str2);
			console.log(JSON.parse(str2));
			var str3 = res.body.content[0].items[6].data;
			this.jiuData2 = JSON.parse(str3);
			console.log(JSON.parse(str3));

			var str4 = res.body.content[0].items[7].attributes;
			this.jiuData3 = JSON.parse(str4);
			console.log(JSON.parse(str4));
			var str5 = [];
			for(var i=0;i<8;i++){
				str5.push( (JSON.parse(res.body.content[0].items[7].data)[i]) )
			}
			this.jiuData4 =str5;
			console.log(str5);

			var str6 = res.body.content[0].items[8].attributes;
			this.jiuData5 = JSON.parse(str6);
			console.log(JSON.parse(str6));
			//只取出前八个数据 渲染到页面中
			var str7 = [];
			for(var i=0;i<8;i++){
				str7.push( (JSON.parse(res.body.content[0].items[8].data)[i]) )
			}
			this.jiuData6 =str7;
			console.log(str7);

			var str8 = res.body.content[0].items[9].attributes;
			this.jiuData7 = JSON.parse(str8);
			console.log(JSON.parse(str8));
			var str9 = [];
			for(var i=0;i<8;i++){
				str9.push( (JSON.parse(res.body.content[0].items[9].data)[i]) )
			}
			this.jiuData8 = str9;
			console.log(str9);

			var str10 = res.body.content[0].items[10].attributes;
			this.jiuData9 = JSON.parse(str10);
			console.log(JSON.parse(str10));
			// var str11 = [];
			// for(var i=0;i<8;i++){
			// 	str11.push( (JSON.parse(res.body.content[0].items[10].data)[i]) )
			// }
			// this.jiuData10 = str11;
			// console.log(str11);

			var str12 = res.body.content[0].items[11].attributes;
			this.jiuData11 = JSON.parse(str12);
			console.log(JSON.parse(str12));
			var str13 = [];
			for(var i=0;i<8;i++){
				str13.push( (JSON.parse(res.body.content[0].items[11].data)[i]) )
			}
			this.jiuData12 = str13;
			console.log(str13);

			var str14 = res.body.content[0].items[12].attributes;
			this.jiuData13 = JSON.parse(str14);
			console.log(JSON.parse(str14));
			var str15 = [];
			for(var i=0;i<8;i++){
				str15.push( (JSON.parse(res.body.content[0].items[12].data)[i]) )
			}
			this.jiuData14 = str15;
			console.log(str15);

			
	
		})
		
	}
	
}
</script>


<style>
	body {
		background:#eeeeee;
	}
	a { color:#333 }
	.mint-search {
		width:100%;height:50px;
	}
	.mint-swipe {
		width:100%;height:214px;
		background:#aaa;
	}
	.mint-swipe img {
		width:100%;height:100%;
	}
	.welfare {
		width:100%;height:118px;
	}

	img {
		width:100%;height:117px;
	}
	.h-prolist { 
	    width: 100%; height:auto;
	    background:#fff;
	}
	.h-prolist ul {
		height: 70px;
	}
	.h-prolist li {  
		width: 25%; float: left; 
		text-align: center; 
	}
	.h-prolist dl dt img  {  
		width:40px; height:40px;
	}
	.h-prolist dl dd { 
		line-height: 14px; font-size: 12px;  
		color:#666;
	}

	.h-prolist1 p {
		width:100%;height:30px;background:#fff;
		text-align: center;color:#ff7012;
		margin-top:10px;
	}
	.h-prolist11 {
		padding:30px 0px;
		height:180px; width: 100%; 
		white-space: nowrap; overflow-x: auto; overflow-y:hidden;
		font-size: 0; background-color: #fff
	}
	.h-prolist11 li { 
		display: inline-block; height:200px; width:170px;
		font-size: 12px;
	}
	.h-prolist11 li dl{
		display:inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width:145px;height:180px;
	}
	.h-prolist11 li dl dt{
		display:flex;
		align-items: center;
		justify-content: center;	
		width:120px;height:120px;
	}
	.h-prolist11 li dl dt img{
		display:flex;
		align-items: center;
		justify-content: center;	
		width:120px;height:120px;
	}
	.h-prolist11 li dl dd{
		white-space:pre-wrap;
		width:120px;height:90px;line-height:25px;
		font-size:12px;color:#333;
	}
	.h-prolist11 li dl dd p{
		height:52px;color:#333;
	}
	.h-prolist11 li dl dd em {
		font-size:20px;color:#e71f63;
	}
	.h-prolist11 li dl dd i {
		width:32px;height:32px;background:#ffc26b;
		border-radius: 15px; font-size:26px;color:#fff;
		float:right;
	}
	.h-img1 {
		width:100%;height:200px;
	}
	.h-img1 img{
		width:100%;height:100%;
	}
	
	.h-prolist12 {
		width:100%;background-color:#fff;
		margin-top: 2px;
		display:flex;
		flex-wrap: wrap;
		align-content:space-around;
	}
	.h-prolist12 li {
		display:flex;
		align-items: center;
		justify-content: center;
		width:49.3%;height:220px;
		border:1px solid #eee;
	}
	.h-prolist12 li dl{
		display:inline-flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width:145px;height:180px;
	}
	.h-prolist12 li dl dt{
		display:flex;
		align-items: center;
		justify-content: center;	
		width:120px;height:120px;
	}
	.h-prolist12 li dl dt img{
		display:flex;
		align-items: center;
		justify-content: center;	
		width:120px;height:120px;
	}
	.h-prolist12 li dl dd{
		white-space:pre-wrap;
		width:120px;height:90px;line-height:25px;
		font-size:12px;color:#333;
	}
	.h-prolist12 li dl dd p{
		height:52px;color:#333;
	}
	.h-prolist12 li dl dd em {
		font-size:20px;color:#e71f63;
	}
	.h-prolist12 li dl dd i {
		width:32px;height:32px;background:#ffc26b;
		border-radius: 15px; font-size:26px;color:#fff;
		float:right;
	}

</style>

