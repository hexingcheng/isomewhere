$(function(){
	$('.is-nav-item').on('mouseover',function(){
		$(this).addClass('is-active').siblings('.is-nav-item').removeClass('is-active')
	})
})