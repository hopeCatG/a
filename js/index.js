	var navRight = document.querySelector('header .navRight');
	
	var navHover = document.querySelector('.navHover');
	
	var a = document.querySelector('.navHover .w a');
	
	var scaleLists = document.querySelectorAll('header .navHover .navHoverList div')
	
	var xx = document.querySelector('.xx');
	
	navRight.onclick = function () {
		navHover.classList.add('displayNull');
		navHover.classList.remove('Out'); 
		navHover.classList.add('inTo');
		
		// console.log(scaleLists)
		for (var i = 0; i < scaleLists.length; i++){
			scaleLists[i].classList.remove('scaleListOut')
			scaleLists[i].classList.add('scaleList')
		}
		
		
	}
	
	a.onclick = function () {	
			navHover.classList.remove('inTo'); 
			navHover.classList.add('Out');
			for (var i = 0; i < scaleLists.length; i++){
				scaleLists[i].classList.remove('scaleList')
				scaleLists[i].classList.add('scaleListOut')
			}
			setTimeout(function () {
				navHover.classList.remove('displayNull');
				navHover.classList.add('displayNone');
			},500)
	}
	

	$(function ($) {
		
		$('.xx').on('click',function () {
			$('html,body').stop().animate({
				scrollTop:0
			},3000);
			
			$(window).scrollTop(0);
		})
		console.log($('#moverImg'))

				function mover1 () {
					
					$('.moverImg').stop().animate({
						'right':'0px'
					})
					if (parseInt($('.moverImg').css('left')) == 0 ) {
						$('.moverImg').stop().animate({
							'left':'30px'
						},400,function () {
							mover1();
							// console.log($('.moverImg').position().left )
						})
						
						
					} else {
						$('.moverImg').stop().animate({
							'left':'0px'
						},400,function () {
							mover1();
							// console.log($('.moverImg').position().left+"dasdasd" )
						})
						
					}
				}
				function moverTo () {
					$('.moverImg2').stop().animate({
						'right':'0px'
					})
					if (parseInt($('.moverImg2').css('right')) == 0 ) {
						$('.moverImg2').stop().animate({
							'right':'30px'
						},400,function () {
							moverTo();
							// console.log($('.moverImg2').position().right )
						})
						
						
					} else {
						$('.moverImg2').stop().animate({
							'right':'0px'
						},400,function () {
							moverTo();
							// console.log($('.moverImg2').position().right+"dasdasd" )
						})
						
					}
				}
				$('.moverImg').on('mouseover',function () {
					mover1();
				}).on('mouseleave',function () {
					$('.moverImg').stop().animate({
						'left':'1px'
					},900)
				})
				$('.moverImg2').on('mouseover',function () {
					moverTo();
				
				}).on('mouseleave',function () {
					$('.moverImg2').stop().animate({
						'right':'1px'
					},900)
				})
		
	
		
		$(document).ready(function(){
			setTimeout(function () {
				
				if (window.localStorage.getItem('user') == null) {
					alert('您还没有登录！确认跳转登录页面')
					window.location.href='login.html';
				} else {
					alert('您以登录成功！')
				}
			},500)
		})
		
		
	})
	
	
	
