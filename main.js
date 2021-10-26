/* slider */
const config = {
    type    : 'fade',
	perPage : 1,
	autoplay: true
}
new Splide( '.splide', config).mount();

/* technologies section */
$("div a").click(function(e){
	e.preventDefault();
	$("div .active, #technologiesContent .active").removeClass("active");
	$(this).add($(this.hash)).addClass("active");
});

/* our work experience */
$(document).on('click', '.ourWorkExperienceDescription', function() {
	$(this).addClass('activeDesc').siblings().removeClass('activeDesc');
});

