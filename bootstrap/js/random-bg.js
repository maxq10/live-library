// JavaScript Document

(function ($) {
	$(document).ready(function() {
		var bgimages = [
			'u2-360-tour-eeuu.jpg',
			'u2-jt.jpg',
			'U2_TUF_11.jpg',
			'u2-nloth-2009.jpg',
			'u2-cork-1980.jpg',
			'u2_glastonbury.jpg',
			'u2-360-encore.jpg',
			'ms006_u2_360_tour.jpg',
			'u2-copenhagen2005.jpg',
			'u2-zootv-sweden.jpg',
			'u2-360.jpg'
		];
		$('body').css({'background-image': 'url(../../media/images/bg-body/' + bgimages[Math.floor(Math.random() * bgimages.length)] + ')'});
	});
})(jQuery);