$(function () {
    // 滚动改变导航栏图片的颜色
     window.onscroll=function(){
         var scrollTop=document.body.scrollTop!=0?document.body.scrollTop:document.documentElement.scrollTop;
         var height=50;
         var height_a=167.5;
         if(scrollTop>=height){
             $('.white_l').css({display:'none'});
             $('.blue_l').css({display:'block'});
             $('.white_r').css({display:'none'});
             $('.blue_r').css({display:'block'});
             $('.nav').css({background:'#ffffff'},{});
             $('.nav').addClass('border_bottom');
             $('.top').css({display:'block'});
         }else {
             $('.blue_l').css({display:'none'});
             $('.white_l').css({display:'block'});
             $('.blue_r').css({display:'none'});
             $('.white_r').css({display:'block'});
             $('.nav').css({background:'rgba(255, 255, 255,0)'});
             $('.nav').removeClass('border_bottom');
             $('.top').css({display:'none'});
         }


         // 关于小豚、产品体系上拉之后wrapper  fixed
         if(scrollTop>=height_a){
             $('#wrapper').addClass('posit')
         }else{
             $('#wrapper').removeClass('posit')
         }


     }

    var myScroll;
    // 导航栏展开
    $('.nav .nav_logo img').click(function () {
        $('.nav').hide()
        $('.nav_mask').show();
    })


    $('.nav_mask #scroller_a ul li .nav_logo img').click(function () {
        $('.nav').show();
        $('.nav_mask').hide();
    })

    $('.nav_mask #scroller_a ul .nav_about img').on('touchend',function () {
        if ($('#scroller_a ul .nav_about img').hasClass('rotate')) {
            $('#scroller_a ul .nav_about img').removeClass("rotate");
            $('#scroller_a ul .nav_about img').addClass("rotate1");
            $('.nav_one').css({display: 'none'});
            myScroll.disable();
        } else {
            $('#scroller_a ul .nav_about img').removeClass("rotate1");
            $('#scroller_a ul .nav_about img').addClass("rotate");
            $('.nav_one').css({display: 'block'});
        }
        myScroll = new IScroll('#wrapper_a', { useTransition: false,click:true });
    })
    $('.nav_mask #scroller_a ul .nav_product img').on('touchend',function () {

        if ($('#scroller_a ul .nav_product img').hasClass('rotate')) {
            $('#scroller_a ul .nav_product img').removeClass("rotate");
            $('#scroller_a ul .nav_product img').addClass("rotate1");
            $('.nav_two').css({display: 'none'});
            myScroll.disable();
        } else {
            $('#scroller_a ul .nav_product img').removeClass("rotate1");
            $('#scroller_a ul .nav_product img').addClass("rotate");
            $('.nav_two').css({display: 'block'});
        }
        myScroll = new IScroll('#wrapper_a', { useTransition: false ,click:true});
    })

    // 底部展开
    $('.foot ul .about .ad').click(function () {
        if ($('.foot ul .about img').hasClass('xuan')) {
            $('.foot ul .about img').removeClass("xuan");
            $('.foot ul .about img').addClass("xuan1");
            $('.foot_one').css({display: 'none'})
        } else {
            $('.foot ul .about img').removeClass("xuan1");
            $('.foot ul .about img').addClass("xuan");
            $('.foot_one').css({display: 'block'})
        }
    })

    $('.foot ul .product .ad').click(function () {
        if ($('.foot ul .product img').hasClass('xuan')) {
            $('.foot ul .product img').removeClass("xuan");
            $('.foot ul .product img').addClass("xuan1");
            $('.foot_two').css({display: 'none'})
        } else {
            $('.foot ul .product img').removeClass("xuan1");
            $('.foot ul .product img').addClass("xuan");
            $('.foot_two').css({display: 'block'})
        }
    })

    $('.foot ul .law .ad').click(function () {
        if ($('.foot ul .law img').hasClass('xuan')) {
            $('.foot ul .law img').removeClass("xuan");
            $('.foot ul .law img').addClass("xuan1");
            $('.foot_three').css({display: 'none'})
        } else {
            $('.foot ul .law img').removeClass("xuan1");
            $('.foot ul .law img').addClass("xuan");
            $('.foot_three').css({display: 'block'})
        }
    })


    $('.nav_one li a').click(function () {
        var str = this.href; //取得整个地址栏
        var num = str.indexOf("#");
        str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
        if (str == 'synopsis') {
            $('.content').removeClass('content_block');
            $('.synopsis').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(0)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        } else if (str == 'compony_intro') {
            $('.content').removeClass('content_block');
            $('.compony_intro').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(1)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        } else if (str == 'corporate_culture') {
            $('.content').removeClass('content_block');
            $('.corporate_culture').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(2)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        } else if (str == 'enterprise_logo') {
            $('.content').removeClass('content_block');
            $('.enterprise_logo').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(3)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        } else if (str == 'cooperative_partner') {
            $('.content').removeClass('content_block');
            $('.cooperative_partner').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(4)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        }
    })

    $('.nav_two li a').click(function () {
        var str = this.href; //取得整个地址栏
        var num = str.indexOf("#");
        str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
        if(str=='adver'){
            $('.content').removeClass('content_block');
            $('.adver').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(0)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        }else if(str=='data'){
            $('.content').removeClass('content_block');
            $('.data').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(1)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        }else if(str=='sale'){
            $('.content').removeClass('content_block');
            $('.sale').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(2)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        }else if(str=='media'){
            $('.content').removeClass('content_block');
            $('.media').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(3)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        }else if(str=='hand_computer'){
            $('.content').removeClass('content_block');
            $('.hand_computer').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $('#wrapper #scroller ul li a:eq(4)').addClass('blue');
            $('.nav_mask').hide();
            $('.nav').show();
        }
    })

    $(".top").click(function() {
        $("html,body").animate({scrollTop:0}, 500);
    });

})