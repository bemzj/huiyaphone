
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

            },500)
        },"JSON");

        $.get('json/prodect.json',false,function(res){
            $this.productList=res.bsys.banner[0];
            $this.product=res;
            $this.format=res.bsys.format;

            setTimeout(function(){
                //产品轮播图
                var proBanner1 = new Swiper('.swiper-container-pro1', {
                    pagination: '.swiper-pagination',
                    effect : 'fade',
                    loop:true,
                    onlyExternal : true

                });
                //产品轮播图
                var proBanner2 = new Swiper('.swiper-container-pro2', {
                    pagination: '.swiper-pagination',
                    loop:true,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    onSlideNextStart:function(swiper){
                        proBanner1.slideNext();
                    },
                    onSlidePrevStart:function(swiper){
                        proBanner1.slidePrev();
                    },

                });
                $(document).on('touchstart','#prev',function(){
                    proBanner1.slidePrev();
                    proBanner2.slidePrev();
                });
                $(document).on('touchstart','#next',function(){
                    proBanner1.slideNext();
                    proBanner2.slideNext();
                });
                //
            },500);

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

                    //产品轮播图
                    var proBanner1 = new Swiper('.swiper-container-pro1', {
                        pagination: '.swiper-pagination',
                        effect : 'fade',
                        loop:true,
                        onlyExternal : true

                    });
                    //产品轮播图
                    var proBanner2 = new Swiper('.swiper-container-pro2', {
                        pagination: '.swiper-pagination',
                        loop:true,
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',

                        onSlideNextStart:function(swiper){
                            proBanner1.slideNext();
                        },
                        onSlidePrevStart:function(swiper){
                            proBanner1.slidePrev();
                        },

                    });
                    $(document).on('touchstart','#prev',function(){
                        proBanner1.slidePrev();
                        proBanner2.slidePrev();
                    });
                    $(document).on('touchstart','#next',function(){
                        proBanner1.slideNext();
                        proBanner2.slideNext();
                    });
                    //
                },500);


            },'JSON')
        },
        nextPrew:function(){

        }

    }
});