//预加载的图片
var loadImg = [
	{path:'img/logo.png',type:'img',name:'logo'}
]
//加载的图片
var gameImg = [
	{path:'img/ad.jpg',type:'img',name:'ad'},
	{path:'img/banner.jpg',type:'img',name:'banner'},
	{path:'img/bottomBkg.jpg',type:'img',name:'bottomBkg'},
	{path:'img/bigplay.png',type:'img',name:'bigplay'},
	{path:'img/bsbottomBkg.jpg',type:'img',name:'bsbottomBkg'},
	{path:'img/bottompl.png',type:'img',name:'bottompl'},
	{path:'img/bottompr.png',type:'img',name:'bottompr'},
	{path:'img/bottomtl.png',type:'img',name:'bottomtl'},
	{path:'img/bottomtr.png',type:'img',name:'bottomtr'},
	{path:'img/bsp01.png',type:'img',name:'bsp01'},
	{path:'img/bsp02.png',type:'img',name:'bsp02'},
	{path:'img/bsp03.png',type:'img',name:'bsp03'},
	{path:'img/bsp04.png',type:'img',name:'bsp04'},
	{path:'img/bst01.png',type:'img',name:'bst01'},
	{path:'img/bst02.png',type:'img',name:'bst02'},
	{path:'img/bst03.png',type:'img',name:'bst03'},
	{path:'img/bst04.png',type:'img',name:'bst04'},
	{path:'img/bst05.png',type:'img',name:'bst05'},
	{path:'img/bst06.png',type:'img',name:'bst06'},
	{path:'img/bst07.png',type:'img',name:'bst07'},
	{path:'img/bst08.png',type:'img',name:'bst08'},
	{path:'img/bstiopBkg.png',type:'img',name:'bstiopBkg'},
	{path:'img/bsTitle.png',type:'img',name:'bsTitle'},
	{path:'img/bsvideo.jpg',type:'img',name:'bsvideo'},
	{path:'img/gybottomBkg.jpg',type:'img',name:'gybottomBkg'},
	{path:'img/gyt01.png',type:'img',name:'gyt01'},
	{path:'img/gyt02.png',type:'img',name:'gyt02'},
	{path:'img/gyt03.png',type:'img',name:'gyt03'},
	{path:'img/gyt04.png',type:'img',name:'gyt04'},
	{path:'img/gyt05.png',type:'img',name:'gyt05'},
	{path:'img/gyt08.png',type:'img',name:'gyt08'},
	{path:'img/gytopBkg.png',type:'img',name:'gytopBkg'},
	{path:'img/know.png',type:'img',name:'know'},
	{path:'img/msbottomBkg1.jpg',type:'img',name:'msbottomBkg1'},
	{path:'img/msp01.png',type:'img',name:'msp01'},
	{path:'img/msp02.png',type:'img',name:'msp02'},
	{path:'img/msp03.png',type:'img',name:'msp03'},
	{path:'img/msp04.png',type:'img',name:'msp04'},
	{path:'img/mst01.png',type:'img',name:'mst01'},
	{path:'img/mst02.png',type:'img',name:'mst02'},
	{path:'img/mst03.png',type:'img',name:'mst03'},
	{path:'img/mst04.png',type:'img',name:'mst04'},
	{path:'img/mst05.png',type:'img',name:'mst05'},
	{path:'img/mst06.png',type:'img',name:'mst06'},
	{path:'img/mst07.png',type:'img',name:'mst07'},
	{path:'img/mst08.png',type:'img',name:'mst08'},
	{path:'img/mstopBkg.png',type:'img',name:'mstopBkg'},
	{path:'img/navbanner.png',type:'img',name:'navbanner'},
	{path:'img/play.png',type:'img',name:'play'},
	{path:'img/produce01.jpg',type:'img',name:'produce01'},
	{path:'img/tsdbottomBkg.jpg',type:'img',name:'tsdbottomBkg'},
	{path:'img/tsdp01.png',type:'img',name:'tsdp01'},
	{path:'img/tsdp02.png',type:'img',name:'tsdp02'},
	{path:'img/tsdp03.png',type:'img',name:'tsdp03'},
	{path:'img/tsdp04.png',type:'img',name:'tsdp04'},
	{path:'img/tsdt01.png',type:'img',name:'tsdt01'},
	{path:'img/tsdt02.png',type:'img',name:'tsdt02'},
	{path:'img/tsdt03.png',type:'img',name:'tsdt03'},
	{path:'img/tsdt04.png',type:'img',name:'tsdt04'},
	{path:'img/tsdt05.png',type:'img',name:'tsdt05'},
	{path:'img/tsdt06.png',type:'img',name:'tsdt06'},
	{path:'img/tsdt07.png',type:'img',name:'tsdt07'},
	{path:'img/tsdt08.png',type:'img',name:'tsdt08'},
	{path:'img/tsdtopBkg.png',type:'img',name:'tsdtopBkg'},
	{path:'img/types.jpg',type:'img',name:'types'},
	{path:'img/xdbottomBkg.jpg',type:'img',name:'xdbottomBkg'},
	{path:'img/xdt01.png',type:'img',name:'xdt01'},
	{path:'img/xdt02.png',type:'img',name:'xdt02'},
	{path:'img/xdt03.png',type:'img',name:'xdt03'},
	{path:'img/xdt04.png',type:'img',name:'xdt04'},
	{path:'img/xdt05.png',type:'img',name:'xdt05'},
	{path:'img/xdt06.png',type:'img',name:'xdt06'},
	{path:'img/xdt07.png',type:'img',name:'xdt07'},
	{path:'img/xdt08.png',type:'img',name:'xdt08'},
	{path:'img/xdtopBkg.png',type:'img',name:'xdtopBkg'},
	{path:'img/xsp01.png',type:'img',name:'xsp01'},
	{path:'img/xsp02.png',type:'img',name:'xsp02'},
	{path:'img/xsp03.png',type:'img',name:'xsp03'},
	{path:'img/xsp04.png',type:'img',name:'xsp04'},
	{path:'img/youngTip.png',type:'img',name:'youngTip'},
	{path:'img/yp01.png',type:'img',name:'yp01'},
	{path:'img/yp02.png',type:'img',name:'yp02'},
	{path:'img/yp03.png',type:'img',name:'yp03'},
	{path:'img/yp04.png',type:'img',name:'yp04'},
	{path:'img/yt01.png',type:'img',name:'yt01'},
	{path:'img/yt02.png',type:'img',name:'yt02'},
	{path:'img/yt03.png',type:'img',name:'yt03'},
	{path:'img/yt04.png',type:'img',name:'yt04'}
];
//全局函数
var backLayer,logoText,loadpic,loadpicr;
//初始化
LInit(1000/40,"load",750,1206,main);
//游戏入口主函数
function main(){
    LGlobal.stageScale = LStageScaleMode.EXACT_FIT;//设置全屏变量
    LGlobal.screen(LStage.FULL_SCREEN);//设置全面适应
    backLayer = new LSprite();//创建背景层
    addChild(backLayer);//添加背景层到游戏环境中
    LLoadManage.load(loadImg,'',loadImging);
}
//预加载页面
function loadImging(result){
	//logo
	var logo = new LBitmap(new LBitmapData(result['logo']));
	logo.scaleX = 1.5;
	logo.scaleY = 1.5;
	logo.x = (LGlobal.width-logo.getWidth())/2;
	logo.y = 500;
	//text
	logoText = new LTextField();
	logoText.size = 22;
	logoText.color = '#ccad94';
	logoText.text = '100%';
	logoText.x = (LGlobal.width-logoText.getWidth()+300)/2;
	logoText.y = 500+logo.getHeight()+43;
	
	//loadpic
	loadpic = new LSprite();
	loadpic.x = (LGlobal.width-loadpic.getWidth()-280-logoText.getWidth())/2;
	loadpic.y = 500+logo.getHeight()+50;
	loadpic.graphics.drawRect(0,'#9d223e',[0,0,0,10],true,'#9d223e');
	//loadpicr
	loadpicr = new LSprite();
	loadpicr.x = (LGlobal.width-loadpic.getWidth()-280-logoText.getWidth())/2;
	loadpicr.y = 500+logo.getHeight()+50;
	loadpicr.graphics.drawRect(0,'#999999',[0,0,280,10],true,'#999999');
	
	backLayer.graphics.drawRect(0,'#000000',[0,0,LGlobal.width,LGlobal.height],true,'#ffffff');
	backLayer.addChild(logo);
	logoText.text = '0%';
	backLayer.addChild(logoText);
	backLayer.addChild(loadpicr);
	backLayer.addChild(loadpic);
	LLoadManage.load(gameImg,loading,gameStart);//读取加载页面背景图片
}
//加载页面
function loading(progress){
	logoText.text = parseInt(progress)+'%';
	loadpic.graphics.drawRect(0,'#ccad94',[0,0,280*progress/100,10],true,'#ccad94');
}
function gameStart(){
	backLayer.remove();
	$('#load').css('display','none');
	$('#content').show();
	//轮播图
	var banner = new Swiper('.swiper-container-banner', {
	    direction: 'horizontal',
	    autoplay : 5000,
	    loop:true,
	    autoplayDisableOnInteraction : false,
	    pagination: '.swiper-pagination',
	});
	//导航轮播图
	var navBanner = new Swiper('.swiper-container-nav', {
	    slidesPerView: 'auto',
	    paginationClickable: true,
	    loopedSlides:6,
	    spaceBetween:8,
	    centeredSlides:true,
	    touchRatio: 0.2,
	    slideToClickedSlide: true
	});
	//产品轮播图
	var proBanner = new Swiper('.swiper-container-pro', {
	    pagination: '.swiper-pagination',
	    slidesPerView: 'auto',
	    paginationClickable: true,
	    autoplay:5000,
	    loopedSlides:3,
	    spaceBetween:10,
	    centeredSlides:true,
	    onInit: function(swiper){
	    }
	});
	//
	proBanner.params.control = navBanner;
	navBanner.params.control = proBanner;
}
//文档准备完毕
$(document).ready(function(){
	//切换导航
	$('.navs ul li').on('touchstart',function(){
		var index = $(this).index();
		if(index!=0)
		{
			$('.navs ul li').eq(index-1).find('span').addClass('span');
			$('.navs ul li').eq(index-1).siblings().find('span').removeClass('span');
		}
		$(this).addClass('navs-active');
		$(this).siblings('li').removeClass('navs-active');
		
	});
	//记录滚动条变量
	var scrollh = 0;
	var scrollhh = 0;
	$('#content').width($(window).innerWidth());
	$('.moreknow a').on('touchstart',function(){
		scrollhh = scrollh;
		$('#popWindow').stop().animate({top:'0%'},500,function(){
			$('#content').hide();
		});
	});
	$('#popWindow').on('touchstart',function(){		
		$('#content').stop().slideDown(500,function(){
			$(document).scrollTop(scrollhh);
			$("#popWindow").stop().animate({top:'100%'},500);
		});
		
	});
	//滚动条位置
	$(window).scroll(function(){
		scrollh = $(document).scrollTop();
		if(scrollh-videoh>=videoscroolh||videoscroolh>=scrollh+winh){
			$('#videoOne')[0].pause();
		}
	});
	//视频播放
	var videoscroolh;
	videoscroolh = $('.videoBox').offset().top;
	var videoh = $('.videoBox').height();
	var winh = $(window).height();
	$('.videoPlay').on('touchstart',function(){
		
		$('#videoOne').show();
		$('#videoOne')[0].play();
		$(this).hide();
		$(this).siblings('img').css('opacity',0);
	});
});
