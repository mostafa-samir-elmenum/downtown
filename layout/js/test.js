$(function(){
	$('#Container').mixItUp();
});

/////start our blogs
$('.owl-carousel #blogs-slider').owlCarousel({
	loop:true,
	margin:10,
	responsiveClass:true,
	dots:false,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:2,
			nav:false
		},
		1000:{
			items:2,
			nav:true,
			loop:false
		}
	}
});