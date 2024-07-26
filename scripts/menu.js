	$(".sub").hover(
		function(){
			var _this = $(this), _subnav = _this.children('div');
			_subnav.stop(true, true).slideDown(400);
			_this.find('p').find('a').css('color', '#aaa');
			_this.css('background', 'none');
		},
		function(){
			$(this).children('div').stop(true, true).slideUp(300);
			$(this).find('p').find('a').css('color', '');
			$(this).css('background', '');			
		}); 