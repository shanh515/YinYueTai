<template>
    <div class="app-my">
        <div class="my_top">
            <h4>我的</h4>
        </div>
        <div class="top" style="background-color:#fff">
            <div class="dl">
                <h4 >登录账户，享受云同步</h4>
                <input type="button" value="登录" class="btn" @click="jumplogin">
            </div>
            <hr>
            <div class="hy">
                <div class="hyzx" style="margin-left:1em">
                    <span>音悦会员</span>
                    <p>会员专享特权、活动</p>
                </div>
                <div class="mll" style="margin-top:0.8em">
                    <span>免流量服务(未订购)</span>
                    <p>免流量畅享百万高清MV</p>
                </div>
                
            </div>
        </div>
        
       <!-- <div class="middle_icon" style="background-color:#fff">
            
                <div class="middle_icon_img">
                    <img src="img/my_collect_btn_normal.png" />
                    <p>收藏</p>
                </div>
                
                <div class="middle_icon_img">
                    <img src="img/my_subscribe_btn_normal.png" />
                    <p>订阅</p>
                </div>
                
                <div class="middle_icon_img">
                    <img src="img/my_history_btn_normal.png" />
                    <p>播放记录</p>
                </div>
                 
                <div class="middle_icon_img">
                    <img src="img/my_shopping_btn_n.png" />
                    <p>商城</p> 
                </div> 
             
        </div>
        -->
        
        <ul class="mui-table-view mui-table-view-chevron">
        <p style="color:#000;">下载管理</p>
            <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right">
                    <div class="mui-media-body">
                        <p class='mui-ellipsis' style="text-align:center;">您还没有已下载的MV哦，快去逛逛吧~!</p>
                    </div>
                </a>
            </li>
        </ul>    

        <ul class="mui-table-view mui-table-view-chevron">
        <p style="color:#000;">自建悦单</p>
            <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right">
                     <img class="mui-media-object mui-pull-left" src="img/playlist_default.png">
                    <div class="mui-media-body">
                    
                        <p class='mui-ellipsis'>您还没有创建悦单，赶紧创建一个属于...</p>
                    </div>
                </a>
            </li>
        </ul>

        <ul class="mui-table-view mui-table-view-chevron">
        <p style="color:#000;">收藏的悦单</p>
            <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right">
                     <img class="mui-media-object mui-pull-left" src="img/playlist_default.png">
                    <div class="mui-media-body">
                    
                        <p class='mui-ellipsis'>您还没有收藏悦单</p>
                    </div>
                </a>
            </li>
        </ul>

        <ul class="mui-table-view mui-table-view-chevron" style="margin-top:1em;">
        <p style="color:#000;">发现</p>
            <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                       音乐商城
                        <p class='mui-ellipsis'>陈伟霆InsideMe巡演 官方应援手灯</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a class='mui-navigate-right' href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                        音悦众筹
                        <p class='mui-ellipsis'>安七炫《廊桥遗梦》首演应援</p>
                    </div>
                </a>
            </li>
            <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" src="">
                    <div class="mui-media-body">
                    StarTV
                    </div>
                </a>
            </li>
        </ul>
        <ul id="table_view_setting" class="mui-table-view mui-table-view-chevron" style="margin-top:1em;" @click="setting">
            <li class="mui-table-view-cell mui-media">
                <a class="mui-navigate-right">
                    <img class="mui-media-object mui-pull-left" src="img/my_setting_btn_pressed.png">
                    <div class="mui-media-body" style="margin-top:0.6em">
                    设置
                    </div>
                </a>
            </li>
        </ul>

        <!--底部-->   
        <div class="bottom">
            <div style="height:50px;"></div>
            <nav class="mui-bar mui-bar-tab">
                <a class="mui-tab-item" href="#tabbar" @click="jump1">
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
                <a class="mui-tab-item mui-active" href="#tabbar-with-map" @click="jump5">
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
        return{}
    },
    methods:{
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
        jumplogin(){
            this.$router.push("/login")
        },
        setting(){
            this.$router.push("/Setting")
        }
	}
}
</script>
<style>
.app-my{
   position:relative;
}
.app-my .my_top h4{
    margin:0;
    padding:0.2em;
    width:100%;
    height:2em;
    color:#fff;
    background-color:#000;
    text-align:center;
}

.app-my .dl{
   /*border:1px solid red;*/
    padding:0.5em;
    text-align:center;
}
.app-my .btn{
    width:15em;
    color:#fff;
    background: -webkit-linear-gradient(left, #3ae0bb 0%,#0fdab1 50%, #25c37a 100%);
    border-radius:5em;
    /* position:absolute;*/
    
}
.app-my .hy>.mll{
   float:right;
   position:absolute;
   left:52%;
   top:7em;
}
</style>