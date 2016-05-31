$(function(){
	$('.is-nav-item').on('mouseover',function(){
		$(this).addClass('is-active').siblings('.is-nav-item').removeClass('is-active')
	})
	$('.is-login-btn').on('click',function(){
		$('body').addClass('is-body-hidden');
		$('.is-login').addClass('is-login-tocenter')
		return false;
	})
	$('.is-mask,.is-login-close').on('click',function(){
		$('body').removeClass('is-body-hidden');
		$('.is-login').removeClass('is-login-tocenter')
	})
})