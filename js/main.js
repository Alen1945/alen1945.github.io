$(window).on('load',function(){
	$("body").prepend(getMenus())
	$("body").prepend(getBanner())
	$("body").prepend(getSidebar())
	$(".preloader").css('opacity',0)
	setTimeout(function(){
		$(".preloader").remove()
	},1000)
})
$(function() {
	'use strict';
	

	function scrollTo(target){
		if (location.pathname.replace(/^\//, '') == target.pathname.replace(/^\//, '') && location.hostname == target.hostname) {
		var target = $(target.hash);
		target.show(500)
		  if (target.length) {
			var top_space = 70;
			$('html, body').animate({
			  scrollTop: target.offset().top - top_space
			}, 1000, 'easeInOutExpo');
			return false;
		  }
		}
	}
	$(document).on('click', '.toggle_icon', function(e) {
		$('body').toggleClass('open');
	});

	$(document).on('click','[data-action="open-materi"]',async function(e){
		e.preventDefault()
		$('#container-materi').hide()
		let mediaTarget=$(this).attr('data-media')
		if(mediaTarget){
			await addMedia(mediaTarget)
			await MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
			scrollTo(this)
		}
		
	})

	$(document).on('click','.scroll-to', function(e){
		e.preventDefault()
		scrollTo(this)
	});


	$(document).on('click','[data-action="close-materi"]',function(e){
		$('#container-materi').hide(500)
	})

});
