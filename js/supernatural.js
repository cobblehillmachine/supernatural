$(document).ready(function() {
    $('#fullpage').fullpage();
	centerItem('.inline-cont',680, 680);
});

$(window).resize(function() {
	centerItem('.inline-cont',680, 680);
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