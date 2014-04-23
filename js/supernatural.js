$(document).ready(function() {
	if($(window).width() >= 981) {
        $('#fullpage').fullpage();
    }
	setInputFieldFunctions();
	showFooter();
});


function setInputFieldFunctions(){
	$('input, textarea').each(function(){
	    var $this = $(this);
	    $this.data('placeholder', $this.attr('placeholder'))
	         .focus(function(){$this.removeAttr('placeholder');})
	         .blur(function(){$this.attr('placeholder', $this.data('placeholder'));});
	});
}

function showFooter() {

	var toggleState = true;
	$('#footer #mobile-tab').on("click", function() {
	  if(toggleState) {
	    $('#footer .footer-arrow').addClass('up');
		$('#footer #mobile-nav').slideToggle();
		$('.arrow-down').hide();
	  } else {
    	$('#footer .footer-arrow').removeClass('up'); 
		$('#footer #mobile-nav').slideToggle();
		$('.arrow-down').show();
	  }
	  toggleState = !toggleState;
	});
	
}