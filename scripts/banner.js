	function url_banner($block){

		var $slides = $('ul.list', $block),
			_width = $block.width(),
			$li = $('li', $slides).css('width',function(){return $block.width()}),
			_animateSpeed = 600, 

			timer, _showSpeed = 3000, _stop = false;
console.log(_width);
		var _str = '';
		for(var i=0, j=$li.length;i<j;i++){
		
			_str += '<li class="playerControl_' + (i+1) + '"></li>';
		}

		
		var $playerControl = $('<ul class="playerControl"></ul>').html(_str).appendTo($slides.parent()).css('left', function(){
		
			return (_width - $(this).width()) / 2;
		});
		
	
		var $playerControlLi = $playerControl.find('li').click(function(){
			var $this = $(this);
			$this.addClass('current').siblings('.current').removeClass('current');

			clearTimeout(timer);
		
			$slides.stop().animate({
				left: _width * $this.index() * -1
			}, _animateSpeed, function(){
			
				if(!_stop) timer = setTimeout(move, _showSpeed);
			});

			return false;
		}).eq(0).click().end();


		function move(){
			var _index = $('.current').index();
			$playerControlLi.eq((_index + 1) % $playerControlLi.length).click();
		}

	}
	$(function(){
		url_banner($('.idx-banner'));
		url_banner($('.banner'));
	});