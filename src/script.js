$(document).ready(function () {
	console.log("hello");
	$(window).scroll(function () {
		let scroll = $(window).scrollTop();
		if (scroll > 300) {
			$(".navbar").addClass("nav-bg");
		} else {
			$(".navbar").removeClass("nav-bg");
		}
	});

	console.log($(window).width());
	if ($(window).width() < 992) {
		$(".navbar").removeClass("fixed-top");
		$(".navbar").css("margin-bottom", "0");
		$(".hero-container").css("top", "25%")
	}
});
