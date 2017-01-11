$(document).ready(function(){
	$("#slideDiv1").hide();
	$(window).load(function(){
		$("#toggle1").click(function(){
			$("#slideDiv1").slideToggle(400);
		});
	});
	$("#slideDiv2").hide();
	$(window).load(function(){
		$("#toggle2").click(function(){
			$("#slideDiv2").slideToggle(400);
		});
	});
});
		
$("html").mouseover(function() {
    $("html").getNiceScroll().resize();
});