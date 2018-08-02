;(function($){
	var methods = {
		pageInit: function(options){
			/**
			 * [opts this plug propertys]
			 * @type {Obeject}
			 */
			var opts = $.extend({},$.fn.zPager.defaults,options);
			return $(this).each(function(k,v){
				var _v = $(v);
				_v.data("options",opts);
				methods.pageData(_v, opts.current);
			})
		},
		pageData: function(_v, _current){
			/**
			 * [opts this plug propertys]
			 * @type {Obeject}
			 */
			var opts = _v.data("options");
			var t = opts.totalData, p = opts.pageData, ajaxOpts = null;
			if(opts.ajaxSetData&&(typeof(opts.ajaxSetData)==='boolean')){
				if(opts.url!=='' && typeof(opts.url)==='string'){
					ajaxOpts = methods.ajaxData(opts.url, _current);
					t = opts.totalData = ajaxOpts.total;
					if(ajaxOpts.rows.length>0){
						var ishasDataRender = (opts.dataRender && typeof(opts.dataRender)==='function');
							ishasDataRender ? opts.dataRender(ajaxOpts.rows) : methods.dataRender(_v, ajaxOpts.rows);
					}
				}else{
					$.pageError(2);
				}
			}
			if(t%p === 0){
                opts.pageCount = parseInt(t/p);
            }else{
                opts.pageCount = parseInt(t/p)+1;
            }
            if(opts.pageCount>0){
            	_v.data("options",opts);
            	methods.pageRender(_v, _current);
            }
		},
		dataRender: function(_v, _data){
			var opts = _v.data("options");
			var cells = '';

				for(var i=0;i<_data.length;i++){

                    //后台传回来的创建时间转化器
                    //补0操作
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
                    var newtime=timetrans(parseFloat(_data[i].create_time));//使用方法
					cells += '<div class="cc_cells"><a href="news_detail.html?id='+_data[i].id+'"><span>'+_data[i].title+'</span>';
					cells += '<em>'+newtime+'</em>';
					cells += '</a></div>';

				}
				// console.log(opts.htmlBox)
			if(opts.htmlBox===''||(typeof(opts.htmlBox)!=='Obeject')){
				var abx = _v.prev();
				if(!abx.hasClass('notice_content')){
					var d = '<ul class="notice_content"></ul>';
					_v.before(d);
				}
				_v.prev().html(cells);
			}else{
				opts.htmlBox.html(cells);
			}
		},
		pageRender: function(_v, _current){
			/**
			 * [o this plug propertys]
			 * @type {Obeject}
			 */
			var o = _v.data("options");
			var _page = o.pageCount;

			var _middle = parseInt(o.pageStep/2);
			var _tep = _middle-2;
			var _html = '';
			if(_page>o.pageStep&&_current<=_page){
				_html += methods.setPrevNext(o, 'prev');
				if(_current<=_middle){
					_html += methods.forEach(1, o.pageStep, _current, o.active);
					_html += methods.elliPsis();
				}else if(_current>_middle&&_current<(_page-_tep)){
					_html += methods.pageBtn(1);
					_html += methods.elliPsis();
					_html += methods.forEach(_current-_tep, _current-(-_tep)-(-1), _current, o.active);
					_html += methods.elliPsis();
				}else if(_current>=(_page-_tep)){
					_html += methods.pageBtn(1);
					_html += methods.elliPsis();
					_html += methods.forEach(_page-2*_tep-1, _page-(-1), _current, o.active);
				}
				_html += methods.setPrevNext(o, 'next');
			}else if(_page<=o.pageStep){
				if(_page>o.minPage){
					_html += methods.setPrevNext(o, 'prev');
				}
				_html += methods.forEach(1, _page-(-1), _current, o.active);
				if(_page>o.minPage){
					_html += methods.setPrevNext(o, 'next');
				}	
			}
			_v.html(_html);
			methods.bindEvent(_v);
		},
		bindEvent: function(_v){
			/**
			 * [o this plug propertys]
			 * @type {Obeject}
			 */
			var o = _v.data("options");
			var _a = _v.find("a");
				$.each(_a,function(index,item){
					var _this = $(this);
					_this.on("click",function(){
						if(_this.attr("disabled")){
							return false;
						}
						var _p = _this.attr("page-id");
						o.current = _p;
						_v.data("options",o);
						// methods.options.current = _p;
						methods.pageData(_v, _p);
					})
				})
		},
		forEach: function(_start,length,_current,curclass){
			/**
			 * [s page elements]
			 * @type {String}
			 */
			var s = '';
			for(var i = _start;i<length;i++){
				if(i === parseInt(_current)){
					s += methods.pageCurrent(i,curclass);
				}else{
					s += methods.pageBtn(i);
				}
			}
			return s;
		},
		pageCurrent: function(_id,_class){
			/**
			 * [class current page element calss]
			 * @type {String}
			 */
			return '<span class="'+_class+'" page-id="'+_id+'">'+_id+'</span>';
		},
		elliPsis: function(){
			/**
			 * [class ellipses...]
			 * @type {String}
			 */
			return '<span class="els">...</span>';
		},
		pageBtn: function(_id){
			/**
			 * [id page id]
			 * @type {String}
			 */
			return '<a page-id="'+_id+'">'+_id+'</a>';
		},
		addBtn: function(_property, _page, _count){
			/**
			 * [disabled is it can click button]
			 * @type {Boolean}
			 */
			var disabled = '';
			if(_count){
				disabled = (_page === 0 || _page === _count-(-1)) ? 'disabled="true"':'';
			}
			return '<a class="'+_property+'" page-id="'+_page+'" '+disabled+'></a>';
		},
		setPrevNext: function(_o, _type){
			/**
			 * [s string create prev or next buttons elements]
			 * @type {String}
			 */
			var s = '';
			function prev(){
				if(_o.btnShow){
					s += methods.addBtn(_o.firstBtn, 1); 
				}
				if(_o.btnBool){
					s += methods.addBtn(_o.prevBtn, _o.current-1, _o.pageCount);
				}
				return s;
			}
			function next(){
				if(_o.btnBool){
					s += methods.addBtn(_o.nextBtn, _o.current-(-1), _o.pageCount);
				}
				if(_o.btnShow){
					s += methods.addBtn(_o.lastBtn, _o.pageCount);
				}
				return s;
			}
			return _type==='prev'? prev(): next();
		},
		ajaxData: function(_url, _current){
			/**
			 * [ajax get data and pagenumber]
			 * @param  {Object} ){ var parms [ajax url,current page number]
			 * @return {[type]}            [obj total rows]
			 */
			var _total = $.fn.zPager.defaults.totalData;
			return (function(){
				var parms = {'total':_total,'rows':[]};
				// console.log(_url)
				$.ajax({
					url: _url,
					type: 'post',
					data:{page:_current},
	                dataType: 'json',
	                cache : false,  
        			async : false,
	                success: function(data) {
                        $('.page_content i').html(data.data.total_cnt);
                        // $('.page_content em').html($.fn.zPager.defaults.pageCount);
                        $('.page_content em').html(parseInt(data.data.total_cnt/8)+1);
						$('.page_content span').html(_current);
						// getdynamic(_current)
	                	if(data.data.total_cnt && (data.data.total_cnt!==0)){
	                        parms['total'] = data.data.total_cnt;
	                        parms['rows'] = data.data.dynamic_list;
	                	}else{
	                		$.pageError(3);
	                	}
	                },
					error: function(XMLHttpRequest,textStatus,errorThrown) {
						var msg = '';
						switch(XMLHttpRequest.readyState){
							case 0:
								msg = '（未初始化）还没有调用send()方法';
								break;
							case 1:
								msg = '（载入）已调用send()方法，正在发送请求';
								break;
							case 2:
								msg = '（载入完成）send()方法执行完成，已经接收到全部响应内容';
								break;
							case 3:
								msg = '（交互）正在解析响应内容';
								break;
							case 4:
								msg = '（完成）响应内容解析完成，可以在客户端调用了';
								break;
						}
						console.log(textStatus+'：'+XMLHttpRequest.readyState+'-'+msg);
					}
				})
				return parms;
			})();
		}
	}

	$.extend({
		pageError:function(type){
			/**
			 * [switch error type]
			 * @param  {[type]} type [no this function]
			 * @return {[type]}      [ajax error]
			 */
			switch(type){
				case 1:
					console.log('method'+method+'dose not exist on jQuery.zPager');
					break;
				case 2:
                   console.log('no ajax');
					break;
				case 3:
					console.log('no data');
					break;
				default:
					console.log('default error');
			}
		}
	})

	$.fn.extend({
		zPager:function(method){
			/**
			 * [if has this method]
			 * @param  {[type]} methods[method] [apply this method]
			 * @return {[type]}                 [return property]
			 */
			if(methods[method]){
				return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
			}else if(typeof method === 'object' || !method){
				return methods.pageInit.apply(this, arguments);
			}else{
				$.pageError(1);
			}
		}
	})

	$.fn.zPager.defaults = {
		totalData: 10, //数据总条数
		pageData: 8, //每页数据条数
		pageCount: 1, //总页数
		current: 1, //当前页码数
		pageStep: 6, //当前可见最多页码个数
		minPage: 5, //最小页码数，页码小于此数值则不显示上下分页按钮
		active: 'current', //当前页码样式
		prevBtn: 'pg-prev', //上一页按钮
		nextBtn: 'pg-next', //下一页按钮
		btnBool: true, //是否显示上一页下一页
		firstBtn: 'pg-first', //第一页按钮
		lastBtn: 'pg-last', //最后一页按钮
		btnShow: false, //是否显示第一页和最后一页按钮
		disabled: true, //按钮失效样式
		ajaxSetData: true, //是否使用ajax获取数据 此属性为真时需要url和htmlBox不为空
		url: 'http://192.168.62.189/api/dynamic/get_list', //ajax路由
		htmlBox: '' //ajax数据写入容器
	}

})(jQuery)