
var data={
    banners:'',
    product:'',
    productList:'',
    productVideo:{
        "title":'芭莎岩石',
        "video":'http://ovy8sjkfb.bkt.clouddn.com/zls.mp4'
    },
    format:'',
    proBanner2:'',
    proBanner1:''
};
var all=new Vue({
    el:'#vueMain',
    data:data,
    created:function(){

        var $this=this;
        $.get('json/banner.json',false,function(res){
            $this.banners=res.banner;

        },"JSON");

        $.get('json/prodect.json',false,function(res){
            $this.productList=res.bsys.banner[0];
            $this.product=res;
            $this.nextPrew();
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

                        break;
                    case "tys":
                        $this.productList=res.tys.banner[index];

                        break;
                    case "msnh":
                        $this.productList=res.msnh.banner[index];

                        break;
                    case "xdbw":
                        $this.productList=res.xdbw.banner[index];

                        break;
                    case "gyyx":
                        $this.productList=res.gyyx.banner[index];

                        break;
                    case "dsjh":
                        $this.productList=res.dsjh.banner[index];

                        break;
                }
                $this.nextPrew();
            },'JSON')
        },
        nextPrew:function(){
            var $this=this;
            $('.swiper-container-pro1 .item').css({"opacity":0});
            setTimeout(function(){

                //产品轮播图
                var proBanner2 = new Swiper('.swiper-container-pro2', {
                    slidesPerView : 'auto',
                    onlyExternal: true,
                    observer:true,
                    observeParents:true,

                    onInit:function(){
                        var l=$('.swiper-container-pro2 .swiper-slide').length;
                        if(l<3){
                            var w=l*1.5+0.5;
                            $('.swiper-container-pro2').css("width",w+'rem');

                        }else{
                            $('.swiper-container-pro2').css("width",'80%');
                        }
                    }
                });

                var proBanner1 = new Swiper('.swiper-container-pro1', {
                    loop:true,
                    loopedSlides:3,
                    spaceBetween:15,
                    centeredSlides:true,
                    autoplayDisableOnInteraction:false,
                    slidesPerView : 'auto',

                    onInit:function(swiper){
                        $('.swiper-container-pro1 .item').css({"opacity":1});
                    },
                    onSlideChangeStart: function(swiper) {
                        upprev(swiper);
                        swiper.update();
                        swiper.slideTo(0);
                    },
                    observer:true,
                    observeParents:true

                });
                $('#prev2').on('click',function(){
                    proBanner1.slidePrev()
                });
                $('#next2').on('click',function(){
                    proBanner1.slideNext()
                });
                $('.swiper-container-pro2 .swiper-slide').on('click',function(){
                    var index=$(this).index();
                    proBanner1.slideTo(index+3);
                });
                function upprev(swiper){

                    $('.swiper-container-pro2 .active-nav').removeClass('active-nav');

                    var activeNav = $('.swiper-container-pro2 .swiper-slide').eq(swiper.realIndex).addClass('active-nav');

                    if (!activeNav.hasClass('swiper-slide-visible')) {


                        if (activeNav.index() > proBanner2.activeIndex) {
                            var thumbsPerNav = Math.floor(proBanner2.width / activeNav.width()) - 1;
                            proBanner2.slideTo(activeNav.index() - thumbsPerNav)
                        } else {
                            proBanner2.slideTo(activeNav.index())
                        }
                    }
                    $('.pro1page .swiper-pagination-bullet-active').removeClass('swiper-pagination-bullet-active');
                    $('.pro1page .swiper-pagination-bullet').eq(swiper.realIndex).addClass('swiper-pagination-bullet-active');
                }
                //
            },1000);
        }

    }
});