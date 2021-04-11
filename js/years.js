/*years.js*/
$(function() {
	var bYear=false;

	$(".ggo > .incremental-counter").attr("data-value","1983");
	$(".ggo > .incremental-counter").incrementalCounter();

	$(".ghana > .incremental-counter").attr("data-value","1975");
	$(".ghana > .incremental-counter").incrementalCounter();

	$(".world > .incremental-counter").attr("data-value","1986");
	$(".world > .incremental-counter").incrementalCounter();

	$(".bba > .incremental-counter").attr("data-value","1983");
	$(".bba > .incremental-counter").incrementalCounter();

	setInterval(function(){
		bYear = !bYear;

		if(bYear){
			$(".incremental-counter").children("div").remove();
			$(".ggo > .incremental-counter").attr("data-value","2016");
			$(".ggo > .incremental-image").attr("src","images/ggo_2016.png");

			$(".ghana > .incremental-counter").children("div").remove();
			$(".ghana > .incremental-counter").attr("data-value","2015");
			$(".ghana > .incremental-image").attr("src","images/ghana_20151.png");

			$(".world > .incremental-counter").children("div").remove();
			$(".world > .incremental-counter").attr("data-value","2019");
			$(".world > .incremental-image").attr("src","images/world_2019.png");

			$(".bba > .incremental-counter").children("div").remove();
			$(".bba > .incremental-counter").attr("data-value","2012");
			$(".bba > .incremental-image").attr("src","images/bbae_2012.png");

		}else{
			$(".incremental-counter").children("div").remove();
			$(".ggo > .incremental-counter").attr("data-value","1983");
			$(".ggo > .incremental-image").attr("src","images/ggo_1983.png");

			$(".ghana > .incremental-counter").children("div").remove();
			$(".ghana > .incremental-counter").attr("data-value","1975");
			$(".ghana > .incremental-image").attr("src","images/ghana_19751.png");

			$(".world > .incremental-counter").children("div").remove();
			$(".world > .incremental-counter").attr("data-value","1986");
			$(".world > .incremental-image").attr("src","images/world_1986.png");

			$(".bba > .incremental-counter").children("div").remove();
			$(".bba > .incremental-counter").attr("data-value","1983");
			$(".bba > .incremental-image").attr("src","images/bbae_1983.png");
		}
		$(".incremental-counter").incrementalCounter();
	},8000);
});