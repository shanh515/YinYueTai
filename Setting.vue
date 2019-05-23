<template>
    <div class="app-setting">
        <div id="setting" class="mui-page">
			<!--页面标题栏开始-->
			<div class="mui-navbar-inner mui-bar mui-bar-nav">
				<button type="button" class="mui-left mui-action-back mui-btn  mui-btn-link mui-btn-nav mui-pull-left" @click="black_my">
					<span class="mui-icon mui-icon-left-nav"></span>
				</button>
				<h1 class="mui-center mui-title">设置</h1>
			</div>
			<!--页面标题栏结束-->
			<!--页面主内容区开始-->
			<div class="mui-page-content">
				<div class="mui-scroll-wrapper">
					<div class="mui-scroll">
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell mui-media">
								<router-link to='Exam07' class="mui-navigate-right" href="#account">
									<img class="mui-media-object mui-pull-left head-img" id="head-img" src="img/notification_big_icon.png">
									<div class="mui-media-body">
										Hello
										<p class='mui-ellipsis'>账号:用户12345</p>
									</div>
								</router-link>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell" style="margin-top:1em;">
								<a href="#account" class="mui-navigate-right">
                                    账号设置
                                </a>
							</li>
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell">
								<a href="#notifications" class="mui-navigate-right">
                                    播放设置
                                </a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#privacy" class="mui-navigate-right">
                                    网络提醒
                                </a>
							</li>
							<li class="mui-table-view-cell">
								<a href="#general" class="mui-navigate-right">
                                    弹幕设置
                                </a>
							</li>
                            <li class="mui-table-view-cell">
								<a href="#general" class="mui-navigate-right">
                                    推送通知
                                </a>
							</li>
                            <li class="mui-table-view-cell">
								<a href="#general" class="mui-navigate-right">
                                    意见反馈
                                </a>
							</li>       
						</ul>
						<ul class="mui-table-view mui-table-view-chevron">
							<li class="mui-table-view-cell" style="margin-top:1em;">
								<a href="#about" class="mui-navigate-right" @click="jump_exam8">
                                    关于音悦台
                                </a>
							</li>
						</ul>
						<ul class="mui-table-view">
							<li class="mui-table-view-cell" style="text-align:center;margin-top:1em;">
								<a>退出登录</a>
							</li>
						</ul>
                    </div>
				</div>
			</div>
        </div>
        
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods: {
        black_my(){
            this.$router.push("/My")
        },
		jump_exam8(){
			this.$router.push("/Exam08")
		}
    }
}
</script>
<style>

.app-setting .mui-scroll-wrapper{
   /* border:1px solid red;*/
    margin-top:3.5em;
}

.mui_span{
    border:1px solid red;
    margin-left:1em;
}
</style>