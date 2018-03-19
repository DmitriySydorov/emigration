/**
 * Created by SD on 17.03.2018.
 */
$(document).ready(function() {

	$("a.slideDown").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 1500,
			easing: "swing"
		});
		return false;
	});

	var i = 87;
	function myLoop () {
		setTimeout(function () {
			var counter = $(".counter");
			counter.hide(400).empty().append(i).slideDown("slow");
			i--;
			if (i >= 0) {
				myLoop();
			}
		}, 5000)
	}
	myLoop();
});


