$(function(){
	$('.is-tab-item').on('click',function(){
		var i = $(this).index()
		$(this).addClass('active').siblings('.is-tab-item').removeClass('active');
		$('.is-page-content-wrap').eq(i).addClass('is-show').siblings('.is-page-content-wrap').removeClass('is-show')
	})
	$('.is-left-aside-item').on('click',function(){
		var i = $(this).index()
		$(this).addClass('active').siblings('.is-left-aside-item').removeClass('active');
		$(this).parents('.is-aside-bar').siblings('.is-right-content-bar').find('.is-content-wrap').eq(i).addClass('is-show').siblings('.is-content-wrap').removeClass('is-show')
	})
})