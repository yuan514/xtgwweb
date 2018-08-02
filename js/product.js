$(function () {
    $('#wrapper #scroller ul li a').on('touchend',function(){
        var str=this.href; //取得整个地址栏
        var num=str.indexOf("#");
        str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
        console.log(str)
        if(str=='adver'){
            $('.content').removeClass('content_block');
            $('.adver').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        }else if(str=='data'){
            $('.content').removeClass('content_block');
            $('.data').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        }else if(str=='sale'){
            $('.content').removeClass('content_block');
            $('.sale').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        }else if(str=='media'){
            $('.content').removeClass('content_block');
            $('.media').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        }else if(str=='hand_computer'){
            $('.content').removeClass('content_block');
            $('.hand_computer').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        }
    })
})