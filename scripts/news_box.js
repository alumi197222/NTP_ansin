	(function($) {
		$('.s_Box').each(function(){
			var $s_Box = $(this),
			$itemList = $s_Box.find('ul.itemList'),
			$items = $itemList.find('li'),
			$adContent = $items.find('.adContent'),
			_margin = (parseInt($adContent.css('margin-left')) || 0) + (parseInt($adContent.css('margin-right')) || 0),
			width = $s_Box.width() + _margin,
			speed = 400, no = no2 = ro = rollStr = '', tt, ckt = ckno = false, dl = 3000,
			_title = $s_Box.find('.title');

/*
			if($.browser.msie && !($.browser.msie && /msie 8\.0/i.test(window.navigator.userAgent.toLowerCase()))){
				width -= _margin;
			}
*/

			$items.each(function(i, ele){
				rollStr += '<a href="#">'+i+'</a>\r\n';
			});

			$s_Box.find('.roll').html(rollStr).find('a').click(function(){
				clearTimeout(tt);
				ckt = true;
				ckno = true;
				ro = $(this).index();
				movet();
				return false;
			}).eq(0).addClass('on');

			$s_Box.parent().find('.prev, .next').click(function(){
				clearTimeout(tt);
				ckt = true; 
				// !!!!!!!!!!!!!!!!!!!!!! 設計給的有問題 !!!!!!!!!!!!!!!!!!!!!!
				// !!!!!!!!!!!!!!!!!!!!!! 設計給的有問題 !!!!!!!!!!!!!!!!!!!!!! 
				no = ($(this).attr('class').indexOf('prev') > -1 ? 1 : 0);
				movet();
				return false;
			});

			function movet(){
				if (ckno) {
					no2 = ro;
				} else {
					if (no == 0) {
						no2 = ($s_Box.find('.roll a.on').index() + 1) % $items.length;
					} else if (no == 1) {
						no2 = ($s_Box.find('.roll a.on').index() - 1 + $items.length) % $items.length;
					} else {
						no2 = ($s_Box.find('.roll a.on').index() + 1) % $items.length;
					}
				}
				$itemList.stop().animate({
					left: width * no2 * -1
				}, speed);

				$s_Box.find('.roll a').eq(no2).addClass('on').siblings().removeClass('on');
				_title.html($items.eq(no2).attr('title'))
				if (!ckt) tt = setTimeout(movet, dl);
			}
			movet();

			$s_Box.mouseenter(function(){
				clearTimeout(tt);
			}).mouseleave(function(){
				ckt = false;
				ckno = false;
				tt = setTimeout(movet, dl);
			});

		});
		
		$('a').focus(function(){
			this.blur();
		});
	})(jQuery);
