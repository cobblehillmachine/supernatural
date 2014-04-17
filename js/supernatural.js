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
	$('#footer #mobile-tab.closed').on({
		click: function() {
		$('#footer .footer-arrow').addClass('up'); 
		$('#footer #mobile-nav').slideToggle();
		$(this).removeClass('closed');
		$(this).addClass('open');
	}
	});
	// $('#footer #mobile-tab.open').on({
	// 	click: function(){
	// 	$('#footer .footer-arrow').removeClass('up'); 
	// 	$('#footer #mobile-nav').slideToggle();
	// 	$(this).removeClass('open');
	// 	$(this).addClass('closed');
	// }
	// });
	
}