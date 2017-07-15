$(document).ready(function() {

	$(".brownContainer").hide();
	$(".brownBtn").on("click", function() {
		$(".brownContainer").show();
	});
$(".scream").hover(function() {
	$(".scream").attr("src", "assets/images/291.png")
	$(".scream").animate({
		height: "1000px"
   });
  
  }, function() {
	$(".scream").attr("src", "assets/images/290.gif")
  	
  	$(".scream").animate({
  		height: "100%"

  	});
  });
});