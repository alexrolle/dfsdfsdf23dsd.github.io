$(document).ready(function(){
	$('.btn-f-menu').click(function(){
		$('.menu-mb').slideToggle(50)
	});
	$(".owl-carousel").owlCarousel({
		items: 1,
		loop:true,
		autoplay:true,
		autoplayTimeout:10000,
		autoplayHoverPause:false,
		smartSpeed: 700,
		nav : true,
    	navText : ["<a href=\"#\" class=\"carousel-l\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a>","<a href=\"#\" class=\"carousel-l\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a>"]
	});
});