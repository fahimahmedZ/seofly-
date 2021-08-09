(function($){



// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.portfolio-filter').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

$('.portfolio-filter').on( 'click', 'li', function() {
	$(this).addClass('active').siblings().removeClass('active');
});

// init smothScrolling
$('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });






})(jQuery);

// this is for sticky the nav when Scrolling
$(document).ready(function(){
	$(window).bind('scroll', function() {
	 var navHeight = $( window ).height() - 70;
			if ($(window).scrollTop() > navHeight) {
				$('nav').addClass('fixed');
			}
			else {
				$('nav').removeClass('fixed');
			}
	});
});

