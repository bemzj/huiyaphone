
var data={
    banners:'',
    product:'',
    productList:'',
    productVideo:{
        "title":'芭莎岩石',
        "video":'http://ovy8sjkfb.bkt.clouddn.com/zls.mp4'
    },
    format:''
};
var all=new Vue({
    el:'#vueMain',
    data:data,
    created:function(){
        var $this=this;
        $.get('json/banner.json',false,function(res){
            $this.banners=res.banner;
            setTimeout(function(){
                var banner = new Swiper('.swiper-container-banner', {
                    direction: 'horizontal',
                    autoplay : 5000,
                    loop:true,
                    autoplayDisableOnInteraction : false,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev'
                });
            },500)
        },"JSON");
        $.get('json/prodect.json',false,function(res){
            $this.productList=res.bsys.banner[0];
            $this.product=res;
            $this.format=res.bsys.format;
            setTimeout(function(){
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
            },2000);

        },"JSON");
    },
    methods:{
        playBox:function(){
            $('.videBox').show();
            $('#video2')[0].play();
        },
        close:function(){
            $('.videBox').hide();
            $('#video2')[0].pause();
        },
        replaceBanner:function(jsonFile,index){
            var $this=this;
            $.get('json/prodect.json',false,function (res) {
                switch (jsonFile){
                    case "bsys":
                        $this.productList=res.bsys.banner[index];
                        $this.format=res.bsys.format;
                        break;
                    case "tys":
                        $this.productList=res.tys.banner[index];
                        $this.format=res.tys.format;
                        break;
                    case "msnh":
                        $this.productList=res.msnh.banner[index];
                        $this.format=res.msnh.format;
                        break;
                    case "xdbw":
                        $this.productList=res.xdbw.banner[index];
                        $this.format=res.xdbw.format;
                        break;
                    case "gyyx":
                        $this.productList=res.gyyx.banner[index];
                        $this.format=res.gyyx.format;
                        break;
                    case "dsjh":
                        $this.productList=res.dsjh.banner[index];
                        $this.format=res.dsjh.format;
                        break;
                }

                setTimeout(function(){
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
                },2000);


            },'JSON')
        }
    }
});