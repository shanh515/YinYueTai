<template>
    <div class="app-home">
        <!--顶部输入框-->
		<div class="mui-input-row mui-search">
			<input type="search" class="mui-input-clear" placeholder="请输入艺人、MV或悦单名称">
		</div>
        <!--轮播图-->
		<div>
		<mt-swipe :auto="4000">
			<mt-swipe-item v-for="item of list" :key="item.id">
				<img :src="item.img_url" />
			</mt-swipe-item>
		</mt-swipe>
		</div>

        <!--中部内容-->
        <ul class="mui-table-view mui-grid-view">
		<h4>首播</h4>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<router-link to="Exam01">
			<img class="mui-media-object" src="img/grid/01.png">
			<p>梁静茹</p>
			<div class="mui-media-body">微光</div>
			</router-link>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/02.jpg">
			<p>Super Junior-D&E</p>
			<div class="mui-media-body">Danger官方版</div></a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#"><img class="mui-media-object" src="img/grid/03.jpg">
			<p>吴镇宇&摩登兄弟刘宇宁</p>
		    <div class="mui-media-body">友情岁月(兄弟版)电影
			《转型团伙》宣传推广曲</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/04.jpg">
			<p>何洁</p>
		    <div class="mui-media-body">前任 电影《下一任:前任》主题曲</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6" @click="jump_shop">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/05.jpg">
			<p>丁当</p>
		    <div class="mui-media-body">有什么不敢面对 官方版</div>
			</a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/06.png">
			<p>卫兰</p>
		    <div class="mui-media-body">所以我爱</div></a>
        </li>
	</ul>

	
    <ul class="mui-table-view mui-grid-view">
	<h4>娱乐</h4>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/yl01.jpg">
			<p>Iggy Azalea重磅回归 全球首演新单(情绪字幕组)</p>
			<div class="mui-media-body">Sally Walker 中英字幕现场版</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/yl02.jpg">
			<p>超好听的吉他教学~</p>
			<div class="mui-media-body">戴佩妮《你要的爱》</div></a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#"><img class="mui-media-object" src="img/grid/yl03.jpg">
			<p>为哥哥深情打call</p>
		    <div class="mui-media-body">慢慢喜欢你 现场版</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/yl04.jpg">
			<p>八三夭乐团跳进高雄巨蛋！</p>
		    <div class="mui-media-body">一事无成的伟大</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/yl05.jpg">
			<p>F.I.R.飞儿乐团深情cover三连</p>
		    <div class="mui-media-body">给还是新人的他们</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/yl06.jpg">
			<p>我无法独自一人</p>
		    <div class="mui-media-body">i'm so tired...现场版</div></a>
        </li>
	</ul>

    <ul class="mui-table-view mui-grid-view">
	<h4>热播推荐</h4>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/rb01.jpg">
			<p>胡夏第五张个人专辑《念·旧》发布会</p>
			<div class="mui-media-body">开拓全新音乐版图</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/rb02.jpg">
			<p>丁当新专辑发片记者会</p>
			<div class="mui-media-body">我们不像我们 现场版</div></a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#"><img class="mui-media-object" src="img/grid/rb03.jpg">
			<p>孟慧圆“你知道我知道你”巡演北京站</p>
		    <div class="mui-media-body">对岸&怎么了&美美&小蘑菇 现场版</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/rb04.jpg">
			<p>第十四届亚洲模特盛典</p>
		    <div class="mui-media-body">TEAM SPARK火星团助阵</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/rb05.jpg">
			<p>梁欢「我们去未来」新专辑发布会</p>
		    <div class="mui-media-body">缔造全新视听盛宴</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/rb06.jpg">
			<p>“戈壁天堂”发布启动会</p>
		    <div class="mui-media-body">开启业内新文旅时代</div></a>
        </li>
	</ul>

	<ul class="mui-table-view mui-grid-view">
	<h4>音乐现场</h4>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/xc01.gif">
			<div class="mui-media-body">防弹少年团《Boy With Luv》</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/xc02.jpg">
			<div class="mui-media-body">Dionysus - M COUNTDOWN 现场版 19/04/18</div></a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#"><img class="mui-media-object" src="img/grid/rb03.jpg">
		    <div class="mui-media-body">Cherry Bomb & Superhuman - GMA 现场版 19/04/18</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/rb04.jpg">
		    <div class="mui-media-body">Make It Right - M COUNTDOWN 现场版 19/04/18</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/rb05.jpg">
		    <div class="mui-media-body">Violeta - M!COUNTDOWN现场版 19/04/18</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/rb06.jpg">
		    <div class="mui-media-body">ZONE - M COUNTDOWN 现场版 19/04/18</div></a>
        </li>
	</ul>

	<ul class="mui-table-view mui-grid-view">
	<h4>主打星:Red Velvet</h4>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/zdx01.jpg">
			<div class="mui-media-body">Really Bad Boy - MBC音乐中心 直拍版 181201</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/zdx02.jpg">
			<div class="mui-media-body">RBB(Really Bad Boy)-SBS人气歌谣 现场版 18/12/02</div></a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#"><img class="mui-media-object" src="img/grid/zdx03.jpg">
		    <div class="mui-media-body">RBB(Really Bad Boy)-MBC音乐中心 现场版 18/12/01</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/zdx04.jpg">
		    <div class="mui-media-body">Butterflies-MBC音乐中心 现场版 18/12/01</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/zdx05.jpg">
		    <div class="mui-media-body">RBB(Really Bad Boy)&Butterflies-KBS音乐银行 现场版 18/11/30</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/zdx06.jpg">
		    <div class="mui-media-body">RBB(Really Bad Boy)</div></a>
        </li>
	</ul>

	<ul class="mui-table-view mui-grid-view">
	<h4>音悦V榜</h4>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/vb01.jpg">
			<div class="mui-media-body">蔡依林蝉联港台冠军|15期榜单</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
			<a href="#">
			<img class="mui-media-object" src="img/grid/vb02.jpg">
			<div class="mui-media-body">新人"相声组"LiCong&Veegee专访 音悦密谈室EP50</div></a>
		</li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#"><img class="mui-media-object" src="img/grid/vb03.jpg">
		    <div class="mui-media-body">EP226 11月K-POP歌坛神仙打架现场</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/vb04.jpg">
		    <div class="mui-media-body">EP225 新生代偶像集结 大型综艺霸屏现场! </div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/vb05.jpg">
		    <div class="mui-media-body">小童星是怎样炼成的 V榜有话说EP19</div></a>
        </li>
		<li class="mui-table-view-cell mui-media mui-col-xs-6">
		    <a href="#">
		    <img class="mui-media-object" src="img/grid/vb06.jpg">
		    <div class="mui-media-body">18年新番前瞻 V榜有话说EP20</div></a>
        </li>
	</ul>
        
		<!--底部-->
        <div class="bottom">
            <div style="height:50px;"></div>
            <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item mui-active" href="#tabbar" @click="jump1">
                    <span class="mui-icon mui-icon-home"></span>
                    <span class="mui-tab-label">首页</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-chat" @click="jump2">
                    <span class="mui-icon mui-icon-bars"></span>
                    <span class="mui-tab-label">分类</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-contact" @click="jump3">
                    <span class="mui-icon mui-icon-arrowdown"></span>
                    <span class="mui-tab-label">V榜</span>
                </a>
                <a class="mui-tab-item" href="#tabbar-with-map" @click="jump5">
                    <span class="mui-icon mui-icon-person"></span>
                    <span class="mui-tab-label">我的</span>
                </a>
            </nav>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
			list:[], //轮播数组
		}
    },
	created() {
		this.loadImgList();
	},
	methods:{
		loadImgList(){
			//发送ajax获取轮播列表
			var url = "http://127.0.0.1:3000";
			url+="/imglist";
			//发送ajax
			this.axios.get(url).then(result=>{
				//获取服务器返回数据
				//保存data中
				this.list = result.data.data;
			})
		},
		jump1(){
			this.$router.push("/Home")
		},
		jump2(){
			this.$router.push("/List")
		},
		jump3(){
			this.$router.push("/Vb")
		},
		jump5(){
			this.$router.push("/My")
		},
		jump_shop(){
			this.$router.push("Exam05")
		}
	}
		
}
</script>
<style>
.app-home .mint-swipe{
	height:116px;
}
.app-home .mint-swipe img{
	width:100%;
}
.app-home h4{
	color:#000;
	margin-top:0.5em;
	padding:0.2em;
	
}

</style>