$(document).ready(function() {
	if($(window).width() >= 981) {
        $('#fullpage').fullpage();
    }
	setInputFieldFunctions();
	showFooter();
    
	//centerItem('.inline-cont',680, 680);
});

$(window).resize(function() {
	//centerItem('.inline-cont',680, 680);
});

function centerItem(item,iWidth,iHeight){  
   windowWidth = $(window).width();
   windowHeight = $(window).height();
   var w = windowWidth - iWidth; 
   var h = windowHeight - iHeight;
   $(item).css({
       'left': w/2,
       'top':h/2
   });   
}

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