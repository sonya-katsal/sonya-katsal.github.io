$(document).ready(function(){
	$('#slider-01').slick({
        autoplay:false,
        autoplaySpeed:4000,
		arrows:false,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 769,
				settings: {
					arrows:false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});
});

