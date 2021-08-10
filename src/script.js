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

	mobileOperations();

	$(window).resize(function () {
		mobileOperations();
	});
});

function mobileOperations() {
	if ($(window).width() < 992) {
		$(".navbar").removeClass("fixed-top");
		$(".hero-container").css("top", "25%");
		$(".hero-logos-container").css("display", "none");
	}
	else{
		$(".navbar").addClass("fixed-top");
		$(".hero-logos-container").css("display", "block");
		$(".hero-container").css("top", "40%");
	}
}
