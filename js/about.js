$(function () {


    $('#wrapper #scroller ul li a').on('touchend', function () {
        var str = this.href; //取得整个地址栏
        var num = str.indexOf("#");
        str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
        if (str == 'synopsis') {
            $('.content').removeClass('content_block');
            $('.synopsis').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        } else if (str == 'compony_intro') {
            $('.content').removeClass('content_block');
            $('.compony_intro').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        } else if (str == 'corporate_culture') {
            $('.content').removeClass('content_block');
            $('.corporate_culture').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        } else if (str == 'enterprise_logo') {
            $('.content').removeClass('content_block');
            $('.enterprise_logo').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        } else if (str == 'cooperative_partner') {
            $('.content').removeClass('content_block');
            $('.cooperative_partner').addClass('content_block');
            $('#wrapper #scroller ul li a').removeClass('blue');
            $(this).addClass('blue');
        }
    })
})