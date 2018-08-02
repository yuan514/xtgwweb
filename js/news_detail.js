$(function () {

    // 获取id
    function GetRequest() {
        var url = location.search; //获取url中"?"符后的字串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
            var str = url.substr(1);
            strs = str.split("&");
            for(var i = 0; i < strs.length; i ++) {
                theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
            }
        }
        return theRequest;
    }
    var Request = new Object();
    Request = GetRequest();
    var a_id = Request['id'];
    $.post('http://192.168.62.189/api/dynamic/get',{id:a_id},function(result){
        var ret = JSON.parse(result);
        if(ret.code==200){
            $('.detail_content span').html(ret.data.title);
              var da=ret.data.create_time;
            function timetrans(date){
                var date = new Date(date*1000);//如果date为10位不需要乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
                // var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
                // var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
                // var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
//                    console.log(Y+M+D)
                return(Y+M+D)
            }
            var newtime=timetrans(parseFloat(da));//使用方法
            $('.detail_content .time em').html(newtime);
            $('.detail_content p').html(ret.data.content)
        }else{

        }
    })
})