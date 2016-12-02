$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.toTop').hide();
	$('a').click(function(){
    	$('html, body').animate({
        	scrollTop: $( $.attr(this, 'href') ).offset().top
    	}, 700);
    	return false;
	});
});

$(window).scroll(function(){
    var currentTop = $(window).scrollTop();
    if (currentTop < 500) {
        //$(".navbar-fixed").fadeIn(300);
        $(".toTop").fadeOut(300);
    } else {
        //$(".navbar-fixed").fadeOut(300);
        $(".toTop").fadeIn(300);
    }
});