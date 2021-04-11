

$(function(){
	var aryTitle=["PROFILE","SKILL","PORTFOLIO","STUDY","CONTACTME!"];

	setInterval(function(){
		var half=$(".content_wrap > section").eq(0).outerHeight()/2;
		$(".timer").css({height:0});
		
		

		for( var i=0; i<$(".content_wrap > section").length; i++)
			autoTimer(i,half);
		

	},50);
	
	function autoTimer(nIndex,halfValue){
		if($('html, body').scrollTop()>=$(".content_wrap > section").eq(nIndex).offset().top-halfValue){
			$(".title").text(aryTitle[nIndex]);
			$(".current").text("0"+(nIndex+1));
			$('#main_nav > li').removeClass("active");
			$('#main_nav > li').eq(nIndex).addClass("active"); 
			$(".timer").css({height:0,transitionDuration: "0ms"});
			$(".timer").eq(nIndex).css({height:280,transitionDuration: "500ms"});
		}
	}

	$('#main_nav > li').click(function(){
		var index=$(this).index();

		$('html, body').animate({
			scrollTop: $('body section').eq(index).offset().top
		}, 400);
	});
	
});