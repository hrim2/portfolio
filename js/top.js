
$(function(){
	$("#btn_top").click(function(){
		$(".cf").removeClass("active fp-completely"); //마지막 섹션 리무브
		$(".banner").addClass("active fp-completely");//제일처음 섹션 add
		$("#fullpage").css({transform: "translate3d(0px, -140px, 0px)"});// 맨위위치

	});
});
