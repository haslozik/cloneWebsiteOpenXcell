/* slider */
const config = {
    type    : "loop",
	perPage : 2,
	gap: '30px',
	autoplay: true
}
new Splide(".splide", config).mount();

/* top info section */
$(".topInfoBtn")
	.mouseover(function() {
		$(".topInfoBtn .fa-envelope").css("transition", ".2s").css("transform", "translateX(4px)");
	})
	.mouseleave(function() {
		$(".topInfoBtn .fa-envelope").css("transform", "translateX(-4px)");
});

/* technologies section */
$("div a").click(function(e){
	e.preventDefault();
	$("div .active, #technologiesContent .active").removeClass("active");
	$(this).add($(this.hash)).addClass("active");
});

/* our work experience */
$(document).on("click", ".ourWorkExperienceDescription", function() {
	$(this).addClass("activeDesc").siblings().removeClass("activeDesc");
});

/* rwd navbar */
$(document).on("click", ".fa-bars", function() {
	$(".menuPhoneContainer").css("top", "0px");
	$("html").css("overflow", "hidden");
});

$(document).on("click", ".fa-times", function() {
	$(".menuPhoneContainer").css("top", "-100vh");
	$("html").css("overflow", "visible").css("overflowX", "hidden");
});

