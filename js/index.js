//预加载的图片
var loadImg = [
	{path:'http://huiya-product.hengdikeji.com/mobile/logo.png',type:'img',name:'logo'},
	{path:'http://huiya-product.hengdikeji.com/mobile/loadBkg.jpg',type:'img',name:'loadBkg'}
]
//加载的图片
var gameImg = [
	{path:'http://huiya-product.hengdikeji.com/mobile/ad.jpg',type:'img',name:'ad'},
	{path:'http://huiya-product.hengdikeji.com/mobile/banner.jpg',type:'img',name:'banner'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bottomBkg.jpg',type:'img',name:'bottomBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bigplay.png',type:'img',name:'bigplay'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bsbottomBkg.jpg',type:'img',name:'bsbottomBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bottompl.png',type:'img',name:'bottompl'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bottompr.png',type:'img',name:'bottompr'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bottomtl.png',type:'img',name:'bottomtl'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bottomtr.png',type:'img',name:'bottomtr'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bsp01.png',type:'img',name:'bsp01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bsp02.png',type:'img',name:'bsp02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bsp03.png',type:'img',name:'bsp03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bsp04.png',type:'img',name:'bsp04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst01.png',type:'img',name:'bst01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst02.png',type:'img',name:'bst02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst03.png',type:'img',name:'bst03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst04.png',type:'img',name:'bst04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst05.png',type:'img',name:'bst05'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst06.png',type:'img',name:'bst06'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst07.png',type:'img',name:'bst07'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bst08.png',type:'img',name:'bst08'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bstiopBkg.png',type:'img',name:'bstiopBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bsTitle.png',type:'img',name:'bsTitle'},
	{path:'http://huiya-product.hengdikeji.com/mobile/bsvideo.jpg',type:'img',name:'bsvideo'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gybottomBkg.jpg',type:'img',name:'gybottomBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gyt01.png',type:'img',name:'gyt01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gyt02.png',type:'img',name:'gyt02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gyt03.png',type:'img',name:'gyt03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gyt04.png',type:'img',name:'gyt04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gyt05.png',type:'img',name:'gyt05'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gyt08.png',type:'img',name:'gyt08'},
	{path:'http://huiya-product.hengdikeji.com/mobile/gytopBkg.png',type:'img',name:'gytopBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/know.png',type:'img',name:'know'},
	{path:'http://huiya-product.hengdikeji.com/mobile/msbottomBkg1.jpg',type:'img',name:'msbottomBkg1'},
	{path:'http://huiya-product.hengdikeji.com/mobile/msp01.png',type:'img',name:'msp01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/msp02.png',type:'img',name:'msp02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/msp03.png',type:'img',name:'msp03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/msp04.png',type:'img',name:'msp04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst01.png',type:'img',name:'mst01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst02.png',type:'img',name:'mst02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst03.png',type:'img',name:'mst03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst04.png',type:'img',name:'mst04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst05.png',type:'img',name:'mst05'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst06.png',type:'img',name:'mst06'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst07.png',type:'img',name:'mst07'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mst08.png',type:'img',name:'mst08'},
	{path:'http://huiya-product.hengdikeji.com/mobile/mstopBkg.png',type:'img',name:'mstopBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/navbanner.png',type:'img',name:'navbanner'},
	{path:'http://huiya-product.hengdikeji.com/mobile/play.png',type:'img',name:'play'},
	{path:'http://huiya-product.hengdikeji.com/mobile/produce01.jpg',type:'img',name:'produce01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdbottomBkg.jpg',type:'img',name:'tsdbottomBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdp01.png',type:'img',name:'tsdp01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdp02.png',type:'img',name:'tsdp02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdp03.png',type:'img',name:'tsdp03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdp04.png',type:'img',name:'tsdp04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt01.png',type:'img',name:'tsdt01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt02.png',type:'img',name:'tsdt02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt03.png',type:'img',name:'tsdt03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt04.png',type:'img',name:'tsdt04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt05.png',type:'img',name:'tsdt05'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt06.png',type:'img',name:'tsdt06'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt07.png',type:'img',name:'tsdt07'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdt08.png',type:'img',name:'tsdt08'},
	{path:'http://huiya-product.hengdikeji.com/mobile/tsdtopBkg.png',type:'img',name:'tsdtopBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/types.jpg',type:'img',name:'types'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdbottomBkg.jpg',type:'img',name:'xdbottomBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt01.png',type:'img',name:'xdt01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt02.png',type:'img',name:'xdt02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt03.png',type:'img',name:'xdt03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt04.png',type:'img',name:'xdt04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt05.png',type:'img',name:'xdt05'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt06.png',type:'img',name:'xdt06'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt07.png',type:'img',name:'xdt07'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdt08.png',type:'img',name:'xdt08'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xdtopBkg.png',type:'img',name:'xdtopBkg'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xsp01.png',type:'img',name:'xsp01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xsp02.png',type:'img',name:'xsp02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xsp03.png',type:'img',name:'xsp03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/xsp04.png',type:'img',name:'xsp04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/youngTip.png',type:'img',name:'youngTip'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yp01.png',type:'img',name:'yp01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yp02.png',type:'img',name:'yp02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yp03.png',type:'img',name:'yp03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yp04.png',type:'img',name:'yp04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yt01.png',type:'img',name:'yt01'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yt02.png',type:'img',name:'yt02'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yt03.png',type:'img',name:'yt03'},
	{path:'http://huiya-product.hengdikeji.com/mobile/yt04.png',type:'img',name:'yt04'},
	{path:'http://huiya-product.hengdikeji.com/mobile/left.png',type:'img',name:'left'},
	{path:'http://huiya-product.hengdikeji.com/mobile/right.png',type:'img',name:'right'},
	{path:'http://huiya-product.hengdikeji.com/mobile/hand.png',type:'img',name:'hand'},

	{path:'http://huiya-product.hengdikeji.com/m-bsbig.jpg',type:'img',name:'big1'},
	{path:'http://huiya-product.hengdikeji.com/pc-bashasmall.jpg',type:'img',name:'big2'},
	{path:'http://huiya-product.hengdikeji.com/m-tysbig.jpg',type:'img',name:'big3'},
	{path:'http://huiya-product.hengdikeji.com/pc-tysbig.jpg',type:'img',name:'big4'},
	{path:'http://huiya-product.hengdikeji.com/m-msnhbig-1.jpg',type:'img',name:'big5'},
	{path:'http://huiya-product.hengdikeji.com/m-msnhbig-2.jpg',type:'img',name:'big6'},
	{path:'http://huiya-product.hengdikeji.com/pc-msnhsmall-2.jpg',type:'img',name:'big7'},
	{path:'http://huiya-product.hengdikeji.com/pc-msnhsmall-1.jpg',type:'img',name:'big8'},
	{path:'http://huiya-product.hengdikeji.com/m-xdbwbig-1.jpg',type:'img',name:'big9'},
	{path:'http://huiya-product.hengdikeji.com/m-xdbwbig-2.jpg',type:'img',name:'big18'},
	{path:'http://huiya-product.hengdikeji.com/m-xdbwbig-3.jpg',type:'img',name:'big17'},
	{path:'http://huiya-product.hengdikeji.com/pc-xdbwsmall-1.jpg',type:'img',name:'big10'},
	{path:'http://huiya-product.hengdikeji.com/pc-xdbwsmall-2.jpg',type:'img',name:'big11'},
	{path:'http://huiya-product.hengdikeji.com/pc-xdbwsmall-3.jpg',type:'img',name:'big12'},
	{path:'http://huiya-product.hengdikeji.com/m-gyyxbig-1.jpg',type:'img',name:'big13'},
	{path:'http://huiya-product.hengdikeji.com/m-gyyxbig-2.jpg',type:'img',name:'big14'},
	{path:'http://huiya-product.hengdikeji.com/pc-gyyxsmall-1.jpg',type:'img',name:'big15'},
	{path:'http://huiya-product.hengdikeji.com/pc-gyyxsmall-2.jpg',type:'img',name:'big16'},


];
//全局函数
// var backLayer,logoText,loadup;
// //初始化
// LInit(1000/40,"load",750,1206,main);
// //游戏入口主函数
// function main(){
//     LGlobal.stageScale = LStageScaleMode.EXACT_FIT;//设置全屏变量
//     LGlobal.screen(LStage.FULL_SCREEN);//设置全面适应
//     backLayer = new LSprite();//创建背景层
//     addChild(backLayer);//添加背景层到游戏环境中
//     LLoadManage.load(loadImg,'',loadImging);
// }
// //预加载页面
// function loadImging(result){
// 	//背景
// 	var backimg = new LBitmap(new LBitmapData(result['loadBkg']));
// 	backLayer.addChild(backimg);
// 	//logo
// 	var logo = new LBitmap(new LBitmapData(result['logo']));
// 	logo.scaleX = 1.5;
// 	logo.scaleY = 1.5;
// 	logo.x = (LGlobal.width-logo.getWidth())/2;
// 	logo.y = 500;
// 	//text
// 	logoText = new LTextField();
// 	logoText.size = 22;
// 	logoText.color = '#ffffff';
// 	logoText.text = '0%';
// 	logoText.x = 535;
// 	logoText.y = 500+logo.getHeight()+24;
// 	//加载条背景
// 	var loaddown = new LSprite();
// 	loaddown.x = 225;
// 	loaddown.y = 500+logo.getHeight()+30;
// 	loaddown.graphics.drawRoundRect(0,'#0d7d80',[0,0,300,10,5],true,'#0d7d80');
// 	//加载条
// 	loadup = new LSprite();
// 	loadup.x = 225;
// 	loadup.y = 500+logo.getHeight()+30;
// 	loadup.graphics.drawRoundRect(0,'#ffffff',[0,0,300,10,5],true,'#ffffff');
// 	backLayer.addChild(logo);
// 	backLayer.addChild(logoText);
// 	backLayer.addChild(loaddown);
// 	backLayer.addChild(loadup);
// 	LLoadManage.load(gameImg,loading,gameStart);//读取加载页面背景图片
// }
// //加载页面
// function loading(progress){
// 	logoText.text = parseInt(progress)+'%';
// 	loadup.graphics.clear();
// 	loadup.graphics.drawRoundRect(0,'#ffffff',[0,0,300*progress/100,10,5],true,'#ffffff');
// }
gameStart();
function gameStart(){
	// backLayer.remove();
	$('#load').remove();
	$('#load').css('display','none');
	$('#content').show();

    //轮播图
    var banner = new Swiper('.swiper-container-banner', {
        direction: 'horizontal',
        autoplay : 5000,
        loop:true,
        autoplayDisableOnInteraction : false,
        pagination: '.swiper-pagination',
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    });
    $(document).on('touchstart','#prev1',function(){
        banner.slidePrev();
    });
    $(document).on('touchstart','#next1',function(){
        banner.slideNext();
    });

	$(document).on('touchstart','#hand',function(){
		window.location.href = "http://huiya.hengdikeji.com/api/mobile/index.html";
	});
	
	setInterval(function(){
		$('#hand img').animate({marginBottom:'20px',opacity:'0'},500,function(){
			$(this).css('margin-bottom','0px');
			$(this).css('opacity','1.0');
		})
	},500);
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
//	$('#popWindow').on('touchstart',function(){		
//		$('#content').stop().slideDown(500,function(){
//			$(document).scrollTop(scrollhh);
//			$("#popWindow").stop().animate({top:'100%'},500);
//		});
//		
//	});
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
