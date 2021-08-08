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
});
