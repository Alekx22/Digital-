;(function($) {
	"use strict";

$('.ba-slider').slick({

		dots: true,
    autoplay: true,
		autoplaySpeed: 5000

	});

$('.ba-slider-team').slick({


		// slidesToShow: 3


	});

	window.onload = function(){

        var creativ = {lat: 39.890744, lng: 18.109619};
        var mapDiv = document.querySelector('.ba-map');

          var map = new google.maps.Map(mapDiv, {
          zoom: 16,
          center: creativ

        });

          var marker = new google.maps.Marker({
          position: creativ,
          map: map,
          animation: google.maps.Animation.DROP,
          icon: 'assets/images/map.png'
        });

        google.maps.event.addDomListener(window, 'resize', function(){

      		var center = map.getCenter();
      		google.maps.event.trigger(map, 'resize');
      		map.setCenter(center);

     	});

	};



})(jQuery);

