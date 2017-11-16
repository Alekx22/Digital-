;(function($) {
	"use strict";

$('.ba-slider').slick({

		dots: true,
    autoplay: true,
		autoplaySpeed: 5000

	});

$('.ba-slider-team').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

	window.onload = function(){

        var creativ = {lat: -7.9284641, lng: 112.6382975};
        var mapDiv = document.querySelector('.ba-map');

          var map = new google.maps.Map(mapDiv, {
          zoom: 16,
          center: creativ

        });

          var marker = new google.maps.Marker({
          position: creativ,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'img/map.png'
        });

        google.maps.event.addDomListener(window, 'resize', function(){

      		var center = map.getCenter();
      		google.maps.event.trigger(map, 'resize');
      		map.setCenter(center);

     	});

	};

 $('a[href*="#"]').click(function(){  });
 var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    },1000);
    return false;
 });


})(jQuery);

