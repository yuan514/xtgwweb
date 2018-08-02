$(function () {
    $('.list .list_seven #list_one i').click(function () {
        // 点击出现下面内容

        if ($('.discuss_team').css("display") == "none") {
            $('.black_img').css({display:'none'});
            $('.blue_img').css({display:'block'});
            $('.list ul li .i_top').css({color:'#00a5ea'})
            $('.discuss_team').css({display: 'block'})
        } else {
            $('.blue_img').css({display:'none'});
            $('.black_img').css({display:'block'});
            $('.list ul li .i_top').css({color:'#333333'});
            $('.discuss_team').css({display: 'none'})
        }
    })
})