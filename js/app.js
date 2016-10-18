$(document).ready(function() {

	window.onscroll = testScroll


	$(window).on('scroll', function() {
		var scrollDistance = $(window).scrollTop(); 
		if(scrollDistance>50){
			$('#mainNav').removeClass('.affix-top').addClass('affix');
		}
		else{
			$('#mainNav').removeClass('.affix').addClass('affix-top');
		}
	});

	$(document).on('click', '.page-scroll', function() {
		var target = $(this).attr('href');
		$('body').animate( {
		scrollTop:$(target).offset().top
		}, 2000);
	});

 function testScroll(ev) {
    if(isScrolledIntoView($('#services'))){
    	$('#ship').addClass('animated');
    	$('#heart').addClass('animated');
    	$('#clock').addClass('animated');
    	$('#refresh').addClass('animated');
   	}
  }

function isScrolledIntoView(elem) {
    var $elem = $(elem);
    var $window = $(window);

    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();

    var elemTop = $elem.offset().top;
    var elemBottom = elemTop + $elem.height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }

});

  
 