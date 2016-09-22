$(function(){
	setTimeout(function(){
		$("#box").hide()
	},4000);
	var mySwiper = new Swiper ('.swiper-container', {
    		direction: 'horizontal', 
    })   
    $(".btn").click(function(){
    	window.location.href ="index.html"   
    })
})
